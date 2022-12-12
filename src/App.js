import logo from './logo.svg';
import './App.css';
import DarkMode from './components/DarkMode';
import LightMode from './components/LightMode';
function App() {
  return (
    <div className="App">
      <DarkMode body={document.body}/>
      <LightMode body={document.body}/>
     
    </div>
  );
}

export default App;
