import React, { useState, useEffect } from "react";
import './yourname.css'
import '../App.css'
import { Button } from "./Button";

function Yourname(){
    const [h1Color, setH1Color] = useState("#000000");
    const chageColorAfter=(t) => {
        setTimeout(()=>{
            setH1Color("#fffff0");
        },t*1000);

    };

    useEffect(()=>{
        chageColorAfter(9.5);
    }, []);

    return(
        <div className="yourname-container">
            <video src="src/assets/images/videoplayback.mp4" autoPlay loop muted type="video/mp4"/>
            <h1 style={{color:h1Color}}> someone is waiting </h1>
            <div className="yourname-btn">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    gooo
                </Button>
                <Button className="btns2" buttonStyle='btn--primary' buttonSize='btn--large'>
                    predict
                </Button>
            </div>

        </div>
    )
}
export default Yourname;