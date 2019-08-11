import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../category/index'
import { List, Item } from './styles'

function useFetchData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-mdp4qobnn.now.sh/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
    setLoading(false)
  }, [])

  return {
    categories,
    loading
  }
}
export function ListOfCategories () {
  const { categories, loading } = useFetchData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed)
      }
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  function renderList (fixed) {
    return <List fixed={fixed} >
      {
        loading
          ? <h1>Loading...</h1>
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`}/></Item>)
      }
    </List>
  }

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
