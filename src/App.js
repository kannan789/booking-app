
import Book from './components/book-view';
import Navigation from './components/navigation';
import Movies from './components/movies';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Movies />
      <Book />
      
    </div>
  );
}

export default App;
