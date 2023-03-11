import React from "react";
import "../assets/css/TodoForm.css"

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('')
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Estas llamado al Exito"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }