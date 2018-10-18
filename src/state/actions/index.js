import { USER_REGISTERED, DELETE_USER } from '../constants'

export function userRegistered (user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

export function deleteUser (index) {
  return {
    type: DELETE_USER,
    payload: { index }
  }
}
