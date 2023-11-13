import './style.css';
export default function Notes() {
    return(
        <>
        <div className='inputs'>
            <input type='date' className="date_container"/>
            <div className='input_container'>
            <textarea placeholder='Write something ...' className='notes_container' />
            <div className='buttons'>
            <button className='edit_button'>Edit</button>
            <button className='delete_button'>Delete</button>
            </div>
            
            </div>
        </div>
        </>
    )
}