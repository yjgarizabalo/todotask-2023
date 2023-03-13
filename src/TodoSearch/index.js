import React from 'react';
import '../assets/css/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onChangeValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return [
        <input
            className="TodoSearch"
            type="text"
            placeholder="Exito 🔍"
            value={searchValue}
            onChange={onChangeValueChange}
            disabled={loading}
        />,
    ];
};

export { TodoSearch };