import React from "react";

// header component
// destructuring props (properties)
const Header = ({ title }) => {
  const headerStyle = { backgroundColor: "royalblue", color: "#fff" };
  return (
    // we can apply javascript conditionals to the css.
    <header style={true ? headerStyle : {}}>
      <h1>{title}</h1>
    </header>
  );
};

// default props allows us to set values for the expected props...
// if those props are not specified.
Header.defaultProps = {
    title: "Default title"
}


// allows other react component to be able to import the.
// header component.
export default Header;
