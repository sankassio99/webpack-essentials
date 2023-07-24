# webpack-essentials
Webpack get started

# Webpack 5

# Introdução

É um empacotador / agrupador de arquivos javascript.

Dividir a aplicação em modulos

Gerenciador de dependencias de varios modulos.

Criar uma arvore de dependencias. 

Varre os arquivos e resolve as dependencias e cria um bundle em formato JS. 

Um bundle são todos os arquivos em javascript do projeto agrupados em apenas um. 

otimiza e minimifica arquivos.

ajuda a mimificar e melhora o desempenho do site.

Quadno falamos de webpack é sempre em ambiente de desenvolvimento, a partiri dai geramos um bundle para produção. 

# instalar webpack no projeto

```jsx
npm i --save-dev webpack webpack-cli
```

Precisamos criar um codigo de entrada.

Pasta src como codigo fonte.

Precisamos gerar o arquivo de saida. 

```jsx
npx webpack
```

Então precisamos de um arquivo html public que vai consumir os dados gerados pelo webpack.

# Configuação para recursos mais avançados

Criar o arquivo na raiz: webpack.config.js

# Loaders

### Css

css via javascript

criar arquivo css e importar no arquivo js 

```jsx
Import "arquivlo.css"
```

temos que adicionar um loader para ele entender arquivos .css

### Colocar o arquivo CSS em um arquivo separado.

precisamos de um plugin

```jsx
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```

# Modes

use development to generate legible code to debug

production is the default mode

# Servidor de dev

Our application will run on the webpack server like vue, react or angular.

```jsx
devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
    },
    port: 9000
},
```

## Define script to run with hot realod

```jsx
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack serve --hot"
},
```

Run with 

```jsx
npm run dev 
```

This have hto realod and rebuild the app.

# Video aula

https://www.youtube.com/watch?v=bKk_4jtXq0Y .

https://youtu.be/PcWOAYbTc9Y
