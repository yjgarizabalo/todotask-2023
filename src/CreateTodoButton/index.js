import React from 'react';
import '../assets/css/CreateTodoButton.css';

function CreateTodoButton(props) {
    const onclickButton = (menssage) => {
        alert(menssage)
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onclickButton('Abrir alerta')}
        >+</button>
    );
}

export { CreateTodoButton };