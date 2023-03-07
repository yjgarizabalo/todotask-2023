import React from 'react';
import '../assets/css/TodoCounter.css'

function TodoCounter({ total, completed }) {

    return (
        <h2 className='TitleTodoCounter'>Has completado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter };