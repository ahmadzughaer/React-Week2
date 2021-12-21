import React from "react";
import Header from "./Header.components";
import "./HomePage.style.css";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  //   this.textRef = React.createRef();
  // }

  // componentDidMount() {
  //   this.textRef.current.focus();
  // }

  // componentDidUpdate() {
  //     setTimeout(() => {
  //       this.setState({text: ''})
  //     }, 4000)

  // }
  // copyText = () => {
  //   const text = this.textRef.current.value;
  //   navigator.clipboard
  //     .writeText(text)
  //     .then(() => {
  //       console.log("yes");
  //     })
  //     .catch(() => {
  //       console.log("no");
  //     });

  //   this.setState({ text: "Successfully Copied!" });
  // };

  // handleChange =(event) => {
  //   this.setState({ value: event.target.value });
  // }

  render() {
    console.log('eeee')
    return (
      <div className="homePage">
        <Header />
        <h1>Home Page</h1>
        <Link to={`/product`}>go to products</Link>{" "}
      </div>
    );
  }
}
export default HomePage;
