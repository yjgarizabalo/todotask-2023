import React from 'react';
import '../assets/css/TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const { totalTodos, completedTodos } = React.useContext(TodoContext)

    return (
        <h2 className='TitleTodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };