import React from 'react';
import TodoList from '../components/todo-list.component';
import AddTodos from '../components/new-todo.component';

function Main() {
  return (
    <div className='todo-container'>
      <AddTodos />
      <TodoList />
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle  sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow  sm:rounded-lg'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
