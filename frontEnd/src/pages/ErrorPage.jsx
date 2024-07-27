import { faBackward, faHouse, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const ErrorPage = () => {

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-theme-dark text-gray-400 flex-col gap-2'>
      <FontAwesomeIcon className='text-9xl text-red-500' icon={faTriangleExclamation} />
      <h1 className='text-6xl'>Something went wrong</h1>
      <h2>(Either the page you're looking for doesn't exist, or some error occurred)</h2>
      <div className='flex gap-8 mt-12 text-xl'>
        <Link to={'/'} className='flex justify-center items-center gap-1 hover:text-white'>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </Link>
        <button onClick={navigateBack} className='flex justify-center items-center gap-1 hover:text-white'>
          <FontAwesomeIcon icon={faBackward} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  )
}

export default ErrorPage