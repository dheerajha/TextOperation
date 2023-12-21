
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState("light"); //wheather dark mode is enabled or not

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode( 'dark') ;
      document.body.style.backgroundColor = '#0e1c2b';
    }else{
      setMode( 'light') ;
      document.body.style.backgroundColor = '#fff';
    }
  }
  return (
    <>
      <Navbar title="textUtils2" aboutText="about Utils" mode ={mode} toggleMode={toggleMode}/>
      {/* <Navbar  /> */}
      {/* we are creating the Navbar componets inside it there is Navbar component and passing the prop as title and similarly we are passing the about as props which we are changing the about text */}
      <div className="container my-3">
        <TextForm mode ={mode} heading ="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
