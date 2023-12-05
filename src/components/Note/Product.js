import './style.css'
import { InventoryContext } from '../../data/inventoryContext';
import { useContext } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material";
import { Checkbox } from "@mui/material";

export default function Product({ name, product, deleteProduct2, setEditing2, setEditing3, updateProduct, setProduct }) {
  

  return (
    <div className="product">
      <div className="taskItem">
        {name}
      </div>
      <div className="buttonContainer">
        <Button color="error" onClick={(() => deleteProduct2(product.id))}>
          remove
        </Button>

        <Button color="warning" onClick={() => setEditing3(product.id)}>
          edit
        </Button>
      </div>
    </div>
  );
}