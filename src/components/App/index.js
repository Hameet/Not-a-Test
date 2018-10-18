import { sortBy, sort, pipe, compose, toLower, prop, map } from 'ramda'
import React from 'react'
import { Fragment } from 'react'

// const diff = sortBy(compose(toLower, prop(0))) Was trying to use this fn here to sort names but it crashes the app after the first sort

export default function App ({
  handleOnSubmit,
  latestUser,
  users,
  handleOnDelete
}) {
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
            <Fragment>
              <li key={user.toString()} data={user}>
                {user}
                <button onClick={handleOnDelete.bind(index, null)}>
                  &nbsp;X
                </button>
              </li>
            </Fragment>
          )
        }, users)}
      </ul>
    </div>
  )
}
