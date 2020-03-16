import { combineReducers } from 'redux'
import {
  ADD_TODO
} from './actions'

const initialState = {
  todos: []
}

// state = initialState is ES6 default statement
function todoApp(state = initialState, action) {
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