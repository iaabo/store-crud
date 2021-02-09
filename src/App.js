import React from "react";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="global-app">
      <Sidebar />
        <Nav />
      <div className="App" style={{ marginLeft: "120px" }}>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
