import React from 'react';
import { store } from './redux/store';
import { Navigation } from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { theme } from './theme/paperTheme';
import ScreenBlockerContextProvider from './contexts/ScreenBlockingLoadingContext/ScreenBlockerContextProvider';

const App = (): JSX.Element => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <ScreenBlockerContextProvider>
        <Navigation />
      </ScreenBlockerContextProvider>
    </PaperProvider>
  </Provider>
);

export default App;
