import React from 'react';
import spinner from '../spinner/spinner.gif'
function Spinner() {
    const style = {
        centeredLoader: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: 'translate(-50%, -50%)',
        }

    }
    return (
        <div style={style.centeredLoader}>
            <img src={spinner} alt="" style={{height:"100px",width:'100px'}} />
        </div>
    );
}

export default Spinner;
