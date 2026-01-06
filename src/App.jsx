import "./App.css";
// import { useState, useEffect } from "react";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [products, setproducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://e-comm-backend-1-qpo6.onrender.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setproducts(data));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {/* <div> */}

      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Products /> */}
      {/* </div> */}
      {/* { <h1>Ecommerce</h1> } */}
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(function (p) {
          return (
            <div key={p._id}>
              <img src={p.image} alt="" />
              <p>{p.title}</p>
              <p>{p.price}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
