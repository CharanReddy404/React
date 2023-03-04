import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Fotter';
import About from './components/About';
import Profile from './components/Profile';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './Error';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const InstaMart = lazy(() => import('./components/InstaMart'));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Charan Reddy',
    email: 'charan@gmail.com',
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:menuId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<h1>Loading..........</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<h1>Loading..........</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
