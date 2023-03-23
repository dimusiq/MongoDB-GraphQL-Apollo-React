import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative z-10 pb-8 bg-white sm:pb-16 '>
          <svg
            className='absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
            aria-hidden='true'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>

          <main className='max-w-full px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div className='sm:text-center lg:text-center'>
              <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>
                  Попробуйте этот классный функционал
                </span>{' '}
                <span className='block text-indigo-600 xl:inline'>
                  вам понравится!
                </span>
              </h1>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center'>
                <div className='rounded-md shadow'>
                  <Link to='/login'
                    
                    className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Попробовать!
                  </Link>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
