import usersStore from "../../../store/users_store";
import './render_buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element ) => {
  const nextButton = document.createElement('button');
  nextButton.innerText = 'Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.id = 'current-page';
  currentPageLabel.innerText = usersStore.getCurrentPage();

  element.append( prevButton, currentPageLabel, nextButton );

}

