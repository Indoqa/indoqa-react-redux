# Indoqa React/Redux Archetype

This project is a ready-to-use setup for react/redux web applications we use at Indoqa. It is based on the 
react todos example and inspired by a lot of good ideas from the este dev stack. The main focus is to create a
consistant environment for client side web applications that are consuming business logic using REST services over HTTP. 

As we went all the way from server-side Java web applications like Wicket to this nice and clean redux architecture, we 
tried to develop a directory structure and build environment that looks familiar to Java developers. This may help to switch between these two worlds, both mentally and technically. 

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
cd indoqa-react-redux
npm install
```

## Usage

  * ```npm run run-dev``` Run the app inside the node dev server including hot reloading
  * ```npm run test``` Run the tests
  * ```npm run compile``` Build production bundle using webpack into './target
  * ```npm run package``` Run a full build including 'clean target', 'run tests' and 'build bundle':

## Documentation
### Best practices
#### Directory structure and where to put new features
#### Types of action creators
tbd.
#### Immutable objects in reducers
tbd.
#### Where to **connect**
tbd.
### Production notes
#### Production setup
tbd.
#### Api proxies
tbd.
### Resources
#### Recommended resources
tbd.
#### Recommended resources for Java developers
tbd.



