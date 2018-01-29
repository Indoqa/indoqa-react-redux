# Indoqa React/Redux Archetype

This project is a ready-to-use setup for React/Redux web applications we use at [Indoqa](https://indoqa.com). It is based on the
Redux [todos example](https://github.com/reactjs/redux/tree/master/examples/todos) and inspired by a lot of good ideas from the [este](https://github.com/este/este) dev stack. The main focus is to create a consistent environment for client side web applications that are consuming business logic using REST services over HTTP.

## Features

We invent nothing new, this archetype is just a composition of useful libraries, frameworks, tools and plugins. In addition to vanilla React and Redux, we set up the following:

  * [indoqa-react-app](https://github.com/Indoqa/indoqa-react-app) for a basic redux and router setup:
    * [redux-observable](https://github.com/redux-observable/redux-observable) for side-effects
    * [react-router](https://github.com/reactjs/react-router) to support multiple pages and history management
    * [Fela](http://fela.js.org/docs/Introduction.html) as our css-in-js library and theming
    * dev tools for [logging](https://github.com/fcomb/redux-logger) and debugging
  * [Ramda](http://ramdajs.com/docs/) for immutable state transformation
  * [Reselect](https://github.com/reactjs/reselect) to access Redux state
  * [Flow](https://flow.org/) for static typing of Javascript
  * [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) as test framework
  * [indoqa-webpack](https://github.com/Indoqa/indoqa-webpack) build system
    * [babel](https://babeljs.io/) to support es6 syntax ans language features
    * eslint using [eslint-config-indoqa](https://github.com/Indoqa/eslint-config-indoqa) based on the well documented [airbnb](https://github.com/airbnb/javascript) rules
    * [hot reloading](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html) of React components, Fela themes, epics and reducers
  * three demo pages:
    * [one](https://github.com/Indoqa/indoqa-react-redux/tree/master/src/main/time) with an example of fetching data from an external webservice ([geonames timezone](http://www.geonames.org/export/web-services.html#timezone)),
    * [two](https://github.com/Indoqa/indoqa-react-redux/tree/master/src/main/todos) showing a local todo list based on Dan Abramov excellent [introduction](https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo) into Redux and
    * [three](https://github.com/Indoqa/indoqa-react-redux/tree/master/src/main/todos) demonstrating more advances usages of redux-observable (cancellation, debouncing).
  * a simple and clean application layout separating application setup, features and common components and following the [atomic design](http://atomicdesign.bradfrost.com/) methodology by Brad Frost.
    ```
    src
    ├── main
    │   ├── index.js                        // entry point to the Javascript application
    │   ├── app
    │   │   ├── App.react.js                // Theming, HTML header
    │   │   ├── fela.js                     // Fela renderer configuration
    │   │   ├── rootEpic.js                 // collect all epics and combine them into a root epic
    │   │   ├── rootReducer.js              // collect all reducers and combine them into a root reducer
    │   │   ├── routes.react.js             // link components to routes (URL paths)
    │   │   ├── selectors.js                // collect all selectors
    │   │   ├── store.js                    // Redux store setup with hot reloading support
    │   │   └── theme.js                    // application theme
    │   ├── commons
    │   │   ├── components
    │   │   │   ├── atoms                   // basic building blocks (e.g. boxes, links, etc.)
    │   │   │   ├── molecules               // composition of atoms
    │   │   │   ├── organisms               // compositions of molecules and atoms
    │   │   │   └── templates               // compositions of organisms, molecules and atoms
    │   │   ├── store                       // reusable epics, reducers and actions
    │   │   └── types                       // Flow types available for all features
    │   ├── feature1
    │   │   ├── components
    │   │   │   ├── FeaturePage.react.js    // based on a template available via an URL
    │   │   │   └── SomeComponent.react.js  // feature-specific molecule or organism
    │   │   ├── store
    │   │   │   ├── feature1.actions.js     // action types
    │   │   │   ├── feature1.epics.js       // side effects using rxjs observables
    │   │   │   ├── feature1.reducer.js     // Redux reducers
    │   │   │   └── feature1.selectors.js   // Reselect selectors to access state
    │   │   └── types                       // Flow types
    │   ├── feature2
    │   └── ...
    └── test                                // Jest tests
        └── feature1
            ├── actions
            ├── components
            └── reducers
    ```

## Prerequisites

  * Watch the [video](https://facebook.github.io/flux/) about flux and react, then switch to the evolved [redux](http://redux.js.org/index.html) and watch the [videos](https://egghead.io/series/getting-started-with-redux) as well.
  * Learn about the new [es6 features](https://github.com/lukehoban/es6features#readme) and take a deep look at [arrow functions](http://exploringjs.com/es6/ch_arrow-functions.html), [destructuring](https://gist.github.com/mikaelbr/9900818), [defaults/spread](https://medium.com/ecmascript-2015/default-rest-spread-f3ab0d2e0a5e#.xn5wo78hb) and [modules](http://exploringjs.com/es6/ch_modules.html).
  * [Flow Getting-Started](https://flow.org/en/docs/getting-started/) and its [usage](https://flow.org/en/docs/frameworks/) with React and Redux
  * The [Fela Workshop](https://github.com/tajo/fela-workshop) projects helps you to get familiar with Fela
  * Install [nodejs](https://nodejs.org/en/download/package-manager/) including [yarn](https://yarnpkg.com/lang/en/docs/install/).

## Installation

```
git clone https://github.com/Indoqa/indoqa-react-redux.git
cd indoqa-react-redux
yarn install
```

## Usage

  * ```yarn start``` Run the app inside the dev node server including hot reloading
  * ```yarn test``` Run the tests
  * ```yarn package``` Create a minified distribution

## Todos

  * upgrade rxjs to v6
  * upgrade to redux v4 (rxjs-observable is not compatible with it yet)
  * code-splitting by routes (https://reactjs.org/docs/code-splitting.html), (https://tylermcginnis.com/react-router-code-splitting/), (https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/code-splitting.md)
  * add tests (https://reactjs.org/docs/test-utils.html)
  * add e2e tests (https://codeburst.io/composable-end-to-end-tests-for-react-apps-2ec82170af62)
  * document debugging with Chrome and Firefox tools (maybe improve indoqa-webpack)
  * lighthouse check
  * Typescript?
