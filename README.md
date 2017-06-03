# Indoqa React/Redux Archetype

This project is a ready-to-use setup for react/redux web applications we use at Indoqa. It is based on the
redux [todos example](https://github.com/reactjs/redux/tree/master/examples/todos) and inspired by a lot of good ideas from the [este](https://github.com/este/este) dev stack. The main focus is to create a
consistant environment for client side web applications that are consuming business logic using REST services over HTTP.

## Features

We invent nothing new, this archetype is just a composition of useful tools and plugins. In addition to vanilla react and redux, we set up the following:

  * [indoqa-react-app](https://github.com/Indoqa/indoqa-react-app) for a basic redux and router setup:
    * [react-observable](https://github.com/redux-observable/redux-observable) for side effects
    * [react-router](https://github.com/reactjs/react-router) to support multipe pages
    * [Flow](https://flow.org/) for static typing of Javascript
    * [Fela](http://fela.js.org/docs/Introduction.html) as our css-in-js library
    * dev tools for [hot reloading](https://github.com/gaearon/react-hot-loader) and
     [logging](https://github.com/fcomb/redux-logger)
  * [indoqa-webpack](https://github.com/Indoqa/indoqa-webpack) build system
    * [babel](https://babeljs.io/) to support es6 syntax ans language features
    * eslint using [eslint-config-indoqa](https://github.com/Indoqa/eslint-config-indoqa) based on the well documented [airbnb](https://github.com/airbnb/javascript) rules
  * [Ramda](http://ramdajs.com/docs/) for immutable state transformation
  * [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) as test framework
  * two demo pages, [one](https://github.com/Indoqa/indoqa-react-redux/tree/master/src/main/time) with an example of fetching data from an external webservice ([geonames timezone](http://www.geonames.org/export/web-services.html#timezone)) and [another](https://github.com/Indoqa/indoqa-react-redux/tree/master/src/main/todos) showing a local todo list based on Dan Abramov excellent [introduction](https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo) into Redux
  * a simple and clean application layout separting application setup, features and common components

## Prerequisites

  * Watch the [video](https://facebook.github.io/flux/) about flux and react, then switch to the evolved [redux](http://redux.js.org/index.html) and watch the [videos](https://egghead.io/series/getting-started-with-redux) as well.
  * Learn about the new [es6 features](https://github.com/lukehoban/es6features#readme) and take a deep look at [arrow functions](http://exploringjs.com/es6/ch_arrow-functions.html), [destructuring](https://gist.github.com/mikaelbr/9900818), [defaults/spread](https://medium.com/ecmascript-2015/default-rest-spread-f3ab0d2e0a5e#.xn5wo78hb) and [modules](http://exploringjs.com/es6/ch_modules.html).
  * [Flow Getting-Started](https://flow.org/en/docs/getting-started/) and its [usage](https://flow.org/en/docs/frameworks/) with React and Redux
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
  * ```yarn run package``` Create a minified distribution

## Todos

  * i18n
  * usage with [Indoqa Boot](https://github.com/Indoqa/indoqa-boot) in Java frontend-backend applications
