import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        // controlled component input
        // setting one source of truth for the input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}

      />
      <button
        type="submit"
        // when we are going to use icons and not words.
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
