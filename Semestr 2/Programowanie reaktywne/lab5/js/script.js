let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

let number = document.querySelector('#index');

let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');

let pointsElem = document.querySelector('.score');
let restart = document.querySelector('.restart');
let index = 0;
let points = 0;

function setQuestion(index) {
    clearClass();
    question.innerHTML = preQuestions[index].question;
    answers[0].innerHTML = preQuestions[index].answers[0];
    answers[1].innerHTML = preQuestions[index].answers[1];
    answers[2].innerHTML = preQuestions[index].answers[2];
    answers[3].innerHTML = preQuestions[index].answers[3];

    if (preQuestions[index].answers.length === 2) {
        answers[2].style.display = 'none';
        answers[3].style.display = 'none';
    } else {
        answers[2].style.display = 'block';
        answers[3].style.display = 'block';
    }

    number.innerText = index + 1;
}

setQuestion(index);
next.addEventListener('click', function () {
    index++;
    if (index >= preQuestions.length) {
        list.style.display = 'none';
        results.style.display = 'block';
        userScorePoint.innerHTML = points;
    } else {
        setQuestion(index);
        activateAnswers();
    }
});

previous.addEventListener('click', function () {
    index--;
    if (index >= 0) {
        setQuestion(index);
        activateAnswers();
    } else {
        alert("Nie ma pytań!!!");
    }
});

function doAction(event) {
    if (event.target.innerHTML === preQuestions[index].correct_answer) {
        points++;
        pointsElem.innerText = points;
        markCorrect(event.target);
    } else {
        markInCorrect(event.target);
    }
    disableAnswers();
}

function activateAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', doAction);
    }
}
activateAnswers();

function disableAnswers() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener('click', doAction);
    }
}

function markCorrect(elem) {
    elem.classList.add('correct');
}

function markInCorrect(elem) {
    elem.classList.add('incorrect');
}

function clearClass() {
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('correct');
        answers[i].classList.remove('incorrect');
    }
}
