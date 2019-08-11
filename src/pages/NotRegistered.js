import React from 'react'
import Context from '../context'

export function NotRegistered () {
  return (
    <Context.Consumer>
      {
        ({ usAuth, activeAuth }) => (
          <form onSubmit={(e) => {
            e.preventDefault()
            activeAuth()
          }} >
            <input type='submit' value='Login' />
          </form>
        )
      }
    </Context.Consumer>
  )
}
