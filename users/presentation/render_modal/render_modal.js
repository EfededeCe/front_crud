import modalHtml from './render_modal.html?raw';
import './render_modal.css';
let modal, form;


export const showModal = () => {

  // if ( !modal ) return;
  modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
  modal?.classList.add('hide-modal');

  form?.reset();

}



/**
 * 
 * @param {HTMLDivElement} element 
 * @returns 
 */
export const renderModal = ( element ) => {
  if ( modal ) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';
  form = modal.querySelector('form');

  form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    
    const formData = new FormData( form );

    const userLike = {};

    for ( const [key, value] of formData){
      if (key === 'balance'){
        userLike[key] = Number(value) // ó = +value lo convierte a Number
        continue;
      }
      
      if( key === 'isActive' ){
        userLike[key] = (value === 'on');
        continue;
      }

      userLike[key] = value;

    }

    // console.log(userLike);
    hideModal();

  })


  modal.addEventListener('click', ( element ) => {
    if ( element.target.className.includes('modal-container'))
    hideModal();
  });

  element.append( modal );


}

