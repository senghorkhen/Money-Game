const cards = document.querySelectorAll('.memory-card');
cards.forEach(element => {
  element.addEventListener('click', flipCard);
});

let firstCard = null;
let secondCard = null;
let hasFlippedCard = false;
function flipCard() {
  this.classList.add('flip');
  
  // // catch value one one
  // console.log(this.dataset.framework);

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    // console.log(this.dataset.framework);
  }else {
    hasFlippedCard = false;
    secondCard = this;  
    // is match
    checkCardMatch();
  } 
}

// factory the code
function checkCardMatch() {
  let isMatchCard = firstCard.dataset.framework === secondCard.dataset.framework;
  if(isMatchCard) {
    removeEventFromCard();
  }else {
    unFlipCards();
  }
}
function removeEventFromCard() {
  firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
}
function unFlipCards() {
  const TIME_FLIP = 1500;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip'); 
  }, TIME_FLIP);
}

// randomly
// function run first ban tea mdong
(function shuffle(){
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() *12); // random pi 0 to 12
    card.style.order =randomCard;
  });
  // console.log(randomCard);
}) ();

cards.forEach(card => card.addEventListener('click', flipCard));