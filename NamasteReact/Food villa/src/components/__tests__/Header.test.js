import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import Header from '../Header';

test('logo should load on rendering header', () => {
  // load
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  console.log(header);

  expect().toBe();
});
