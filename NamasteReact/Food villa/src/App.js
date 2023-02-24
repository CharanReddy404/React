import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Fotter';

// const heading = React.createElement('h1', { id: 'title' }, 'Heading 1');
// const heading2 = React.createElement('h2', { id: 'title' }, 'Heading 2');

// const container = React.createElement('div', { id: 'container' }, [
//   heading,
//   heading2,
// ]);

// console.log(container);

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
