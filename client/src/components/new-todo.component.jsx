import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '../graphql/mutation';
import { GET_TODOS } from '../graphql/query';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@heroicons/react/solid'

const AddTodos = () => {
  const [todo, setTodo] = useState({
    title: '',
    detail: '',
    date: '',
    username: '',
  });
  const [addTodo] = useMutation(ADD_TODO);
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({
      variables: {
        title: todo.title,
        detail: todo.detail,
        date: todo.date,
        username: todo.username,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
  };


  const [selectedDate, setStartDate] = useState(new Date());
  
  const Calendar = React.forwardRef((props, ref) => {
  return (
    <div className='                bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
      {' '}
      <label onClick={props.onClick} ref={ref}>
        {props.value || props.placeholder}
      </label>
      <CalendarIcon onClick={props.onClick} />
    </div>
  );
});

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <img
            className='mx-auto h-12 w-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Добавьте задание
          </h2>
        </div>
        <form
          onSubmit={onSubmit}
          className='mt-8 space-y-6'
          action='#'
          method='POST'
        >
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded shadow-sm -space-y-px'>
            <div>
              <label className='sr-only'>Title</label>
              <input
                id='title'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Заголовок'
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Todo details
              </label>

              <textarea
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                id='detail'
                type='textarea'
                rows={3}
                placeholder='Текст задания'
                value={todo.detail}
                onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
              />
            </div>

            <DatePicker
              id='date'
              selected={selectedDate}
              onSelect={(date) => setStartDate(date)}
              value={todo.date}
              onChange={(date) => setTodo({ ...todo, date })}
              dateFormat='dd MM yyyy'
              className=
                'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              showDisabledMonthNavigation
              autoComplete='off'
              placeholderText='Выберите дату'
            >
      
            </DatePicker>
          </div>
          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Добавить Задание
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
