import React from 'react'
import { FavsWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export function Favs () {
  return <Layout title='Tus favoritos' subtitle='Todas tus mascotas favoritas'>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Layout>
}
