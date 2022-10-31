import LandingPage from './components/alandingPage'
import './App.css';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import ErrorFallback from './errorFallBack'


function App() {
  return (
    <ErrorBoundary FallbackComponent={<ErrorFallback />}>
      <LandingPage />
    </ErrorBoundary>
    
  );
}

export default App;
