![React logo](http://renanlopes.com/img/external-logos/react.png)

## Udacity React Nanodegree

- Português

### Fundamentos de React

Repositório para conteúdo e projetos construídos durante o desenvolvimento da formação de React Nanodegree da Udacity.

### Create React App

O Facebook criou uma esta ferramenta para ajudar no desenvolvimento de aplicações usando React, pois, os browsers não entendem o padrão usado pelo React que é o JSX e nem o EcmaScript 2015 o ES6 e para que nosso código possa se tornar em arquivos estáticos (HTML, CSS e JavaScript) que o browser "interprete" precisamos transpilar nosso código (Ferramentas como Webpack e Babel) só que toda essa configuração é trabalhosa e leva certo tempo para deixar tudo funcionando e por estes motivos o recomendado é usar as ferramentas desenvolvidas pelo time de engenharia do Facebook o "create-react-app".

Instalando globalmente através do gerenciador de pacotes do NPM (Node Package Management):

| CLI |
| ------ |
| npm install -g create-react-app |

Documentação: https://github.com/facebookincubator/create-react-app
Versão instalada durante o React Nanodegree: create-react-app@1.4.0

## Contacts Projeto HandsOn (Módulo Fundamentos de React)

Diretório: ```./contacts```

Lista de contatos desenvolvida em React durante as aulas do primeiro módulo "HandsOn"

#### Instalando Ambiente Local

1. Download ou clone do repositório
2. Via terminal acesse o diretório ``` ./contacts ```, execute o comando ``` npm install ```
3. Via terminal acesse o diretório ``` ./contacts/backend ```, execute o comando ``` npm install ```

#### Executando Aplicação Local

1. Via terminal acesse o diretório ``` ./contacts ```, execute o comando ``` npm start ```
2. Abrir novo terminal e acessar o diretório ``` ./contacts/backend ```, execute o comando ``` npm start ```

| CLI ou URL | Descrição |
| ------ | ------ |
| create-react-app contacts | criação do projeto HandsOn |
| npm start | Iniciando o webpack-dev-server na porta 3000 |
| https://github.com/udacity/reactnd-contacts-complete/commit/6f38f078634d104a62e3024cab4cc2d592dd82f6 | Inserir layout preparado da Udacity |
| https://github.com/udacity/reactnd-contacts-server | Download backend Adress Book API |
| npm install | Dentro do diretório da api para instalação das dependências |
| node server.js | Executando a Adress Book API porta 5001 |
| npm install --save prop-types | Podemos definir tipos para as propriedades e se é obrigatória |
| npm install --save escape-string-regexp | Filtrando contatos através do estado atual via expressão regular |
| npm install --save sort-by | Ordenando resultados |
| npm install --save react-router-dom | Componentes de navegação para SPA com React |
| npm install --save form-serialize | Pegar dados do formulario e transformar em JSON / String |

By: [Renan Lopes](https://www.renanlopes.com/)