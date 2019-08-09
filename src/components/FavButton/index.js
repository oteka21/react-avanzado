import React from 'react'
import { MdFavoriteBorderBlack, MdFavoriteRed, Button } from './styles'

export function FavButton ({ liked, likes, onClick }) {
  const Icon = liked ? MdFavoriteRed : MdFavoriteBorderBlack

  return <Button onClick={onClick}>
    <Icon size='32px' /> {likes} likes
  </Button>
}
