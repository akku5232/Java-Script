//Challenge 1: Your Age in days
function ageInDays() {
    var birthYear = prompt("What year you were born... Good friend?");
    var totalDays = (2021-birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + totalDays + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function remove() {
    document.getElementById("ageInDays").remove();
}
//Challenge 2: Generate Cat
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    div.appendChild(image);
}

//Challenge 3: Rock Paper scissor
function rpsGame(yourChoice) {
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    results = decideWinner(humanChoice,botChoice) //human lost | bot win [1,0]
    message = finalMessage(results) //you won
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message); 

}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice,computerChoice) {
    console.log(yourChoice);
    console.log(computerChoice);
    rpsDatabse = {
        'rock': {'scissor':1,'rock':0.5,'paper' : 0},
        'paper': {'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}
    };

    var yourScore = rpsDatabse[yourChoice][computerChoice];
    var computerScore = rpsDatabse[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]) {
    if(yourScore === 0) {
        return {'message' : 'You Lost!','color' : 'red'};
    } else if(yourScore === 0.5) {
        return {'message' : 'You tied!', 'color' : 'yellow'};
    } else {
        return {'message' : 'You Won!', 'color' : 'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage) {
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow : 0px 10px 50px rgba(37, 50, 233,1);'>";
    messageDiv.innerHTML = "<h1 style='color :" + finalMessage['color'] + "; font-size: 60px; padding:30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow : 0px 10px 50px rgba(243, 38, 24,1);'>";
   

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
   

}

//challange 4 change the color of all  buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
}

function buttonColorChange(buttonThingy) {
    if(buttonThingy.value === 'red') {
        buttonRed();
    } else if(buttonThingy.value === 'green') {
        buttonGreen();
    } else if(buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if(buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonRed() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger')
    }
}

function buttonGreen() {
    for(let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success')
    }
}

function buttonColorReset() {
    for (let i = 0; i< all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary','btn-danger','btn-warning','btn-success'];

    for (let i =0; i <all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//challege 5 blackjacks
var blackjackGame = {
    'you' : {'scoreSpan' : '#your-blackjack-result', 'div' : '#your-box', 'score' : 0},
    'dealer' :  {'scoreSpan' : '#dealer-blackjack-result', 'div' : '#dealer-box', 'score':0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap' : {'2': 2,'3' :3,'4':4,'5':5,'6':6,'7' :7, '8' :8, '9':9,'10': 10,'K' : 10,'J' : 10,'Q':10, 'A' :[1,11]},
    'wins': 0,
    'losses' : 0,
    'draws' : 0,
    'isStand':false,
    'turnsOver' : false,

}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound  = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit) // instead of doing getElementById and getElementByClass

document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic) // instead of doing getElementById and getElementByClass

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);
function blackjackHit() {
    if(blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(YOU,card);
        updateScore(card,YOU);
        showScore(YOU);
    }
   
}
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(activePlayer,cardName) {
    if(activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${cardName}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    if(blackjackGame['turnsOver']  === true) {
        blackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for(let i=0; i<yourImages.length; i++) {
            yourImages[i].remove();
        }
        for(let i=0; i<dealerImages.length; i++) {
            dealerImages[i].remove();
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'red';
        document.querySelector('#blackjack-result').textContent = "let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }
  

}

function updateScore(card,activePlayer) {
    if(card === 'A')  {
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
   
}

function sleep(ms) {
    return new Promise(resolve  => setTimeout(resolve, ms));
}
function showScore(activePlayer) {
    if(activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] ===  true) {
        let card = randomCard();
        showCard(DEALER,card);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    
    blackjackGame['turnsOver'] =true;
    let winner = computeWinnner();
    showResult(winner);

}


//update the wins draws and losess
function computeWinnner() {
    let winner;

    if(YOU['score'] <= 21) {
        //condition higher score than dealer or when dealer busts you're 
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] >21)) {
            blackjackGame['wins']++;
            winner = YOU;
            
        } else if(YOU['score'] < DEALER['score'] ) {
            blackjackGame['losses']++;
            winner = DEALER;
           
        } else if(YOU['score']  === DEALER['score']) {
            blackjackGame['draws']++;
        }
    } else if(YOU['score'] > 21 && DEALER['score'] <= 21) {
        winner = DEALER;
        blackjackGame['losses']++;
    } else if(YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    return winner;
 }

function showResult(winner) {
    let message, messageColor;
    if(blackjackGame['turnsOver'] === true) {
        if(winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        } else if(winner == DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You loose!!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message ='You drew!';
            messageColor = 'black';
        }
    
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    
    }
   
}