import React from 'react';
import '../assets/css/TodoList.css'

function TodoList(props) {
    const renderFunc = props.children || props.render

    return (
        <section className='TodoList-continaer'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
        </section>
    );
};

export { TodoList }
