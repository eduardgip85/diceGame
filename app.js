//take the 2 images
let imagen1 = document.getElementsByClassName("img1");
let imagen2 = document.getElementsByClassName("img2");

function loadDices(){
    
    //get the random dice
    imagen1[0].src = randomation();
    imagen2[0].src = randomation();

    //check who win or draw
    comprobar();

    //change the text for the new reroll
    let btn = document.getElementsByClassName("btn");
    btn[0].textContent = "Roll again!"
}

function randomation () {
    let randomNumber = Math.round(Math.random()*5+1);
    return `images/dice${randomNumber}.png`;
}

function comprobar(){
    let titulo = document.querySelector("h1");

    if(imagen1[0].src === imagen2[0].src){
        titulo.innerText = "Draw!";
    }else if(imagen1[0].src < imagen2[0].src){
        titulo.innerText = "Player 2 Wins!🏆";

    }else{
        titulo.innerText = "🏆Player 1 Wins!";
    }
}
