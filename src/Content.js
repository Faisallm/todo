import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  // a state is like a random access memory for a component.
  // react re-renders the items of the component when the state changes.

  // items is the getter.
  // setItems is the setter.
  // list of objects
  // array of objects
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  // this function will play with the state.
  const handleCheck = (id) => {
    // changing the state
    // we shouldn't change the array directly
    // we should create a new array.
    // changing each object at a time.

    // changing an object in an array, memorize this pattern!
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // changing the state
    setItems(listItems);

    // changing the state permanently using localStorage.
    // this is similar to redis in python.
    // it is a fast input-output storage.
    // setItem
    // getItem
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {

    // filter out items that don't have the same id as the...
    // clicked checkbox.
    // the new array will have id that are not equal to the id...
    // we passed in.
    const listItems = items.filter(item => item.id !== id);
    // changing the state
    setItems(listItems);
    // saving the new list to listItems
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));

  };

  return (
    // the main content of the page.
    // hence the use of the semantic html main.
    <main>
      {/* we are going to use unordered items to render
        the lists. */}
      {/* this is known as conditional rendering. */}
      {items.length ? (
      <ul>
        {items.map((item) => (
          // each item of the list should be unique...
          // hence the use of a key or id.
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              // onChange will change the item.changed value in the state.
              onChange={() => handleCheck(item.id)}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            {/* the icon will serve the role
            of a button */}
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
