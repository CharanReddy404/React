export const filterData = (searchTxt, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return filteredData;
};
