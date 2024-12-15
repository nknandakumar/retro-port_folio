const quizQuestions = [
    {
      question: "What year did Microsoft release Windows 95?",
      options: ["1995", "1994", "1993", "1996"],
      answer: "1995"
    },
    {
      question: "Which company introduced the first iMac in 1998?",
      options: ["Apple", "IBM", "Dell", "HP"],
      answer: "Apple"
    },
    {
      question: "What was the original name of Google?",
      options: ["Backrub", "WebCrawler", "GoSearch", "PageRank"],
      answer: "Backrub"
    },
    {
      question: "Which company became famous for creating the PlayStation in 1994?",
      options: ["Sony", "Nintendo", "Sega", "Microsoft"],
      answer: "Sony"
    },
    {
      question: "Which company launched its first search engine named 'Yahoo!' in 1994?",
      options: ["Yahoo!", "Altavista", "Lycos", "Netscape"],
      answer: "Yahoo!"
    },
    {
      question: "What company was co-founded by Bill Gates in 1975 but rose to massive success in the 90s?",
      options: ["Microsoft", "Apple", "Intel", "IBM"],
      answer: "Microsoft"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let correctAnswers = [];
  let wrongAnswers = [];
  
  function startQuiz() {
    if (currentQuestionIndex < quizQuestions.length) {
      const question = quizQuestions[currentQuestionIndex];
      const quizContainer = document.getElementById('quiz-container');
      quizContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.options.map((opt, idx) => 
          `<button onclick="checkAnswer('${opt}')">${idx + 1}. ${opt}</button>`
        ).join('')}
      `;
    } else {
      showResults();
    }
  }
  
  function checkAnswer(selectedAnswer) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
      correctAnswers.push(quizQuestions[currentQuestionIndex].question);
    } else {
      wrongAnswers.push({
        question: quizQuestions[currentQuestionIndex].question,
        selected: selectedAnswer,
        correct: correctAnswer
      });
    }
    currentQuestionIndex++;
    startQuiz();
  }
  
  function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    let resultHTML = `<h2>Your score: ${score}/${quizQuestions.length}</h2>`;
    
    if (correctAnswers.length) {
      resultHTML += `<h3>Correct Answers:</h3><ul class="result">`;
      correctAnswers.forEach(question => {
        resultHTML += `<li>${question}</li>`;
      });
      resultHTML += `</ul>`;
    }
    
    if (wrongAnswers.length) {
      resultHTML += `<h3>Incorrect Answers:</h3><ul class="result">`;
      wrongAnswers.forEach(item => {
        resultHTML += `<li>${item.question}<br> 
                       Your answer: <b>${item.selected}</b><br> 
                       Correct answer: <b>${item.correct}</b></li>`;
      });
      resultHTML += `</ul>`;
    }
    
    quizContainer.innerHTML = resultHTML;
  }
  