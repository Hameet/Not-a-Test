import rootReducer from '.'
import { isEmpty } from 'ramda'

import { initialState, USER_REGISTERED, DELETE_USER } from '../constants'
import { userRegistered, deleteUser } from '../actions'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the initialState', () => {
      expect(rootReducer(undefined, {})).toMatchObject(initialState)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'
      expect(rootReducer(state, {})).toBe(state)
    })

    it(`add new users on a ${USER_REGISTERED} action`, () => {
      const newUser = 'New User'
      const state = {
        users: []
      }

      expect(rootReducer(state, userRegistered(newUser))).toMatchObject({
        users: ['New User']
      })
    })

    it(`checks whether the if condition users on a ${USER_REGISTERED} action works or not`, () => {
      const newUser = ''
      const state = {
        users: []
      }

      expect(rootReducer(state, userRegistered(newUser))).toMatchObject({
        users: []
      })
    })

    it(`delete a user on a ${DELETE_USER} action`, () => {
      const newIndex = 1
      const state = {
        users: ['New User']
      }

      expect(rootReducer(state, deleteUser(newIndex))).toMatchObject({
        users: ['New User']
      })
    })
  })
})
