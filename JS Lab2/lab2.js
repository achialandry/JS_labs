//JavaScript Lab 2 by Landry Achia Ndong 

//Question 1: Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}
var numbers = [1,2,3];

function rotateLeft(numbers){
  
  var rem = numbers.shift();
  numbers[numbers.length] = rem;
  
  return numbers;
}

console.log(rotateLeft(numbers));


//Question 2: Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

var numbers = [5, 11, 9];

function rotateLeft(numbers){
  return numbers.reverse();
}

console.log(rotateLeft(numbers));


//Queston 3: Given an int array length 2, return true if it contains a 2 or a 3.
var numbers = [9, 3];

function checkvalue(numbers){
  if(numbers.includes(2)  || numbers.includes(3)){
    return true;
  }else
    return false;
} 
console.log(checkvalue(numbers));


//Question 4: Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array.
var numbers = [2, 3, 5];

function fix23(numbers){
  if(numbers.includes(2)  || numbers.includes(3)){
    if(numbers[0]==2 && numbers[1] ==3 ){
      numbers[1] =0;
      return numbers;
    }else if(numbers[1] ==2 && numbers[2]==3){
      numbers[2] =0;
      return numbers;
    }else{
      return numbers;
    }
  }else
    return numbers;
} 
console.log(fix23(numbers));


//Question 5: Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1
var numbers = [5, 2, 3];

function maxTriple(numbers){
  if(numbers.length>=1){
    numbers.sort(function(a,b){
      return a-b;
    });
      return numbers[numbers.length-1];
    }
  else{
    return "sorry can't work on empty array";
    }
} 
console.log(maxTriple(numbers));


//Question 6: Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1
var numbers = [8, 6, 7, 9, 5];

function swapEnds(numbers){
  if(numbers.length>=1){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    numbers.pop();
    numbers.shift();
    numbers.unshift(last);
    numbers.push(first);
    
      return numbers;
    }
  else{
    return "sorry can't work on empty array";
    }
} 
console.log(swapEnds(numbers));


//Question 7: We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

var numbers = [1, 3, 4, 5];

function unlucky1(numbers){
  if(numbers[0]==3 && numbers[1]==1 || numbers[1]==3 && numbers[0]==1 || numbers[numbers.length-1]==3 && numbers[numbers.length-2]==1 || numbers[numbers.length-2]==3 && numbers[numbers.length-2]==1){
     
    
      return true;
    }
  else{
    return false;
    }
} 
console.log(unlucky1(numbers));


//Question 8:  Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.
var numbers1 = [7, 3, 4, 5];
var numbers2 = [1, 3, 4, 5];

function front11(numbers1, numbers2){
  if(numbers1.length>0 && numbers2.length>0){
     new_arry = [numbers1[0], numbers2[0]];
      return new_arry;
    }else if (numbers1.length>0 && numbers2.length==0){
      new_arry = [numbers1[0]];
      return new_arry;
    }else if (numbers1.length==0 && numbers2.length>0){
      new_arry = [numbers2[0]];
      return new_arry;
    }
  else{
    new_arry = [];
      return new_arry;
    }
} 
console.log(front11(numbers1, numbers2));


//Question 9: We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

var numbers = [1, 2, 1, 3, 1];
 
    function isEverywhere(numbers){
      var idx = 0;
      for (; idx<numbers.length; idx= idx+2) {
        if(numbers[idx] !=1 && numbers[idx +1] !=1){
          return false;
        } 
      } 
     return true;
   }

   console.log(isEverywhere(numbers));


   //Question 10 For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}
 
    function tenRun(numbs){
	var new_tenRun = [];
	var not_in = -1;
	for(var k in numbs){
		if((numbs[k]%10)==0){
			not_in = numbs[k];
			new_tenRun.push(not_in); 
		}else if(not_in != -1){
			new_tenRun.push(not_in);
		}else{
			new_tenRun.push(numbs[k]);
		}
	}
	return new_tenRun;
}

 var numbers = [2, 10, 3, 4, 20, 5, 30, 9, 9, 6]; 
console.log(tenRun(numbers));

//Ouput : [2, 10, 10, 10, 20, 20, 30, 30, 30, 30]



//Question 11: Given an array of ints, return true if every 2 that appears in the array is next to another 2.
// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false

function twoTwo(numbs){
  if(numbs.includes(2) == true){
    var posit_2_last = numbs.lastIndexOf(2);
    var prev_2_before_last = numbs.lastIndexOf(2) - 1;
    if(numbs[prev_2_before_last] ==2){
      return true;
    }else{
      return false;
    }
    
  }else{
    return "A two is required in array to perform the task!";
  }

}
var numbers = [2, 2, 4, 2];
console.log(twoTwo(numbers));//output: false

// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false


//Question 12; Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.
function left_shifted(numbs){
  if(numbs.length > 1){
    var first = numbs.shift();
    var last = numbs.pop();
    numbs.unshift(last);
    numbs.push(first);
    
      return numbs;
    }else{
      return numbs;
  }

}
var numbers = [1, 2];
console.log(left_shifted(numbers));//Output: [2,1]
// shiftLeft([6, 2, 5, 3]) → [2, 5, 3, 6]
// shiftLeft([1, 2]) → [2, 1]
// shiftLeft([1]) → [1]


//Question 13: Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, or make a new array
// evenOdd([1, 0, 1, 0, 0, 1, 1]) → [0, 0, 0, 1, 1, 1, 1]
// evenOdd([3, 3, 2]) → [2, 3, 3]
// evenOdd([2, 2, 2]) → [2, 2, 2]

function evenOdd(numbs){
  new_arr = []
  
      for(var i in numbs){
        if((numbs[i]%2) ==0){
          new_arr.unshift(numbs[i]);
          
        }else{
          new_arr.push(numbs[i]);
      }
      
    }
  return new_arr;
}
var numbers = [1, 0, 1, 0, 0, 1, 1];
console.log(evenOdd(numbers));
//[0, 0, 0, 1, 1, 1, 1]




//Question 14: This is slightly more difficult version of the famous FizzBuzz problem which is sometimes given as a first problem for job interviews. (See also: FizzBuzz Code.) Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.

// fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
// fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
// fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]


function fizzBuzz(start, end){
	var new_arr = [];
	for(var i = start; i < end; i ++){
		if((i%3)==0){
			new_arr.push('Fizz');
		}else if((i%5)==0){
			new_arr.push('Buzz');
		}else{
			new_arr.push(""+i);
		}
	}
	return new_arr;
}

console.log(fizzBuzz(1, 11));

//Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]



//Question 15: Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.

function countClumps(new_arr){
	var clumps = 0;
	var number = -1;
	var clump_size = 0;
	for(var pos in new_arr){
		if(new_arr[pos]!=number){
			number = new_arr[pos];
			clump_size = 1;
		}else if(new_arr[pos]==number){
			clump_size ++;
			if(clump_size==2){
				clumps ++;
			}
		}
	}
	return clumps;
}

console.log(countClumps([1, 2, 2, 3, 4, 4])); //Outuput: 2


