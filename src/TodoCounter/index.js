import React from 'react';
import '../assets/css/TodoCounter.css'


function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <h2 className={`TitleTodoCounter ${!!loading && "TitleTodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };