import './App.css';
import { DataProvider } from './components/DataProvider';
import { TodoAppWrapper } from './components/TodoAppWrapper';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <TodoAppWrapper />
      </DataProvider>
    </div>
  );
}

export default App;
