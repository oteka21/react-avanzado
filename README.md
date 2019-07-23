# CURSO DE REACT AVANZADO BY PLAZI 🚀

Para iniciar un proyecto es necesario crear la carpeta del proyecto e inicializar un proyecto con pm init como se hace normalmente en node.

## Las dependencias principales para empezar son 

* Webpack 
* Webpack-cli
* Webpack-dev-server

Es importante crear el archivo webpack.config.js 


`    
module.exports = {
    output: {
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}    `

## Opcional 

* html-webpack-plugin

Este nos crea el html automáticamente cada vez que hace Build de nuestra aplicación 

## Instalacion de dependencias para que nuestro webpack entienda react

* babel-loader
* @babel/core
* @babel/preset-env
* @babel/preset-react

Esto require una configuracion en el webpack.config.js

`    module.exports = {
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
}    `