import {useState} from 'react'
import './App.css';
import Alert from './contents/Alert';
import Navbar from './contents/Navbar';
import TextField from './contents/TextField';
//import About from './contents/About';
function App() {
  const[mode,setMode] = useState("light");
  const[ alert, setAlert]=useState(null);

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
      setMode("dark");
      document.body.style.backgroundColor = "#314251";
      showAlert('Dark mode has been Enabled','success');
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been Enabled','success');

    }
  }
  return (
    <>  
      <Navbar title="TextUtiles" about=" About TextUtiles" mode={mode} changeMode={changemode}/>
      <Alert alert={alert}/>
      <TextField mode={mode} showAlert={showAlert}/>
</>
  );
}

export default App;
