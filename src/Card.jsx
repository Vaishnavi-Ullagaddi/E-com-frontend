import React from "react";

function Card(props) {
  return (
    <>
      <div style={{ border: "1px solid red", width: "200px", height: "300px" }}>
        <img style={{ width: "200px" }} src={props.image} alt="" />
        <p>Moviename:{props.name}</p>
        <p>Rating:{props.rating}</p>
      </div>
    </>
  );
}

export default Card;
