import React from 'react';

function Person(props){
  let {name, age, children} = props
  return (
    <div className='Person'>
      <h1>{name}</h1>
      <p>{children}</p>
      <p>Your age: {age}</p>
    </div>
  )
}

export default Person;