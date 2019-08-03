import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { withPhotos } from '../../hoc/WithPhotos'
function ListOfPhotoCardsComponent ({ data: { photos = [] } } = {}) {
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
