import './App.css';
import Nav from './components/Nav';
import { InventoryContext } from './data/inventoryContext';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Drink from './pages/Drink';

function App() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  function addProduct(product) {
    setProducts([...products, product]);
    console.log("add product")
    setEditing(null);
  }

  function updateProduct(product) {
    setProducts(
      products.map((p) => (p.id === product.id ? product : p)),
    );
    console.log("update product")
    setEditing(null);
  }



  return (
    <div className="App">
      <InventoryContext.Provider
        value={{
          products,
          addProduct,
          // deleteProduct,
          updateProduct,
          setEditing,
          editing,
        }}
      >
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Drink/" element={<Drink />} />
        </Routes>
      </InventoryContext.Provider>
    </div>
  );
}

export default App;
