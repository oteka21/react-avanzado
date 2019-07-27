import React, { useState, useEffect, useRef, Fragment } from 'react'
import { Article, ImgGrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export function PhotoCard ({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    const { current } = element
    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(current)
  }, [element])

  return <Article ref={element}>
    {
      show &&
      <Fragment>
        <a href={`/detail/${id}`}>
          <ImgGrapper>
            <Img src={src} alt='post' />
          </ImgGrapper>
        </a>
        <Button>
          <MdFavoriteBorder size='32px' /> {likes} likes
        </Button>
      </Fragment>
    }
  </Article>
}
