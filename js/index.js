function animateCard(element){
    let div = element.lastElementChild;
    div.classList.remove('card-animationOut');
    div.classList.add('card-animationIn');
}

function quitAnimation(element){
    let div = element.lastElementChild;
    div.classList.remove('card-animationIn');
    div.classList.add('card-animationOut');
}