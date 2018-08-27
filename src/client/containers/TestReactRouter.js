import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestReactRouter extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    fetch('/api/testreactrouter')
    .then(response => response.json())
    .then(body => this.setState({ text: body.text }));
  }

  render() {
    return (
      <React.Fragment>
        <span className="test-client">Testing React Router -- Client Side</span>
        <br />
        <span>{this.state.text}</span>
        <p>-----------------</p>
        <Link to="/">Home</Link>
      </React.Fragment>
    );
  }
}

export default TestReactRouter;
