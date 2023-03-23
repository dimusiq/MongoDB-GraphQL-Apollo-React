import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../graphql/mutation';
import { GET_TODOS } from '../graphql/query';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTodos = () => {
  const [todo, setTodo] = useState({
    username: '',
    title: '',
    detail: '',
    date: '',
  });
  const [addTodo] = useMutation(ADD_TODO);
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({
      variables: {
        username: todo.username,
        title: todo.title,
        detail: todo.detail,
        date: todo.date,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };

  const [selectedDate, setStartDate] = useState(new Date());

  return (
    <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='w-auto h-12 mx-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
            Добавьте задание
          </h2>
        </div>
        <form
          onSubmit={onSubmit}
          className='mt-8 space-y-6'
          action='#'
          method='POST'
          value={todo.username}
        >
          <input
            type='hidden'
            name='remember'
            defaultValue='true'
          />
          <div className='-space-y-px rounded shadow-sm'>
            <div>
              <label className='sr-only'>Title</label>
              <input
                id='title'
                required
                className='input-style'
                placeholder='Заголовок'
                value={todo.title}
                onChange={(e) =>
                  setTodo({
                    ...todo,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Todo details
              </label>
              <textarea
                className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='detail'
                type='textarea'
                rows={3}
                placeholder='Текст задания'
                value={todo.detail}
                onChange={(e) =>
                  setTodo({
                    ...todo,
                    detail: e.target.value,
                  })
                }
              />
            </div>

            <DatePicker
              id='date'
              selected={selectedDate}
              onSelect={(date) => setStartDate(date)}
              value={todo.date}
              onChange={(date) =>
                setTodo({ ...todo, date })
              }
              dateFormat='dd MM yyyy'
              className='input-style'
              showDisabledMonthNavigation
              autoComplete='off'
              placeholderText='Выберите дату'
            ></DatePicker>
          </div>
          <div>
            <button type='submit' className='btn'>
              Добавить Задание
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
