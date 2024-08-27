/*document.addEventListener('DOMContentLoaded', function() {
  // Skip button functionality
  document.getElementById('skip').addEventListener('click', function() {
      alert('Skip button clicked!');
  });

  // Submit button functionality
  document.getElementById('submit').addEventListener('click', function() {
      let selectedOption = document.querySelector('input[name="answer"]:checked');
      if (selectedOption) {
          alert('Selected answer: ' + selectedOption.value);
      } else {
          alert('Please select an answer.');
      }
  });
});*/
document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
      answer: "Delhi",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Silver", "Osmium"],
      answer: "Oxygen",
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1920", "1898", "1905"],
      answer: "1912",
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      answer: "2",
    },
    {
      question: "Which country is famous for the Eiffel Tower?",
      options: ["Italy", "France", "Germany", "Spain"],
      answer: "France",
    },
    {
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: "H2O",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Which gas do plants primarily absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
  ];
  
  let correctanswer = 0;
  let wronganswer = 0;
  let skippedanswer = 0;
  let currentQuestionIndex = 0;

  const questionElement = document.getElementById("question");
  const optionElements = document.querySelectorAll("input[name='answer']");
  const labelElements = document.querySelectorAll(".options label");
  const submitButton = document.getElementById("submit");
  const skipbutton = document.getElementById("skip");
  const againbutton = document.getElementById("again");
  const progressElement = document.querySelector(".noqn");

  function newqns(){
    correctanswer = 0;
    wronganswer = 0;
    skippedanswer = 0;
    currentQuestionIndex = 0;
    fin.style.display="none"; 
    total.style.display="none";
    document.querySelector(".options").style.display = "flex";
    submitButton.style.display="flex";
    skipbutton.style.display="flex";
    againbutton.style.display = "none";
    loadQuestion();
  }

  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionElements.forEach((input, index) => {
      input.checked = false; // Uncheck any previously selected options
      input.value = currentQuestion.options[index];
      labelElements[index].textContent = currentQuestion.options[index];
    });
    progressElement.style.width = `${(currentQuestionIndex + 1) * 10}%`;
    progressElement.textContent = `${currentQuestionIndex + 1}/10`;

    
  }


  function handleSubmit() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestionIndex].answer) {
        correctanswer++;
      } else {
        wronganswer++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < 10) {
        loadQuestion();
      } else {
        showResults();
      }
    } else {
      alert('Please select an answer.');
    }
  }

  function handleSkip(){
    skippedanswer++;
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
      loadQuestion();
    } else {
      showResults();
    }
  }

  const fin=document.getElementById('final');
  const cor=document.getElementById('correct');
  const wrg=document.getElementById('wrong');
  const ski=document.getElementById('skipped');
  const total=document.getElementById('total');

  function showResults() {
    questionElement.textContent = "QUIZ COMPLETED";
    document.querySelector(".options").style.display = "none";
    submitButton.style.display = "none";
    skipbutton.style.display = "none";


    fin.style.display="flex"; 
    total.style.display="flex";
    againbutton.style.display="flex"
    cor.textContent=`Correct : ${correctanswer}`;
    wrg.textContent=`Wrong : ${wronganswer}`;
    ski.textContent=`Skipped : ${skippedanswer}`;
    total.textContent=`Total mark : ${((4*correctanswer)-wronganswer)}`
  }

  loadQuestion(); // Load the first question
  skipbutton.addEventListener("click",handleSkip)
  submitButton.addEventListener("click", handleSubmit);
  againbutton.addEventListener("click",newqns);
});

