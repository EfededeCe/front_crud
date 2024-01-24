import { User } from "../models/user";


/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
// El mapper sirve para estandarizar los datos requeridos, si se cambian nombres en la BS
// sólo se modifica en el mapper y se adapta => Bajo acoplamiento
export const localhostUserToModel = ( localhostUser ) => {

  const {
    id,
    isActive,
    balance,
    avatar,
    first_name,
    last_name,
    gender
  } = localhostUser;

  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender
  });

}


