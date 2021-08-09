import { TIE_GAME } from "./consts";

const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export const checkWin = (board) => {
    let winner = 0;
    WIN_CONDITIONS.forEach((win) => {
        if (board[win[0]] && board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]]) {
            winner = board[win[0]];
        }
    })
    if (winner) return winner;
    if (board.every(b => b !== 0)) return TIE_GAME;
    return winner;
};

export const getWinProof = (board) => {
    let proof = [];
    WIN_CONDITIONS.forEach((win) => {
        if (board[win[0]] && board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]]) {
            proof = win;
        }
    });
    return proof;

}
