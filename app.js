const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector (".score-board");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById ("r");
const paper_div = document.getElementById ("p");
const scissors_div = document.getElementById ("s");

function getComputerChoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = userChoice + "beats " + computerChoice +". You win!";
}

function loose() {

}

function draw() {
	
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
		console.log("User wins!");
		win();
		break;
		case "rp":
		case "ps":
		case "sr":
		console.log("User looses!")
		loose();
		break;
		case "rr":
		case "pp":
		case "ss":
		console.log("It's a draw!")
		draw();
		break;
	}
}

function main() {
	rock_div.addEventListener("click", function() {
	game("r");
	})

	paper_div.addEventListener("click", function() {
	game("p");
	})

	scissors_div.addEventListener("click", function() {
	game("s");
	})
}

main();
