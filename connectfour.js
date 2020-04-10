var stillPlaying = false; 
var currentPLayer = 0; 
var board = []; 
var color = [];
color[1] = "Red"; 
color[2] = "Yellow"; 
			
function start(){
  resetBoard();
	stillPlaying = true;
	for(row=0; row<=5; row++){
		board[row] = [];
			for(col=0; col<=6; col++){
				board[row][col] = 0;
			}	
		}		
	updateBoard(); 	
	currentPLayer = 1; 
	setUpTurn(); 
}
			
function updateBoard(){
	checkForWin(); 
	for(col = 0; col<=6; col++){
		for(row=0; row<=5; row++){
			document.getElementById('square_'+row+'_'+col).innerHTML ="<span class='piece player"+board[row][col]+"'> </span>";
		}	
	}
}

function resetBoard(){
     for(var row=0; row<=5; row++){
			for(var col=0; col<=6; col++){
			 document.getElementById("square_" + row + "_"+ col +"").style.background = "#191970";								
			}
		}	
}

function checkForWin(){
  //check left to right
	for(i=1; i<=2; i++){
		for(col = 0; col <=3; col++){
			for(row = 0; row <=5; row++){
				if(board[row][col] == i){
					if((board[row][col+1] == i) && (board[row][col+2] == i) && (board[row][col+3] == i)){
              winner = i;
              highlightWinner(col,row,1);
        			endGame(winner);
				  }
			  }
		  }
	   }
  }		
	//check top to bottom
	for(i=1; i<=2; i++){
		for(col = 0; col <=6; col++){
			for(row = 0; row <=2; row++){
				if(board[row][col] == i){
					if((board[row+1][col] == i) && (board[row+2][col] == i) && (board[row+3][col] == i)){
            winner = i;
            highlightWinner(col,row,2);
						endGame(winner); 
						return true;
					}
				}
			}
		}
	}					
	//check diagnol(up)
	for(i=1; i<=2; i++){
		for(col = 0; col <=3; col++){
			for(row = 3; row <=5; row++){
				if(board[row][col] == i){
					if((board[row-1][col+1] == i) && (board[row-2][col+2] == i) && (board[row-3][col+3] == i)){
            winner = i;
            highlightWinner(col,row,4);
						endGame(winner);
						return true;
					}
				}
			}
		}
	}			
	//check diagnal(down)
	for(i=1; i<=2; i++){
		for(col = 0; col <=3; col++){
			for(row = 0; row <=2; row++){
				if(board[row][col] == i){
					if((board[row+1][col+1] == i) && (board[row+2][col+2] == i) && (board[row+3][col+3] == i)){
            winner = i;
            highlightWinner(col,row,3);
						endGame(winner);
						return true;
					}
				}
			}
		}
	}
}
			
function setUpTurn(){
	if(stillPlaying){ 
		document.getElementById('infotxt').innerHTML = "It is " + color[currentPLayer] + "'s turn.";
	}
}			

function drop(col){
     if(stillPlaying){
		for(row=5; row>=0; row--){ 
			if(board[row][col] == 0){
				board[row][col] = currentPLayer;
				updateBoard();
				if(currentPLayer == 1){
					currentPLayer = 2;
				} else {
					currentPLayer = 1;
				}
				setUpTurn();
				return true;
			}
       }
		}
}

function endGame(winner){
	stillPlaying = false; 
	document.getElementById('infotxt').innerHTML = color[winner] + " Wins! (Click Begin Game to play again)"; 
}
			
function highlightWinner(wcol,wrow,winStyle){
    if(winStyle == 1){
       for(i = wcol; i <wcol+4; i++){
         document.getElementById("square_" + wrow + "_"+ i +"").style.background = "#32CD32";		
        }
    }else if(winStyle == 2){
      for(i = wrow; i <wrow+4; i++){
         document.getElementById("square_" + i + "_"+ wcol +"").style.background = "#32CD32";	
      }
   }else if(winStyle == 3){
       for(i = 0; i < 4; i++){
         x = i + wrow;
         y = i + wcol;
        document.getElementById("square_" + x + "_"+ y +"").style.background = "#32CD32"
       }
    }else if(winStyle == 4){
        for(i = 0; i < 4; i++){
         x = wrow - i;
         y = wcol + i;
        document.getElementById("square_" + x + "_"+ y +"").style.background = "#32CD32";	
        }
     }
}

