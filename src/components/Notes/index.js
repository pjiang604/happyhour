import './style.css';
import { useState, useEffect } from 'react';
export default function Notes(props) {
    const [edit, setEdit] = useState(false);
    const note = props.note;
    const [notes, setNotes] = useState([]);
//   function handleDelete() {
//     props.remove(note);
//   }
  function handleStatusChange() {
    props.toggleChecked(note);
  }
  function handleEdit() {
    setEdit(!edit);
  }
  const handleAdd = () => {
    const abc = [...notes, []];
    setNotes(abc);
  };
  
    return(
        <>
        <li className='inputs'>
            <input type='date' className="date_container"/>
            <div className='input_container'>
            <textarea placeholder='Write something ...' className='notes_container' />
            <div className='buttons'>
            <button onClick={handleEdit} className='edit_button'>Edit</button>
            <button onClick={handleDelete} className='delete_button'>Delete</button>
            <button onClick={() => handleAdd()}>Add Note</button>
            </div>
            
            </div>
        </li>
        </>
    )
}