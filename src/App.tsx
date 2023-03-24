import React from 'react';
import { store } from './redux/store';
import { Navigation } from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { theme } from './theme/paperTheme';

const App = (): JSX.Element => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  </Provider>
);

export default App;
