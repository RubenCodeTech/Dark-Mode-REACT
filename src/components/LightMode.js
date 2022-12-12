import '../App.css'
// import { useState } from "react";

function LightMode({ body }) {
    return (
        <button onClick={light}
            style={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '8px',
                boxShadow: '2px 2px 2px black'
            }}
        >
            Light Mode
        </button>
    )
    function light() {
        if (body.className === 'darkMode' || body.className=== '') {
            body.classList.add('lightMode');
            body.classList.remove('darkMode');
        }
    }
}
export default LightMode