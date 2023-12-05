import { createContext } from 'react';

export const InventoryContext = createContext({
  products: [],
  addProduct: () => {},
  deleteProduct: () => {},
  updateProduct: () => {},
  setEditing: () => {}, 
  editing: null,
});
