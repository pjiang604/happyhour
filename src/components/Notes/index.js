import './style.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';


export default function Notes() {

  const [note, setNote] = useState();
  const [val, setVal] = useState([]);
  const [notesList, setNotesList] = useState([])

  function handleAdd(e) {
    e.preventDefault()
    console.log("hello")
  };

  const handleInput = (e, i) => {
    const inputdata = [...val];
    inputdata[i] = e.target.value;
    setVal(inputdata);
  };
  // console.log(val, "data-");
  // const handleShowInput = () => { };
  // function handlenoteChange(e) {
  //   setNote(e.target.value);
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const newNote = { note: note, id: nanoid() };
  //   props.addNote(newNote);
  //   setNote("");
  // }



  return (
    <div className='main'>
      <form className='notesForm'>

        <div className='inputs'>
          <input type='date' className="date_container" />

          <div className='input_container'>
            <textarea placeholder='Write something ...' className='notes_container' value={note} />
              <button onClick={(e) => {handleAdd(e)}} className='edit_button'>Add Note</button>

          </div>

        </div>

      </form>
      <div className='savedNotes'>
        saved notes
        <div className="note">
          <p>notes</p>
          <div className='savedNoteBtns'>
            <button onClick={() => handleAdd()} className='edit_button'>Edit</button>
            <button className='delete_button'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}