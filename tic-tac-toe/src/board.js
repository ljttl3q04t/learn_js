import React from 'react';
import './index.css'
import Click from './click'
import Restart from './restart'

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
    this.restart = this.restart.bind(this);
    this.state = {
      squares: Array(9).fill(null),
      X: true
    }
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

  restart() {
    this.setState({ squares: Array(9).fill(null), X: true })
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
        <table>
        <tr>
          <td>{this.click(0)}</td>
          <td class="vert">{this.click(1)}</td>
          <td>{this.click(2)}</td>
        </tr>
        <tr>
          <td class="hori">{this.click(3)}</td>
          <td class="vert hori">{this.click(4)}</td>
          <td class="hori">{this.click(5)}</td>
        </tr>
        <tr>
          <td>{this.click(6)}</td>
          <td class="vert">{this.click(7)}</td>
          <td>{this.click(8)}</td>
        </tr>
        </table>
        <Restart restart={this.restart} />
      </div>
    );
  }
}

export default Board;