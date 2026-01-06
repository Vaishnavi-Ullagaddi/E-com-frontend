import React from "react";

function Details(props) {
  return (
    <>
      <div style={{ border: "1px solid black", backgroundColor: "lightgrey" }}>
        <h1>user details</h1>
        <p>name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>location:{props.location}</p>
      </div>
    </>
  );
}

export default Details;
