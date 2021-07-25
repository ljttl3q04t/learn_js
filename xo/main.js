const inputReader = require('wait-console-input');

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

const Color = {
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    end: "\x1b[0m",
}

//  primitive obsession => should avoid
// const RED =  "\x1b[31m";
// const YELLOW = "\x1b[33m";
// const END = "\x1b[0m";

function displayWithColor(s, color) {
    switch (color) {
        case "red":
            return Color.red + s + Color.end;
        case "yellow":
            return Color.yellow + s + Color.end;
        default:
            return s;
    };
};

const displayBoard = (board) => {
    let t = (v) => {
        if (v == 'X') {
            return displayWithColor(v, "red");
        }
        if (v == 'O') {
            return displayWithColor(v, "yellow");
        }
        return displayWithColor(v);
    }

    console.log('-------------');
    console.log(`| ${t(board[0])} | ${t(board[1])} | ${t(board[2])} |`);
    console.log('-------------');
    console.log(`| ${t(board[3])} | ${t(board[4])} | ${t(board[5])} |`);
    console.log('-------------');
    console.log(`| ${t(board[6])} | ${t(board[7])} | ${t(board[8])} |`);
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
    // decorating
    console.log("CPU make a move!");

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
    if (board[index - 1] != "X" && board[index - 1] != "O") {
        board[index - 1] = "O";
        return board;
    } else {
        console.log("Invalid move! Please play again!");
        return humanMove(board);
    };
};

function displayWinner(winner) {
    if (winner == "X") {
        console.log(displayWithColor("End Game! Result: Com win", "red"));
    } else if (winner == "O") {
        console.log(displayWithColor("End Game! Result: You win", "yellow"));
    } else console.log(winner);
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
    displayWinner(winner);
};

main();