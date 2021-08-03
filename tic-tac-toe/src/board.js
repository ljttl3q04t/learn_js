import React from 'react';
import './index.css'
import Click from './click'

const checkEndGame = (squares) => {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // check win
  for (let i = 0; i < WIN_CONDITION.length; i++) {
    const win = WIN_CONDITION[i]; // [0, 1, 2]
    if (squares[win[0]] && squares[win[0]] === squares[win[1]] && squares[win[1]] === squares[win[2]]) {
      return squares[win[0]];
    };
  };
  // check draw
  let cell = squares.find(e => e !== 'X' && e !== 'O');
  if (cell === undefined) return "Draw";
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      X: true,
    };
  }

  onClick(e) {
    const squares = this.state.squares.slice();
    if (checkEndGame(squares) || squares[e]) {
      return;
    }
    squares[e] = this.state.X ? 'X' : 'O';
    this.setState({ squares: squares, X: !this.state.X });
  }

  click(e) {
    return (
      <Click value={this.state.squares[e]} onClick={() => this.onClick(e)} />)
  }

  render() {
    const winner = checkEndGame(this.state.squares);
    let status;
    if (winner) {
      status = winner === "Draw" ? winner : winner + ' win';
    } else {
      status = (this.state.X ? "X" : 'O') + ' turn'
    }
    return (
      <div>
        <h1 className='title'>TIC TAC TOE</h1>
        <div className='status'>{status}</div>
        <div className="row">
          {this.click(0)}
          {this.click(1)}
          {this.click(2)}
        </div>
        <div className="row">
          {this.click(3)}
          {this.click(4)}
          {this.click(5)}
        </div>
        <div className="row">
          {this.click(6)}
          {this.click(7)}
          {this.click(8)}
        </div>
      </div>
    );
  }
}

export default Board;