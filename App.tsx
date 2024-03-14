import * as React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './src/navigation/root';

import Navigation from './src/navigation';
import ErrorBoundary from './src/components/ErrorBoundary';
import ErrorWithRestartBtn from './src/components/ErrorWithRestartBtn';
import ThemeProvider from 'theme/ThemeProvider';

export const queryClient = new QueryClient();

function App() {
  const handleError = () => {};
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ErrorBoundary onError={handleError} FallbackComponent={ErrorWithRestartBtn}>
          <NavigationContainer onReady={RNBootSplash.hide} ref={navigationRef}>
            <Navigation />
          </NavigationContainer>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
export default App;
