import React from 'react';
 
const ToDo = ({todo, hangleToggle}) => {
   return (
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>
           {todo.task}
           
       </div>
   );
};
 
export default ToDo;