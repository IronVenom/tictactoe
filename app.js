var filledPositions = new Array();
var emptyPositions = [1,2,3,4,5,6,7,8,9]
var playerPositions = new Array();
var computerPositions = new Array();
var computerSymbol = null;
var playerSymbol = null;
var game = false;
var startGame = true;
var gameEnd = false;
var gameMessages = document.querySelector("#gameMessages");
var closeResult = document.querySelector("#closeResult");
var result = document.querySelector("#result");
var sq1 = document.querySelector("#sq1");
var sq2 = document.querySelector("#sq2");
var sq3 = document.querySelector("#sq3");
var sq4 = document.querySelector("#sq4");
var sq5 = document.querySelector("#sq5");
var sq6 = document.querySelector("#sq6");
var sq7 = document.querySelector("#sq7");
var sq8 = document.querySelector("#sq8");
var sq9 = document.querySelector("#sq9");
var squareArray = [[sq1,1],[sq2,2],[sq3,3],[sq4,4],[sq5,5],[sq6,6],[sq7,7],[sq8,8],[sq9,9]]
var startButton = document.querySelector("#startButton");
var resetButton = document.querySelector("#resetButton");
var Xchoice = document.querySelector("#Xchoice");
var Ochoice = document.querySelector("#Ochoice");

startButton.addEventListener("click",function(){
	if(startGame){
		$('#gameModal').modal('show');
		startGame = false;
	}
});
resetButton.addEventListener("click",function(){reset()});
Xchoice.addEventListener("click",function(){
	playerSymbol = "X";
	computerSymbol = "O";
	game = true;
});
closeResult.addEventListener("click",function(){reset()});
Ochoice.addEventListener("click",function(){
	playerSymbol = "O";
	computerSymbol = "X";
	game = true;
});
squareArray.forEach(function(item){
	item[0].addEventListener("click",function(){
		if(game){
			if(playerSymbol == "X"){
				if(emptyPositions.includes(item[1])){
					fillX(this);
					removeFromPositions(item[1]);
				} else {
					gameMessages.textContent = "This position is already filled! Choose another position.";
				}
			} else {
				if(emptyPositions.includes(item[1])){
					fillO(this);
					removeFromPositions(item[1]);
				} else {
					gameMessages.textContent = "This position is already filled! Choose another position.";
				}
			}
		}
	});
});

function removeFromPositions(filledpos){
	if(emptyPositions.length > 0){
		emptyPositions = emptyPositions.filter(pos => pos !== filledpos);
		filledPositions.push(filledpos);
		playerPositions.push(filledpos);
		checkResult();
		if(!gameEnd){
			computerPlays();
		}
	} else {
		result()
		reset()
	}
}

function checkResult(){
	if(playerPositions.includes(1) && playerPositions.includes(2) && playerPositions.includes(3)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(4) && playerPositions.includes(5) && playerPositions.includes(6)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(7) && playerPositions.includes(8) && playerPositions.includes(9)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(1) && playerPositions.includes(4) && playerPositions.includes(7)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(2) && playerPositions.includes(5) && playerPositions.includes(8)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(3) && playerPositions.includes(6) && playerPositions.includes(9)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(1) && playerPositions.includes(5) && playerPositions.includes(9)){
		gameResult("Player","won");
	}
	else if(playerPositions.includes(3) && playerPositions.includes(5) && playerPositions.includes(7)){
		gameResult("Player","won");
	}
	else {
		if(computerPositions.includes(1) && computerPositions.includes(2) && computerPositions.includes(3)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(4) && computerPositions.includes(5) && computerPositions.includes(6)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(7) && computerPositions.includes(8) && computerPositions.includes(9)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(1) && computerPositions.includes(4) && computerPositions.includes(7)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(2) && computerPositions.includes(5) && computerPositions.includes(8)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(3) && computerPositions.includes(6) && computerPositions.includes(9)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(1) && computerPositions.includes(5) && computerPositions.includes(9)){
			gameResult("Computer","won");
		}
		else if(computerPositions.includes(3) && computerPositions.includes(5) && computerPositions.includes(7)){
			gameResult("Computer","won");
		}
		else {
			if(emptyPositions.length === 0){
				gameResult(null,"Tie");
			}
		}
	}
}

function gameResult(whowon,res){
	if(res == "won"){
		result.textContent = whowon + " has won!";
		$('#resultModal').modal('show');
		gameEnd = true;
	} else {
		result.textContent = "It's a tie!";
		$('#resultModal').modal('show');
		gameEnd = true;
	}
}

function computerPlays(){
	if(game){
		var pos = emptyPositions[Math.floor(Math.random() * emptyPositions.length)]
		emptyPositions = emptyPositions.filter(position => position !== pos);
		filledPositions.push(pos);
		computerPositions.push(pos);
		if (pos !== undefined){
			gameMessages.textContent = "Computer has selected square " + pos;
		} else {
			gameMessages.textContent = "It's a tie!";
		}
		if(computerSymbol == "X"){
			if(pos === 1){
				fillX(sq1);
			} else if (pos === 2){
				fillX(sq2);
			} else if (pos === 3){
				fillX(sq3);
			} else if (pos === 4){
				fillX(sq4);
			} else if (pos === 5){
				fillX(sq5);
			} else if (pos === 6){
				fillX(sq6);
			} else if (pos === 7){
				fillX(sq7);
			} else if (pos === 8){
				fillX(sq8);
			} else if (pos === 9){
				fillX(sq9);
			}
		} else {
			if(pos === 1){
				fillO(sq1);
			} else if (pos === 2){
				fillO(sq2);
			} else if (pos === 3){
				fillO(sq3);
			} else if (pos === 4){
				fillO(sq4);
			} else if (pos === 5){
				fillO(sq5);
			} else if (pos === 6){
				fillO(sq6);
			} else if (pos === 7){
				fillO(sq7);
			} else if (pos === 8){
				fillO(sq8);
			} else if (pos === 9){
				fillO(sq9);
			}
		}
		checkResult();
	}
}

function fillX(square){
	square.classList.add("X");
}

function fillO(square){
	square.classList.add("O");
}

function reset(){
	filledPositions = new Array();
	playerSymbol = null;
	computerSymbol = null;
	game = false;
	startGame = true;
	gameEnd = false;
	emptyPositions = [1,2,3,4,5,6,7,8,9]
	playerPositions = new Array();
	computerPositions = new Array();
	gameMessages.textContent = "Click on Start Game to start the game. While playing, click on reset to restart the game.";
	sq1.classList.remove("X");
	sq1.classList.remove("O");
	sq2.classList.remove("X");
	sq2.classList.remove("O");
	sq3.classList.remove("X");
	sq3.classList.remove("O");
	sq4.classList.remove("X");
	sq4.classList.remove("O");
	sq5.classList.remove("X");
	sq5.classList.remove("O");
	sq6.classList.remove("X");
	sq6.classList.remove("O");
	sq7.classList.remove("X");
	sq7.classList.remove("O");
	sq8.classList.remove("X");
	sq8.classList.remove("O");
	sq9.classList.remove("X");
	sq9.classList.remove("O");
}