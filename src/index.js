import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './context'

import { App } from './app'

const client = new ApolloClient({
  uri: 'https://petgram-server-mdp4qobnn.now.sh/graphql'
})

render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))
