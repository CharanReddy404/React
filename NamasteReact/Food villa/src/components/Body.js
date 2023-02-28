import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { RestaurantList } from '../constants';
import RestaurantCardSkeleton from './Skeletons/RestaurantCardSkeleton';
import { Link } from 'react-router-dom';

const filterData = (searchTxt, restaurants) => {
  console.log(searchTxt);
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

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
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <div className='restraunt-list'>
          {Array(15)
            .fill('')
            .map((e, i) => (
              <RestaurantCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className='restraunt-list'>
          {filteredRestaurants?.length === 0 ? (
            <h1>No Restaurants Matchs Your Filter</h1>
          ) : (
            filteredRestaurants.map((restaurant, i) => {
              return (
                <Link
                  to={`/restaurant/${restaurant.data.id}`}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
