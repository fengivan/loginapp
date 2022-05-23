import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import BackgroundImage from './assets/images/background.png'


function App() {
  return (
    <header style={ HeaderStyle }>
      <div className="App" >
        <h2>Log in with Google!</h2>
        <Login />
        <br />
        <Logout />
        
        
      
      </div>
    </header>
  );
}

export default App;

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

