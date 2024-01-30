import React, { useState } from 'react'
import Notecard from '../Components/notecard';

const Dashboard = () => {
    
    const [note,setNote] = useState([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

console.log(title,description);


    const submitHandler = (e) => {
     e.preventDefault();
setNote([...note,{
  id: note.length + 1,
    title,
    description,
}]);
    }

    const deleteNote = (id) => {
      const filteredArray = note.filter((notes) => {
        return notes.id !== id;
      });
      setNote(filteredArray);
    }
  return (
    <>
    <div className='container'>
    <div className='loginText'>Notes</div>
    <form 
    onSubmit={submitHandler}
    >
        <input type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
        <input
        type='text'
        value={description}
        placeholder='Description'
        onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>
            Add
        </button>
    </form>
    {note.map((item,index) => (
        <Notecard
        key={item.id}
        title={item.title}
        description={item.description}
        id={item.id}
        deleteNote={deleteNote}
        />

    ))}
    </div>
    </>
  )
}

export default Dashboard