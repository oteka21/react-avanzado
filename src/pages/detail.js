import React from 'react'
import { PhotocardWithQuery } from '../containers/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export function Detail ({ detailId }) {
  return <Layout title={`Fotofrafía ${detailId}`} subtitle='Detalles de una foto'>
    <PhotocardWithQuery id={detailId} />
  </Layout>
}
