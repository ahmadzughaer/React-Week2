import React from "react";
import './Form.style.css'
class Form extends React.Component {

    constructor (props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus(); 
     }

   

render() {
 console.log(this.inputRef)

  return (
   <div className="input"> 
   <label>Input focus when app is load</label>
       <input ref={this.inputRef} type='text'/>
   </div>
  );
};
};
export default Form;
