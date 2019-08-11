import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export function Category ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) {
  return (
    <Anchor to={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
