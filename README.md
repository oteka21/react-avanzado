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





