import React from 'react'
import { shallow } from 'enzyme'

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
})
