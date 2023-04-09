var randomValue = Math.floor(Math.random()*10) + 1;

function inRange(val){
	return (val > 0) && (val < 11);
}

function guess(){
	var userGuess = document.getElementById("guess").value;
	var resp = document.getElementById("response");
	if(!inRange(userGuess)){
		resp.innerHTML = "Input correct number";
	}else{
		if(userGuess == randomValue){
			resp.innerHTML = "You guessed correctly. The new number is generated";
			randomValue = Math.floor(Math.random()*10) + 1;
		}else{
			resp.innerHTML = "You guessed wrong. Try again";
		}
	}
}