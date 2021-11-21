let turn = 'X';
let isgameover= false;

const changeTurn = ()=>{
return turn==='X'?'O':'X';
}

// gameWin function
gameWin = ()=>{
wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let boxText = document.getElementsByClassName('boxText')
wins.forEach(e=>{
if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[1]].innerText===boxText[e[2]].innerText) && boxText[e[0]].innerText!==''){
    isgameover=true;
    document.getElementById('info').innerText=turn+" won"
}
})

}

// logic
let box = document.getElementsByClassName('box')
Array.from(box).forEach(element=>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn
            gameWin()
            turn= changeTurn()

            if(!isgameover){

                document.getElementById('info').innerText="Turn for "+turn;

            }
        }
    })
})

// reset button 

// reset = document.getElementById('reset');

reset.addEventListener('click',()=>{

    turn="X";
    let boxText = document.querySelectorAll('.boxText')

    Array.from(boxText).forEach(element=>{
         element.innerText="";
    })
    document.getElementById('info').innerText="Turn for"+turn;


})