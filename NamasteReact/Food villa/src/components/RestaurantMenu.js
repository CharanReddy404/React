import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurant';

import { IMG_CDN_URL } from '../constants';
import RestaurantCardSkeleton from './Skeletons/RestaurantCardSkeleton';

const RestaurantMenu = () => {
  const { menuId } = useParams();

  const restaurant = useRestaurant(menuId);

  return !restaurant ? (
    <RestaurantCardSkeleton />
  ) : (
    <div className='menu'>
      <div className='card'>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>{restaurant.name}</h1>
        <h3>
          {restaurant.area}, {restaurant.city}
        </h3>
        <h3>{restaurant.costForTwoMsg}</h3>
        <h3>{restaurant.avgRating} starts</h3>
      </div>
      <div>
        <h1> Menu</h1>

        <div className='restraunt-list'>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className='mini-card' key={item.id}>
              <img src={IMG_CDN_URL + item.cloudinaryImageId} />
              <h3>{item.name}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
