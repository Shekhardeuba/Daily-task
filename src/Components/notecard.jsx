import React from 'react'

const Notecard = ({title,description,deleteNote,id}) => {
  return (
    <>
    <div className='maincont'>
    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>
    
        <button className='btn'
        onClick={() => deleteNote(id)}>
           -
        </button>
    </div>
    </>
  )
}

export default Notecard;