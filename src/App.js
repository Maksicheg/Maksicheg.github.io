import React, { Component } from 'react';
import Bases from './components/Bases/Bases';
import Preview from './components/Preview/Preview';

class App extends Component {
  state = {
    show: true
  }

  onPreviewHandle = () => {
    setTimeout(() => {
      this.setState({ show: false })
    }, 5000)
  }



  render() {
    this.onPreviewHandle();
    return (
      <div className="App">
        {this.state.show ? <Preview /> : <Bases />}
      </div>
    );
  }
}

export default App;
