import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IMG_CDN_URL } from '../constants';
import RestaurantCardSkeleton from './Skeletons/RestaurantCardSkeleton';

const RestaurantMenu = () => {
  const { menuId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=${menuId}`
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  }

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
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
