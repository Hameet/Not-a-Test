import { isNonEmptyString, isInteger } from 'ramda-adjunct'
import { slice, length, filter, has } from 'ramda'

import { initialState, USER_REGISTERED, DELETE_USER } from '../constants'

export default function rootReducer (
  state = initialState,
  { type, payload = {} }
) {
  console.log('inreducer', state)
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user)
        ? {
          ...state,
          users: [...state.users, payload.user]
        }
        : state
    case DELETE_USER:
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
