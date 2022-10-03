import {useState} from 'react'
import './App.css';
import Alert from './contents/Alert';
import Navbar from './contents/Navbar';
import TextField from './contents/TextField';
//import About from './contents/About';
function App() {
  const[mode,setMode] = useState("light");
  const[ alert, setAlert]=useState(null);
  const[modeR,setModeR]=useState('yes');
  const[modeW,setModeW]=useState('yes');

   const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
   }


  const changemode=()=>{
    if(mode ==="light"){
      setModeR('yes');
      setModeW('yes');
      setMode("dark");
      document.body.style.backgroundColor = "#314251";
      showAlert('Dark mode has been Enabled','success');
    }
    else{
      setModeW('yes');      
      setModeR('yes');
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been Enabled','success');

    }
  }
  const changeModeRed=()=>{
    if((mode ==="light"|| mode==='dark' ) && modeR==='yes'){
      setModeW('yes');
      setModeR('no');
      setMode("dark");
      document.body.style.backgroundColor = "#cc4b58";
      showAlert('Danger mode has been Enabled','success');
    }
    else{
      setModeR('yes');
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been Enabled','success');

    }
  }
    const changeModeWarning=()=>{
      if((mode ==="light"|| mode==='dark')&&modeW==='yes' ){
        setModeR('yes');
        setModeW('no');
        setMode("dark");
        document.body.style.backgroundColor = "#ffc107";
        showAlert('Warning mode has been Enabled','success');
      }
      else{
        setModeW('yes');
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert('Light mode has been Enabled','success');
  
      }
    }
  
  return (
    <>  
      <Navbar title="TextUtiles" about=" About TextUtiles" mode={mode} changeMode={changemode} changeModeWarning={changeModeWarning} changeModeRed={changeModeRed}/>
      <Alert alert={alert}/>
      <TextField mode={mode} showAlert={showAlert} modeR={modeR} modeW={modeW}/>
</>
  );
}

export default App;
