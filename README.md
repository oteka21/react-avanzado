# CURSO DE REACT AVANZADO BY PLAZI 🚀

Para iniciar un proyecto es necesario crear la carpeta del proyecto e inicializar un proyecto con pm init como se hace normalmente en node.

## Las dependencias principales para empezar son 

* Webpack 
* Webpack-cli
* Webpack-dev-server

Es importante crear el archivo webpack.config.js 


```
module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
```


## Opcional 

* html-webpack-plugin

Este nos crea el html automáticamente cada vez que hace Build de nuestra aplicación 

## Instalacion de dependencias para que nuestro webpack entienda react

* babel-loader
* @babel/core
* @babel/preset-env
* @babel/preset-react

Esto require una configuracion en el webpack.config.js

```
module.exports = {
    ...
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }

            }
        ]
    },
    ...
}
```

## deploy con now.js

now es una poderosa herramienta para hacer deploy de nuestra aplicacion de una manera muy sencilla

> Para tener en cuenta

* crear una cuenta en now.js
* instalar now-cli 
* configurar nen el proyecto el deply con now 


## Styled-components

En este curso se utilizará styled-components 

La forma de agregar estilos globales con styled-components es de la siguiente manera:

```
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: syste-ui;
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
`
```

Así importando el componente GlobalStyle desde nuestra app ya podemos agregar estos estilos.

## Animaciones en styled-components

en react se pueden utilizar animaciones importando la funcion keyframes de styled-components y creando un keyframe como se utiliza comunmente en css

```

import styled, { keyframes } from 'styled-componts'

const animation = keyframes`
    from {
       
    }
    to{
        transform; rotate(60deg)
    }
`

const AnimatedComponent = styled.div`
    animation: 1s ${animation} ease;
`

```

> tambien se pueden crear animaciones reutilizables de la siguiente manera

```
import { keyframes, css } from 'styled-componts'

const animation = keyframes`
    from {
       
    }
    to{
        transform; rotate(60deg)
    }
`
export const rotate = ({time = '1s', type = 'ease'} = {}) => css`
    animation: ${time} ${animation} $type
`
```

##  Utilizando Graphql para fetching de datos 

Una de las formas mas populares de integrar Graphql con aplicaciones en react es utilizando las siguientes dependencias:

* apollo-boost: Este nos permite inicializar una conexion con un servidor de Graphql de una manera facil.

* react-apollo: Esta es la integracion de apollo con react.

* graphql: contiene el core de esta dependencia.

existen tres formas de integrar esta funcionalidad en nustras aplicaciones de react 

* HOC: high order components.
* Render props.
* Hooks. 

### HOC 

```
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
    query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const withPhotos = graphql(GET_PHOTOS)

```

De esta forma envolvemos en withPhotos a el componente que le queramos inyectar los datos que vienen de la query.

### Render props 

```
import React from 'react'
import { MyComponent } from './components/myComponent'
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

// Tener en cuenta que esta query resibe una id

export const ComponentWithQuery = ({ id })=> (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
        {
            ({loading, error, data})=> {
                if (loading){
                    return <h1>Loading...</h1>
                }
                if (error){
                    return <h1>There is an error!!</h1>
                }
                const { photo = {} } = data
                return <MyComponent {...photo}>
            }
        }
    </Query>
)

```

### Hoocks

```
import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = categoryId => {
  const { loading, data, error } = useQuery(getPhotos, { variables: { categoryId } })
  return { loading, data, error }
}

```


