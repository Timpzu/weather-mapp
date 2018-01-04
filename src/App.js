import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#303030'
};
let mockServerData = {
  user: {
    name: 'Timo',
    lists: [
      {
        name: 'First list',
        items: ['This is the first item','and I am the second one']
      },
      {
        name: 'List number 2',
        items: ['Hello, I am first','Hi I am two']
      }
    ]
  }
};

class Card extends Component {
  render() {
    return(
      <div>
        <h2 style={defaultStyle}>{this.props.lists && this.props.lists.length} items</h2>
        <p style={{...defaultStyle, fontStyle: 'italic'}}>adaeae</p>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: mockServerData});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s App</h1>
            <Card lists={this.state.serverData.user.lists}/>
            <Card/>
          </div> : <h4>Loading content...</h4>
        }
      </div>
    );
  }
}
export default App;