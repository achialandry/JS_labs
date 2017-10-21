//Lab 3 by Landry Achia Ndong

//Question 1: 
// Question 1.a: Value of result
var arr = ['dog','cat','deer'];
var result = arr[0] + arr[2];
console.log(result);

//dogdeer


// Question 1.b: Given the following program, add the code necessary to assign children the concatenation of the arrays girls and boys.


<p id="demo"></p>

	<script>
		var girls = ["Cecilie", "Lone"];
		var boys = ["Emil", "Tobias", "Linus"];
		var children = girls +', '+ boys;

		document.getElementById('demo').innerHTML = children;

	</script>
//Cecilie,Lone, Emil,Tobias,Linus


// Question 1.c: Analyze the following code fragment, and answer the question below:

var arr = [20,30];
for (var i = arr.length; i<5; i+=1){
    arr[i] = Math.pow(i,2);
}

//Answer: Yes for loop will execute without error,
// Output execution: [20, 30, 4, 9, 16]



// Question 1.d: Analyze the following code fragment, and answer the question below:

var arr = [10,20,30,40,50,60,70,90];
var sum = 0;
for (var i = 1; i<7; i+=1){
    sum = sum + arr[i];
}

console.log(sum);

//Answer: value of sum would be: 270 ,

// To get the sum = 370 after loop terminates, the expression is modified as follows:
for (var i = 0; i<8; i+=1){
    sum = sum + arr[i];
} 

//Output: sum = 370



// Question 1.e: Given the following code fragment, what is the output to the console after the completion of this code fragment?

//Code fragment from inside main - start trace here
var DL = 5
var d = [25.0, 9.0, 10.0, 25.0, 15.0];
var mi = 0;
var m = d[mi];
for (var i = 1; i<DL; i++){
    if(d[i]<m){
    	mi = i;
    	m = d[mi];
    	console.log(m);
    }
}
console.log("mi =",mi," m = ",m);


//Output, mi = 1, m = 9


// Question 2: Write JavaScript code fragments using arrays
//Question 2.1: Given the following spreadsheet, write a function (called sumArray) that will
//receive an array, and a number representing the size of the array, and 
//return the value of the sum indicated yellow below:

//Value is 125

arr = [[1,2,3,4,5], 
       [2,3,4,5,6], 
       [3,4,5,6,7], 
       [4,5,6,7,8],
       [5,6,7,8,9]
       ];

arr_length = arr.length;

function sumArray(arr, arr_length){
  var sum = 0;  
  for(var row = 0; row<arr_length; row++){
    	for(var col=0; col<arr[row].length; col++){
    		sum = sum + arr[row][col];
    	}
      
    }
	    return sum;
}

console.log(sumArray(arr, arr_length));

//Output: 125






//Question 3:
//Create a webapp using HTML/JavaScript

//Write a webapp to implement a sliding puzzle. Here is the definition: "A sliding puzzle sliding block puzzle, or sliding tile puzzle is tour puzzle that challenges to slide (frequently flat) pieces along certain routes (usually on a board) to establish a certain end-configuration. the pieces to be moved may consist of simple shapes, or they may be imprinted with colors, patterns, sections of a larger picture (like a jigsaw puzzle), numbers, or letters." 
//Complete the following requirements for this webapp:
//
//a)  Create the board and use numbers as the piece to be moved.
// b) Use array(s) to store the values of the pieces and/or to store valid moves of pieces. You must implement at least one array.
// c) Add a "moves" <p> tag to update moves made.
// d) Add a "start Time" <p> tag that will show the current hours:minutes:seconds when the webapp is first launched.
// e) Add a "Restart Game" <button> tag that will restart the game when pressed (no warning necessary). 
// f) Add an "End Time" <p> tag that will show the end time when the puzzle is solved. This tag is right below the "Start Time" <p> tag; but does not appear until the puzzle is solved.
// g) Write event handlers for the following:
// - "Restart Button"
// - Change the color of a piece to red if the mouse is over a piece that cannot be moved - reset the color back when the mouse moves away from that piece -
// - Change the color of a piece to green if the mouse is over a piece that can be moved - reset color back when the mouse moves away from that piece.










