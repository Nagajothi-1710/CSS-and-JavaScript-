function choice(playerchoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === computerchoice) {
        result = `Its tie both are choosed ${playerchoice}`;
    } else if(
        (playerchoice === 'rock' && computerchoice === 'scissors') ||
        (playerchoice === 'paper' && computerchoice === 'rock') ||
        (playerchoice === 'scissors' && computerchoice === 'paper')
    ){
    result = `You are win! ${playerchoice} beats ${computerchoice}`
}
else {
    result = `you are lose game! ${playerchoice} beats ${computerchoice}`

}
document.getElementById("result").innerText=result;
}