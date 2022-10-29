const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');


function startGame() {
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }

  const questions = [{
    question: 'Which day is halloween 2022?',
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