import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_TODO } from '../graphql/mutation';
import moment from 'moment';
import 'moment/locale/ru';
import { GET_TODOS } from '../graphql/query';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const AddTodos = () => {
    const [todo, setTodo] = useState({
        title:'',
        detail:'',
        date: '',
    })
    const [addTodo] = useMutation(ADD_TODO)
    const onSubmit = e=>{
        e.preventDefault();
        addTodo({
            variables:{
                title:todo.title,
                detail:todo.detail,
                date:todo.date,
            }, refetchQueries: [
                { query: GET_TODOS }
            ]
        })
    }
    const [dateStart, setDateStart] = useState();

    function setStartDate(value) {
        setDateStart(value);
    }
    return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
        <div>
        <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Добавьте задание</h2>
        </div>
        <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <label className="sr-only">
                Title
            </label>
            <input
                id="title"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Заголовок"
                value={todo.title}
                onChange={e => setTodo ({...todo, title: e.target.value})}
            />
            </div>
            <div>
            <label htmlFor="password" className="sr-only">
                Todo details
            </label>
                
                <textarea className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                id="detail"
                type="textarea"
                rows={3} 
                placeholder="Текст задания" 
                value={todo.detail}
                onChange={e => setTodo ({...todo, detail: e.target.value})} 
                />
            </div>
        </div>
        <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
            </div>
            <DatePicker
            id="dateStartEnd"
            value={moment(todo.date).format('DD-MM-YYYY')}
            onChange={e => setTodo ({...todo, date: e.target.value})}
            dateFormat="dd MMM yyyy"
            className={'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
            showDisabledMonthNavigation
            />
            {/* <input 
                datepicker="true" 
                type="text" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Выберите дату" 
                
            /> */}
        </div>
        <div>
            <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Добавить Задание
            </button>
        </div>
        </form>
    </div>
    </div>
)
}

export default AddTodos