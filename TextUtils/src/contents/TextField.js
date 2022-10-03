import React,{useState} from 'react'

export default function TextField(props) {
    const eventUpclicked= ()=>{
        console.log("upperCase clicked");
        let newtext = Text.toUpperCase();
        setText(newtext)
        props.showAlert('Converted to Upper Case','success');
    }
    const eventloclicked= ()=>{
        console.log("LowerCase clicked");
        let newtext = Text.toLowerCase();
        setText(newtext)
        props.showAlert('Converted to Lower Case','success');
    }
  
    const ChangeEvent= (event)=>{
        console.log("on change")
        setText(event.target.value)
    }
    const handleExtraSpaces = ()=>{
      let words = Text.split(' ');
      let joinedWords = '';
      words.forEach((elem)=>{
          if(elem[0] !== undefined){
              joinedWords += elem + " ";
              console.log(joinedWords);
          }
      })
      setText(joinedWords);
      props.showAlert('Extra Spaces has been handeled','success');
  }
    const [Text,setText]=useState("");
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Write Text here</h1>
        <form>  
          <div className="form-group">
            <textarea className="form-control" value={Text} style={{backgroundColor : props.mode ==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} 
            onChange={ChangeEvent} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
        </form>
        <button className="btn btn-primary my-1 mx-1" onClick={eventUpclicked}>To Upper Case</button>
        <button className="btn btn-danger my-1 mx-1" onClick={eventloclicked}>To Lower Case</button>
        <button className="btn btn-warning my-1 mx-1" onClick={handleExtraSpaces}>Handle Extra Spaces</button>

    </div>
    <div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
        <h3>Your Text Summary</h3>
        <p>{Text.length} Characters and {Text.split(" ").length-1 } words</p>
    </div>
    </>  
    )
}
