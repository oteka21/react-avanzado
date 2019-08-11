import React, { Fragment } from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'

export function NotRegistered () {
  return (
    <Context.Consumer>
      {
        ({ usAuth, activeAuth }) => (
          <Fragment>
            <UserForm
              activeAuth={activeAuth}
              title='Registrate para ver las mejores mascotas'
              buttonMessage='Registrate'
            />
            <UserForm
              activeAuth={activeAuth}
              title='Ingresa ahora'
              buttonMessage='Iniciar Sesión'
            />
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}
