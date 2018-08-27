import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    fetch('/api/hello')
    .then(response => response.json())
    .then(body => this.setState({ text: body.text }));
  }

  render() {
    return (
      <React.Fragment>
        <span>Hello from the client!</span>
        <span>{this.state.text}</span>
      </React.Fragment>
    );
  }
}

export default App;
