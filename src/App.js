import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React , {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert= (message, type) =>{
         setAlert({
          msg: message,
          type: type
         })
         setTimeout(() => {
          setAlert(null);
         }, 1525);
  }
  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled","success");
      // document.title = 'Textutils - Dark Mode';
      // setInterval(() =>{
      //   document.title = 'Textutils is Amazing';
      // }, 2000)
      // setInterval(() =>{
      //   document.title = 'Install Textutils';
      // }, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode is enabled","success");
      // document.title = 'Textutils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="Textutils" aboutText="About Textutils" contactText="Contact Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div classNames="container my-3">
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analyze below..." showAlert={showAlert} mode={mode} my-3/>
          </Route>
</Switch> */}
{/* <About/> */}

<TextForm heading="Enter the text to analyze below..." showAlert={showAlert} mode={mode} my-3/>
</div>
    </>
  );
}

export default App;