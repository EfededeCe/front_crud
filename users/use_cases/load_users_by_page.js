import { localhostUserToModel } from "../mappers/localhost_user.mapper";


/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1 ) => {
  console.log('Page  ===> ', page);
  const url = import.meta.env.VITE_BASE_URL + '/users?_page=' + page;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  
  if ( page < 1 || page === data.pages + 1 ) return [];
  
  const users = data.data.map( userLike => localhostUserToModel( userLike ) );

  return users;
}


