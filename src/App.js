import Jokes from "./components/12.1/components/Jokes";
import React from "react";
import axios from 'axios'
import Massage from "./components/13.1/components/Massage.components";
import Form from "./components/14.1/components/Form.components";
// import Copy from "./components/14.2/components/Copy.components";
// import Main from "./components/13.1.2/components/App.components";
import HomePage from "./components/16.1/components/HomePage.components";
import MyApp from "./components/16.1/components/MyApp";



class App extends React.Component {
  //   state = {
  //     categories: [],
  //     joke: ''
  //   }

  // componentDidMount() {
  //   this.getCategory()
  // }
  // getCategory = async () => {
  // const data = await axios.get(`https://api.chucknorris.io/jokes/categories`)
  //   this.setState({categories: data.data})
  // }

  // getJoke = async (e = '') => {
  //  const data = await axios.get(`https://api.chucknorris.io/jokes/random?${e.target.value}`)
  //     this.setState({joke: data.data.value})
  //   }
  render() {
    return (
      // <div>
      //   <Jokes func={this.getCategory} joke={this.state.joke}/>
      //   <select onClick={this.getJoke}>{this.state.categories.map((category, idx) => {
      //     return (
      //       <option value={category} key={idx}>{category}</option>
      //     )
      //   })}</select>
      // </div>
      // <Massage/>
      // <Form/>
      // <Copy/>
      // <Main/>
      <MyApp />
    );
  }
}

export default App;
