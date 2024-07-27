import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [myText, setmyText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-primary');
  // }
  // function capitalize(msg) {
  //   let message = msg.toLowerCase(); 
  //   return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
  // }
  const toggleMode = () => {
    //   removeBodyClasses();
    //   document.body.classList.add("bg-"+cls);
    //  setmode(cls);
    //  if(cls==='light'){
    //   showAlert("Light Mode Enabled",cls);
    // }
    // else{
    //   showAlert(capitalize(cls)+" Mode Enabled",cls);
    // }
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
      setmyText("Enable Light Mode");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
      setmyText("Enable Dark Mode");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} myText={myText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Try Textutills - Count Words,  Count Characters, Copy Text , Reverse Text" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;