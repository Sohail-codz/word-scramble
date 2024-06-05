const wordText = document.querySelector(".word")
const hintText = document.querySelector(".hint span")
const timeText = document.querySelector(".time b")
const userInput = document.querySelector("input")
const refreshBtn = document.querySelector(".refresh-button")
const checkBtn = document.querySelector(".check-button")

let correctWord;
let timer;

const initTimer = maxTime =>{
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Timeout! ${correctWord} was the correct answer.`)
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30)
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomWord.word.split("");
    for(let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomWord.hint;
    correctWord = randomWord.word.toLowerCase();
    userInput.value = "";
    userInput.setAttribute("maxlength", randomWord.word.length);
}

initGame();

const checkWord = () =>{
    let userWord = userInput.value.toLowerCase();
    if(!userWord)
        return alert('Enter a word to check!')
    if(userWord !== correctWord)
        return alert('Wrong answer!');
    alert(`${userWord.toUpperCase()} is the right word!`)
    initGame();
}

refreshBtn.addEventListener("click", initGame)
checkBtn.addEventListener("click", checkWord)