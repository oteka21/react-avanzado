import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export function Home ({ categoryId }) {
  return <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Fragment>
}
