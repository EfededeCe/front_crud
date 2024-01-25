import usersStore from '../../store/users_store';
import { deleteUserById } from '../../use_cases/delete_user_by_id';
import { showModal } from '../render_modal/render_modal';
import './render_table.css';


let table;

const createTable = () => {
  const table = document.createElement('table');
  const tableHeaders = document.createElement('thead');
  tableHeaders.innerHTML = `
    <tr>
      <th>#ID</th>
      <th>Balance</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `

  const tableBody = document.createElement('tbody');
  table.append( tableHeaders, tableBody );
  return table;
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectListener = ( event ) => {

  const element = event.target.closest('.select-user');
  if ( !element ) return;
  
  const id = element.getAttribute('data-id');
  showModal(id);
  
}

/**
 * 
 * @param {MouseEvent} event 
 */
const tableDeletetListener = async ( event ) => {

  const element = event.target.closest('.delete-user');
  if ( !element ) return;
  
  const id = element.getAttribute('data-id');
  try {
    await deleteUserById(id);
    await usersStore.reloadPage();
    document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
    renderTable();
  } catch (error) {
    console.log(error);
    alert('No se pudo eliminar');
  }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

  const users = usersStore.getUsers();

  if ( !table ) {
    table = createTable();
    element.append( table );

    table.addEventListener('click', tableSelectListener);
    table.addEventListener('click', tableDeletetListener);
  }

  let tableHTML = '';
  users.forEach( user => {
    tableHTML += `
      <tr>
        <td>${ user.id }</td>
        <td>${ user.balance }</td>
        <td>${ user.firstName }</td>
        <td>${ user.lastName }</td>
        <td>${ user.isActive }</td>
        <td>
          <a href="#/" class="select-user" data-id=${user.id}>Select</a>
          <a href="#/" class="delete-user" data-id=${user.id}>Delete</a>
        </td>
      </tr>
    `
  } )

  table.querySelector('tbody').innerHTML = tableHTML;

}



