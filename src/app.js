import React, { useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/favs'
import { User } from './pages/User'
import { NotRegistered } from './pages/NotRegistered'
import { NotFound } from './pages/NotFound'
import { Context } from './context'

import { Router, Redirect } from '@reach/router'

export function App () {
  const { isAuth } = useContext(Context)
  return <div>
    <GlobalStyle />
    <Logo />
    <Router>
      <NotFound default />
      <Home path='/' />
      <Home path='/pet/:categoryId' />
      <Detail path='/detail/:detailId' />
      {!isAuth && <NotRegistered path='/login' notThrow />}
      {!isAuth && <Redirect from='/favs' to='/login' notThrow />}
      {!isAuth && <Redirect from='/user' to='/login' notThrow />}
      {isAuth && <Redirect from='/login' to='/' notThrow />}
      <Favs path='/favs' />
      <User path='/user' />
    </Router>
    <NavBar />
  </div>
}
