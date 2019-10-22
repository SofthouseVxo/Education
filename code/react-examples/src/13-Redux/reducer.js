import { combineReducers } from 'redux'

const initialState = {
  dialogVisible: false,
  user: null
}

/*
* Creating a reducer and naming it root
* @Params
*   state which has a default state
*   action which is the action object
*
*   returns a new state depending on the action type and payload
*/
const root = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DIALOG':
      return {
        ...state,
        dialogVisible: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  root,
  // Here you can add more reducers
})

