import React from "react";

class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little style!</p>
        <p>New paragraph</p>
      </div>
    );
  }
}

export default MyHeader;
