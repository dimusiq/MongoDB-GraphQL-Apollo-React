import Todo from './delete-todo.component';
import { useContext } from 'react';
import { GET_TODOS } from '../graphql/query';
import { useQuery } from '@apollo/client';
import { AuthContext } from '../context/authContext';

function TodoList() {
  const { user } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(data);

  return (
    <div className='todo-container'>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-20'>
                  <tr>
                    <th scope='col' className='column'>
                      Имя
                    </th>
                    <th scope='col' className='column'>
                      Заголовок
                    </th>
                    <th scope='col' className='column'>
                      Задание
                    </th>
                    <th scope='col' className='column'>
                      Статус
                    </th>
                    <th scope='col' className='column'>
                      Дата
                    </th>
                    <th scope='col' className='column'>
                      <span className='sr-only'></span>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {data?.getTodos.map((todo) => (
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      user={todo.username}
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

export default TodoList;
