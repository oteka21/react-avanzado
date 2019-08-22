import React, { useContext } from 'react'
import { Context } from '../context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'
import { Layout } from '../components/Layout'

export function NotRegistered () {
  const { activeAuth } = useContext(Context)
  return (
    <Layout title='Sign in'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            function onSubmit ({ email, password }) {
              const input = {
                email: email,
                password: password
              }
              const variables = { input }

              register({ variables }).then(({ data }) => {
                const { signup } = data
                activeAuth(signup)
              })
            }

            const errorMsg = error && 'el usuario ya existe...'

            return <UserForm
              activeAuth={activeAuth}
              onSubmit={onSubmit}
              title='Registrate para ver las mejores mascotas'
              buttonMessage='Registrate'
              error={errorMsg}
              disabled={loading}
            />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { loading, data, error }) => {
            function onSubmit ({ email, password }) {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activeAuth(login)
              })
            }

            const errorMsg = error && 'No se puede iniciar sesión!'
            return <UserForm
              activeAuth={activeAuth}
              title='Ingresa ahora'
              buttonMessage='Iniciar Sesión'
              onSubmit={onSubmit}
              error={errorMsg}
              disabled={loading}
            />
          }
        }
      </LoginMutation>
    </Layout>
  )
}
