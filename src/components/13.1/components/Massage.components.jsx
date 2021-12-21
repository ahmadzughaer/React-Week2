import React from "react";
import data from './data.js'

class Massage extends React.Component {
    state = {
        names: [],
        object: []
    }
    
    getAllNames =(data) => {
       return data.map((el) => {
          return <p>{el.name}</p>
        })
    }

    getAllBornBefore1990 =(data, year) => {
       return data.filter((el) => {
    return<p> {el.birthday.slice(-4) <= year} </p>;
        
        })
   
    }

   

render() {
    console.log(this.getAllBornBefore1990(data,1990))

  return (
   <div> 
  <h1>{this.getAllNames(data)}</h1>
  <h1 >{JSON.stringify(this.getAllBornBefore1990(data, 1990))}</h1>
   </div>
  );
};
};
export default Massage;
