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
                    Collapsible Group Item #1
                    </button>
                </h5>
                </div>

                <div id="collapseOne" className="collapse show" style={btnColor}aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo"style={btnColor}>
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" style={btnColor}  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree" style={btnColor}>
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" style={btnColor} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
