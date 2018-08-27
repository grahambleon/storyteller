import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <p>Hello from the client!</p>
        <p>{this.state.text}</p>
        <p>-----------------</p>
        <Link to="/testreactrouter">other page</Link>
      </React.Fragment>
    );
  }
}

export default App;
