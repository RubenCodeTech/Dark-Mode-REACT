import '../App.css'

function PinkMode({ body }) {
    return (
        <button onClick={pink}
            style={{
                backgroundColor: 'violet',
                color: 'black',
                borderRadius: '8px',
                boxShadow: '2px 2px 2px black'
            }}
        >
            Pink  Mode
        </button>
    )
    function pink() {
        if (body.className === 'darkMode' || body.className === 'lightMode' || body.className=== '') {
            body.classList.add('pinkMode');
            body.classList.remove('darkMode'); 
            body.classList.remove('lightMode'); 
        }
    }
}
export default PinkMode