import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';
import { createFirestoreInstance } from 'redux-firestore';

import GlobalThemProvider from './components/GlobalThemeProvider';
import { MainLoader } from './components/MainLoader';
import { firebase, rrfConfig } from './firebaseConfig';
import { Router } from './router/Router';
import { store } from './store/store';
import Global from './styles/global';

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <GlobalThemProvider>
            <Global />
            <MainLoader>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </MainLoader>
          </GlobalThemProvider>
        </ErrorBoundary>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
