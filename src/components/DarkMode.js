import '../App.css'
// import { useState } from "react";

function DarkMode({ body }) {
    return (
        <button onClick={dark}
            style={{
                margin: '0px',
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '8px',
                borderColor: 'white',
                boxShadow: '2px 2px 2px black'
            }}
        >
            Dark Mode
        </button>
    )
    function dark() {

        if (body.className === 'lightMode' || body.className=== '') {
            body.classList.add('darkMode')
            body.classList.remove('lightMode')
        }
        



    }
}
export default DarkMode