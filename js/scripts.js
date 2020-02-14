const cards = document.querySelectorAll('.memory-card');
cards.forEach(element => {
  element.addEventListener('click', flipCard);
});

function flipCard() {
  this.classList.add('flip');
}
