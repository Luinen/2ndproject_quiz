const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: 'Which day is Halloween in 2022?',
    choice1: 'Monday, 31 October',
    choice2: 'Sunday, 30 October',
    choice3: 'Tuesday, 01 November',
    choice4: 'Wednesday, 02 November',
    answer: 1
  },
  {
    question: 'Where does the term "jack o\'lantern" come from?',
    choice1: 'from a Swedish village',
    choice2: 'from an Irish folktale',
    choice3: 'from an Icelandic lake',
    choice4: 'None of them',
    answer: 2
  },
  {
    question: 'When was Halloween first celebrated in the United States?',
    choice1: '1778',
    choice2: '1840',
    choice3: '1914',
    choice4: '1960',
    answer: 2
  },
  {
    question: 'Why did people start dressing up in Halloween costumes?',
    choice1: 'because it is fun',
    choice2: 'to disguise themselves when the spirits come',
    choice3: 'to see the otherworld',
    choice4: 'to repel spirits that they believed came back to Earth',
    answer: 2
  },
  {
    question: 'What vegetable is part of a tradition on the night before Halloween?',
    choice1: 'Pepper',
    choice2: 'Cucumber',
    choice3: 'Cabbage',
    choice4: 'Pumpkin',
    answer: 3
  },
  {
    question: 'Why do some people wear clothes inside out on Halloween?',
    choice1: 'to see a witch at midnight',
    choice2: 'to transform into an animal',
    choice3: 'to save the planet',
    choice4: 'to make a deal with the devil',
    answer: 1
  },
  {
    question: 'What is the most commercially successful horror movie of all time?',
    choice1: 'Paranormal Activity',
    choice2: 'Deliver Us from Evil',
    choice3: 'Alien',
    choice4: 'It',
    answer: 4
  },
  {
    question: 'What was used before pumpkins to make jack o\'lanterns?',
    choice1: 'Watermelon',
    choice2: 'Beetroots',
    choice3: 'Onions',
    choice4: 'Potatoes',
    answer: 4
  },
  {
    question: 'What does the black cat symbolize?',
    choice1: 'Power and strength',
    choice2: 'Life and death',
    choice3: 'Mystery and secrecy',
    choice4: 'Freedom and vanity',
    answer: 3
  },
  {
    question: 'What is the name of the pot witches use to cook up their potions?',
    choice1: 'Magic cooking pot',
    choice2: 'Cauldron',
    choice3: 'Black pot',
    choice4: 'Wok',
    answer: 2
  }
];

const CORRECT_BONUS = 100;
const MAX_QUESTIONS = 10;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/game_over.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset.number;

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

function incrementScore (number) {
  score += number;
  scoreText.innerText = score;
}

startGame();