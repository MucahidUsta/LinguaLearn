// Vocabulary categories
export const vocabularyCategories = [
  {
    id: 'basics',
    title: 'Basic Words',
    description: 'Essential everyday vocabulary',
    icon: 'book-open',
    color: '#3294FF',
    progress: 0.3,
    wordCount: 50
  },
  {
    id: 'travel',
    title: 'Travel & Places',
    description: 'Words for travelers',
    icon: 'plane',
    color: '#68DAFF',
    progress: 0.1,
    wordCount: 100
  },
  {
    id: 'business',
    title: 'Business English',
    description: 'Professional vocabulary',
    icon: 'briefcase',
    color: '#FF9F32',
    progress: 0,
    wordCount: 80
  },
  {
    id: 'academic',
    title: 'Academic Words',
    description: 'For studying and research',
    icon: 'graduation-cap',
    color: '#00B44B',
    progress: 0,
    wordCount: 120
  },
  {
    id: 'idioms',
    title: 'Idioms & Phrases',
    description: 'Common expressions',
    icon: 'message-circle',
    color: '#FFC532',
    progress: 0,
    wordCount: 60
  }
];

// Words data for the basics category
export const basicWords = [
  {
    id: 'word1',
    word: 'Hello',
    pronunciation: '/həˈloʊ/',
    definition: 'Used as a greeting or to begin a phone conversation.',
    examples: ['Hello, how are you today?', 'He said hello to everyone at the party.'],
    partOfSpeech: 'exclamation',
    synonyms: ['hi', 'greetings', 'hey'],
    audio: 'hello.mp3',
    learned: false
  },
  {
    id: 'word2',
    word: 'Goodbye',
    pronunciation: '/ˌɡʊdˈbaɪ/',
    definition: 'Used when leaving or ending a conversation.',
    examples: ['She waved goodbye as the train departed.', 'It was hard to say goodbye.'],
    partOfSpeech: 'exclamation',
    synonyms: ['bye', 'farewell', 'see you'],
    audio: 'goodbye.mp3',
    learned: false
  },
  {
    id: 'word3',
    word: 'Thank you',
    pronunciation: '/ˈθæŋk juː/',
    definition: 'Used to express gratitude or appreciation.',
    examples: ['Thank you for your help!', 'She said thank you with a smile.'],
    partOfSpeech: 'exclamation',
    synonyms: ['thanks', 'appreciate it'],
    audio: 'thankyou.mp3',
    learned: false
  },
  {
    id: 'word4',
    word: 'Yes',
    pronunciation: '/jes/',
    definition: 'Used to give a positive response or to express agreement.',
    examples: ['Yes, I would like to go.', 'She nodded and said yes.'],
    partOfSpeech: 'exclamation',
    synonyms: ['yeah', 'correct', 'affirmative'],
    audio: 'yes.mp3',
    learned: false
  },
  {
    id: 'word5',
    word: 'No',
    pronunciation: '/noʊ/',
    definition: 'Used to give a negative response or to express disagreement.',
    examples: ['No, I don\'t want any more.', 'He shook his head no.'],
    partOfSpeech: 'exclamation',
    synonyms: ['nope', 'negative', 'nah'],
    audio: 'no.mp3',
    learned: false
  }
];

// Grammar lessons data
export const grammarLessons = [
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    description: 'Learn to talk about habits, facts, and routines',
    level: 'Beginner',
    icon: 'clock',
    color: '#3294FF',
    progress: 0.2,
    unlocked: true
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    description: 'Express actions happening now or around now',
    level: 'Beginner',
    icon: 'activity',
    color: '#68DAFF',
    progress: 0,
    unlocked: true
  },
  {
    id: 'past-simple',
    title: 'Past Simple Tense',
    description: 'Talk about completed actions in the past',
    level: 'Beginner',
    icon: 'rewind',
    color: '#FF9F32',
    progress: 0,
    unlocked: false
  },
  {
    id: 'future-simple',
    title: 'Future Simple',
    description: 'Discuss plans and predictions for the future',
    level: 'Intermediate',
    icon: 'fast-forward',
    color: '#00B44B',
    progress: 0,
    unlocked: false
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    description: 'Learn "if" clauses and conditional sentences',
    level: 'Intermediate',
    icon: 'git-branch',
    color: '#FFC532',
    progress: 0,
    unlocked: false
  }
];

// Present Simple lesson details
export const presentSimpleLesson = {
  id: 'present-simple',
  title: 'Present Simple Tense',
  introduction: 'The present simple tense is used to talk about facts, habits, and routines. It describes actions that happen regularly or are generally true.',
  rules: [
    {
      id: 'rule1',
      title: 'Form for I, You, We, They',
      explanation: 'Use the base form of the verb:',
      examples: ['I work in an office.', 'You play tennis well.', 'We live in London.', 'They speak English.']
    },
    {
      id: 'rule2',
      title: 'Form for He, She, It',
      explanation: 'Add -s or -es to the base form:',
      examples: ['He works in an office.', 'She plays tennis well.', 'It costs a lot.', 'He watches TV every day.']
    },
    {
      id: 'rule3',
      title: 'Negative Form',
      explanation: 'Use do not (don\'t) or does not (doesn\'t) + base form:',
      examples: ['I don\'t work on Sundays.', 'He doesn\'t like coffee.', 'They don\'t live here.']
    },
    {
      id: 'rule4',
      title: 'Question Form',
      explanation: 'Use do or does + subject + base form:',
      examples: ['Do you play tennis?', 'Does she work here?', 'Do they live in Paris?']
    }
  ],
  useCases: [
    'Facts and general truths: Water boils at 100 degrees Celsius.',
    'Habits and routines: She walks to work every day.',
    'Schedules and timetables: The train leaves at 9:00 AM.',
    'Preferences and opinions: I prefer coffee to tea.'
  ],
  tips: [
    'Remember to add -s/-es only in the third person singular (he, she, it).',
    'Special spelling rules apply when adding -s: study → studies, watch → watches',
    'For verbs ending in -y, change y to i and add -es: try → tries',
    'Some verbs have irregular forms: have → has, be → is/am/are'
  ]
};

// Practice exercises
export const practiceExercises = [
  {
    id: 'vocab-quiz-1',
    title: 'Basic Vocabulary Quiz',
    type: 'quiz',
    category: 'vocabulary',
    difficulty: 'beginner',
    questionCount: 10,
    timeEstimate: '5 min',
    icon: 'help-circle',
    color: '#3294FF'
  },
  {
    id: 'grammar-fill-1',
    title: 'Present Simple Fill-in',
    type: 'fill-in-blanks',
    category: 'grammar',
    difficulty: 'beginner',
    questionCount: 8,
    timeEstimate: '8 min',
    icon: 'edit-3',
    color: '#68DAFF'
  },
  {
    id: 'listening-1',
    title: 'Listening Comprehension',
    type: 'listening',
    category: 'listening',
    difficulty: 'beginner',
    questionCount: 5,
    timeEstimate: '10 min',
    icon: 'headphones',
    color: '#FF9F32'
  },
  {
    id: 'sentence-building',
    title: 'Sentence Building',
    type: 'word-order',
    category: 'grammar',
    difficulty: 'beginner',
    questionCount: 6,
    timeEstimate: '7 min',
    icon: 'layers',
    color: '#00B44B'
  }
];

// Basic vocabulary quiz questions
export const basicVocabQuizQuestions = [
  {
    id: 'q1',
    question: 'What is the correct meaning of "Hello"?',
    options: [
      'A greeting when meeting someone',
      'A farewell when leaving', 
      'An expression of gratitude', 
      'An exclamation of surprise'
    ],
    correctAnswer: 0,
    explanation: '"Hello" is used as a greeting when meeting or encountering someone.'
  },
  {
    id: 'q2',
    question: 'Which word means the opposite of "yes"?',
    options: ['Maybe', 'Sometimes', 'No', 'Perhaps'],
    correctAnswer: 2,
    explanation: '"No" is the opposite of "yes" and is used to express a negative response.'
  },
  {
    id: 'q3',
    question: 'What does "Thank you" express?',
    options: ['Apology', 'Gratitude', 'Confusion', 'Agreement'],
    correctAnswer: 1,
    explanation: '"Thank you" expresses gratitude or appreciation for something.'
  },
  {
    id: 'q4',
    question: 'Choose the correct synonym for "Goodbye"',
    options: ['Hello', 'Welcome', 'Farewell', 'Greetings'],
    correctAnswer: 2,
    explanation: '"Farewell" is a synonym for "Goodbye" - both are used when leaving or ending a conversation.'
  },
  {
    id: 'q5',
    question: 'When would you typically say "Good morning"?',
    options: [
      'Before going to bed', 
      'During the first part of the day', 
      'In the evening', 
      'When meeting someone for the first time'
    ],
    correctAnswer: 1,
    explanation: '"Good morning" is said during the first part of the day, typically before noon.'
  }
];