import { createStore } from 'redux'
import todoApp from './reducers'

let ulRef;

window.addEventListener('DOMContentLoaded', ()=>{
  ulRef = document.createElement('ul');
  document.body.appendChild(ulRef);


  let buttonRef = document.createElement('button');
  buttonRef.textContent = 'Add another todo to store';
  document.body.appendChild(buttonRef);

  buttonRef.addEventListener('click', ()=>{
    store.dispatch(addTodo('Todo added from button click!'));
  })
})


const store = createStore(todoApp)

/**
 * second argument is for setting initial state
 */
// const store = createStore(todoApp, { someState: true })

import {
  addTodo,
} from './actions'

// Log the initial state
console.log('Initial state', store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
  let reduxState = store.getState();
  console.log(reduxState);

  ulRef.innerHTML = '';

  
  if(reduxState.todos){
    reduxState.todos.forEach(todo => {
      let listItem = document.createElement('li');
      listItem.innerText = todo.text;
      ulRef.appendChild(listItem);
    });
  }
})

// Dispatch some actions
setTimeout(()=>{
  store.dispatch(addTodo('Learn about actions'))

  setTimeout(()=>{
    store.dispatch(addTodo('Learn about reducers'))

    setTimeout(()=>{
      store.dispatch(addTodo('Learn about store'))
    },2000)
  },2000)
},2000)

window.addEventListener('DOMContentLoaded', ()=>{
  let buttonRef = document.createElement('button');
  buttonRef.textContent = 'Add another todo to store';

  buttonRef.addEventListener('click', ()=>{
    store.dispatch(addTodo('Todo added from button click!'));
  })
})

/**
 * Call to STOP listening to state updates
 */ 
// unsubscribe();