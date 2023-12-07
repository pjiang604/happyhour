import './style.css'
import { InventoryContext } from '../../data/inventoryContext';
import { useContext } from "react";
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Product({ date, name, product, deleteProduct2, setEditing2, setEditing3, updateProduct, setProduct }) {

  //Button Colours

  const theme = createTheme({
    palette: {
      salmon: {
        main: '#fe9983',
        light: '#fec3b6',
        dark: '#fe6f50',
        contrastText: '#242105',
      },
      green: {
        main: '#B3E0A3',
        light: '#d3edc9',
        dark: '#93d37d',
        contrastText: '#242105',
      },
      red: {
        main: '#fe9983',
        light: '#fec3b6',
        dark: '#fe6f50',
        contrastText: '#242105',
      },
      orange: {
        main: '#FABD87',
        light: '#FCD8B8',
        dark: '#f8a256',
        contrastText: '#242105',
      }
    },
  });

  return (
    <div className="product">
      <ThemeProvider theme={theme}>
        <div className="taskItem">
          <p className="taskDate">{date}</p>
          <p>{name}</p>
          <ButtonGroup className="buttonContainer">

            <Button color="orange"
              variant='contained'
              size='small'
              onClick={() => setEditing3(product.id)}>
              edit
            </Button>

            <Button color="red"
              variant='contained'
              size='small'
              onClick={(() => deleteProduct2(product.id))}>
              remove
            </Button>
          </ButtonGroup>
        </div>

      </ThemeProvider>
    </div>
  );
}