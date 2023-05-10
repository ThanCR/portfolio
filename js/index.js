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

const projectList = document.querySelectorAll('ul.proyects-list li')
projectList[0].addEventListener('click', () =>{
    window.location.href = "https://thanrg-todo-list-project.netlify.app/"
})
projectList[1].addEventListener('click', () =>{
    window.location.href = "https://thanrg-sticker-finder-app.netlify.app/"
})