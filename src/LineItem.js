import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
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
                aria-label={`Delete ${item.item}`}
              />
            </li>
  )
}

export default LineItem