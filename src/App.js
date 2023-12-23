
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode,setMode] = useState("light"); //wheather dark mode is enabled or not
  const [alert,setAlert] = useState(null); //alert is the object rememember it and we will further set it by the setAlert

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })  
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode( 'dark') ;
      document.body.style.backgroundColor = '#0e1c2b';
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextOperation - Dark';
      // setInterval(() => {
      //   document.title = "Text Operation is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextOperation now"
      // }, 1500);
    }else{
      setMode( 'light') ;
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled","success")
      document.title = 'TextOperation - Light';
    }
  }
  return (
    <>
      <Navbar title="textUtils2" aboutText="about Utils" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      {/* <Navbar  /> */}
      {/* we are creating the Navbar componets inside it there is Navbar component and passing the prop as title and similarly we are passing the about as props which we are changing the about text */}
      <div className="container my-3">
        {/* <TextForm showAlert={showAlert} mode ={mode} heading ="Enter the text to analyze below" /> */}
        <About mode ={mode} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;
