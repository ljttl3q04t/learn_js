import React from 'react';
import { render } from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';
// import App from './App';
import Board from './screens/TicTacToe/Board';

// render(<App />, document.getElementById('root'));

render(<Board />, document.getElementById('root'));