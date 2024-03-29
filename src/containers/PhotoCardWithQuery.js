import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <h2>Loading... </h2>
  if (error) return <h2>there is an error </h2>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export function PhotocardWithQuery ({ id }) {
  return <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
}
