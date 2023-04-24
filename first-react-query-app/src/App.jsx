import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import Characters from './Components/Characters';
import './App.css';

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;