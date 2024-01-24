import { localhostUserToModel } from "../mappers/localhost_user.mapper";


/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1 ) => {
  const url = import.meta.env.VITE_BASE_URL + '/users?_page=' + page;
  const res = await fetch(url);
  const data = (await res.json()).data;
  // En la librería, JSO-server trae los últimos 10 siempre que el Nro de la pag. sea
  // el último disponible o mayor
  if ( page < 1 || page > 5  ) return [];
    const users = data.map( userLike => localhostUserToModel( userLike ) );

  return users;
}


