import React from 'react';
import '../assets/css/TodosLoading.css'

function TodosLoading() {
  return (
    <div className='loadingTodo-container'>
      <span className='loadingTodo-completeIcon'></span>
      <p className='loadinTodo-text'>Carando TODOS...</p>
      <span className='ladingTodo-deleteIcon'></span>
    </div>
  )
}

export { TodosLoading };