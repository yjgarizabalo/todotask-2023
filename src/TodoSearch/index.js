import React from 'react';
import '../assets/css/TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    const onChangeValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return [
        <input
            className="TodoSearch"
            type="text"
            placeholder="Exito"
            value={searchValue}
            onChange={onChangeValueChange}
        />,
    ];
};

export { TodoSearch };