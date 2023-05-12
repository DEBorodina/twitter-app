import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
