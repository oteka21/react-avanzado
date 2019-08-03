import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './app'

const client = new ApolloClient({
  uri: 'https://petgram-server-mdp4qobnn.now.sh/graphql'
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('app'))
