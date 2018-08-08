import React, { Component } from 'react';
import './App.css';
const numBoxes = 96;
let interval = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    let colArr = Array(numBoxes).fill().map((el) => this.genRandCol(el));
    this.state = {
      colArr,
      interval
    }
    this.myInterval = setInterval(() => {
      let colArr = Array(numBoxes).fill().map((el) => this.genRandCol());
      this.setState({colArr})
    }, this.state.interval);
  }
  genRandCol = () => (
     `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  )
  handleClick = (interval) => {
    clearInterval(this.myInterval);
    this.myInterval = setInterval(() => {
      let colArr = Array(numBoxes).fill().map((el) => this.genRandCol());
      this.setState({colArr})
    }, interval);
  }
  render() {
    let boxes = this.state.colArr.map((color, i) => (
      <Box key={i} color={color}/>
    ));
    return (
      <div className="container">
        <span>SPEED CONTROLER:  </span>
        <Button interval={2000} text={'0.5x'} onClick={(interval) => this.handleClick(interval)}/>
        <Button interval={1000} text={'1x'} onClick={(interval) => this.handleClick(interval)}/>
        <Button interval={500} text={'2x'} onClick={(interval) => this.handleClick(interval)}/>
        <Button interval={250} text={'3x'} onClick={(interval) => this.handleClick(interval)}/>
        <Button interval={125} text={'4x'} onClick={(interval) => this.handleClick(interval)}/>
        <Button interval={63} text={'5x'} onClick={(interval) => this.handleClick(interval)}/>
        <div className="boxes">
          {boxes}
        </div>
      </div>

    )
  }
}

class Button extends Component {
  render() {
    const text = this.props.text;
    const interval = this.props.interval;
    return (
      <button className="speedBtn" onClick={() => this.props.onClick(interval)}>{text}</button>
    )
  }
}

class Box extends Component {
  render() {
    let color = this.props.color;
    return (
      <div className="box" style={{backgroundColor:color}}></div>
    );
  }
}

export default App;
