import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export function Home ({ categoryId }) {
  return <Layout title='Esto es' subtitle='La mejor red social para mascotas'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
}
