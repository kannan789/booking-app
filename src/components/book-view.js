//import '../App.css';
import BookingForm from './booking-form';
import {useRef, useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Confirmation from './confirmation';

function Book(props) {   

  const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  const [getSeats,setSeats]=useState(0);

  const blockSeats=(index)=>{

    currElem.current.style.backgroundColor='red';
    
    setSeats(arr[index]);
  }
    const currElem=useRef(arr);
return (
<div>
<div id="book-layout">
        
<div class="grid-container">
        
  <div class="grid-item" ref={currElem} onClick={()=>{blockSeats(0)}}>1</div>
  <div class="grid-item"  onClick={()=>{blockSeats(1)}}>2</div>
  <div class="grid-item"  onClick={()=>{blockSeats(2)}}>3</div>
  <div class="grid-item"  onClick={()=>{blockSeats(3)}}>4</div>
  <div class="grid-item"  onClick={()=>{blockSeats(4)}}>5</div>
  <div class="grid-item"  onClick={()=>{blockSeats(5)}}>6</div>
  <div class="grid-item"  onClick={()=>{blockSeats(6)}}>7</div>
  <div class="grid-item"  onClick={()=>{blockSeats(7)}}>8</div>
  <div class="grid-item"  onClick={()=>{blockSeats(8)}}>9</div>
  <div class="grid-item"  onClick={()=>{blockSeats(9)}}>10</div>
  <div class="grid-item"  onClick={()=>{blockSeats(10)}}>11</div>
  <div class="grid-item"  onClick={()=>{blockSeats(11)}}>12</div>
</div>

<div class="grid-container">
        
  <div class="grid-item"  onClick={()=>{blockSeats(12)}}>13</div>
  <div class="grid-item"  onClick={()=>{blockSeats(13)}}>14</div>
  <div class="grid-item"  onClick={()=>{blockSeats(14)}}>15</div>
  <div class="grid-item"  onClick={()=>{blockSeats(15)}}>16</div>
  <div class="grid-item"  onClick={()=>{blockSeats(16)}}>17</div>
  <div class="grid-item"  onClick={()=>{blockSeats(17)}}>18</div>
  <div class="grid-item"  onClick={()=>{blockSeats(18)}}>19</div>
  <div class="grid-item"  onClick={()=>{blockSeats(19)}}>20</div>
  <div class="grid-item"  onClick={()=>{blockSeats(20)}}>21</div>
  <div class="grid-item"  onClick={()=>{blockSeats(21)}}>22</div>
  <div class="grid-item"  onClick={()=>{blockSeats(22)}}>23</div>
  <div class="grid-item"  onClick={()=>{blockSeats(23)}}>24</div>
</div>
</div>
<button><a href="http://localhost:3000/book-form">Book Now</a></button>
<Router>
  <Switch>
    <Route path="/book-form">
      <BookingForm />
    </Route>
  </Switch>
  <Switch>
    <Route path="/confirm">
      <Confirmation />
    </Route>
  </Switch>
</Router>

</div>
      );
    }
    
export default Book;
    