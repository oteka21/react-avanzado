import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export function App () {
  return <Fragment>
    <Logo />
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </Fragment>
}
