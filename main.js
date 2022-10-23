const boardEl = document.getElementById("board");
const numberEl = document.getElementById("number");
let numSelected = null;
let errors = 0;
let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

//onload function runs when window loads
window.onload = function () {
  setgame();
};

let setgame = () => {
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber)
    number.classList.add("input");
    numberEl.appendChild(number);
  }

  
  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < 9; j++) {
      let tile = document.createElement("div");
      tile.id = i.toString() + "-" + j.toString();
     
      if(board[i][j] !== '-'){
        tile.innerText = board[i][j]
        tile.classList.add("tile-start")
        }
        if(i==2 || i==5){
          tile.classList.add("line")
         }
         if(j==2 || j==5){
          tile.classList.add('left-line')
         }
         tile.addEventListener("click", selectTile) 
      tile.classList.add("inputt");
      boardEl.appendChild(tile);

    }
  }
};
//function for changing the selected button color 
function selectNumber(){
  if (numSelected != null) {
      numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile(){
  if(numSelected){
    if(this.innerText != ""){
      return;
    }
    let cords = this.id.split("-")
    let i = parseInt(cords[0])
    let j = parseInt(cords[1])
    
    if(solution[i][j]==numSelected.id){
      this.innerText = numSelected.id
      
    }else{
      errors+= 1;
      document.getElementById("errors").innerText = "errors:" + errors
    } 
  }
 
}
