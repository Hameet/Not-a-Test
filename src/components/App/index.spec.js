import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { map } from 'ramda'

Enzyme.configure({ adapter: new Adapter() })

import App from '.'

describe('components:App', function () {
  it('renders the App and CSS properties properly', () => {
    const users = ['user', 'user2']
    const texts = map(user => user, users)

    //     expect(texts).to.eql(users)
    //   })
    expect(toJson(shallow(<App texts={users} />))).toMatchSnapshot()
  })
})

//   it('renders the Todolist properly', () => {
//     const userlist = ['X', 'Y']

//     expect(toJson(shallow(<App users={userlist} />))).toMatchSnapshot()
//   })

// describe('components:Todolist', function () {
//     it('returns null when the Todolist is empty or undefined', () =>
//       expect(toJson(shallow(<Todolist/>))
//     ).toMatchSnapshot())

//     it('renders the Todolist properly', () => {
//       const todoslist = [{todo: 'X'}, {todo: 'Y'}]

//       expect(toJson(shallow(<Todolist todos={todoslist} />))
//     ).toMatchSnapshot()})
//   })
