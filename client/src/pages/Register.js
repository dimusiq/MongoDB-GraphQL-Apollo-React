import { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';
import {REGISTER_USER} from '../graphql/mutation'

import { AuthContext } from '../context/authContext';
import { useForm } from '../hooks/useForm';


function Register(props) {
	const context = useContext(AuthContext);

	const navigate = useNavigate();

	const [errors, setErrors] = useState([]);

	function registerUserCallback() {
		console.log('callback hit');
		registerUser();
	}

	const { onChange, onSubmit, values } = useForm(registerUserCallback, {
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [registerUser, { loading }] = useMutation(REGISTER_USER, {
		update(proxy, { data: { registerUser: userData } }) {
			context.login(userData);
			navigate('/');
		},
		onError({ graphQLErrors }) {
			setErrors(graphQLErrors);
		},
		variables: { registerInput: values },
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
            Регистрация
          </h2>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
                      <div>
              <label htmlFor='username' className='sr-only'>
                Name
              </label>
              <input
                id='username'
                name='username'
                type='username'
                autoComplete='username'
                required
                className='appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Name'
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='mt-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='mt-3 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='Confirm password' className='sr-only'>
                Confirm password
              </label>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='confirmPassword'
                autoComplete='current-password'
                required
                className='mt-3 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Confirm password'
                onChange={onChange}
              />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
              >
                Запомнить меня
              </label>
            </div>
            <div className='text-sm'>
              <a
                href='#'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Забыли пароль?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={onSubmit}
            >Регистрация
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;