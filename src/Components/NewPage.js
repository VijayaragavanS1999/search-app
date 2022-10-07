import React from "react";

class App extends React.Component {
  state = {
    showMessage: false,
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    return (
      <div className="App">
        {this.state.showMessage && <p>Page to be added</p>}
        <button onClick={this.onButtonClickHandler}>Enter</button>
      </div>
    );
  }
}
