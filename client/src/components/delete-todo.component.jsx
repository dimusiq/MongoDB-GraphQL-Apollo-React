import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../graphql/mutation';
import { GET_TODOS } from '../graphql/query';

const Todo = ({ id, title, detail, date, username }) => {
  const [deleteTodo] = useMutation(DELETE_TODO);
  const removeTodo = (id) => {
    deleteTodo({
      variables: {
        id,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };
  return (
    <tr>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 w-10 h-10'></div>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {username}
            </div>
            <div className='text-sm text-gray-500'>
              {username}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <div className='text-sm font-medium text-gray-900'>
              {title}
            </div>
          </div>
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {detail}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <span className='inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full'>
          Активно
        </span>
      </td>
      <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {moment(date).format('DD MMMM YYYY')}
      </td>
      <td className='px-6 py-4 text-sm font-medium text-right whitespace-nowrap'>
        <a
          onClick={() => removeTodo(id)}
          href='/#'
          className='text-indigo-600 hover:text-indigo-900'
        >
          Удалить
        </a>
      </td>
    </tr>
  );
};

export default Todo;
