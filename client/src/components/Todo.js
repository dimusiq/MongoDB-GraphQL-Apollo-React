import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { useMutation } from '@apollo/client'; 
import { DELETE_TODO } from '../graphql/mutation';
import { GET_TODOS } from '../graphql/query';

const Todo =({ id, title, detail, date }) => {
    const [deleteTodo] = useMutation(DELETE_TODO);
    const removeTodo = (id) => {
        deleteTodo({
            variables:{
                id: id
            }, refetchQueries:[
                {query: GET_TODOS}
            ]
        })
    }
    return (
    <tr>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
        <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{title}</div>
        </div>
        </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{detail}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Активно
        </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{moment(date).format("MMMM DD YYYY") }</td>
    <td  className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a onClick={() => removeTodo(id)} href="/#" className="text-indigo-600 hover:text-indigo-900">
        Удалить
        </a>
    </td>
    </tr>
    )
}

export default Todo;
