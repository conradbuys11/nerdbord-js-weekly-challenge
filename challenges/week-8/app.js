let questionTextArray = [
  [
    "I have one. What's up?",
    "And it's a wonder men can eat at all, when things are big that should be small. Who can tell, what magic spells, we'll be doing for us?",
  ],
  [
    "I have two. What's up?",
    "And I'm giving all my love to this world, only to be told that I can't see, I can't breath. No more will we be.",
  ],
  [
    "I have three. What's up?",
    "And nothing's gonna change the way we live. Cause we can always take, but never give! And now that things are changing for the worse, see...",
  ],
  [
    "I have four. What's up?",
    "Whoa! It's a crazy world we're living in. And I just can't see that half of us immersed in sin is all we have to give.",
  ],
  [
    "I have five. What's up?",
    "These, futures. Made of. Virtual Insanity, now. Always. Seem to. Be Goverened by this love we have.",
  ],
  [
    "I have six. What's up?",
    "For useless, twisting, of our new technology. Oh, now there is no sound. For we all live underground!",
  ],
];

let questionContainer = document.querySelector("div.question-list");
let questionElementArray = [];

const toggleActiveInactive = (e) => {
  let clickedElement = e.target;
  console.log(clickedElement);

  // need to get the question-and-answer node, instead of either question, question-text, or arrow node
  if (clickedElement.classList.contains("question")) {
    clickedElement = clickedElement.parentNode;
  } else if (
    clickedElement.classList.contains("question-text") ||
    clickedElement.classList.contains("arrow")
  ) {
    clickedElement = clickedElement.parentNode.parentNode;
  }

  for (let i = 0; i <= questionElementArray.length; i++) {
    // did we click this element in array? if so, toggle inactive & active. if not, turn the element inactive if it's currently inactive
    if (questionElementArray[i] === clickedElement) {
      console.log(`question ${i + 1} is a match!`);
      // clickedElement.classList.toggle("inactive");
      // clickedElement.classList.toggle("active");
    } else {
      console.log(`question ${i + 1} is not a match :(`);
    }
  }
};

const makeQuestions = (arrOfQuestions) => {
  for (let i = 0; i <= arrOfQuestions.length; i++) {
    /* the hierarchy should look something like this:
    <div class="question-and-answer inactive">
      <div class="question">
        <span class="question-text">I have one. What's up?</span>
        <i class="arrow"></i>
      </div>
      <div class="question-answer">text from virtual insanity here</div>
    </div>
    */

    let questionAndAnswer = document.createElement("div");
    questionAndAnswer.classList.add("question-and-answer", "inactive");
    questionAndAnswer.addEventListener("mousedown", toggleActiveInactive);

    let question = document.createElement("div");
    question.classList.add("question");
    questionAndAnswer.appendChild(question);

    let questionText = document.createElement("span");
    questionText.classList.add("question-text");
    questionText.innerText = arrOfQuestions[i][0];
    question.appendChild(questionText);

    let arrow = document.createElement("i");
    arrow.classList.add("arrow");
    question.appendChild(arrow);

    let questionAnswer = document.createElement("div");
    questionAnswer.classList.add("question-answer");
    questionAnswer.innerText = arrOfQuestions[i][1];
    question.appendChild(questionAnswer);

    questionContainer.appendChild(questionAndAnswer);
    questionElementArray.push(questionAndAnswer);
  }
};

// makeQuestions(questionTextArray);
