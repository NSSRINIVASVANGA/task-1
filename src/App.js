import Home from './components/Home';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter/>
      <Home />
      <BrowserRouter/>
    </div>
  );
}

export default App;
