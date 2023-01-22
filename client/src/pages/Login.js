import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../graphql/mutation';

import { AuthContext } from '../context/authContext';
import { useForm } from '../hooks/useForm';

function Login(props) {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  function loginUserCallback() {
    loginUser();
  }
  const { onChange, onSubmit, values } = useForm(
    loginUserCallback,
    {
      email: '',
      password: '',
    },
  );

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { loginUser: userData } }) {
      context.login(userData);
      navigate('/');
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
    variables: { loginInput: values },
  });
  function loginUserCallback() {
    loginUser();
  }
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
            Войдите в аккаун
          </h2>
        </div>
        <form
          className='mt-8 space-y-6'
          action='#'
          method='POST'
        >
          <input
            type='hidden'
            name='remember'
            defaultValue='true'
          />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label
                htmlFor='email-address'
                className='sr-only'
              >
                Email
              </label>
              <input
                className='input-style'
                label='email'
                placeholder='Email'
                name='email'
                type='email'
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Пароль
              </label>
              <input
                className='input-style'
                label='Password'
                placeholder='Password'
                name='password'
                type='password'
                value={values.password}
                error={errors.password ? true : false}
                onChange={onChange}
                required
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
              className='btn'
              type='submit'
              onClick={onSubmit}
              t
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'></span>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
