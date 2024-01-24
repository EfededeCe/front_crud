import { renderButtons } from "./presentation/render_table/render_buttons/render_buttons";
import { renderTable } from "./presentation/render_table/render_table";
import usersStore from "./store/users_store"


/**
 * 
 * @param {HTMLElement} element 
 */
export const UserApp = async ( element ) => {
  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();
  element.innerHTML = '';

  renderTable( element );
  renderButtons( element );

}

