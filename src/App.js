import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import products from "./data/data.json";
import Featured from "./Components/Featured";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Products products={products} />} path="/shop" exact />
        <Route element={<Featured products={products} />} path="/shop" exact />
      </Routes>
      {/* <Home products ={products}/> */}
      {/* <Products products={products} /> */}
    </div>
  );
}

export default App;
