import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import store from '../../utils/store';
import Header from '../Header';

test('logo should load on rendering header', () => {
  // load
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId('logo');
  expect(logo.innerHTML).toBe('ReactEats');
});

test('Cart should be 0 on rendering header', () => {
  // load
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart');
  expect(cart.innerHTML).toBe('0');
});
