import logo from './logo.svg';
import './App.css';
import avatar from './images/avatar.jpg';
import darbar from './images/darbar.jpg';
import padmaavat from './images/padmaavat.jpg';
import psone from './images/psone.jpeg';
import vikramvedha from './images/vikramvedha.jpg';

function App() {
  return (
    <div className="App">
      <nav>
        <div id="menu-bar">
          <span id="menu-one">Movie Book</span>
          <span>Home</span>
          <span>About Us</span>
          <span>Know More</span>
        </div>
      </nav>
      <div id="movie-list">
        <img src={avatar} />
        <img src={darbar} />
        <img src={padmaavat} />
        <img src={psone} />
        <img src={vikramvedha} />
      </div>

      <div>
        <div id="book-layout">
        
      <div class="grid-container">
        
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
  <div class="grid-item">10</div>
  <div class="grid-item">11</div>
  <div class="grid-item">12</div>
</div>



<div class="grid-container">
        
  <div class="grid-item">13</div>
  <div class="grid-item">14</div>
  <div class="grid-item">15</div>
  <div class="grid-item">16</div>
  <div class="grid-item">17</div>
  <div class="grid-item">18</div>
  <div class="grid-item">19</div>
  <div class="grid-item">20</div>
  <div class="grid-item">21</div>
  <div class="grid-item">22</div>
  <div class="grid-item">23</div>
  <div class="grid-item">24</div>
</div>

</div>

<button>Book Now</button>

      </div>
    </div>
  );
}

export default App;
