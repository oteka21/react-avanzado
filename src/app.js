import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotocardWithQuery } from './containers/PhotoCardWithQuery'

export function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return <Fragment>
    <GlobalStyle />
    <Logo />
    {
      detailId
        ? <PhotocardWithQuery id={detailId} />
        : <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </Fragment>
    }
  </Fragment>
}
