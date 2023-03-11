import React from 'react';
import '../assets/css/TodoCounter.css'


function TodoCounter({ totalTodos, completedTodos }) {
    return (
        <h2 className='TitleTodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };