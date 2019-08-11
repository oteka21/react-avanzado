import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/favs'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import Context from './context'

import { Router } from '@reach/router'

export function App () {
  return <div>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
    </Router>
    <Context.Consumer>
      {
        ({ isAuth }) =>
          isAuth
            ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegistered path='/favs' />
              <NotRegistered path='/user' />
            </Router>
      }
    </Context.Consumer>
    <NavBar />
  </div>
}
