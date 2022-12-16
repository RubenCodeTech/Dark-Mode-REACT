import '../App.css'

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
        if (body.className === 'darkMode' || body.className === 'pinkMode' || body.className=== '') {
            body.classList.add('lightMode');
            body.classList.remove('darkMode');
            body.classList.remove('pinkMode')
        }
    }
}
export default LightMode