import React, { useEffect, useState } from 'react'
import Task from './task';

const Home = () => {

  const initialArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  :[];
const [tasks,setTasks] = useState(initialArray);
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

console.log(title,description);
const submitHandler = (e) => {
  e.preventDefault();

  setTasks([...tasks, {
    id: tasks.length + 1,
    title: title,
    description: description
  }]);

 
}

useEffect(() => {
  localStorage.setItem("tasks",JSON.stringify(tasks));
  
}, [tasks])

const deleteTask = (id) => {
const filteredArray = tasks.filter((task) => {
  return task.id !== id;

});
console.log(filteredArray);
setTasks(filteredArray);
}

  return (
    <>
    <div className='container'>
        <form onSubmit={submitHandler}>
            <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='write your task' />
            <textarea 
            name="" id="" cols="30" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="10"
            placeholder='Write your description'></textarea>
            <button type='submit'>Add</button>

            {tasks.map((item,index) => (
              <Task key={item.id}
               title={item.title} 
               description={item.description}
               deleteTask={deleteTask}
               id={item.id}/>
            ))}
        </form>
    </div>
   
    </>
  )
}

export default Home;