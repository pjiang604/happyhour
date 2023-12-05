import './style.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
export default function Notes(props) {
    const handleAdd = () => {
        const add = [...val, []];
        setVal(add);
      };
      const [note, setNote] = useState("");
      const [val, setVal] = useState([]);
      const handleChange = (e, i) => {
        const inputdata = [...val];
        inputdata[i] = e.target.value;
        setVal(inputdata);
      };
      console.log(val, "data-");
      const handleShowInput = () => {};
      function handlenoteChange(e) {
        setNote(e.target.value);
      }
      function handleSubmit(e) {
        e.preventDefault();
        const newNote = { note: note, id: nanoid() };
        props.addNote(newNote);
        setNote("");
      }
    return(
        <>
        <form>
        
        <div className='inputs'>
            <input type='date' className="date_container"/>
            
            <div className='input_container'
             
             value={note}>
            <textarea placeholder='Write something ...' className='notes_container' />
            <div className='buttons'>
            <button onClick={() => handleAdd()} className='edit_button'>Edit</button>
            <button className='delete_button'>Delete</button>
            </div>
            
            </div>
             
        </div>
       
        </form>
        </>
    )
}