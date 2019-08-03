import React, { Fragment } from 'react'
import { Article, ImgGrapper, Img, Button, MdFavoriteRed, MdFavoriteBorderBlack } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  console.log('ola')
  const key = `like-${id}`
  const [show, element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavoriteRed : MdFavoriteBorderBlack

  return <Article ref={element}>
    {
      show &&
      <Fragment>
        <a href={`/detail/${id}`}>
          <ImgGrapper>
            <Img src={src} alt='post' />
          </ImgGrapper>
        </a>
        <Button onClick={() => setLiked(!liked)}>
          <Icon size='32px' /> {likes} likes
        </Button>
      </Fragment>
    }
  </Article>
}
