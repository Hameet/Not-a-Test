import { isNonEmptyString, isInteger } from 'ramda-adjunct'
import { slice, length, filter, has } from 'ramda'

import { initialState, USER_REGISTERED, DELETE_USER } from '../constants'

export default function rootReducer (
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
          ...state,
          users: [...state.users, payload.user]
        }
        : state
    case DELETE_USER:
      // I tried to use filter here but it was deleting all enteries not just one
      return {
        ...state,
        users: [
          ...slice(0, payload.index, state.users),
          ...slice(payload.index + 1, length(state.users), state.users)
        ]
      }
    default:
      return state
  }
}
