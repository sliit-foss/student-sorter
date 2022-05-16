import {
  getAllUsersData,
  findUserData,
  createUserData,
  updateUserData,
  deleteUserData,
  searchUserData,
} from '../repositories/users'

export const getUsers = async () => {
  const getUserData = await getAllUsersData()
  return getUserData
}

export const findUser = async (decodedToken) => {
  return findUserData(decodedToken)
}

export const createUser = async (decodedToken) => {
  return createUserData(decodedToken)
}

export const userUpdate = async (request, id) => {
  return updateUserData(request, id)
}

export const userDelete = async (id) => {
  return deleteUserData(id)
}

export const userSearch = async (id) => {
  return searchUserData(id)
}
