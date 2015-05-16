myApp.controller('MainController', MainController);

	MainController.$inject = ['$firebaseArray']

	function MainController($firebaseArray){
		var self = this;
		var token = "X";
//self.winner returns a token when get.Winner becomes truthy
		self.winner = ""
//self.clickBox listens to the click
		self.TTT = getGrid()
		self.clickBox = clickBox;
		self.getWinner = getWinner;	
		self.grid = [{status: null},{status: null},{status: null},
					 {status: null},{status: null},{status: null},
					 {status: null},{status: null},{status: null}];

	function getGrid() {			 
  	var ref = new Firebase("https://tictactoe549872de.firebaseio.com/grid1");
	var board = $firebaseArray(ref);
            return board;}
//field gets clicked and array index gets pased into function					 
		function clickBox($index){
//double function; if self winner exists stop or if
	

	if(self.winner || self.grid[$index].status){
		
	}

	console.log($index)
	self.grid[$index].status = token
	console.log(self.grid[$index])
	
	self.getWinner()

	if (token === "O"){
		token = "X" 
	}else{
		token = "O"
	}
	
} 
function getWinner(){
	if ((self.grid[0].status === token) && (self.grid[1].status === token) && (self.grid[2].status === token)||
		(self.grid[3].status === token) && (self.grid[4].status === token) && (self.grid[5].status === token)||
		(self.grid[6].status === token) && (self.grid[7].status === token) && (self.grid[8].status === token)||

		(self.grid[0].status === token) && (self.grid[3].status === token) && (self.grid[6].status === token)||
		(self.grid[4].status === token) && (self.grid[1].status === token) && (self.grid[7].status === token)||
		(self.grid[2].status === token) && (self.grid[5].status === token) && (self.grid[8].status === token)||

		(self.grid[0].status === token) && (self.grid[4].status === token) && (self.grid[8].status === token)||
		(self.grid[6].status === token) && (self.grid[4].status === token) && (self.grid[2].status === token)
	){
		self.winner = token + " wins!"
	}
}

				
// // 		boxes[3].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[5].innerHTML == "X" ||
// // 		boxes[6].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML == "X" ||
			
// 		}
	//}


// 	if ()

// 	}

// //chose token
// var token = X
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
// var token = "X";

// //handels click of a box
// function handlePlayerClick(e){

// 	console.log("handlePlayerClick called")

// 	//do nothing if box is empty
// 	if(e.target.innerHTML != ""){
// 		console.log("not empty!")
// 		return
// 	}

// 	//display token in box
// 	e.target.innerHTML = token

// 	//change to other player
// 	if (token === "X"){
// 		token = "O";
// 	} else { 
// 		token = "X"; 
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

// /Other wise alert token "is the winner!"*/

// 	/*
// 	if (token == "X"){
// 		console.log(token);
// 		this.innerHTML = "X";
// 		token = "O";
// 		console.log(token);
// 	}
// 	else { 
// 		this.innerHTML= "O";
// 		console.log(token);
// 		token = "X";
// 		console.log(token);
// 	}
// 	*/


// }

// //Make the boxes listen for a player's click and return it back to the function
// for(i = 0; i < boxes.length; i++) {
// 	boxes[i].addEventListener("click", handlePlayerClick);
//} 



