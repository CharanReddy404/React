import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', { id: 'title' }, 'Heading 1');
// const heading2 = React.createElement('h2', { id: 'title' }, 'Heading 2');

// const container = React.createElement('div', { id: 'container' }, [
//   heading,
//   heading2,
// ]);

// console.log(container);

const Title = () => (
  <a href='/'>
    <img
      className='logo'
      alt='img'
      src='https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT'
    />
  </a>
);

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntList = [
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
  {
    name: 'Burger King',
    image:
      'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/49c2de336da7fe4e91345a622b7d7abd',
    cusines: ['Burgers', 'Indiaan'],
    rating: '4.2',
  },
];

const RestrauntCard = () => {
  return RestrauntList.map((item) => {
    return (
      <div className='card'>
        <img alt={item.name} src={item.image} />
        <h2>{item.name}</h2>
        <h3>{item.cusines.join(', ')}</h3>
        <h4>{item.rating} stars</h4>
      </div>
    );
  });
};

const Body = () => {
  return (
    <div className='restraunt-list'>
      <RestrauntCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
