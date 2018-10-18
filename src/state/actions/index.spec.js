import { userRegistered, deleteUser } from '.'
import { USER_REGISTERED, DELETE_USER } from '../constants'

describe('state:actions', () => {
  describe('userRegistered', () => {
    it(`creates a ${USER_REGISTERED} action`, () => {
      const user = 'user1'
      expect(userRegistered(user)).toMatchObject({
        type: USER_REGISTERED,
        payload: {
          user
        }
      })
    })
    it(`creates a ${DELETE_USER} action`, () => {
      const index = null
      expect(deleteUser(index)).toMatchObject({
        type: DELETE_USER,
        payload: {
          index
        }
      })
    })
  })
})
