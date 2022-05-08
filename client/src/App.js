import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Todo from './components/Todo';
import { GET_TODOS } from './graphql/query';
import { useQuery } from '@apollo/client';
import AddTodos from './components/addTodos';



function App() {

  const { loading, error, data} = useQuery(GET_TODOS);
  if(loading) return <p>Загрузка...</p>
  if(error) return <p>{error.message}</p>
  console.log(data);

  return (
  <div className='todo-container'>

    <AddTodos />
    <div className="flex flex-col">
      <div className=" -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className=" py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-20">
                <tr>
                      <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Имя
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Заголовок
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Задание
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата
                  </th>
                  <th scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <span  className="sr-only"></span>
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.getTodos.map(todo => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  detail={todo.detail}
                  date={todo.date}
                />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default App;