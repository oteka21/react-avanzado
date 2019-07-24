import React from 'react'
import { Category } from '../category/index'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export function ListOfCategories () {
  return <List>
    {
      categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
    }
  </List>
}
