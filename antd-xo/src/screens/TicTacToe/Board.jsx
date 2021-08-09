import { React, useEffect, useState } from 'react';

import { Row, Col } from 'antd';
import Square from './Square';

import './Board.css';
import { PLAYER_O, PLAYER_X, TIE_GAME } from './consts';
import { checkWin, getWinProof } from './routines';

const Board = () => {
    const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [end_game, setEndGame] = useState(0);
    const [game, setGame] = useState({
        game_count: 0,
        cur_player: PLAYER_X,
        x_win_count: 0,
        o_win_count: 0,
        tie_count: 0,
    })

    const resetGame = () => {
        setEndGame(0);
        setBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    const move = (index) => {
        if (end_game) {
            resetGame();
            return;
        }
        let tmp_board = [...board];
        if (!tmp_board[index]) {
            tmp_board[index] = game.cur_player;
            setBoard(tmp_board);
            setGame({ ...game, cur_player: game.cur_player === PLAYER_X ? PLAYER_O : PLAYER_X })
        }
    }
    useEffect(() => {
        const winner = checkWin(board);
        if (winner) setEndGame(1);
        setGame({
            ...game,
            game_count: game.game_count + 1,
            x_win_count: game.x_win_count + (winner === PLAYER_X),
            o_win_count: game.o_win_count + (winner === PLAYER_O),
            tie_count: game.tie_count + (winner === TIE_GAME),
        });
    }, [board]);

    const getSquareOpacity = (index) => {
        return !end_game || getWinProof(board).includes(index) ? "1" : "0.5";
    }

    const getGuideOpacity = (g) => {
        if (end_game) {
            return checkWin(board) === g ? "1" : "0.5";
        }
        return game.cur_player === g ? "1" : "0.5";
    }

    return (
        <center>
            <div className="Game">
                <Row justify="center" className="Row-container">
                    <Col span={8} className="Col-container" style={{ borderLeftStyle: "none" }} onClick={() => move(0)}>
                        <div style={{ opacity: getSquareOpacity(0) }}>
                            <Square player={board[0]} />
                        </div>
                    </Col>
                    <Col span={8} className="Col-container" onClick={() => move(1)}>
                        <div style={{ opacity: getSquareOpacity(1) }}>
                            <Square player={board[1]} />
                        </div>
                    </Col>
                    <Col span={8} className="Col-container" onClick={() => move(2)}>
                        <div style={{ opacity: getSquareOpacity(2) }}>
                            <Square player={board[2]} />
                        </div>
                    </Col>
                </Row>

                <Row justify="center" className="Row-container">
                    <Col span={8} className="Col-container" style={{ borderLeftStyle: "none" }} onClick={() => move(3)}>
                        <div style={{ opacity: getSquareOpacity(3) }}>
                            <Square player={board[3]} />
                        </div>
                    </Col>
                    <Col span={8} className="Col-container" onClick={() => move(4)}>
                        <div style={{ opacity: getSquareOpacity(4) }}>
                            <Square player={board[4]} />
                        </div>
                    </Col>
                    <Col span={8} className="Col-container" onClick={() => move(5)}>
                        <div style={{ opacity: getSquareOpacity(5) }}>
                            <Square player={board[5]} />
                        </div>
                    </Col>
                </Row>

                <Row justify="center" className="Row-container" style={{ borderBottomStyle: "none" }}>
                    <Col span={8} className="Col-container" style={{ borderLeftStyle: "none" }} onClick={() => move(6)}>
                        <div style={{ opacity: getSquareOpacity(6) }}>
                            <Square player={board[6]} />
                        </div>
                    </Col>
                    <Col span={8} className="Col-container" onClick={() => move(7)}>
                        <div style={{ opacity: getSquareOpacity(7) }}>
                            <Square player={board[7]} />
                        </div>
                    </Col>
                    <Col span={8} className="Col-container" onClick={() => move(8)}>
                        <div style={{ opacity: getSquareOpacity(8) }}>
                            <Square player={board[8]} />
                        </div>
                    </Col>
                </Row>
                <Row justify="center" className="Row-container" style={{ marginTop: "24px", borderBottomStyle: "none" }}>
                    <Col span={8}>
                        <div style={{ opacity: getGuideOpacity(PLAYER_X) }}>
                            <p>PLAYER 1 (X) </p>
                            <p>{game.x_win_count}</p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div style={{ opacity: getGuideOpacity(TIE_GAME) }}>
                            <p>TIE</p>
                            <p>{game.tie_count}</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{ opacity: getGuideOpacity(PLAYER_O) }}>
                            <p>PLAYER 2 (O) </p>
                            <p>{game.o_win_count}</p>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div style={{ opacity: "0.5" }}>
                            <p>MODE</p>
                            <p>2P</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </center>
    );
};


export default Board;