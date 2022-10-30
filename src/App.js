import LandingPage from './components/landingPage'
import './App.css';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallBack from './errorFallBack'


function App() {
  return (
    <ErrorBoundary FallbackComponent={<ErrorFallBack />}>
      <LandingPage />
    </ErrorBoundary>
    
  );
}

export default App;
