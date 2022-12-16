import logo from './logo.svg';
import './App.css';
import DarkMode from './components/DarkMode';
import LightMode from './components/LightMode';
import PinkMode from './components/PinkMode';
function App() {
  return (
    <div className="App">
      <DarkMode body={document.body}/>
      <LightMode body={document.body}/>
      <PinkMode body={document.body}/>
      
    </div>
  );
}

export default App;
