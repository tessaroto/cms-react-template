import React from 'react';
import Button from './Button';

class App extends React.Component {

  constructor(props) {
    console.log(props)
      super(props);
      this.props = props;
      this.state = {
          items:[]
      };
  }

  handleClick() {
    console.log('Click happened');
    alert("oiii")
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length),
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button name={this.props.name}/>
        <ul children={this.state.items.map(function(item) {return li(null, item)})}>
          
        </ul>


      </div>
    );
  }
}

export default App;