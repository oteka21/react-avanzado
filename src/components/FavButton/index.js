import React from 'react'
import { MdFavoriteBorderBlack, MdFavoriteRed, Button } from './styles'
import PropTypes from 'prop-types'

export function FavButton ({ liked, likes, onClick }) {
  const Icon = liked ? MdFavoriteRed : MdFavoriteBorderBlack

  return <Button onClick={onClick}>
    <Icon size='32px' /> {likes} likes
  </Button>
}

FavButton.propTypes = {
  likes: PropTypes.number,
  liked: PropTypes.bool,
  onClick: PropTypes.func
}
