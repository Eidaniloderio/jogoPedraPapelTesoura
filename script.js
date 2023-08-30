const pontos = JSON.parse(localStorage.getItem("Pontos")) || {

    Vitorias: 0,
    Perdas: 0,
    Empates: 0
}

    atualizarPontos()

function playGame(play){
    const computerMove = pickComputerMove()
    let result = '';

    if (play === "Pedra"){
        if (computerMove === 'Pedra'){
        result = 'Empatou'
    } else if(computerMove === 'Papel'){
        result = 'Você perdeu'
    } else if( computerMove === 'Tesoura'){
        result = 'Você ganhou'
    } 

    } else if (play === "Papel"){
        if (computerMove === 'Papel'){
        result = 'Empatou'
    } else if(computerMove === 'Tesoura'){
        result = 'Você perdeu'
    } else if( computerMove === 'Pedra'){
        result = 'Você ganhou'
    }

    } else if (play === "Tesoura"){
        if (computerMove === 'Tesoura'){
        result = 'Empatou'
    } else if(computerMove === 'Pedra'){
        result = 'Você perdeu'
    } else if( computerMove === 'Papel'){
        result = 'Você ganhou'
    }
    
    }
    
    if (result == "Você ganhou"){
        pontos.Vitorias += 1
    } else if ( result == "Você perdeu"){
        pontos.Perdas += 1
    } else if ( result == "Empatou"){
        pontos.Empates +=1  
    }

    atualizarPontos() 
    
    document.querySelector(".jogadas").innerHTML = `Voçê     <img src="images/${play}.png"> <img src="images/${computerMove}.png"> Computador`

    document.querySelector(".resultados").innerHTML = `${result}!`  
    
    localStorage.setItem("Pontos", JSON.stringify(pontos))
}

function atualizarPontos(){
    document.querySelector( ".js-pontos").innerHTML = `Vitórias: ${pontos.Vitorias} - Perdas: ${pontos.Perdas} - Empates: ${pontos.Empates}`;
}

function pickComputerMove(){
    
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'Pedra';
} else if( randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'Papel';
} else if( randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'Tesoura';
}
    return computerMove
}



function reset(){
    let confirm = window.confirm("Realmente deseja resetar os pontos?")
    if (confirm == true){
        pontos.Vitorias = 0;
        pontos.Perdas = 0;
        pontos.Empates = 0;

        atualizarPontos();
        document.querySelector(".jogadas").innerHTML = ''
        document.querySelector(".resultados").innerHTML = ''
    }
}
