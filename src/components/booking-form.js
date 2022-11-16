import {useState,useRef} from 'react';
import Confirmation from './confirmation';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function BookingForm() {

    const [isConf,setIsConf]=useState(false);

    var nameRef=useRef();
    var mailRef=useRef();
    var mobRef=useRef();

    var name=nameRef.current;
    var mail=mailRef.current;
    var mob=mobRef.current;

  const confDet = () => {
    setIsConf(true);
  }
  
return (
    <>
<div className="frm" >
    <form>
        <h3>Enter Details</h3>
        <table>
        <tr>
        <td><label>Name</label></td>
        <td><input type="text" required /></td>
        </tr>
        <tr>
        <td> <label>Email Id</label></td>
        <td><input type="email"  required  /></td>
        </tr>
        <tr>
        <td><label>Mobile No.</label></td>
        <td><input type="number"  required  /></td>
        </tr>
    {/*    <tr>
        <td><label>Select seats</label></td>
        <td><select multiple>
        <optgroup label="Left">
        <option value="1">1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        </optgroup>
        </select>
          <select multiple>
        <optgroup label="Right">
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        </optgroup>
        </select>
        </td>
</tr>*/}
        </table>
        
    </form>
    </div>
        <button id="btn"><a href="http://localhost:3000/confirm">Confirm booking</a></button>
      {/* <div>{isConf && <Confirmation />}</div> */} 

</>

);
}

export default BookingForm;