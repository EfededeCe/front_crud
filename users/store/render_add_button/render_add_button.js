import { showModal } from '../../presentation/render_modal/render_modal';
import './render_add_button.css';

/**
 * 
 * @param {HTMLDivElement} element
 */
export const renderAddButton = ( element ) => {

  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fav-button');

  element.append( fabButton );


  fabButton.addEventListener('click', () => {
    showModal();
  })


}

