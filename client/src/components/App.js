import React, { Component } from "react";

class App extends Component {
  state = {
    Hello: ""
  };
  componentDidMount() {
    fetch("/api/hello")
      .then(raw => raw.json())
      .then(json => {
        this.setState({ Hello: json });
      });
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.Hello}</p>
      </div>
    );
  }
}

export default App;
