import React from 'react';

export default function Child(props){
  return (
    <div>
      <p>{props.data.name}</p>
      <p>{props.data.age}</p>
    </div>
  )
}