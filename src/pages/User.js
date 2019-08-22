import React, { useContext, Fragment } from 'react'
import { Context } from '../context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export function User () {
  const { removeAuth } = useContext(Context)
  return <Layout title='Profile' >
    <h1>User... </h1>
    <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
  </Layout>
}
