// importing react components
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

// jsx allows us to put javascript in html.
// parent component
function App() {
  // a state is like a random access memory for a component.
  // react re-renders the items of the component when the state changes.

  // items is the getter.
  // setItems is the setter.
  // list of objects
  // array of objects
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    // getting the last item id or set to 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // creating a new item
    const myNewItem = { id, checked: false, item };
    // create a new list of previous items + appended...
    // new item.
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    // it will submit the form but not reload the page.
    // preventing the default behavior of submit.
    // prevent page reload
    e.preventDefault();
    // if the addItem form is empty
    if (!newItem) return;
    // console.log(newItem)

    // add item
    addItem(newItem);

    // reset it to empty after adding
    setNewItem("");
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
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          // is this a strong search algorithm?
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

// to make the App component exportable.
export default App;
