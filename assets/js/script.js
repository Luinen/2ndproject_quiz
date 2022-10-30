const startButton = document.getElementById('start-btn');
const highScoreButton = document.getElementById('highscore-btn');
const scoreNumber = document.getElementById ('score');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let score = 0;
const SCORE_POINTS = 10;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  highScoreButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  startButton.style.marginTop = 'auto';
  startButton.style.fontSize = '1.5rem';
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [{
    question: 'Which day is Halloween in 2022?',
    answers: [{
        text: 'Monday, 31 October',
        correct: true
      },
      {
        text: 'Sunday, 30 October',
        correct: false
      },
      {
        text: 'Tuesday, 01 November',
        correct: false
      },
      {
      text: 'Wednesday, 02 November',
      correct: false
      }
    ]
  },
  {
    question: 'Where does the term "jack o\'lantern" come from?',
    answers: [{
        text: 'from a Swedish village',
        correct: false
      },
      {
        text: 'from an Irish folktale',
        correct: true
      },
      {
        text: 'from an Icelandic lake',
        correct: false
      },
      {
        text: 'None of them',
        correct: false
      }
    ]
  },
  {
    question: ' When was Halloween first celebrated in the United States?',
    answers: [{
        text: '1796',
        correct: false
      },
      {
        text: '1840',
        correct: true
      },
      {
        text: '1912',
        correct: false
      },
      {
        text: '1953',
        correct: false
      }
    ]
  },
  {
    question: 'Why did people start dressing up in Halloween costumes?',
    answers: [{
        text: 'because it is fun',
        correct: false
      },
      {
        text: 'to disguise themselves when the spirits come',
        correct: false
      },
      {
        text: 'to see the otherworld',
        correct: false
      },
      {
        text: 'to repel spirits that they believed came back to Earth',
        correct: true
      }
    ]
  },
  {
    question: 'What vegetable is part of a tradition on the night before Halloween?',
    answers: [{
        text: 'Pepper',
        correct: false
      },
      {
        text: 'Cucumber',
        correct: false
      },
      {
        text: 'Cabbage',
        correct: true
      },
      {
        text: 'Pumpkin',
        correct: false
      }
    ]
  },{
    question: 'Why do some people wear clothes inside out on Halloween?',
    answers: [{
        text: 'to see a witch at midnight',
        correct: true
      },
      {
        text: 'to transform into an animal',
        correct: false
      },
      {
        text: 'to save the planet',
        correct: false
      },
      {
        text: 'to make a deal with the devil',
        correct: false
      }
    ]
  },{
    question: 'What is the most commercially successful horror movie of all time?',
    answers: [{
        text: 'Paranormal Activity',
        correct: false
      },
      {
        text: 'Deliver Us from Evil',
        correct: false
      },
      {
        text: 'Alien',
        correct: false
      },
      {
        text: 'It',
        correct: true
      }
    ]
  },{
    question: 'What was used before pumpkins to make jack o\'lanterns?',
    answers: [{
        text: 'Watermelon',
        correct: false
      },
      {
        text: 'Potatoes',
        correct: true
      },
      {
        text: 'Onion',
        correct: false
      },
      {
        text: 'Beetroot',
        correct: false
      }
    ]
  },{
    question: 'What does the black cat symbolize?',
    answers: [{
        text: 'Power and strength',
        correct: false
      },
      {
        text: 'Mystery and secrecy',
        correct: true
      },
      {
        text: 'Life and death',
        correct: false
      },
      {
        text: 'Freedom and vanity',
        correct: false
      }
    ]
  },{
    question: 'What is the name of the pot witches use to cook up their potions?',
    answers: [{
        text: 'Magic cooking pot',
        correct: false
      },
      {
        text: 'Cauldron',
        correct: true
      },
      {
        text: 'Black pot',
        correct: false
      },
      {
        text: 'Wok',
        correct: false
      }
    ]
  },
]
