import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../constants';

const filterData = (searchTxt) => {
  console.log(searchTxt);
  const filteredData = RestaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
  return filteredData;
};

const Body = () => {
  const [restaurants, setRestaurants] = useState(RestaurantList);
  const [searchTxt, setSearchTxt] = useState('');

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className='search-btn'
          onClick={() => {
            const data = filterData(searchTxt);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className='restraunt-list'>
        {restaurants.map((restaurant, i) => {
          return <RestaurantCard {...restaurant.data} key={i} />;
        })}
      </div>
    </>
  );
};

export default Body;
