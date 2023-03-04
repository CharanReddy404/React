import { useState, useEffect, useContext } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantCardSkeleton from './Skeletons/RestaurantCardSkeleton';
import { filterData } from '../utils/helper';
import { FETCH_RESTAURANTS_URL } from '../constants';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState('');

  const { user, setUser } = useContext(UserContext);

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
      <div className='flex flex-wrap justify-center'>
        <div className='flex justify-center'>
          <label className='text-sm font-semibold p-1 m-3 h-8 text-white bg-green-500 rounded-full'>
            UserName:
          </label>
          <input
            className='p-1 m-3 h-8 text-center w-56 focus:bg-blue-100 rounded-full'
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
        </div>
        <div className='flex justify-center'>
          <label className='text-sm font-semibold p-1 m-3 h-8 text-white bg-green-500 rounded-full'>
            UserEmail:
          </label>
          <input
            className='p-1 m-3 h-8 text-center w-56 focus:bg-blue-100 rounded-full'
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
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
