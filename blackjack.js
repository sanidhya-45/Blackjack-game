
// let messageEl= document.getElementById("message-el")
// let isalive=false;
// let cardEl=document.querySelector("#cards-el")
// // let sumEl=document.getElementById("sum-el")
// let sumEl=document.querySelector("#sum-el")


// let startEl=document.getElementById("start-el")


// function rendergame()
// {
//     cardEl.textContent="Cards: "
//     for(let i=0;i<cardgame.length;i++)
//     {
    //         cardEl.textContent+=cardgame[i]+ " "
    //         // sum=sum+cardgame[i]
    //     }
//     sumEl.textContent= "Sum: "+ sum
//     if(sum<21)
//     {
    //         message="Do you want to draw another card?"
        
//     }
//     else if(sum===21)
//     {
    //         startEl.textContent="New Game"
    //         message="You've got Blackjack!"
    //         // rendergame()
    //         hasblackjack=true
    
    
    //     }
    //     else{
//         message="You lost!"
//         startEl.textContent="New Game"
//     }
//     messageEl.textContent=" "+ message;


// }
// function startgame()
// {
    //     isalive=true
//     let firstcard=getrandomcard()
// // let secondcard=getrandomcard()
//   let cardgame=[firstcard]
// //   hasblackjack=false
//   message="" // empty string
//   let sum=cardgame[0]
//   rendergame()
// }
// function newcard()
// {
    //     if(sum<21)
    //     {
        //     let newcardvalue= getrandomcard()
        //     cardgame.push(newcardvalue)
        //     sum=sum+newcardvalue
        //     rendergame()
        //     }
        // 
let cards=[]
let sum=0
isalive=false;
function getrandomcard()
{
       let value=Math.floor(Math.random()*13) +1
       if(value==1) return 11
       else if(value>10) return 10
       else return value
}
//object creation
let player={
    name:"Player",
    chips:500
}
message=""
let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+":  $"+player.chips
function playgame()
{
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
        cardEl.textContent+=cards[i]+" "
    sumEl.textContent="Sum: "+sum
    if(sum===21)
        {
            message="You've got a blackjack!"
            messageEl.textContent=" "+message
            document.getElementById("newcard-el").style.display = "none";
            player.chips+=500
            playerEl.textContent=player.name+":  $"+player.chips
            document.getElementById("reset-el").style.display = "inline";
            // reset()
        }       
    else if(sum<21)
        {
            message="Do you want to draw another card?"
            document.getElementById("newcard-el").style.display="inline"
        }
    else
       { 
             message="You lost!"
             player.chips-=200
             playerEl.textContent=player.name+":  $"+player.chips
             document.getElementById("newcard-el").style.display = "none";
             document.getElementById("reset-el").style.display = "inline";
       }
    messageEl.textContent=" "+message
        // document.getElementById("start-el").style.display = "none";
}
isalive=true;
// console.log("dfghjk");
function startgame()
{
    // document.getElementById("newcard-el").style.display=;
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard,secondcard]
    sum=cards[0] + cards[1]
    document.getElementById("start-el").style.display="none"
    playgame()
}
function newcard()
{
    if(isalive && sum<21)
    {
        let newcard=getrandomcard()
        cards.push(newcard)
        sum=sum+newcard
        playgame()
    }
    else{
        document.getElementById("newcard-el").style.display="none";
    }
}
function reset()
{
    player.chips=500
    playerEl.textContent=player.name+":  $"+player.chips

    document.getElementById("start-el").style.display ="inline";
    
    document.getElementById("reset-el").style.display = "none";
    messageEl.textContent="Want to play a round?"
    cardEl.textContent="Cards: ";
    sumEl.textContent="Sum: ";
    
    
}