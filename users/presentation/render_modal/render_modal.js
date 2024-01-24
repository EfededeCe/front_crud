import modalHtml from './render_modal.html?raw';
import './render_modal.css';
let modal;

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

  element.append( modal );

}

