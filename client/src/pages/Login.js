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
    }
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
    <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <img
            className='w-auto h-12 mx-auto'
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
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
          <div className='-space-y-px rounded-md shadow-sm'>
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
                className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
              />
              <label
                htmlFor='remember-me'
                className='block ml-2 text-sm text-gray-900'
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
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
