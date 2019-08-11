import React, { Fragment } from 'react'
import { Article, ImgGrapper, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/toggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const key = `like-${id}`
  const [show, element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  return <Article ref={element}>
    {
      show &&
      <Fragment>
        <Link to={`/detail/${id}`}>
          <ImgGrapper>
            <Img src={src} alt='post' />
          </ImgGrapper>
        </Link>
        <ToggleLikeMutation>
          {
            (toggleLike) => {
              function andleFavClick () {
                !liked && toggleLike({ variables: {
                  input: { id }
                } })
                setLiked(!liked)
              }
              return <FavButton liked={liked} likes={likes} onClick={andleFavClick} />
            }
          }
        </ToggleLikeMutation>
      </Fragment>
    }
  </Article>
}
