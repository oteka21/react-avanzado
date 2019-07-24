import React from 'react'
import { ImgGrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  return <article>
    <a href={`/detail/${id}`}>
      <ImgGrapper>
        <Img src={src} alt='post' />
      </ImgGrapper>
    </a>
    <Button>
      <MdFavoriteBorder size='32px' /> {likes} likes
    </Button>
  </article>
}
