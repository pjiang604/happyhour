import './style.css'
import { InventoryContext } from '../../data/inventoryContext';
import { useContext } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material";
import { Checkbox } from "@mui/material";

export default function Product({ product, deleteProduct, setEditing, updateProduct, setProduct }) {

  return (
    <div className="product">
      <div className="taskItem">
        {product.inStock ? <del>{product.name}</del> : product.name}
      </div>
      <div className="buttonContainer">
        <Button color="error" onClick={() => deleteProduct(product.id)}>
          remove
        </Button>

        <Button color="warning" onClick={() => setEditing(product.id)}>
          edit
        </Button>
      </div>
    </div>
  );
}