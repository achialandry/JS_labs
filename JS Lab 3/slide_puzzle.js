
//Lab 3 by Landry Achia Ndong, to be completed, a few bugs but principal requirements met.

var tiles_goal_position = [[1,2,3],[4,5,6],[7,8,'']];
var nums = [1,2,3,4,5,6,7,8,9];
var tile_move_positions;
var tile_moves =0;
var num_moves = 0;
var isCompleted = false;
var time=0;
var begin;


//initial game to be used as object
var game = function(){
	this.length = 3;
	this.tiles_position = [[6,4,7],[8,5,''],[3,2,1]]; 
	this.empty_box = {x:2, y:1};
	this.num_moves = 0;
    this.isCompleted = false;
	this.empty_tile = '';
}



//Initializing the game and resetting variables
game.prototype.initialize_game = function() {
	num_moves = 0;
    isCompleted = false;
    begin = new Date ();
	
	for (var row = 0; row<this.length; row++){
		for (var col =0; col<this.length; col++){
			if(this.tiles_position[row][col] == this.empty_tile){
				 this.empty_box = {y:row, x:col};
			}
		}
	}
	document.getElementById('start_time').innerHTML = begin.getHours()+":"+begin.getMinutes()+":"+begin.getSeconds();
	document.getElementById('moves').innerHTML = tile_moves;

};


//moves


//valid moves
game.prototype.canMove = function(target) {
	
	return target.x ==this.empty_box.x && target.y == this.empty_box.y;
};



//reset color after mouse over based on event listener
game.prototype.reset_color = function(event,game) {
	event.srcElement.classList.remove('non_movable');
	event.srcElement.classList.remove('movable');
};

game.prototype.move_box = function(event, game) {
		
		var x = parseInt(event.srcElement.getAttribute('data-x'));
		var y = parseInt(event.srcElement.getAttribute('data-y'));
		var up = {y:y-1, x:x};
		var down = {y:y+1, x:x};
		var left = {y:y, x:x-1};
		var right = {y:y, x:x+1};

		//bug at this point, to review soon
		if(game.canMove(up) || game.canMove(down) || game.canMove(left) || game.canMove(right) ){
			var number = event.srcElement.innerText;
			event.srcElement.innerHTML = '';
			document.getElementById('z2').innerHTML = number;
			document.getElementById('z2').removeAttribute('id');
			event.srcElement.addAttribute('id', 'z2');
		}
		tile_moves +=1;
};

//color update
game.prototype.color = function(event,game){
	
		var x = parseInt(event.srcElement.getAttribute('data-x'));
		var y = parseInt(event.srcElement.getAttribute('data-y'));
		var up = {y:y-1, x:x};
		var down = {y:y+1, x:x};
		var left = {y:y, x:x-1};
		var right = {y:y, x:x+1};
		if (game.empty_box.x == x && game.empty_box.y==y) {
			return;
		}

		if(game.canMove(up) || game.canMove(down) || game.canMove(left) || game.canMove(right) ){
			event.srcElement.classList.add('movable');
		}else {
			event.srcElement.classList.add('non_movable');
		}
	}


//function to check if game level is complete:
function isDone() {
    return document.getElementById('z0').innerHTML == '1' &&
        document.getElementById('z1').innerHTML == '2' &&
        document.getElementById('z2').innerHTML == '3' &&
        document.getElementById('z3').innerHTML == '4' &&
        document.getElementById('z4').innerHTML == '5' &&
        document.getElementById('z5').innerHTML == '6' &&
        document.getElementById('z6').innerHTML == '7' &&
        document.getElementById('z7').innerHTML == '8' &&
        document.getElementById('z8').innerHTML == '';
}

	
window.onload = function(){
	var tiles = document.getElementsByClassName('tile');
	var real_game = new game();
	real_game.initialize_game();

	// start_Game();

	//adding event listener to restart button
	document.getElementById('restart_game').addEventListener('click', function(){
		real_game.initialize_game();

	});

	//event listeners for color effects
	for(var key in tiles){
		tiles [key].addEventListener('mouseover', ( function(real_game){
			return function(event){
				real_game.color(event,real_game);
			}
		})(real_game,false));

		tiles [key].addEventListener('mouseoout', ( function(real_game){
			return function(event){
				real_game.reset_color(event,real_game);
			}
		})(real_game,false));

		//event listeener for
		tiles [key].addEventListener('click', ( function(real_game){
			return function(event){
				real_game.move_box(event,real_game);
			}
		})(real_game,false));
	}



}

