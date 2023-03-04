import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useRestaurant from '../utils/useRestaurant';
import RestaurantCardSkeleton from './Skeletons/RestaurantCardSkeleton';
import { IMG_CDN_URL } from '../constants';
import { addItem } from '../utils/cartSlice';

const RestaurantMenu = () => {
  const { menuId } = useParams();

  const restaurant = useRestaurant(menuId);

  const dispatch = useDispatch();

  const handleAddItem = (name) => {
    dispatch(addItem(name));
  };

  return !restaurant ? (
    <RestaurantCardSkeleton />
  ) : (
    <div className='px-10 bg-slate-800 pt-24'>
      <div className='px-8 flex flex-wrap'>
        <img
          className='rounded-xl'
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <div className='lg:px-8 text-white'>
          <h1 className='text-3xl font-bold mb-3'>{restaurant.name}</h1>
          <h3 className='text-xl mb-3'>{restaurant.cuisines.join(',')}</h3>
          <h3 className='text-xl mb-3'>
            {restaurant.area}, {restaurant.city}
          </h3>
          <span className='bg-white text-black rounded-md px-2 font-semibold'>
            {restaurant.costForTwoMsg}
          </span>
          <h3 className='mt-3 mb-3'>
            {restaurant.aggregatedDiscountInfo.header}
          </h3>
          <h3 className='mb-3'>{restaurant.avgRating} stars </h3>
        </div>
      </div>
      <div className='px-10 mt-10'>
        <h1 className='text-3xl text-white font-bold mb-3'>Menu</h1>

        <div className='flex flex-wrap justify-between'>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className='w-64 my-3 bg-white rounded-lg shadow' key={item.id}>
              <img src={IMG_CDN_URL + item.cloudinaryImageId} />
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <button
                className='m-2 bg-green-700 text-white px-2 rounded-lg hover:text-red-900'
                onClick={() => handleAddItem(item)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
