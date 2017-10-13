// JS lab 1 by Landry Achia Ndong
// Please find all here, file  made as lab1.js, but all tasks completed

<!DOCTYPE html>
<html>
<head>
	<title>JS Lab 1</title>
	<script>
		
		
		// string_three = prompt("please input second string: ");
	</script>

</head>
<body>
	<p>Question 1</p>
	<p id="question_1"></p>
		<script>
			// var string_one = "";
			// var string_two = "";
			

			function text_add(string_one, string_two){
				
				return string_one + string_two+string_two+string_one;
			}

			// string_one = prompt("please input first string: ");
			// string_two = prompt("please input second string: ");

			string_one = prompt("please input first string: ");
			string_two = prompt("please input second string: ");

			document.getElementById("question_1").innerHTML = text_add(string_one,string_two);
		</script>

	<p>Question 2</p>
	<p id="question_2"></p>
		<script>
			// var string_one = "";
			// var string_two = "";

			function text_ly_end(string_three){

				

				
				if(string_three.endsWith('ly')){
					return "result of \'ly'\ is true";
				}else{
					return "result of \'ly'\ is false";
				}
				
			}

			string_three = prompt("input a text with or without \'ly'\ ");

			document.getElementById("question_2").innerHTML = text_ly_end(string_three);
		</script>

		<p>Question 3</p>
		<p>Initial text string is "nicetext" see result below</p>
		<p id="question_3"></p>
			<script>
				// var string_one = "";
				// var string_two = "";

				function text_midtext(string_four){

						 var text_3 = (string_four.length)/2;
						return string_four.slice(0,text_3);
					}
					

				string_four = "nicetext";

				document.getElementById("question_3").innerHTML = text_midtext(string_four);
			</script>


		<p>Question 4</p>
		<p>Initial text string is "apple" see result below this case string is > 2 characters </p>
		<p id="question_4"></p>
			<script>
				// var string_one = "";
				// var string_two = "";

				function text_rotated(string_five){
					if(string_five.length>2){
						 var total_string = string_five.length;
						var last_two_char = string_five.slice(-2);
						 var first_two_char = string_five.slice(0,2);
             			var part_of_body = string_five.slice(2, string_five.length);
						 var middle_body = part_of_body.slice(0,part_of_body.length-2);
						 var rotated_text = last_two_char + middle_body + first_two_char;

						 return rotated_text;
						}else{
							return string_five;
						}
					}
					

				string_five = "apple";

				document.getElementById("question_4").innerHTML = text_rotated(string_five);
			</script>

		<p>Question 5</p>
		<p>Strings to be concatenated are "hole" and "eare". Please see result below</p>
		<p id="question_5"></p>
			<script>
				// var string_one = "";
				// var string_two = "";

				function text_concat(string_five,string_six){
					if(string_five.charAt(string_five.length-1) === string_six.charAt(0)){
					  var text1 = string_five.slice(0, (string_five.length-1));
					  return text1.concat(string_six);
					}else{
					  var adjuste_text = string_five.concat(string_six);
					  return adjuste_text;
					}
					}

					string_five = "hole";
					string_six = "eare";

				document.getElementById("question_5").innerHTML = text_concat(string_five, string_six);
			</script>

			<p>Question 6</p>
				<p>returns true or false if first two chars and last two chars are thesame In this case example used is "edited". Please see result below</p>
				<p id="question_6"></p>

			<script>

				
				function text_char_at(string_five){
					if((string_five.charAt(0) && string_five.charAt(1)) === (string_five.charAt(string_five.length-1) && string_five.charAt(string_five.length-1))){
					  
					  return true;
					}else{
					  
					  return false;
					}
					}

					string_five = "edited";

					document.getElementById("question_6").innerHTML = text_char_at(string_five);


			</script>


			<p>Question 7</p>
		<p>Strings to be concatenated are "ibing". Please see result below</p>
		<p id="question_7"></p>
			<script>
				// var string_one = "";
				// var string_two = "";

				function text_concat(string_five){
					var test1 = 'a';
					var test2 = 'b';
					if ((string_five.charAt(0) === test1) && (string_five.charAt(1) === test2)){
						return string_five;}
					else if(string_five.charAt(0) === test1 ){
					  var text1 = string_five.slice(1, (string_five.length));
					  return text1;
					}else if(string_five.charAt(1) === test2){
						var ini_text = string_five.charAt(0)
					  	var text2 = string_five.slice(2,string_five.length);
					  	return ini_text + text2; 
					}else{
            
						var text2 = string_five.slice(2,string_five.length);
            			return text2;
					} 
				}

					string_five = "ibing";
					

				document.getElementById("question_7").innerHTML = text_concat(string_five, string_six);
			</script>



				<p>Question 8</p>
				<p>String to work with is "example". Please see result below</p>
				
				<p id="question_8"></p>
				

			<script>
				
				function text_char_position(string_five){
					var test = 'x';
					if(string_five.charAt(0) === test ){

						new_text = string_five.slice(1,string_five.length);
						return new_text;
					}else if (string_five.charAt(1) === test){
						new_text1 = string_five.charAt(0);
						new_text2 = string_five.slice(2,string_five.length);
						return new_text1.concat(new_text2);
						
					}else{
					  
					  return string_five;
					}
					}

					string_five = "example";

					document.getElementById("question_8").innerHTML = text_char_position(string_five);

			</script>



			<p>Question 9</p>
		<p>Strings to be used are "yes" and "". Please see result below</p>
		<p id="question_9"></p>
			<script>
				// var string_one = "";
				// var string_two = "";
			function text_concat(string_five,string_six){
				if(string_five.length>0 && string_six.length>0){
					  var text1 = string_five.charAt(0);
					  var text2 = string_six.charAt(0);
					  return text1.concat(text2);
					}else {
						if(string_five.length==0){
							 string_five="@";
							 text2 = string_six.charAt(0);
					  		return string_five.concat(text2);
						}
						if (string_six.length==0) {
							string_six="@";
							 text2 = string_five.charAt(0);
					  		return text2.concat(string_six);
						}
					  
					}
				}

					string_five = "yes";
					string_six = "";

				document.getElementById("question_9").innerHTML = text_concat(string_five, string_six);
			</script>


			<p>Question 10</p>
		<p>Strings of even characters "banana". Please see result below</p>
		<p id="question_10"></p>
			<script>
				// var string_one = "";
				// var string_two = "";
			function text_in_middle(string_five){
				var ln = string_five.length;
        		var mod = ln%2
				if(mod == 0){
					if(ln>2){
					  var text1 = string_five.slice((ln/2)-1, (ln/2)+1);
					  
					  return text1;
					}else {
						
					  		return string_five;
					}
				}
			}

					string_five = "banana";
					

				document.getElementById("question_10").innerHTML = text_in_middle(string_five);
			</script>

</body>
</html>




