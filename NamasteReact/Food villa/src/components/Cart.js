import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../constants';
import { removeItem, clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='px-10 bg-slate-800 py-24'>
      <h1 className=' text-3xl font-bold text-white text-center'>Cart</h1>
      <div className='lg:mx-24'>
        {cartItems.map((item) => {
          return (
            <div
              className='m-3 p-2 flex md:w-96 bg-white rounded-lg shadow'
              key={item.id}
            >
              <div className='sm:w-56 w-[50%]'>
                <img
                  className='rounded-lg'
                  src={IMG_CDN_URL + item.cloudinaryImageId}
                />
              </div>
              <div className='sm:w-56 w-[50%] mx-3'>
                <h3 className='font-bold'>{item.name}</h3>
                <button
                  className='p-2 md:mt-5 bg-red-600 rounded-md'
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {cartItems.length > 0 && (
        <button
          className='mx-[50%] w-40 bg-red-600 p-2 font-semibold text-white rounded-lg hover:text-yellow-400'
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
