import './App.css';
import Login from "./components/Login"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Notes from "./components/Notes"
import Images from "./components/Images"
import Files from "./components/Files"
import MyProfile from "./components/MyProfile"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Files" element={<Files/>}/>
            <Route path="/Notes" element={<Notes/>}/>
            <Route path="/Images" element={<Images/>}/>
            <Route path="/MyProfile" element={<MyProfile/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
