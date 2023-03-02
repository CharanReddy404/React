import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RestaurantCardSkeleton = () => {
  return (
    <div className='w-64 p-2 m-2 shadow-lg'>
      <Skeleton height={130} />
      <Skeleton count={3} />
    </div>
  );
};

export default RestaurantCardSkeleton;
