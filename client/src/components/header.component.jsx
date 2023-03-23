import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function Header() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link
          to='/'
          className='font-medium text-gray-500 hover:text-gray-900'
        >
          Главная страница
        </Link>
        <div
          className='hidden w-full md:block md:w-auto'
          id='mobile-menu'
        >
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li>
              {user ? (
                <button
                  onClick={onLogout}
                  className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700'
                >
                  LOGOUT
                </button>
              ) : (
                <div className='items-center justify-end hidden md:flex md:flex-1 lg:w-0'>
                  <Link
                    to='/login'
                    className='text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900'
                  >
                    Login
                  </Link>
                  <Link
                    to='/register'
                    className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700'
                  >
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
