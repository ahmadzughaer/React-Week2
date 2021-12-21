import React from "react";
import "./Copy.style.css";
class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: "",
    };
    this.textRef = React.createRef();
  }

  componentDidMount() {
    this.textRef.current.focus();
  }

  componentDidUpdate() {
      setTimeout(() => {
        this.setState({text: ''})
      }, 4000)

     
  }
  copyText = () => {
    const text = this.textRef.current.value;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("yes");
      })
      .catch(() => {
        console.log("no");
      });
    //   this.textRef.select()
    //  document.execCommand('copy');

    this.setState({ text: "Successfully Copied!" });
  };

  handleChange =(event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="input">
        <h1>What is the meaning of life?</h1>
        <textarea
          onChange={this.handleChange}
          ref={this.textRef}
          value={this.state.value}
          rows={8}
          cols={30}
        ></textarea>
        <button onClick={this.copyText}>Copy</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default Copy;
