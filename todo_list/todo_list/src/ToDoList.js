import React from 'react';
// import ToDo from './ToDo';


const ToDoList = ({todos}) => {
    return (
        <div>
            {todos.map(todos => {
                return (
                    <ToDo todos={todos} />
                )
            })}
        </div>

    );
};  

export default ToDoList;