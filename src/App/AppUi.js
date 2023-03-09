import React from 'react';

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';

// ERROR MSJ
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

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

			<TodoList>
				{error && <TodosError error={error} />}
				{loading && <TodosLoading />}
				{(!loading && !searchedTodos.length) && <EmptyTodos />}

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