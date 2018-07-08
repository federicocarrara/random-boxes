import React, { Component } from 'react';
import './App.css';
const numBoxes = 20;

class App extends Component {
  constructor(props) {
    super(props);
    let colArr = Array(numBoxes).fill().map((el) => this.genRandCol(el));
    this.state = {
      colArr
    }
    setInterval(() => {
      let colArr = Array(numBoxes).fill().map((el) => this.genRandCol());
      this.setState({colArr})
    }, 100);
  }
  genRandCol = () => (
     `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  )
  render() {
    let boxes = this.state.colArr.map((color, i) => (
      <Box key={i} color={color}/>
    ));
    return (
      <div>
        {boxes}
      </div>
    )
  }
}

class Box extends Component {
  render() {
    let color = this.props.color;
    let side = this.props.side;
    return (
      <div className="box" style={{backgroundColor:color, width:side, height: side}}></div>
    );
  }
}

export default App;
