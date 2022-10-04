import React,{useState} from 'react'

export default function About() {
    const [ btnText , setBtntext] = useState("Enable DarkMode")
    const [btnColor, setBtnColor]= useState({
        color: '#666',
        backgroundColor :'white'
    })
    const toggleCase =()=>{
        if(btnColor.color==='#666'){
            setBtnColor({
                color:'white',
                backgroundColor:'#666'
            })
            setBtntext("Enable Light Mode")
        }
        else{
            setBtnColor({
                color: '#666',
                backgroundColor :'white'            
            })
            setBtntext("Enable DarkMode")
        }
    }
  return (
    <>
    <div className="container my-3" style={btnColor}>
       <div id="accordion" style={btnColor}>
            <div className="card">
                <div className="card-header" id="headingOne"style={btnColor}>
                <h5 className="mb-0" >
                    <button className="btn btn-link" data-toggle="collapse" style={btnColor} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    By Nimesh Sharma:
                    </button>
                </h5>
                </div>

                <div id="collapseOne" className="collapse show" style={btnColor}aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    Contact Info- Nimesh9528@gmail.com <br/>Tech Stack - #React <br/> #React Router Dom <br/>#Bootstrap
                    <br/>Project can be Found on <a  href='https://github.com/nimesh9528/Web-Development-Project/tree/main/TextUtils'>GitHub</a>

                </div>
                </div>
            </div>
            </div>
    </div>
    <div className="container my-2" >
        <button class="btn btn-primary " onClick={toggleCase}>{btnText}</button>
    </div>
    </>
  )
}
