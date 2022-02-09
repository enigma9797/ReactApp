import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Navbar';
import About from './Component/About';
import TextForm from './Component/TextForm';
import { useState } from 'react';

function App() {

const [mode, setMode] = useState("light") 

 const updateMode = ()=>{
   if(mode =='light'){
    setMode("dark")
     document.body.style.backgroundColor = "#0b1e52"
   } else{
    document.body.style.backgroundColor = "rgb(255 255 255)"
    setMode("light")
   }
 }

  return (
  <>
<NavBar title = {undefined} nav1 = "Home" mode = {mode} updateMode = {updateMode} nav2 = "About"></NavBar>
<div className='container my-3'>
<TextForm heading = "Write about yourself" mode = {mode} textArea = "Start Writing from here"></TextForm>
</div>
{/* <About></About> */}
  </>
  );
}

export default App;
