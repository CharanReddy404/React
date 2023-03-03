import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantCardSkeleton from './Skeletons/RestaurantCardSkeleton';
import { filterData } from '../utils/helper';
import { FETCH_RESTAURANTS_URL } from '../constants';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RESTAURANTS_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const offLine = useOnline();
  if (!offLine) {
    return <h1>Offline, Please check your internet connection!!</h1>;
  }

  if (!allRestaurants) return null;

  return (
    <div className='px-10 bg-slate-800 pt-16'>
      <div className='flex justify-center pt-4 bg-slate-800'>
        <input
          type='text'
          className='p-2 m-2 w-96 focus:bg-blue-100 rounded-full'
          placeholder='Search'
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className='p-2 m-2 w-24 text-white bg-green-400 rounded-full hover:bg-green-500'
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <div className='flex flex-wrap justify-between'>
          {Array(15)
            .fill('')
            .map((e, i) => (
              <RestaurantCardSkeleton key={i} />
            ))}
        </div>
      ) : (
        <div className='flex flex-wrap justify-around'>
          {filteredRestaurants?.length === 0 ? (
            <h1>No Restaurants Matchs Your Filter</h1>
          ) : (
            filteredRestaurants.map((restaurant, i) => {
              return (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
