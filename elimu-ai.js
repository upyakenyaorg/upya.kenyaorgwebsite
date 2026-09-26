```javascript
/* =========================================================
   ELIMUPLUS AI
   Frontend controller
   ========================================================= */


/* ---------------------------------------------------------
   ELEMENTS
--------------------------------------------------------- */

const messages = document.getElementById("messages");
const aiForm = document.getElementById("aiForm");
const aiInput = document.getElementById("aiInput");
const sendButton = document.getElementById("sendButton");

const clearChatButton = document.getElementById("clearChat");

const studentLevel = document.getElementById("studentLevel");
const subject = document.getElementById("subject");
const aiMode = document.getElementById("aiMode");

const voiceButton = document.getElementById("voiceButton");

const materialForm = document.getElementById("materialForm");
const materialInput = document.getElementById("materialInput");
const results = document.getElementById("results");


/* ---------------------------------------------------------
   STATE
--------------------------------------------------------- */

let conversation = [];

let isGenerating = false;


/* ---------------------------------------------------------
   ADD USER MESSAGE
--------------------------------------------------------- */

function addUserMessage(text) {

  const message = document.createElement("div");

  message.className = "message user";

  message.innerHTML = `
    <div class="message-avatar">
      👤
    </div>

    <div class="message-content">
      <strong>You</strong>
      <p>${escapeHTML(text).replace(/\n/g, "<br>")}</p>
    </div>
  `;

  messages.appendChild(message);

  scrollMessages();
}


/* ---------------------------------------------------------
   ADD AI MESSAGE
--------------------------------------------------------- */

function addAIMessage(text) {

  const message = document.createElement("div");

  message.className = "message ai";

  message.innerHTML = `
    <div class="message-avatar">
      ✦
    </div>

    <div class="message-content">

      <strong>ElimuPlus AI</strong>

      <div class="ai-answer">
        ${formatAIText(text)}
      </div>

      <div class="answer-actions">

        <button
          type="button"
          onclick="copyAnswer(this)">
          Copy
        </button>

        <button
          type="button"
          onclick="speakAnswer(this)">
          🔊 Listen
        </button>

      </div>

    </div>
  `;

  messages.appendChild(message);

  scrollMessages();
}


/* ---------------------------------------------------------
   FORMAT AI TEXT
--------------------------------------------------------- */

function formatAIText(text) {

  if (!text) return "";

  let safe = escapeHTML(text);

  safe = safe.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  );

  safe = safe.replace(
    /\n\n/g,
    "<br><br>"
  );

  safe = safe.replace(
    /\n/g,
    "<br>"
  );

  return safe;
}


/* ---------------------------------------------------------
   ESCAPE HTML
--------------------------------------------------------- */

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text;

  return div.innerHTML;
}


/* ---------------------------------------------------------
   SCROLL CHAT
--------------------------------------------------------- */

function scrollMessages() {

  messages.scrollTop = messages.scrollHeight;

}


/* ---------------------------------------------------------
   TYPING INDICATOR
--------------------------------------------------------- */

function showTyping() {

  const message = document.createElement("div");

  message.className = "message ai";

  message.id = "typingMessage";

  message.innerHTML = `
    <div class="message-avatar">
      ✦
    </div>

    <div class="message-content">

      <strong>ElimuPlus AI</strong>

      <div class="typing">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
  `;

  messages.appendChild(message);

  scrollMessages();

}


/* ---------------------------------------------------------
   REMOVE TYPING
--------------------------------------------------------- */

function removeTyping() {

  const typing = document.getElementById("typingMessage");

  if (typing) {
    typing.remove();
  }

}


/* ---------------------------------------------------------
   CURRENT AI CONTEXT
--------------------------------------------------------- */

function getLearningContext() {

  return {

    level: studentLevel.value,

    subject: subject.value,

    mode: aiMode.value

  };

}


/* ---------------------------------------------------------
   BUILD AI INSTRUCTION
--------------------------------------------------------- */

function buildPrompt(userPrompt) {

  const context = getLearningContext();

  return `
You are ElimuPlus AI, an educational study companion.

Student learning level:
${context.level}

Subject:
${context.subject}

Learning mode:
${context.mode}

Student request:
${userPrompt}

Help the student clearly and appropriately.

Adapt the explanation to their learning level.

Use examples where useful.

For mathematics and technical subjects,
show the reasoning step by step.

For revision requests,
focus on key concepts and understanding.

For quiz requests,
ask questions and wait for the student's answer
before revealing the solution when appropriate.

Encourage learning rather than simply dumping answers.
`;
}


/* ---------------------------------------------------------
   DEMO AI
---------------------------------------------------------

   This function is temporary.

   Later it will be replaced with:

   fetch("/api/ai", ...)

   The API key must NEVER be placed here.
--------------------------------------------------------- */

async function askElimuAI(prompt) {

  const context = getLearningContext();

  const lower = prompt.toLowerCase();


  /* DEMO: TRIGONOMETRY */

  if (
    lower.includes("trigonometry") ||
    lower.includes("soh cah toa")
  ) {

    return `
Trigonometry is the study of relationships between the
angles and sides of triangles.

For a right-angled triangle, one useful starting point
is SOH-CAH-TOA:

**SOH**
sin θ = opposite ÷ hypotenuse

**CAH**
cos θ = adjacent ÷ hypotenuse

**TOA**
tan θ = opposite ÷ adjacent

For example, if the opposite side is 6 cm and the
hypotenuse is 10 cm:

sin θ = 6 ÷ 10

sin θ = 0.6

Would you like me to give you a similar question to try?
`;
  }


  /* DEMO: STUDY PLAN */

  if (
    lower.includes("study plan") ||
    lower.includes("plan my study") ||
    lower.includes("study time")
  ) {

    return `
Here is a simple study structure for you:

**1. Learn — 25 minutes**
Focus on one topic without distractions.

**2. Practise — 20 minutes**
Attempt questions without looking at the solution.

**3. Review — 10 minutes**
Check your mistakes and write down what you learned.

**4. Break — 5 to 10 minutes**

Then repeat with another topic.

Since you selected **${context.subject}** at
**${context.level}**, we can make the next plan specific
to that subject.

Tell me how many hours you have available today.
`;
  }


  /* DEMO: QUIZ */

  if (
    context.mode === "Quiz" ||
    lower.includes("quiz me") ||
    lower.includes("practice question")
  ) {

    return `
Let's practise **${context.subject}**.

### Question 1

Try this question without looking for the answer:

A right-angled triangle has an opposite side of 6 cm
and a hypotenuse of 10 cm.

What is:

**sin θ = ?**

Take your time and send me your answer.

I'll check your working and explain it.
`;
  }


  /* DEMO: SUMMARIZE */

  if (
    context.mode === "Summarize" ||
    lower.includes("summarize")
  ) {

    return `
I can turn a topic into concise revision notes.

For example, a good revision summary contains:

**Key concept**
The main idea you need to understand.

**Important terms**
Definitions and vocabulary.

**Main points**
The facts or principles you need to remember.

**Example**
A simple example showing how the concept works.

**Practice**
A question to check your understanding.

Send me the topic or text you want summarized.
`;
  }


  /* DEMO: FLASHCARDS */

  if (
    context.mode === "Flashcards" ||
    lower.includes("flashcard")
  ) {

    return `
Let's create flashcards for **${context.subject}**.

Example:

**Card 1 — Question**
What is photosynthesis?

**Card 1 — Answer**
It is the process through which green plants use
light energy to produce food from carbon dioxide
and water.

I can create a complete set once you give me the topic.
`;
  }


  /* DEFAULT DEMO */

  return `
I'm currently running in ElimuPlus development mode.

I received your question:

"${prompt}"

Your selected learning level is **${context.level}**,
your subject is **${context.subject}**, and your mode is
**${context.mode}**.

The next step is connecting this interface to the
secure ElimuPlus AI backend. Once connected, I'll be
able to answer a much wider range of questions,
generate practice exercises, explain concepts,
summarize material and personalize your learning.

For now, try asking me about trigonometry, study plans,
practice questions, summaries or flashcards.
`;

}


/* ---------------------------------------------------------
   SEND MESSAGE
--------------------------------------------------------- */

async function sendMessage(prompt) {

  if (!prompt || isGenerating) {
    return;
  }

  isGenerating = true;

  sendButton.disabled = true;

  addUserMessage(prompt);

  aiInput.value = "";

  autoResizeTextarea();

  conversation.push({
    role: "user",
    content: prompt
  });

  showTyping();


  try {

    /*
      TEMPORARY DEVELOPMENT CONNECTION

      When the backend is ready, replace the call below
      with:

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt,
          context: getLearningContext(),
          conversation
        })
      });

      const data = await response.json();

      return data.answer;
    */

    const answer = await askElimuAI(prompt);

    removeTyping();

    addAIMessage(answer);

    conversation.push({
      role: "assistant",
      content: answer
    });

  }

  catch (error) {

    console.error(error);

    removeTyping();

    addAIMessage(
      "Something went wrong. Please try again."
    );

  }

  finally {

    isGenerating = false;

    sendButton.disabled = false;

    aiInput.focus();

  }

}


/* ---------------------------------------------------------
   FORM SUBMISSION
--------------------------------------------------------- */

aiForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const prompt = aiInput.value.trim();

  if (!prompt) return;

  sendMessage(prompt);

});


/* ---------------------------------------------------------
   ENTER TO SEND
--------------------------------------------------------- */

aiInput.addEventListener("keydown", function(event) {

  if (
    event.key === "Enter" &&
    !event.shiftKey
  ) {

    event.preventDefault();

    aiForm.requestSubmit();

  }

});


/* ---------------------------------------------------------
   AUTO RESIZE TEXTAREA
--------------------------------------------------------- */

aiInput.addEventListener(
  "input",
  autoResizeTextarea
);


function autoResizeTextarea() {

  aiInput.style.height = "auto";

  aiInput.style.height =
    Math.min(aiInput.scrollHeight, 120) + "px";

}


/* ---------------------------------------------------------
   QUICK ACTIONS
--------------------------------------------------------- */

document
  .querySelectorAll("[data-prompt]")
  .forEach(button => {

    button.addEventListener("click", function() {

      const prompt = this.dataset.prompt;

      const mode = this.dataset.mode;

      if (mode) {
        aiMode.value = mode;
      }

      sendMessage(prompt);

    });

  });


/* ---------------------------------------------------------
   CLEAR CHAT
--------------------------------------------------------- */

clearChatButton.addEventListener(
  "click",
  function() {

    conversation = [];

    messages.innerHTML = `

      <div class="message ai">

        <div class="message-avatar">
          ✦
        </div>

        <div class="message-content">

          <strong>
            ElimuPlus AI
          </strong>

          <p>
            Conversation cleared. 👋
          </p>

          <p>
            What would you like to learn?
          </p>

        </div>

      </div>

    `;

  }
);


/* ---------------------------------------------------------
   COPY AI ANSWER
--------------------------------------------------------- */

function copyAnswer(button) {

  const content =
    button
      .closest(".message-content")
      .querySelector(".ai-answer")
      .innerText;

  navigator.clipboard
    .writeText(content)
    .then(() => {

      const original = button.innerText;

      button.innerText = "Copied ✓";

      setTimeout(() => {
        button.innerText = original;
      }, 1500);

    });

}


/* ---------------------------------------------------------
   TEXT TO SPEECH
--------------------------------------------------------- */

function speakAnswer(button) {

  if (!("speechSynthesis" in window)) {

    alert(
      "Voice reading is not supported by this browser."
    );

    return;

  }

  const content =
    button
      .closest(".message-content")
      .querySelector(".ai-answer")
      .innerText;

  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(content);

  speech.rate = .95;

  speech.pitch = 1;

  window.speechSynthesis.speak(speech);

}


/* ---------------------------------------------------------
   VOICE INPUT
--------------------------------------------------------- */

let recognition = null;

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;


if (SpeechRecognition) {

  recognition =
    new SpeechRecognition();

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.lang = "en-US";


  recognition.onstart = function() {

    voiceButton.innerText = "🔴";

  };


  recognition.onend = function() {

    voiceButton.innerText = "🎤";

  };


  recognition.onresult = function(event) {

    const transcript =
      event.results[0][0].transcript;

    aiInput.value = transcript;

    autoResizeTextarea();

    aiInput.focus();

  };


  recognition.onerror = function() {

    voiceButton.innerText = "🎤";

  };


  voiceButton.addEventListener(
    "click",
    function() {

      recognition.start();

    }
  );

}

else {

  voiceButton.addEventListener(
    "click",
    function() {

      alert(
        "Voice input is not supported by this browser."
      );

    }
  );

}


/* =========================================================
   MATERIAL SEARCH
   ========================================================= */


/* ---------------------------------------------------------
   CREATE SEARCH RESULT
--------------------------------------------------------- */

function makeResult(
  title,
  description,
  url,
  source
) {

  const item =
    document.createElement("div");

  item.className = "result";


  const badge =
    document.createElement("span");

  badge.className = "source-badge";

  badge.textContent = source;


  const heading =
    document.createElement("b");

  heading.textContent = title;


  const copy =
    document.createElement("p");

  copy.textContent =
    description ||
    "Open this result for more information.";


  const link =
    document.createElement("a");

  link.href = url;

  link.target = "_blank";

  link.rel = "noopener noreferrer";

  link.textContent =
    "View source ↗";


  item.append(
    badge,
    heading,
    copy,
    link
  );


  return item;

}


/* ---------------------------------------------------------
   SEARCH WIKIPEDIA + OPEN LIBRARY
--------------------------------------------------------- */

materialForm.addEventListener(
  "submit",
  async function(event) {

    event.preventDefault();

    const query =
      materialInput.value.trim();

    if (!query) return;


    results.innerHTML = `

      <div class="empty-search">

        <div>⏳</div>

        <strong>
          Searching learning resources...
        </strong>

        <p>
          Looking for relevant books and reference material.
        </p>

      </div>

    `;


    try {

      const wikipediaURL =
        "https://en.wikipedia.org/api/rest_v1/page/summary/" +
        encodeURIComponent(
          query.replace(/\s+/g, "_")
        );


      const openLibraryURL =
        "https://openlibrary.org/search.json?q=" +
        encodeURIComponent(query) +
        "&limit=6";


      const [wikiResponse, booksResponse] =
        await Promise.all([

          fetch(wikipediaURL),

          fetch(openLibraryURL)

        ]);


      const wiki =
        wikiResponse.ok
          ? await wikiResponse.json()
          : null;


      const books =
        booksResponse.ok
          ? await booksResponse.json()
          : { docs: [] };


      results.innerHTML = "";


      /* WIKIPEDIA */

      if (
        wiki &&
        wiki.title &&
        wiki.extract
      ) {

        results.appendChild(

          makeResult(

            wiki.title,

            wiki.extract,

            wiki.content_urls?.desktop?.page ||
              `https://en.wikipedia.org/wiki/${encodeURIComponent(
                wiki.title.replace(/ /g, "_")
              )}`,

            "Wikipedia"

          )

        );

      }


      /* OPEN LIBRARY */

      (books.docs || [])
        .slice(0, 6)
        .forEach(book => {

          const author =
            (book.author_name || [
              "Unknown author"
            ])[0];


          const year =
            book.first_publish_year ||
            "Year unavailable";


          const key =
            book.key || "";


          const url =
            key
              ? "https://openlibrary.org" + key
              : "https://openlibrary.org/search?q=" +
                encodeURIComponent(query);


          results.appendChild(

            makeResult(

              book.title ||
                "Untitled book",

              `${author} · First published ${year}`,

              url,

              "Open Library"

            )

          );

        });


      /* NOTHING FOUND */

      if (!results.children.length) {

        results.innerHTML = `

          <div class="empty-search">

            <div>📚</div>

            <strong>
              No resources found
            </strong>

            <p>
              Try a broader topic or different spelling.
            </p>

          </div>

        `;

      }

    }

    catch(error) {

      console.error(error);

      results.innerHTML = `

        <div class="empty-search">

          <div>⚠️</div>

          <strong>
            Search unavailable
          </strong>

          <p>
            Please check your connection and try again.
          </p>

        </div>

      `;

    }

  }
);


/* ---------------------------------------------------------
   SEARCH WITH ENTER
--------------------------------------------------------- */

materialInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {

      event.preventDefault();

      materialForm.requestSubmit();

    }

  }
);


/* ---------------------------------------------------------
   INITIALIZE
--------------------------------------------------------- */

console.log(
  "ElimuPlus AI frontend initialized."
);

console.log(
  "AI backend connection: pending."
);
```
