import usersStore from "./store/users_store"



export const UserApp = async ( element ) => {
   element.innerHTML = 'Loading...'
  await usersStore.loadNextPage();


}

