import React from 'react'
import { PhotocardWithQuery } from '../containers/PhotoCardWithQuery'

export function Detail ({ detailId }) {
  return <PhotocardWithQuery id={detailId} />
}
