// Action that returns and object with type and payload depending on boolean accepted as params
export const toggleDialog = (visible) => ({
  type: 'TOGGLE_DIALOG',
  payload: visible
})

// Action that returns and object with type and payload depending on user accepted as params
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
})

/*
* setUser as a non-arrow function, only here for readability
*/
// export const setUser = function(user){
//   return {
//     type: 'SET_USER',
//     payload: user
//   }
// }