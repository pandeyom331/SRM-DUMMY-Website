import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Main" element={<Main/>}/>
    </Routes>
    </div>
  );
}

export default App;
