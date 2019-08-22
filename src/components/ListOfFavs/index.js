import React from 'react'
import { Link, Image, Grid } from './styles'

export function ListOfFavs ({ favs = [] }) {
  return <Grid>
    {
      favs.map(fav => <Link to={`/detail/${fav.id}`} key={fav.id} >
        <Image src={fav.src} />
      </Link>)
    }
  </Grid>
}
