import React, {useState} from "react";
import "./App.css";
import data from './data.js'
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'
import ButtonList from "./components/ButtonComponents/Buttons/ButtonList";

function App() {
console.log(data)
const [display, setDisplay] = useState(0)

let clickhandler = (buttonName)=>{ 
console.log(buttonName)
setDisplay(buttonName)
}

  return (
    <div className="container">
      <Logo />
      <div className="App">
       <Display
       theDisplay={display}
       /> 
      <ButtonList 
      brians={data.brians} 
      clickHandler={clickhandler}
        />
        </div>
        </div>
             );
         }
       
export default App;
