let score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreElement();
document.querySelector(".resetBtn").addEventListener("click",()=>{
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScoreElement();

    document.querySelectorAll(".moves img")[0].setAttribute("src","./assets/rock_1.png");
    document.querySelectorAll(".moves img")[1].setAttribute("src","./assets/rock_1.png");
    // src = "./assets/rock_1.png"
    console.log(score.wins,score.losses,score.ties)
})
var btn = document.querySelectorAll(".buttons button");
for(var i=0;i<document.querySelectorAll(".buttons button").length;i++)
{
    let val = document.querySelectorAll(".buttons button")[i].value;
    document.querySelectorAll(".buttons button")[i].addEventListener("click",()=>{
        console.log("Your move is : "+val)
        playGame(val)
    })
}
function playGame(playMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playMove === 'scissor_3'){
        if(computerMove==='./assets/rock_1.png')
        result='You Lose!';

        else if(computerMove==='./assets/paper_2.png')
        result='You Win!';

        else if(computerMove==='./assets/scissor_3.png')
        result='Draw!';
    }
    else if(playMove === 'paper_2'){
        if(computerMove==='./assets/rock_1.png')
        result='You Win!';

        else if(computerMove==='./assets/paper_2.png')
        result='Draw!';

        else if(computerMove==='./assets/scissor_3.png')
        result='You Lose!';
    }
    else if(playMove === 'rock_1'){
        if(computerMove==='./assets/rock_1.png')
        result='Draw!';

        else if(computerMove==='./assets/paper_2.png')
        result='You Lose!';

        else if(computerMove==='./assets/scissor_3.png')
        result='You Win!';
    }

    if(result === 'You Win!')
    score.wins+=1;
    else if(result === 'You Lose!')
    score.losses+=1;
    else if(result === 'Draw!')
    score.ties+=1;

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement(); 

    document.querySelector('.res').innerHTML= result;

    document.querySelector('.moves').innerHTML= 
    `You
    <img src="./assets/${playMove}.png">
    <img src="${computerMove}">
 Computer`;
}
function pickComputerMove(){
    let num = Math.random();
    num = Math.floor(num*3 + 1);
    let link = "./assets/rock_1.png"
    if(num === 1){
        console.log("Computer move : Rock")
        link = "./assets/rock_"+num+".png"
    }
    else if(num === 2){
        console.log("Computer move : Paper")
        link = "./assets/paper_"+num+".png"
    }
    else if(num === 3){
        console.log("Computer move : Scissor")
        link = "./assets/scissor_"+num+".png"
    }
    return link
}
function updateScoreElement(){
    document.querySelector(".score").innerHTML= `Wins : ${score.wins} -- Losses : ${score.losses} -- Ties : ${score.ties}`
}