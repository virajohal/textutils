// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Form from './components/TextForm';
// import * as React from 'react';
import React from 'react';




//import { BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom';
// import { BrowserRouter, Route, Link } from "react-router-dom";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";




function App() {
const [mode, setMode] = useState('light');
 const [alert,setAlert]= useState(null);

 const showAlert = (message, type)=>{
  setAlert({
    msg : message,
    type : type
    
  })
  setTimeout(() => {
    setAlert(null)
    
  }, 1000);

 }

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode is Enable" , "success") ;
    document.title = "TextUtil-DarkMode";
    setInterval(() => {
      document.title = "TextUtil Is Amazing";
      
    }, 2000);

    setInterval(() => {
      document.title ="install now"
    }, 1500);

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode is Enable ","Success")
    document.title= "TextUtil-LightMode";

  }

}
  return (
  <>
  
  <Router>
<Navbar title="TextUtil"  aboutText="About TextUtil" mode={mode}  toggleMode={toggleMode}   />
<Alert alert={alert}/>

<div className="container my-3">


<Routes>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <Form  heading="Enter The Text" mode={mode} showAlert={showAlert}  />
          
          </Route>
        </Routes>
        
{/* <Form  heading="Enter The Text" mode={mode} showAlert={showAlert}  /> */}

 {/* <About />  */}
 
</div>

</Router>
  </>
  );
}

export default App;
