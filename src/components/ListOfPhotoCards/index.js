import React from 'react'
import { PhotoCard } from '../PhotoCard'

export function ListOfPhotoCards () {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5].map(photocard => <PhotoCard key={photocard} />)
      }
    </ul>
  )
}
