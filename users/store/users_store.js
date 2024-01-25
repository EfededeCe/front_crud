import { loadUsersByPage } from '../use_cases/load_users_by_page.js';

const state = {
  currentPage: 0,
  users: []
};


const loadNextPage = async() => {
  const users =  await loadUsersByPage(state.currentPage + 1);
  console.log(users.length);
  console.log(users);
  if( users.length === 0 ) return false;

  state.currentPage += 1;
  state.users = [...users];
  return true;
}

const loadPreviousPage = async () => {
  if ( state.currentPage === 1 ) return;
  const users = await loadUsersByPage( state.currentPage - 1 );
  state.currentPage -= 1;
  state.users = users;

}

/**
 * 
 * @param {User} updatedUser
 */
const onUserChanged = ( updatedUser ) => {
  let wasFound = false;
  
  state.users = state.users.map( user => {
    if (user.id === updatedUser.id){
      wasFound = true;
      return updatedUser;
    }
    return user;
  });

  if( state.users.length < 10 && !wasFound ){
    state.users.push( updatedUser );
  }

}

const reloadPage = async () => {
  const users =  await loadUsersByPage(state.currentPage);
  if( users.length === 0 ) {
    await loadPreviousPage();
    return;
  }
  state.users = users;

}



export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users], // no mandar referencia, sino
  
  /**
   * 
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,

}
