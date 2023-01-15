import React from "react";
import './Popup.css';

function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <div className="innerpopup">
                <button className="stylepopup" onClick={()=>props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;