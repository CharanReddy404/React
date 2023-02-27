import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RestaurantCardSkeleton = () => {
  return (
    <div className='card'>
      <Skeleton height={130} />
      <Skeleton count={3} />
    </div>
  );
};

export default RestaurantCardSkeleton;
