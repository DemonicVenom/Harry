// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, {useState} from 'react';

import About from './Components/About';

import { Routes, Route } from 'react-router-dom';



function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
       msg:message, 
       type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title ="Textutils - Dark Mode";

      // setInterval(() => {
      //   document.title = 'Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title ="Textutils - Light Mode";
    }
    
  }
  return (
    <>
   {/* <BrowserRouter> */}
  

{/* <Navbar title= "Textutils" aboutText="About TextUtils"/> */}
{/* <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} /> */}


  <Navbar title="Textutils" mode={mode}  toggleMode={toggleMode}/>
  <Alert alert={alert}/>

  <div className="container my-3">
         <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove Extra spaces" mode={mode} />}/>
            <Route path="/about" element={<About  mode={mode}/>} />
         </Routes>

{/* <TextForm showAlert={showAlert} heading="Enter your Text to analyze" mode={mode}/> */}
          
            
  </div> 
  
  {/* </BrowserRouter> */}
  </>
  );
}

export default App;
