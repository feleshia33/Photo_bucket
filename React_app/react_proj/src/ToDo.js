import React from 'react';
 
const ToDo = ({todo, hangleToggle}) => {
   return (
       <div className={todo.complete ? "strike" : ""}>
           {todo.task}
           
       </div>
   );
};
 
export default ToDo;