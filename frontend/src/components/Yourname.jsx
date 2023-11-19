import React, { useState, useEffect } from "react";
import './Yourname.css';
import '../App.css';
import { Button } from "./Button";
import { useSelector } from 'react-redux';

const Yourname = () => {
    const [h1Color, setH1Color] = useState("#000000");

    const changeColorAfter = (t) => {
        setTimeout(() => {
            setH1Color("#fffff0");
        }, t * 1000);
    };

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        changeColorAfter(9.5);
    }, []);

    return (
        <div className="yourname-container">
            <video src="src/assets/images/videoplayback.mp4" autoPlay loop muted type="video/mp4"></video>
            <h1 style={{ color: h1Color }}> someone is waiting </h1>
            <div className="yourname-btn">
                {user ? (
                    <>
                        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' button_link='/'>
                            signup
                        </Button>
                        <Button className="btns2" buttonStyle='btn--primary' buttonSize='btn--large' button_link='/'>
                            signin
                        </Button>
                    </>
                ) : (
                    <>
                        <Button className="btns2" buttonStyle='btn--outline' buttonSize='btn--large' button_link='/register'>
                            signup
                        </Button>
                        <Button className="btns2" buttonStyle='btn--primary' buttonSize='btn--large' button_link='/signin'>
                            signin
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Yourname;
