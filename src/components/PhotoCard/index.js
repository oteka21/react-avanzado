import React, { Fragment } from 'react'
import { Article, ImgGrapper, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const key = `like-${id}`
  const [show, element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  function andleFavClick () {
    setLiked(!liked)
  }
  return <Article ref={element}>
    {
      show &&
      <Fragment>
        <a href={`/?detail=${id}`}>
          <ImgGrapper>
            <Img src={src} alt='post' />
          </ImgGrapper>
        </a>
        <FavButton liked={liked} likes={likes} onClick={andleFavClick} />
      </Fragment>
    }
  </Article>
}
