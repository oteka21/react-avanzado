import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export function UserForm ({ title, buttonMessage, onSubmit }) {
  const email = useInputValue('')
  const password = useInputValue('')
  function handleSubmit (e) {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit} >
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' {...password} />
        <Button type='submit'>
          {buttonMessage}
        </Button>
      </Form>
    </Fragment>
  )
}
