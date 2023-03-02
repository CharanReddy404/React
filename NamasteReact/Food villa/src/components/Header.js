import { useState } from 'react';
import { Link } from 'react-router-dom';

// const authenticateUser = () => {
//   return true;
// };

const Title = () => (
  <a href='/'>
    <img
      className='h-28 p-2'
      alt='img'
      src='https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT'
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='flex justify-between bg-orange-50 shadow-lg'>
      <Title />
      <div className='flex items-center'>
        <ul className='flex'>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About</Link>
          </li>
          <li className='px-2'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='px-2'>
            <Link to='/instamart'>InstaMart</Link>
          </li>
          <li className='px-2'>
            <Link>Cart</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={(e) => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
