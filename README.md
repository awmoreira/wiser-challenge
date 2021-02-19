## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de atender o challenge da Wiser Educação. Foi criado um boilerplate com uma arquitetura para atender um sistem simples de Login.
### Feito Com

Abaixo segue o que foi utilizado na criação deste app:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando Javascript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em Javascript;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Styled-components](https://www.styled-components.com/) - O Styled-component permite utilizar a sintaxe CSS real dentro de seus componentes (CSS-in-JS);
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações Javascript;
- [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
- [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
- [Eslint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
- [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
- [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
- [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;
- [Redux](https://redux.js.org/) - O Redux é um gerenciador de estado com o objetivo de manter sua aplicação escalável e consistente, centralizando sua lógica de estado utilizando a arquitetura flux;


<!-- GETTING STARTED -->

### Pré-requisitos

Antes de seguirmos para as configurações e uso do app, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:


### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash

├── src/
│   ├── assets/
│   │   
│   ├── components/
│   │   │── Button
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   │── Input
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   │── Map
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   └── Loading
│   │       └── index.js
│   │       └── styles.ts
│   ├── navigation/
│   │       └── index.tsx
│   │       └── routes.ts
│   │       └── Unlogged/
│   │           └── index.tsx
│   │       └── Logged/
│   │           └── index.tsx
│   ├── screens/
│   │   └── SignIn/
│   │       └── index.tsx
│   │       └── styles.ts
│   │   └── Home/
│   │       └── index.tsx
│   │       └── styles.ts
│   ├── services/
│   │   └── api.ts
│   ├── store/
│   │   └── index.ts
│   │   └── types.ts
│   │   └── ducks/
│   │       └── rootReducer.ts
│   │       └── rootSagas.ts
│   │       └── Auth/
│   │           └── actions.ts
│   │           └── index.ts
│   │           └── sagas.ts
│   │           └── types.ts
│   ├── theme/
│   │     └── index.ts
│   │     └── colors.ts
│   │     └── metrics.ts
│   │     └── fonts.ts
│   └── index.tsx
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── prettierrc.js
├── metro.config.js
├── react-native.config.js
├── index.js
├── tsconfig.js
├── LICENSE
├── package.json
└── README.md
```

### Instalação

1. Para instalar e utilizar esse app o processo é bem simples, basta clonar o repositório utilizando o comando:

```sh
git clone https://github.com/awmoreira/wiser-challenge
```

1. Depois do projeto clonado você deve executar a instalação dentro da pasta para dar continuidade:

```sh
yarn
```

ou

```sh
npm install
```

Em seguida execute (Apenas para iOS, Android não é necessário):

```sh
npx pod-install ios
```

Com isso o projeto será instalado com todas as dependências do app devidamente instaladas e autolinkadas.

Qualquer dúvida estou a disposição!


<!-- CONTACT -->

## Contato

Allan Winckler - [Github](https://github.com/awmoreira) - **awmoreira@gmail.com**
