

const state = {
  currentPage: 0,
  users: []
};


const loadNextPage = async() => {
  throw new Error('Not implemented')

}

const loadPreviousPage = async () => {
  throw new Error('Not implemented')


}


const onUserChanged = async () => {
  throw new Error('Not implemented')


}

const reloadPage = async () => {
  throw new Error('Not implemented')


}



export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  getUsers: () => [...state.users], // no mandar referencia, sino
  getCurrentPage: () => state.currentPage,

}
