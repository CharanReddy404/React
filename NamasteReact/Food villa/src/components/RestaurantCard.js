import { IMG_CDN_URL } from '../constants';

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className='w-64 p-2 m-2 shadow-lg'>
      <img alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className='font-bold text-xl'>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
