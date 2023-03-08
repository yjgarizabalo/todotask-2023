import React from 'react';

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';

function AppUi() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deletTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext)
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			{() =>
			(
				<TodoList>
					{error && <p>hubo un error...</p>}
					{loading && <p>Estamos cargando...</p>}
					{(!loading && !searchedTodos.length) && <p>Crea una tarea flojo..!</p>}

					{searchedTodos.map(todo => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => completeTodo(todo.text)}
							onDelete={() => deletTodo(todo.text)}
						/>
					))}
				</TodoList>
			)}
			{
				!!openModal && (
					<Modal>
						<TodoForm />
					</Modal>
				)
			}
			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>
		</React.Fragment>
	);
}

export { AppUi }