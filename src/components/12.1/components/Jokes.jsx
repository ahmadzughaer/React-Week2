import React from "react";

const Jokes = (props) => {




  return (
   <div> 
       <button onClick={props.func} >Display Joke</button>
       <p>{props.joke}</p>
   </div>
  );
};
export default Jokes;
