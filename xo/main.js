const inputReader = require('wait-console-input')

const WIN_CONDITION = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
];

const displayBoard = (board) => {
    console.log('-------------');
    console.log(`| ${board[0]} | ${board[1]} | ${board[2]} |`);
    console.log('-------------');
    console.log(`| ${board[3]} | ${board[4]} | ${board[5]} |`);
    console.log('-------------');
    console.log(`| ${board[6]} | ${board[7]} | ${board[8]} |`);
    console.log('-------------');
};

const checkEndGame = (board) => {
    // check win
	for (let i = 0; i < WIN_CONDITION.length; i++) {
		win = WIN_CONDITION[i]; // [0, 1, 2]
		if (board[win[0]] == board[win[1]] && board[win[1]] == board[win[2]]) {
			return board[win[0]];
		};
	};

	// check draw
    let cell = board.find(e => e != 'X' && e != 'O');
    if (cell == undefined) return "Draw";

	return null;
};

function initBoard() {
    return ["1","2","3","4","5","6","7","8","9"];
};

function botMove(board) {
    let available_cells = board.filter(b => b != "X" && b != "O");
    let index = Math.floor(Math.random() * available_cells.length);
    let cell = available_cells[index];
    board[cell - 1] = 'X';
    return board;
};

function humanMove(board) {
    let index = inputReader.readNumberArray('Enter number: ',  {
        reInputOnError: true,
        separator: 'enter',
        size: 1
    }); 
    board[index - 1] = "O"
    return board
};


const main = () => {
    var board = initBoard();
    let winner = checkEndGame(board);
    while (winner == null) {
        board = botMove(board);
        displayBoard(board);
        // tinh lai gtri cua winner
        winner = checkEndGame(board);
        if (winner != null) {
            break;
        };
        board = humanMove(board);
        displayBoard(board);
        winner = checkEndGame(board);
        if (winner != null) {
            break;
        };
    };
    console.log(winner)
};

main();