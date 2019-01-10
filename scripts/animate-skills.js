let java = document.getElementsByClassName('skills-java');
let javaArray = [];
let currentWordJava = 0;
let java2 = document.getElementsByClassName('skills-java2');
let java2Array = [];
let currentWordJava2 = 0;
let angular = document.getElementsByClassName('skills-angular');
let angularArray = [];
let currentWordAngular = 0;
let react = document.getElementsByClassName('skills-react');
let reactArray = [];
let currentWordReact = 0;
let database = document.getElementsByClassName('skills-database');
let databaseArray = [];
let currentWordDatabase = 0;
let database2 = document.getElementsByClassName('skills-database2');
let database2Array = [];
let currentWordDatabase2 = 0;

java[0].style.opacity = 1;
for (let i = 0; i < java.length; i++) {
    javaArray.push(splitLetters(java[i]));
}
java2[0].style.opacity = 1;
for (let i = 0; i < java2.length; i++) {
    java2Array.push(splitLetters(java2[i]));
}
angular[0].style.opacity = 1;
for (let i = 0; i < angular.length; i++) {
    angularArray.push(splitLetters(angular[i]));
}
react[0].style.opacity = 1;
for (let i = 0; i < react.length; i++) {
    reactArray.push(splitLetters(react[i]));
}
database[0].style.opacity = 1;
for (let i = 0; i < database.length; i++) {
    databaseArray.push(splitLetters(database[i]));
}
database2[0].style.opacity = 1;
for (let i = 0; i < database2.length; i++) {
    database2Array.push(splitLetters(database2[i]));
}


function changeJavaWord() {
    let currentWord = changeWord(java, javaArray, currentWordJava);
    currentWordJava = (currentWord === javaArray.length - 1) ? 0 : currentWord + 1;
}

function changeJava2Word() {
    let currentWord = changeWord(java2, java2Array, currentWordJava2);
    currentWordJava2 = (currentWord === java2Array.length - 1) ? 0 : currentWord + 1;
}

function changeAngularWord() {
    let currentWord = changeWord(angular, angularArray, currentWordAngular);
    currentWordAngular = (currentWord === angularArray.length - 1) ? 0 : currentWord + 1;
}

function changeReactWord() {
    let currentWord = changeWord(react, reactArray, currentWordReact);
    currentWordReact = (currentWord === reactArray.length - 1) ? 0 : currentWord + 1;
}

function changeDatabaseWord() {
    let currentWord = changeWord(database, databaseArray, currentWordDatabase);
    currentWordDatabase = (currentWord === databaseArray.length - 1) ? 0 : currentWord + 1;
}

function changeDatabase2Word() {
    let currentWord = changeWord(database2, database2Array, currentWordDatabase2);
    currentWordDatabase2 = (currentWord === database2Array.length - 1) ? 0 : currentWord + 1;
}

function changeWord(skills, skillsArray, currentWord) {
    let cw = skillsArray[currentWord];
    let nw = currentWord === skills.length - 1 ? skillsArray[0] : skillsArray[currentWord + 1];
    for (let i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    return currentWord;
}


function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 340 + (i * 80));
}


function splitLetters(word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let letters = [];
    for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }
    return letters;
}

changeJavaWord();
changeJava2Word();
changeAngularWord();
changeReactWord();
changeDatabaseWord();
changeDatabase2Word();
setInterval(changeJavaWord, 3100);
setInterval(changeJava2Word, 3000);
setInterval(changeAngularWord, 3300);
setInterval(changeReactWord, 3200);
setInterval(changeDatabaseWord, 3500);
setInterval(changeDatabase2Word, 3400);

