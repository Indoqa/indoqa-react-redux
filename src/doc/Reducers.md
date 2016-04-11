# Reducers with immutable.js

Based on the concept of [reducers](http://redux.js.org/docs/basics/Reducers.html.

## Best practices

  * Use a separate file for every reducer. The only export should be the reducer function itself.
  * Write the reducer function as es6 arrow function.
  * Define the intial state as Record and use ES6 default arguments syntax to assign it.
  * Use immutable.js data structures inside state properties.
  * If 

  