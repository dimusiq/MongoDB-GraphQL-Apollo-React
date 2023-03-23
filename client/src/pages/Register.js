import { useContext, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';
import { REGISTER_USER } from '../graphql/mutation';

import { AuthContext } from '../context/authContext';
import { useForm } from '../hooks/useForm';

function Register(props) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  function registerUserCallback() {
    console.log('callback hit');
    registerUser();
  }

  const { onChange, onSubmit, values } = useForm(
    registerUserCallback,
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  );

  const [registerUser, { loading }] = useMutation(
    REGISTER_USER,
    {
      update(_, { data: { registerUser: userData } }) {
        context.login(userData);
        navigate('/');
      },
      onError({ graphQLErrors }) {
        setErrors(graphQLErrors);
      },
      variables: { registerInput: values },
    }
  );

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
            Регистрация
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
              <label htmlFor='username' className='sr-only'>
                Name
              </label>
              <input
                className='input-style'
                id='username'
                name='username'
                type='username'
                autoComplete='username'
                required
                placeholder='Name'
                onChange={onChange}
              />
            </div>
            <div>
              <label
                htmlFor='email-address'
                className='sr-only'
              >
                Email address
              </label>
              <input
                className='input-style'
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                placeholder='Email address'
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                className='input-style'
                id='password'
                name='password'
                type='password'
                required
                placeholder='Password'
                onChange={onChange}
              />
            </div>
            <div>
              <label
                htmlFor='Confirm password'
                className='sr-only'
              >
                Confirm password
              </label>
              <input
                className='input-style'
                id='confirmPassword'
                name='confirmPassword'
                type='Password'
                required
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
            >
              Регистрация
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
