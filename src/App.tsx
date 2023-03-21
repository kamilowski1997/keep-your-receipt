import React from 'react';
import { store } from './redux/store';
import { Navigation } from './navigation';
import { Provider } from 'react-redux';

const App = (): JSX.Element => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
