import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export function UserForm ({ activeAuth, title, buttonMessage }) {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={(e) => {
        e.preventDefault()
        activeAuth()
      }} >
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' {...password} />
        <Button type='submit'>
          {buttonMessage}
        </Button>
      </Form>
    </Fragment>
  )
}
