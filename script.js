let tasks = [];

function addTask() {
  const task = document.getElementById("task").value;
  tasks.push(task);
  document.getElementById("task").value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
  });
}

1. Weather API:

fetch("(link unavailable)")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById("weather").textContent = `Temperature: ${data.main.temp}°C`;
  });

1. Quiz Game:

let score = 0;
let currentQuestion = 0;

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correctAnswer: 2
  }
];

function renderQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestion].question;
  const answersElement = document.getElementById("answers");
  answersElement.innerHTML = "";
  questions[currentQuestion].answers.forEach((answer, index) => {
    const answerElement = document.createElement("button");
    answerElement.textContent = answer;
    answerElement.onclick = () => {
      if (index === questions[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      renderQuestion();
    };
    answersElement.appendChild(answerElement);
  });
}

