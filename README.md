# Indoqa React/Redux archetype

This project is a ready-to-use setup for react/redux web applications we use at Indoqa. It is based on the 
react todos example and inspired by a lot of good ideas from the este dev stack. The main focus is to create a
consistant environment for client side web applications that are consuming business logic using REST services over HTTP. 

As we went all the way from server-side Java web applications like Wicket to this nice and clean redux architecture, we 
tried to develop a directory structure and build environment that looks familiar to Java developers. This may help to switch between these two worlds. As a benefit, it makes it easy to integrate the frontend inside a maven multi module build.

## Features

We invent nothing new, this archetype is just a composition of useful tools and plugins. In addition to vanilla react and redux, we set up the following:

  * react-promise-middleware to support 'fetch' and other async operations in actions
  * react-multi to optionally dispatch multiple actions at once
  * dependency injection to optionally access the current state and other environment information in actions
  * immutable.js to be used as state in reducers
  * react-router to support multipe pages
  * stylus as our css framework of choice
  * mocha and expect to unit test actions and reducers
  * dev tools for hot reloading and logging
  * eslint using eslint-config-indoqa for consistent and clean source code in all projects

All configuration takes place in *index.js*, *store.js* and *routes.js* inside /src/main. 

## Installation

```
git clone https://github.com/Indoqa/indoqa-react-redux.git
npm install
```

## Usage

Run the app inside the node dev server including hot reloading:
```
npm run run-dev
```
Run the tests:
```
npm run test
```
Build production bundle using webpack:
```
npm run compile
```
Run a full build including 'clean target', 'run tests' and 'build bundle':
```
npm run package
```


