    let Max=prompt("Enter MAx limit");
    const Random=Math.floor((Math.random()*Max+1));
    let guess=prompt("Guess the Number");
    
    
do{
    
   
    if(guess=="quit"){
        console.log("You quitted the game");
        break;
    }
    if(guess==Random){
        console.log("You guessed the correct Number");
        
        break;
    }else{
        if(guess>Random){
            guess=prompt("You guessed the wrong the number guess it again. hint: Number is smaller than guessed one");
        }else if(guess<Random){
            guess=prompt("You guessed the wrong the number guess it again. hint: Number is greater than guessed one");
        }
        
        // console.log("random Number was:"+Random);
        
    }
}while(1)