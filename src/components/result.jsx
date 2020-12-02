import React from "react";
import './result.css';

function Result(props) {
    return (
        <div className="content roll-in-blurred-lef">
             <div className="number">
            {props.number}
            </div>
            <div className="text">
            {props.text}
            </div>
           
            
           

        </div>
    );
}

export default Result;