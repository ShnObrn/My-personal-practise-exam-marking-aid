const answers = {
  A: {
    6: "B",
    7: "C",
    8: "A",
    9: "A",
    10: "C",
    11: "C",
    12: "A",
    13: "D",
    14: "A, E, G",
    15: "B",
    16: "C",
    17: "A",
    18: "A",
    19: "A",
    20: "C",
    21: "B",
    22: "C",
    23: "B, D",
    24: "B",
    25: "C",
    26: "B",
    27: "A",
    28: "B",
    29: "C",
    30: "D",
    31: "D",
    32: "A",
    33: "B",
    34: "D",
    35: "A",
    36: "D",
    37: "D",
    38: "D",
    39: "D",
    40: "C",
    41: "C",
    42: "A",
    43: "B",
    44: "D",
    45: "C",
    46: "D",
    47: "A",
    48: "D",
    49: "C",
    50: "B",
    51: "D",
    52: "C",
    53: "B",
    54: "D",
    55: "C",
    56: "A",
    57: "B",
    58: "D",
    59: "A",
    60: "B",
    61: "B",
    62: "D",
    63: "B",
    64: "B",
    65: "C",
    66: "D",
    67: "A",
    68: "A",
    69: "C",
    70: "D",
    71: "D",
    72: "A",
    73: "D",
    74: "A",
    75: "D",
    76: "C",
    77: "D",
    78: "C",
    79: "A",
    80: "B, C",
    81: "B",
    82: "C",
    83: "C",
    84: "C",
    85: "B",
    86: "B",
    87: "A",
    88: "B",
    89: "A",
    90: "D",
  },
  B: {
    6: "A",
    7: "D",
    8: "A",
    9: "B",
    10: "D",
    11: "C",
    12: "D",
    13: "D",
    14: "C",
    15: "C",
    16: "D",
    17: "D",
    18: "D",
    19: "D",
    20: "C",
    21: "B",
    22: "D",
    23: "C",
    24: "A",
    25: "B",
    26: "C",
    27: "C",
    28: "A",
    29: "B",
    30: "C",
    31: "D",
    32: "A",
    33: "A",
    34: "A",
    35: "B",
    36: "A",
    37: "B",
    38: "D",
    39: "A, F",
    40: "B",
    41: "C",
    42: "B",
    43: "A",
    44: "A",
    45: "D",
    46: "D",
    47: "C",
    48: "D",
    49: "B",
    50: "C",
    51: "C",
    52: "C",
    53: "B",
    54: "B",
    55: "E",
    56: "D",
    57: "B, D",
    58: "C",
    59: "D",
    60: "C",
    61: "B",
    62: "D",
    63: "A",
    64: "B",
    65: "D",
    66: "C",
    67: "B",
    68: "B",
    69: "A",
    70: "D",
    71: "A",
    72: "A, D",
    73: "B",
    74: "B",
    75: "A",
    76: "C",
    77: "C",
    78: "B",
    79: "A",
    80: "C",
    81: "B, E",
    82: "A",
    83: "D",
    84: "A",
    85: "A",
    86: "C",
    87: "A",
    88: "B",
    89: "C",
    90: "C",
  },
  C: {
    6: "D",
    7: "B",
    8: "D",
    9: "C",
    10: "D",
    11: "B",
    12: "B",
    13: "D",
    14: "D",
    15: "B",
    16: "D",
    17: "D",
    18: "A",
    19: "A",
    20: "A",
    21: "D",
    22: "C",
    23: "A",
    24: "C",
    25: "C",
    26: "A",
    27: "C",
    28: "B",
    29: "C",
    30: "B",
    31: "A",
    32: "B",
    33: "D",
    34: "D",
    35: "D",
    36: "C",
    37: "C",
    38: "B",
    39: "B",
    40: "B",
    41: "A",
    42: "B",
    43: "D",
    44: "A",
    45: "B",
    46: "D",
    47: "B",
    48: "C",
    49: "B",
    50: "C",
    51: "A",
    52: "A",
    53: "C",
    54: "D, E",
    55: "D",
    56: "B",
    57: "C",
    58: "A",
    59: "B",
    60: "E",
    61: "A",
    62: "A",
    63: "C",
    64: "B",
    65: "B",
    66: "A",
    67: "D",
    68: "A",
    69: "A",
    70: "B",
    71: "D",
    72: "B",
    73: "D",
    74: "C",
    75: "C",
    76: "C",
    77: "C",
    78: "A",
    79: "C",
    80: "C",
    81: "A",
    82: "B, D",
    83: "A",
    84: "D",
    85: "B",
    86: "A",
    87: "D",
    88: "C",
    89: "A",
    90: "C",
  },
};

const totalQuestions = 90;

function updateQuestions() {
  const exam = document.getElementById("examSelect").value;
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  for (let i = 1; i <= totalQuestions; i++) {
    const div = document.createElement("div");
    div.className = "question";
    if (i <= 5) {
      div.innerHTML = `${exam}${i}. <select id="question${i}"><option value="correct">Correct</option><option value="false">False</option></select>`;
    } else {
      div.innerHTML = `${exam}${i}. <input type="text" id="question${i}" />`;
    }
    container.appendChild(div);
  }
}

function submitAnswers() {
  const exam = document.getElementById("examSelect").value;
  const userAnswers = {};
  for (let i = 1; i <= totalQuestions; i++) {
    const questionId = `question${i}`;
    const input = document.getElementById(questionId);
    if (input.type === "text") {
      userAnswers[i] = input.value.trim().toUpperCase();
    } else {
      userAnswers[i] = input.value;
    }
  }

  const correctAnswers = answers[exam];
  let correctCount = 0;
  const incorrectAnswers = [];

  for (let i = 1; i <= totalQuestions; i++) {
    if (i <= 5) {
      if (userAnswers[i] === "correct") correctCount++;
      else incorrectAnswers.push(`${exam}${i}`);
    } else {
      const correctAnswer = correctAnswers[i];
      const userAnswer = userAnswers[i];
      if (compareAnswers(correctAnswer, userAnswer)) correctCount++;
      else incorrectAnswers.push(`${exam}${i}`);
    }
  }

  const resultsDiv = document.getElementById("results");
  const percentage = (correctCount / totalQuestions) * 100;
  resultsDiv.innerHTML = `Score: ${correctCount}/${totalQuestions}<br>Percentage Correct: ${percentage.toFixed(
    2
  )}%<br>Incorrect Answers: ${incorrectAnswers.join(", ")}`;
}

function compareAnswers(correctAnswer, userAnswer) {
  if (!correctAnswer || !userAnswer) return false;
  const correctArray = correctAnswer
    .split(",")
    .map((a) => a.trim())
    .sort();
  const userArray = userAnswer
    .split(",")
    .map((a) => a.trim())
    .sort();
  return JSON.stringify(correctArray) === JSON.stringify(userArray);
}

// Initialize questions on page load
updateQuestions();
