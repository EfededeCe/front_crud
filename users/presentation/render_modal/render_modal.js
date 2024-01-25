import modalHtml from './render_modal.html?raw';
import './render_modal.css';
import { getUserById } from '../../use_cases/get_user_by_id';
let modal, form;
let loadedUser = {};


/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async ( id ) => {
  // if ( !modal ) return;
  modal?.classList.remove('hide-modal');
  loadedUser = {};

  if( !id ) return;
  const user = await getUserById( id );

  setFormValues( user );

}

export const hideModal = () => {
  modal?.classList.add('hide-modal');

  form?.reset();

}


/**
 * 
 * @param {User} user 
 */
const setFormValues = ( user ) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;
  
  loadedUser = user;

}



/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>} callback 
 */
export const renderModal = ( element, saveUserCallback ) => {
  if ( modal ) return;

  modal = document.createElement('div');
  modal.innerHTML = modalHtml;
  modal.className = 'modal-container hide-modal';
  form = modal.querySelector('form');

  form.addEventListener('submit', async ( event ) => {
    event.preventDefault();
    
    const formData = new FormData( form );

    const userLike = { ...loadedUser };

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
    const checkBox = form.querySelector("[name='isActive']");

    if(checkBox.checked){
      userLike.isActive = true;
    } else {
      userLike.isActive = false;      
    }
    
    await saveUserCallback( userLike );
    hideModal();

  })


  modal.addEventListener('click', ( element ) => {
    if ( element.target.className.includes('modal-container'))
    hideModal();
  });

  element.append( modal );


}

