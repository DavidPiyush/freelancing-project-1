import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
