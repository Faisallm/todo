import React from "react";
import { useState } from 'react';

const Content = () => {
  // a state is like a random access memory for a component.
  // react re-renders the items of the component when the state changes.

  // name is the getter.
  // setName is the setter.
  // default state name of Faisal   
  const [name, setName] = useState('Faisal');
  // the default state is set to zero. 
  const [count, setCount] = useState(0);

  // arrow functions
  // this function returns a random name out of the
  // names array.

  const handleNameChange = () => {
    const names = ["Faisal", "Amina", "Small Faisal", "Small Amina"];
    // generate a random number between 0-3, 4 excluded
    const int = Math.floor(Math.random() * 4);
    // setting the state of the component.
    // this will cause the component to...
    // re-render with the new state.
    setName(names[int]);
  };


  const handleClick = () => {
    // I suppose to see 1, but instead...
    // I see 0, weird.
    setCount(count + 1);
    setCount(count + 1);
    // this will not change to 1 from 0,
    // because 0 was what was brought into...
    // the function.
    console.log(count)
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    // the main content of the page.
    // hence the use of the semantic html main.
    <main>
      <p onDoubleClick={handleClick}>Hello {name}! </p>
      <button onClick={handleNameChange}>Change Name</button>
      {/* to pass a parameter to a function during
      each click event, we need an anonymous function. */}
      {/* the anonymous function is not called into action
      until the click. */}
      <button onClick={handleClick}>Click it</button>
      {/* passing events to anonymous functions */}
      <button onClick={handleClick2}>Click event</button>
    </main>
  );
};

export default Content;
