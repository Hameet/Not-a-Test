import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', function () {
  it('renders the App and CSS properties properly', () => {
    expect(toJson(shallow(<App>App</App>))).toMatchSnapshot()
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
