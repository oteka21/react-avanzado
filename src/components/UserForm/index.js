import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../../components/SubmitButton'

export function UserForm ({ title, buttonMessage, onSubmit, error, disabled }) {
  const email = useInputValue('')
  const password = useInputValue('')
  function handleSubmit (e) {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} disabled={disabled} />
        <Input placeholder='Password' {...password} disabled={disabled} />
        <SubmitButton type='submit' disabled={disabled}>
          {buttonMessage}
        </SubmitButton>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </Fragment>
  )
}
