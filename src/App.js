// importing react components
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";

// jsx allows us to put javascript in html.
// parent component
function App() {
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

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item}
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
    
  }

  const handleSubmit = (e) => {
    // it will submit the form but not reload the page.
    e.preventDefault();
    if (!newItem) return;

    // add item

    // set it to empty
    setNewItem('');
  };

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
    setAndSaveItems(listItems);
    
  };

  const handleDelete = (id) => {
    // filter out items that don't have the same id as the...
    // clicked checkbox.
    // the new array will have id that are not equal to the id...
    // we passed in.
    const listItems = items.filter((item) => item.id !== id);
    // changing the state
    setAndSaveItems(listItems);
  };

  return (
    <div className="App">
      {/* children component */}
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

// to make the App component exportable.
export default App;
