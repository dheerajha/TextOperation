
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="textUtils2" aboutText="about Utils" />
      {/* <Navbar  /> */}
      {/* we are creating the Navbar componets inside it there is Navbar component and passing the prop as title and similarly we are passing the about as props which we are changing the about text */}
      <div className="container my-3">
        <TextForm heading ="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
