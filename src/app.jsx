import React, { Component } from 'react';
import { render } from 'react-dom';
import DatePicker from './DatePicker.jsx';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DatePicker />
    </div>
  );
};
/*
class Board extends Component {
  constructor (props) {
    super(props);
    this.state = {value:
    ['-','-','-',
      '-','-','-',
      '-','-','-'],
    player: 1
    };
    this.changeTurn = this.changeTurn.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  changeTurn (index) {
    if (this.state.value[index] === '-') {
      if (this.state.player === 1){
        this.setState({value : this.state.value.map((button, i) => index === i ? 'X' : button)});

      }
      if (this.state.player === 2){
        this.setState({value : this.state.value.map((button, i) => index === i ? 'O' : button)});
      }
      this.setState({player: this.state.player === 1 ? 2 : 1});
    }
  }
  checkWinner () {
    const winningCon = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (const option of winningCon) {
      const [a,b,c] = option;
      if (this.state.value[a] === 'X' && this.state.value[b] ==='X' && this.state.value[c] === 'X') {
        setTimeout(() => alert('player 1 win'), 300);
      }
      if (this.state.value[a] === 'O' && this.state.value[b] ==='O' && this.state.value[c] === 'O') {
        setTimeout(() => alert('player 2 win'), 300);
      }
    }
  }
  componentDidUpdate () {
    this.checkWinner();
  }
  render(){
    const boardArr = [];
    for (let i = 0; i < 3; i++) {
      boardArr.push(<Row prop={this.state.value} changeTurn = {this.changeTurn} row = {i} key={i}></Row>);
    }
    return (
      <div id="outerDiv">
        {boardArr}
        <p>Player{this.state.player}</p>
        <button id='reset' onClick={() => (this.setState({
          value: ['-','-','-','-','-','-','-','-','-'],
          player: 1})
        )}>reset</button>
      </div>
    );
  }
}

const Row = ({row , changeTurn, prop }) => {
  // console.log(props);
  const boxArr = [];
  // const row = props.row;
  for (let i = row * 3; i < (row * 3) + 3; i++) {
    boxArr.push(<Box prop={prop} changeTurn = {changeTurn} index={i} key={i}></Box>);
  }
  return (
    <div key={1}>
      {boxArr}
    </div>
  );
};
const Box = (props) => {
  return (
    <button onClick={() => props.changeTurn(props.index)}>{props.prop[props.index]}</button>
  );
};
*/

render(<App />, document.querySelector('#root'));
