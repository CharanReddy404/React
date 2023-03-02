import { useState, useEffect } from 'react';
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (menuId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + menuId);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
