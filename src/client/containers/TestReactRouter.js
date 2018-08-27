import React, { Component } from 'react';

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
        <span>Testing React Router -- Client Side</span>
        <br />
        <span>{this.state.text}</span>
      </React.Fragment>
    );
  }
}

export default TestReactRouter;
