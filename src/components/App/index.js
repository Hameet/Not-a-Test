import { mapIndexed } from 'ramda-adjunct'
import { sortBy, sort, pipe, compose, toLower, prop, map } from 'ramda'
import styled from 'styled-components'
import React from 'react'
import { deleteUser } from '../../state/actions'
export const StyledList = styled.section`
  margin: auto;
  margin-bottom: 10px;
  width: 90%;
  width: 292px;
`
const diff = sortBy(compose(toLower, prop(0)))

const sorted = pipe(diff, map)

export default function App ({
  handleOnSubmit,
  latestUser,
  users,
  handleOnDelete
}) {
  const does = sort((a, b) => a.localeCompare(b))

  console.log('button', handleOnDelete)

  return (
    <div className='App'>
      <h1>Welcome {latestUser}</h1>
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type='text' name='user' />
        <input type='submit' value='Register user' />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <ul>
        {map((user, index) => {
          return (
            <li key={index} data={user}>
              {user}
              <button onClick={handleOnDelete.bind(index, null)}>
                &nbsp;X
              </button>
            </li>
          )
        }, users)}
      </ul>
    </div>
  )
}
