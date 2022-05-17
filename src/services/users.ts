import {
  getAllUsersData,
  findUserById,
  createUserData,
  updateUserData,
  deleteUserById,
  searchUserById,
} from '../repositories/users'

export const getUsers = async () => {
  return getAllUsersData()
}

export const findUser = async (id) => {
  return findUserById(id);
}

export const createUser = async (decodedToken) => {

  const {id, username, email, picture} = decodedToken.value;
  
  return createUserData(id, username, email, picture);
}

export const userUpdate = async (id, username, email, picture) => {
  return updateUserData(id, username, email, picture);
}

export const userDelete = async (id) => {
  return deleteUserById(id)
}

export const userSearch = async (id) => {
  return searchUserById(id)
}
