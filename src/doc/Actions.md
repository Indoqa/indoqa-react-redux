# Actions
todo. basic information ...

  * Always use constants for the `type` property.
  * Use a `payload` property to store all information relevant for the reducer.
  * Use consistent naming for the action creator method and according action type. Convention is `VERB_PHRASE` respectively `verbPhrase()`.
  * Write action creator functions using the simplest possible es6 syntax.

## Supported action creator return types

### Plain objects as described in vanilla redux

```javascript
export const ADD_TODO = 'ADD_TODO'

// action creator for ADD_TODO
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {text: text}
  }
}

// which can be written as arrow function
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {text}
  }
}

// and even shorter, as the function directly returns (= the preferred way)
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {text}
})
```
### Using a promise as `payload` for asynchronous actions

Using the react-promise-middleware, you can spacify
```javascript
export const FETCH_DATA = 'FETCH_DATA'

export function fetchData(count) {
  return {
    type: FETCH_DATA,
    payload: fetch(`/api/v1/data?count=${count}`).then(result => result.json())
  }
}

// in es6 (= the preferred way)
export const fetchData = (count) => ({
  type: FETCH_DATA,
  payload: fetch(`/api/v1/data?count=${count}`).then(result => result.json())
})
```

The middleware then dispatches two actions:
  * `FETCH_DATA_START` with an empty `payload` before the promise is executed.
  * `FETCH_DATA_SUCCESS` after a successful execution. The `payload` then represents the promise result.
  * OR `FETCH_DATA_ERROR` if an error occurs during promise execution. The `payload` then represents the error object.
  
### Accessing the current state in action creators

.....

```javascript
export const FETCH_DATA = 'FETCH_DATA'

export function fetchData() {
  return function({store}) {
    const count = store.getState().get('query').get('count')
    return {
      type: FETCH_DATA,
      payload: fetch(`/api/v1/data?count=${count}`).then(result => result.json())
    }
  }
}

// es6 step 1: returning an arrow function
export function fetchData() {
  return ({store}) => {
    const count = store.getState().get('query').get('count')
    return {
      type: FETCH_DATA,
      payload: fetch(`/api/v1/data?count=${count}`).then(result => result.json())
    }
  }
}

// es6 step 2: write action creator as arrow function as well
export const fetchData = () => {
  return ({store}) => ({
    const count = store.getState().get('query').get('count')
    return {
      type: FETCH_DATA,
      payload: fetch(`/api/v1/data?count=${count}`).then(result => result.json())
    }
  })
}

// es6 step 3: simplify the chaining of both functions using currying (= the preferred way)
export const fetchData = () => ({store}) => {
  const count = store.getState().get('query').get('count')
  return {
    type: FETCH_DATA,
    payload: fetch(`/api/v1/data?count=${count}`).then(result => result.json())
  }
}
```

### Dispatching multiple actions with one creator

```javascript
export const DO_ACTION1 = 'DO_ACTION1'
export const DO_ACTION2 = 'DO_ACTION2'
export const DO_BOTH = 'DO_BOTH'

export const doAction1 = (data1) => ({
 type: DO_ACTION1,
 payload: data1
})

export const doAction2 = (data2) => ({
 type: DO_ACTION2,
 payload: data2
})

export const doBoth = (data1, data2) => [
   doAction1(data1),
   doAction2(data2)
]
```


