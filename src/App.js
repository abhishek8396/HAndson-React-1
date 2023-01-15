import React from "react";
import './App.css';
import Popup from "./component/Popup";

import  {useState} from "react";


function App(){
  const [buttonpopup, setButtonpopup] = useState(false);
  

  return(
    <div className="main">
      <h1 className="First">Styling using Functional and Class Component</h1>
      <button className="button1" onClick={()=>setButtonpopup(true)}>To see Styling in function Component</button>
      <button className="button2">To see styling in class component</button>
      <Popup trigger={buttonpopup} setTrigger={setButtonpopup}>
      <h1>This is created function component.</h1>
                <p>This is done using external CSS</p>
                <p>This is using internal CSS.</p>
      </Popup>
      
    </div>
  );
}
export default App;
