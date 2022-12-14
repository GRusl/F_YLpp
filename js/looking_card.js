const cards = document.querySelectorAll(".looking-card");

cards.forEach(card => {
    card.addEventListener("mousemove", onMousemoveCardHandler);
    card.addEventListener("mouseleave", onMouseleaveCardHandler);
});

function onMousemoveCardHandler(evt) {
    const cardInner = this.querySelector(".looking-card__inner");
    const halfHeight = cardInner.offsetHeight / 2;
    const halfWidth = cardInner.offsetWidth / 2;
    const y = evt.offsetY;
    const x = evt.offsetX;
    cardInner.style.transform = `rotateX(${(-y + halfHeight) /
    12}deg) rotateY(${(x - halfWidth) / 10}deg)`;
}

function onMouseleaveCardHandler(evt) {
    const cardItem = this.querySelector(".looking-card__inner");

    cardItem.style.transform = "";
}
