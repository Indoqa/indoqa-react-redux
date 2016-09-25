#Directory layout
### Main layout

* `/src/dev` dev server config
* `/src/doc` best practices guides
* `/src/main` the application
* `/src/test` unit tests
* `/package.json` npm dependency and build management
* `/indoqa-webpack-options.js` custom build settings

### Application structure in /src/main
```javascript
├── app
│   ├── components    
│   │   ├── App.react.js // main app skeleton markup (header, footer, navigation,..)
│   │   └── App.styl     // main app styling
├── feature1    
│   ├── actions          // actions of feature1
│   ├── components       // components of feature1
│   ├── reducers         // reducers of feature1
├── feature2   
│   ├── actions          // actions of feature2  
│   ├── components       // components of feature2       
│   ├── reducers         // reducers of feature2
├── apis.js              // rest clients
├── index.js             // main application entry point
├── reducers.js          // root reducer
├── routes.js            // route configuration ("page mounting")
└── store.js             // all redux configuration  
```   
### Steps to create a new feature/page

* Create a new folder `src/main/my-feature` with subfolders for actions, components and pages.
* Mount page components in`src/main/routes.js`.
* Import reducers of my-feature in `src/main/reducers.js.

That's it. Everything else is boilerplate code and should only be modified to do advanced stuff (eg. add more middlwares).

### Steps to remove demo pages

Not every production app needs a todo list ;) To safely remove the demo pages, just do the opposite of the steps mentioned before:

  * Remove the feature folders `src/main/time` and `src/main/todos`
  * Remove the reducer imports in `src/main/reducers.js`
  * Remove the pages in `src/main/routes.js`
