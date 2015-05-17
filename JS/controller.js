angular
	.module('myApp')
	.controller('MainController', MainController);

	MainController.$inject = ['$firebaseArray']

	function MainController($firebaseArray){
		var self = this;
		self.gameInfo = gameInfo();
// //self.winner returns a self.gameInfo.turn when get.Winner becomes truthy
 // 	self.winner = ""
//displays the grid
		self.grid = getGrid();
// //self.clickBox listens to the click		
 		self.clickBox = clickBox;
 		console.log("works")
// //reset the field back to empty
// 		self.reset = reset;

		self.gameInfo = gameInfo();
		

		//self.getWinner = getWinner;	
		// self.grid = [{status: null},{status: null},{status: null},
		// 			 {status: null},{status: null},{status: null},
		// 			 {status: null},{status: null},{status: null}];



		function getGrid() {			 
	  		var ref = new Firebase("https://tictactoe549872de.firebaseio.com/gird1");
			var board = $firebaseArray(ref);
	            return board
	    }
	    
	    function gameInfo() {			 
	  		var ref = new Firebase("https://tictactoe549872de.firebaseio.com/grid2");
			var info = $firebaseArray(ref);
	            return info
	    }   
	

	//field gets clicked and array index gets pased into function				 
		function clickBox(index){
	//double function; if self winner exists - stop || prevent double click ||
	 	if(self.winner || self.grid[index].status){
	 	return	
	 	}
	}
	
// 	console.log(index)
// 	self.grid[index].status = self.gameInfo.turn
// 	console.log(self.grid[index])
	
//	self.getWinner()
// //tie function
// 	var no_tie = false;
// 	for (var i = 0; i < 9; i++){
// 		if(self.grid[i].status == null)
// 		{ no_tie = true;
// 		}
// 		}
// 	if(no_tie === false){
// 		self.winner = "It's a Tie!"
// 	}



// 	if (self.gameInfo.turn === ""X){
// 		self.gameInfo.turn = "X" 
// 		//pushing up info to firebase
// 	self.getGrid.$save(self.getGrid);	
// 	}

// 	else{
// 		self.gameInfo.turn = "O"
// 	self.getGrid.$save(self.getGrid);	
// 	}
// 	self.getGrid.$save(self.getGrid);	
// } 
	function getWinner(){
	if ((self.grid[0].status === self.gameInfo.turn) && (self.grid[1].status === self.gameInfo.turn) && (self.grid[2].status === self.gameInfo.turn)||
		(self.grid[3].status === self.gameInfo.turn) && (self.grid[4].status === self.gameInfo.turn) && (self.grid[5].status === self.gameInfo.turn)||
		(self.grid[6].status === self.gameInfo.turn) && (self.grid[7].status === self.gameInfo.turn) && (self.grid[8].status === self.gameInfo.turn)||

		(self.grid[0].status === self.gameInfo.turn) && (self.grid[3].status === self.gameInfo.turn) && (self.grid[6].status === self.gameInfo.turn)||
		(self.grid[4].status === self.gameInfo.turn) && (self.grid[1].status === self.gameInfo.turn) && (self.grid[7].status === self.gameInfo.turn)||
		(self.grid[2].status === self.gameInfo.turn) && (self.grid[5].status === self.gameInfo.turn) && (self.grid[8].status === self.gameInfo.turn)||

		(self.grid[0].status === self.gameInfo.turn) && (self.grid[4].status === self.gameInfo.turn) && (self.grid[8].status === self.gameInfo.turn)||
		(self.grid[6].status === self.gameInfo.turn) && (self.grid[4].status === self.gameInfo.turn) && (self.grid[2].status === self.gameInfo.turn)
	){
		self.winner = self.gameInfo.turn + " wins!"
	}
	}
		
// 		function reset(){
// 		console.log("reset is on!")
// 			for(var i = 0; i < 9; i++){
// 			self.grid[i].status = "";}
// 		} 
 }














				
// // 		boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML == "X" ||
// // 		boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML == "X" ||
			
// 		}
	//}


// 	if ()

// 	}

// //chose self.gameInfo.turn
// var self.gameInfo.turn = X
// //select a field
// ng-click
// //field selection is locked

// //win logic is run 

// winningCombinations = [[a,b,c] , [d,e,f] , [g,h,i] , [a,d,g] , [b,e,h] , [c,f,i] , [a,e,i] , [g,e,c]]

// //chekc for winner or tie 

// //winner is alerted

// //winner is recorded

// //bord is rest



// 	//represents the individual playing fields
// var boxes = document.getElementsByClassName("tile");

// //represents the next move
// var self.gameInfo.turn = "X";

// //handels click of a box
// function handlePlayerClick(e){

// 	console.log("handlePlayerClick called")

// 	//do nothing if box is empty
// 	if(e.target.innerHTML != ""){
// 		console.log("not empty!")
// 		return
// 	}

// 	//display self.gameInfo.turn in box
// 	e.target.innerHTML = self.gameInfo.turn

// 	//change to other player
// 	if (self.gameInfo.turn === "X"){
// 		self.gameInfo.turn = "O";
// 	} else { 
// 		self.gameInfo.turn = "X"; 
// 	}
// 	//check for winner
// 	/*console.log(boxes);
// 	console.log(boxes[0]);
// 	console.log(boxes[0].innerHTML);*/

// 	//check for a winner horizontally
// 	
// 	//check for winner vertically
// 		boxes[0].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML == "X" ||
// 		boxes[1].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[7].innerHTML == "X" ||
// 		boxes[2].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML == "X" ||
// 	//check for winner diagonally	
// 		boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML == "X" ||
// 		boxes[6].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[2].innerHTML == "X")
// 		{
// 		alert("X wins")
// 		}
// 	else

// sel.clear.board()
// 		//if no winner
// 			//check for tie

// /*While var get getinnerhtml.ID is not winningCombinations = [[a,b,c] , [d,e,f] , [g,h,i] , [a,d,g] , [b,e,h] , [c,f,i] , [a,e,i] , [g,e,c]]

// /Other wise alert self.gameInfo.turn "is the winner!"*/

// 	/*
// 	if (self.gameInfo.turn == "X"){
// 		console.log(self.gameInfo.turn);
// 		this.innerHTML = "X";
// 		self.gameInfo.turn = "O";
// 		console.log(self.gameInfo.turn);
// 	}
// 	else { 
// 		this.innerHTML= "O";
// 		console.log(self.gameInfo.turn);
// 		self.gameInfo.turn = "X";
// 		console.log(self.gameInfo.turn);
// 	}
// 	*/


// }

// //Make the boxes listen for a player's click and return it back to the function
// for(i = 0; i < boxes.length; i++) {
// 	boxes[i].addEventListener("click", handlePlayerClick);
//} 



