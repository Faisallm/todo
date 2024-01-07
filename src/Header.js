import React from "react";

// header component
const Header = () => {
    const headerStyle = { backgroundColor: "royalblue", color: "#fff" };
  return (
    // we can apply javascript conditionals to the css.
    <header style={true ? headerStyle: {}}>
      <h1>Groceries List</h1>
    </header>
  );
};

// allows other react component to be able to import the.
// header component.
export default Header;
