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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ text: body.text });
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <React.Fragment>
        <p>Hello from the client!</p>
        <p>{this.state.text}</p>
      </React.Fragment>
    );
  }
}

export default App;
