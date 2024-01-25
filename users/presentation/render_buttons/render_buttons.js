import usersStore from "../../store/users_store";
import { renderTable } from "../render_table/render_table";
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

  nextButton.addEventListener('click', async () => {
    const next = await usersStore.loadNextPage();
    console.log(next);
    if (next)
      currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable()
  })

  prevButton.addEventListener('click', async () => {
    await usersStore.loadPreviousPage();
    currentPageLabel.innerText = usersStore.getCurrentPage();
    renderTable();
  })



}

