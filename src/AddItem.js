import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        required
        // controlled component input
        // setting one source of truth for the input
        // getter
        value={newItem}
        // setter
        onChange={(e) => setNewItem(e.target.value)}

      />
      <button
        type="submit"
        // when we are going to use icons and not words.
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
