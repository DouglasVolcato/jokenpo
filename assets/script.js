let pointsComputer = 0
let pointsPlayer = 0
let draw = 0

function start(){
    const buttons = document.querySelectorAll("button");
    const p = document.querySelectorAll("p");
    for (let n of buttons){
        document.querySelector("#options").removeChild(n);
    }
    for (let n of p){
        document.querySelector("#screen").removeChild(n);
    }

    document.querySelector("#options").insertAdjacentHTML("beforeend", `
        <button class="match" onclick="match(1)">PEDRA</button>
        <button class="match" onclick="match(2)">PAPEL</button>
        <button class="match" onclick="match(3)">TESOURA</button>
    `)

    document.querySelector("#screen").insertAdjacentHTML("beforeend", `
        <p style="text-align:center; font-weight:bold; font-size: 2vw">FAÇA UMA JOGADA<p>
        <div class="points">
            <p style="text-align:left">Jogador: ${pointsPlayer}<p>
            <p style="text-align:left">Computador: ${pointsComputer}<p>
        </div>
    `)
}

function match(num){
    const computer = Math.floor(Math.random() * 3+1);
    const player = num;
    let typePlayer = "";
    let typeComputer = "";

    if (player == 1 && computer == 1) {
      draw+=1;
      typeComputer = (`Computador: Pedra`);
      typePlayer = (`Jogador: Pedra`);
    } else if (player == 1 && computer == 2) {
      pointsComputer+=1;
      typeComputer = (`Computador: Papel`);
      typePlayer = (`Jogador: Pedra`);
    } else if (player == 1 && computer == 3) {
      pointsPlayer+=1;
      typeComputer = (`Computador: Tesoura`);
      typePlayer = (`Jogador: Pedra`);
    } else if (player == 2 && computer == 1) {
      pointsPlayer+=1;
      typeComputer = (`Computador: Pedra`);
      typePlayer = (`Jogador: Papel`);
    } else if (player == 2 && computer == 2) {
      draw+=1;
      typeComputer = (`Computador: Papel`);
      typePlayer = (`Jogador: Papel`);
    } else if (player == 2 && computer == 3) {
      pointsComputer+=1;
      typeComputer = (`Computador: Tesoura`);
      typePlayer = (`Jogador: Papel`);
    } else if (player == 3 && computer == 1) {
      pointsComputer+=1;
      typeComputer = (`Computador: Pedra`);
      typePlayer = (`Jogador: Tesoura`);
    } else if (player == 3 && computer == 2) {
      pointsPlayer+=1;
      typeComputer = (`Computador: Papel`);
      typePlayer = (`Jogador: Tesoura`);
    } else if (player == 3 && computer == 3) {
      draw+=1;
      typeComputer = (`Computador: Tesoura`);
      typePlayer = (`Jogador: Tesoura`);
    }

    for (let n of (document.querySelector("#screen").children)){
        n.style.display = "none";
    }

    document.querySelector("#screen").insertAdjacentHTML("beforeend", `
        <div style="display:flex; justify-content:space-evenly">
            <div>
                <p style="text-align:left">Jogador: ${pointsPlayer}<p>
                <p style="text-align:left">Computador: ${pointsComputer}<p>
                <p style="text-align:left">Empate: ${draw}<p>
            </div>
            <div>
                <p style="text-align:left">${typePlayer}<p>
                <p style="text-align:left">${typeComputer}<p>
            </div>
        </div>
    `)
}