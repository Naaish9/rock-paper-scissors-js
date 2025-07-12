function getComputerChoice(){
    let choice 

    if (Math.random() < 0.3){
        choice = "rock"
    } else if (Math.random() < 0.6){
        choice = "paper"
    }else{
        choice = "scissors"
    }

    return choice

    

}

console.log(getComputerChoice())