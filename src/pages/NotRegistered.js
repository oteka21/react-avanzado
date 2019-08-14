import React, { Fragment } from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'

export function NotRegistered () {
  return (
    <Context.Consumer>
      {
        ({ usAuth, activeAuth }) => (
          <Fragment>
            <RegisterMutation>
              {
                (register) => {
                  function onSubmit ({ email, password }) {
                    const input = {
                      email: email,
                      password: password
                    }
                    const variables = { input }

                    register({ variables }).then(activeAuth)
                  }
                  return <UserForm
                    activeAuth={activeAuth}
                    onSubmit={onSubmit}
                    title='Registrate para ver las mejores mascotas'
                    buttonMessage='Registrate'
                  />
                }
              }
            </RegisterMutation>
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
