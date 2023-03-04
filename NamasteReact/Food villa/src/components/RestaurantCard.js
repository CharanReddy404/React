import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className='w-64 my-3 bg-white rounded-lg shadow'>
      <Link to={`/restaurant/${id}`}>
        <img
          className=' rounded-t-lg'
          alt={name}
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <div className='px-5 pb-5'>
          <h5 className='text-xl pt-1 font-serif text-gray-900'>{name}</h5>
          <div className='text-xs text-gray-900'>{cuisines.join(', ')}</div>
          <h5 className='text-xs text-gray-900'>{lastMileTravelString}</h5>
          <span className='bg-blue-100 text-blue-800 p-2  font-semibold text-xs rounded-md'>
            {avgRating}
          </span>
          <h6 className='text-sm font-semibold'>{user.name}</h6>
          <h6 className='text-sm font-semibold'>{user.email}</h6>
        </div>
      </Link>
    </div>
  );
  // return (
  //   <div className='w-64 p-2 m-2 shadow-lg'>
  //     <img alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
  //     <h2 className='font-bold text-xl'>{name}</h2>
  //     <h3>{cuisines.join(', ')}</h3>
  //     <h4>{avgRating} stars</h4>
  //   </div>
  // );
};

export default RestaurantCard;
