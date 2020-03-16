import {
  ADD_TODO
} from './actions'

const initialState = {
  todos: []
}

// state = initialState is ES6 default statement
function todoApp(state = initialState, action) {
  console.log('STATE',state);
  console.log('ACTION', action);
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
          }
        ]
      })
    default:
      return state
  }
}

export default todoApp