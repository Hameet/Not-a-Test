import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
import configureStore from 'redux-mock-store'

import App from '.'

const mockStore = configureStore()

import {
  initialState,
  USER_REGISTERED,
  DELETE_USER
} from '../../state/constants'

describe('containers:App', () => {
  it('should map App to props', () => {
    const users = ['user1', 'user2']
    const store = mockStore({ users })

    const wrapper = shallow(<App store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        users
      })
    )
  })

  it('should map App to props and check function', () => {
    const users = ['user1', 'user2']
    const store = mockStore({ users })

    const wrapper = shallow(<App store={store} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        handleOnSubmit: expect.any(Function),
        users
      })
    )
  })

  it(`maps handleClick to dispatch ${USER_REGISTERED} action`, () => {
    const user = 'user1'
    const userInpu = function handleOnSubmit (e) {
      return e.target.elements['user']
    }

    const store = mockStore({ user })

    store.dispatch = jest.fn()

    const wrapper = shallow(<App store={store} user={user} />)

    wrapper.props().handleOnSubmit(userInput.value)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: USER_REGISTERED,
      payload: {
        user: userInput.value
      }
    })
  })
})
