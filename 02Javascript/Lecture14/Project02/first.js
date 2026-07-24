//Winner Logic 
// row : 012 , 345 , 678
// col : 036 , 147 , 258
// digo: 048, 246

//DRAW logic 
//when array complete full then stop 

const gridBox = ["","","","","","","","",""];
let totalInsert = 0 ;
let winner = false;
function checkWinner (palyer){
    if(gridBox[0]==palyer && gridBox[1]== palyer && gridBox[2]==palyer){
        return true;
    }
    else if(gridBox[3]==palyer && gridBox[4]== palyer && gridBox[5]==palyer){
        return true;
    }
    else if(gridBox[6]==palyer && gridBox[7]== palyer && gridBox[8]==palyer){
        return true;
    }else if(gridBox[0]==palyer && gridBox[3]== palyer && gridBox[6]==palyer){
        return true;
    }else if(gridBox[1]==palyer && gridBox[4]== palyer && gridBox[7]==palyer){
        return true;
    }else if(gridBox[2]==palyer && gridBox[5]== palyer && gridBox[8]==palyer){
        return true;
    }else if(gridBox[0]==palyer && gridBox[4]== palyer && gridBox[8]==palyer){
        return true;
    }else if(gridBox[2]==palyer && gridBox[4]== palyer && gridBox[6]==palyer){
        return true;
    }
    else {
        false;
    }
}


const board = document.getElementById('board');
const sta = document.getElementById('status');
let turn = 'X';
board.addEventListener('click' , (e)=>{
    // console.log(e);
    
    //winner logic and draw
    if(winner || totalInsert==9 || gridBox[e.target.id]!=""){
        return;
    }

    const box = e.target;
    box.textContent=turn;
    const index = box.id; //we can acess bos id  so jo iska id hoga wohi idex higa 
    gridBox[index] = turn;
    totalInsert++;

    if(checkWinner(turn)){
        sta.textContent= `Player ${turn} won the game`;
        winner =true;
        return;
    }


    if(totalInsert==9){
        sta.textContent= `Game is Draw`;
        return;
    }


    if(turn=='X'){
        turn ='O';
    }else{
        turn='X';   
    }
    sta.textContent= `Player ${turn} move`;

})



const bt = document.getElementById('resetbtn');
bt.addEventListener('click', ()=>{
    for(let i =0 ; i<9 ; i++){
        document.getElementById(i).textContent="";
        gridBox[i]="";
    }
    totalInsert=0;
    winner=false;
    sta.textContent= `Lets Start Again`;

})