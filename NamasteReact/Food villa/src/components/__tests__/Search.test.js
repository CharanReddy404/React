import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import Body from '../Body';
import store from '../../utils/store';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(),
  });
});

test('Search results on home page', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
  //   expect().toBe();
});
