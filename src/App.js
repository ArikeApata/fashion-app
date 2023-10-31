import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import products from "./data/data.json";
import Featured from "./Components/Featured";
import useFetch from "./Components/useFetch";
import Bridals from "./Components/Brides";
import Signup from "./Components/signup";
import Profile from "./Components/Profile";



function App() {
  const {data, isLoading, error} = useFetch(products)
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Products products={products} />} path="/shop" />
        <Route element={<Featured products={products} />} path="/featured" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<Profile />} path="/user" />
        <Route element={<Bridals products={products} />} path="/brides" />
      </Routes>
      {/* <Home products ={products}/> */}
      {/* <Products products={products} /> */}
    </div>
  );
}

export default App;
