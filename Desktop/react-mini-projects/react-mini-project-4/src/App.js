import { useState } from 'react';
import './App.css';
function App() {
  const [task,setTask]=useState("");
  const [taskar,setTaskar]=useState([]);
  const[completed,setCompleted]=useState([]);

  const handle=(e) =>{
   setTask(e.target.value);
  }
  const handlekey=(e)=>{
    if(e.key==="Enter"){
      add();
    }
  }
  const add=() =>{
    if(task.trim()!==""){
  setTaskar([...taskar,task]);
  setTask("");
  setCompleted([...completed,false])}
  }
  function del(index){
    const updated =taskar.filter((_,i)=> i!==index);
    const up=completed.filter((_,i)=> i!==index);
    setTaskar(updated);
    setCompleted(up);
  };
  function mark(index){
    const s=[...completed];
    s[index]=true;
    setCompleted(s);
  }
  function unmark(index){
    const s=[...completed];
    s[index]=false;
    setCompleted(s);
  }
  return (
<div className='c'>
<h2> To Do List </h2>
<input type="text" placeholder='enter task' value={task} onChange={handle} onKeyDown={handlekey}/>
<button  className="a"onClick={add}>add </button>
<ul>{
 taskar.map((t,index)=> 
 <li key={index} className='e' style={{backgroundColor: completed[index]? " hsla(161, 75%, 64%, 0.423)":" hsla(240, 81%, 86%, 0.715)"}}> 
 <span>{t}</span>
 <button className='db' onClick={()=>del(index)} >delete</button>
  <button  className='mb'onClick={()=>mark(index)} onDoubleClick={()=>unmark(index)} >mark</button>

  </li>)
}</ul>
</div>
    
         );
}

export default App;
