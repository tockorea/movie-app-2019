import React from "react";

class App extends React.Component {
  state = {
    counter: 0,
  };
  add = () => {
    this.setState((current) => ({ counter: current.counter + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ counter: current.counter - 1 }));
  };
  componentDidMount() {
    console.log("compoent rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.counter}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
