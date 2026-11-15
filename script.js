const questions = [
  { text: "Êtes-vous français ?", answer: "oui", act: "ACTE 1 — VÉRIFICATION DU PROFIL", branch: { oui: 3, non: 2 } },
  { text: "Parlé vou biun le franssais ?", answer: "oui", act: "ACTE 1 — VÉRIFICATION DU PROFIL" },
  { text: "Je vois sur votre CV que vous avez 32 ans. Vous faites plus jeune ! Les chiffres ne seraient-ils pas inversés ?", answer: "oui", act: "ACTE 1 — VÉRIFICATION DU PROFIL" },

  { text: "Avez-vous au minimum 1 an d'expérience dans ce domaine ?", answer: "oui", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Avez-vous au minimum 5 ans d'expérience dans ce domaine ?", answer: "oui", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Avez-vous au minimum 10 ans d'expérience dans ce domaine ?", answer: "non", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Avez-vous travaillé bénévolement pendant 1 an et effectué au minimum 5 stages non rémunérés de 2 mois ?", answer: "oui", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Avez-vous un doctorat ?", answer: "non", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Votre plus haut diplôme est-il une licence ?", answer: "non", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Votre plus haut diplôme est-il un master ?", answer: "oui", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },
  { text: "Avez-vous un lien de parenté avec un membre de la direction ?", answer: "oui", act: "ACTE 2 — COMPÉTENCES ET DIPLÔMES" },

  { text: "Nous sommes une entreprise travaillant uniquement avec l'Europe et recherchons un profil multilingue, niveau C2 en anglais requis, évidemment ! Parlez-vous le chinois et le dhivehi ?", answer: "oui", act: "ACTE 3 — TESTS DE RECRUTEMENT INTERNATIONAUX" },
  { text: "你有三秒钟回答“不”。", answer: "不是", act: "ACTE 3 — TESTS DE RECRUTEMENT INTERNATIONAUX", special: "chinese-timer" },
  { text: "ނޫންގެ އެއްގައިވާ ބަދަލަކީ ކޮބާ؟", answer: "އާން", act: "ACTE 3 — TESTS DE RECRUTEMENT INTERNATIONAUX", special: "dhivehi" },
  { text: "OUAT IS ZE PRESIDENT OF ZE YOU-NI-TÈD STÈTS ?", answer: "yes", act: "ACTE 3 — TESTS DE RECRUTEMENT INTERNATIONAUX", special: "english-duplicate" },
  { text: "Si vous étiez un animal, je vous imagine bien en lion ! Majestueux, puissant, un véritable roi de la jungle, n'est-ce pas ?", answer: "non", act: "ACTE 3 — TESTS DE RECRUTEMENT INTERNATIONAUX" },
  { text: "Ah, heureusement ! Un lion aurait peut-être eu trop d'ambition pour ce poste... Je vous voyais plutôt en petit scarabée, discret, docile et qui ne fait pas trop de bruit. C'est bien vous, ça ?", answer: "oui", act: "ACTE 3 — TESTS DE RECRUTEMENT INTERNATIONAUX" },

  { text: "Ici, nous sommes une grande famille. Vous savez, dans une famille, on ne compte pas les heures, n'est-ce pas ?", answer: "oui", act: "ACTE 4 — CONDITIONS DE TRAVAIL" },
  { text: "L'annonce indiquait un CDI, mais j'ai une meilleure idée qui vient de naître : on va faire un CDD de deux semaines, du 15 au 31 décembre. C'est une offre qui ne peut pas être refusée ?", answer: "oui", act: "ACTE 4 — CONDITIONS DE TRAVAIL" },
  { text: "Avez-vous des enfants ou prévoyez-vous d'en avoir bientôt ?", answer: "non", act: "ACTE 4 — CONDITIONS DE TRAVAIL" },
  { text: "Pensez-vous que votre vie personnelle doit passer avant votre travail ?", answer: "non", act: "ACTE 4 — CONDITIONS DE TRAVAIL" },
  { text: "Voici votre téléphone professionnel ! Vous voyez, nous savons être généreux ! Ah, il sonne déjà... Vous pouvez répondre, même pendant vos congés, bien évidemment ?", answer: "oui", act: "ACTE 4 — CONDITIONS DE TRAVAIL" },
  { text: "C'est parfait, vous n'avez pas d'enfants ! Vous pourrez donc prendre vos congés en novembre plutôt qu'en août. Vous aimez la pluie et le froid, j'espère ?", answer: "oui", act: "ACTE 4 — CONDITIONS DE TRAVAIL" },

  { text: "J'ai déjà reçu 1 000 candidatures ! Heureusement que vous connaissez Monsieur le Directeur personnellement, sinon votre CV aurait été éliminé par notre ATS. Il manquerait plus qu'on vous prenne juste par piston HAHAHAHA... Vous le connaissez bien ?", answer: "oui", act: "ACTE 5 — DERNIÈRES NÉGOCIATIONS" },
  { text: "Acceptez-vous de faire preuve de polyvalence ? J'ai besoin d'un comptable, d'un informaticien, d'un commercial, d'un graphiste, d'un community manager, d'un agent d'entretien et éventuellement d'un chauffeur.", answer: "oui", act: "ACTE 5 — DERNIÈRES NÉGOCIATIONS" },
  { text: "Accepteriez-vous de former votre futur remplaçant si, malheureusement, votre profil n'était plus en adéquation avec le poste ?", answer: "non", act: "ACTE 5 — DERNIÈRES NÉGOCIATIONS" },
  { text: "Vous êtes quand même dur en affaire ! Mais votre profil semble légèrement correspondre... Je vous propose le SMIC. Ça vous convient ? Vous savez, il y a des personnes qui attendent derrière !", answer: "oui", act: "ACTE 5 — DERNIÈRES NÉGOCIATIONS" }
];

const questionArea = document.getElementById("question-area");
const resultArea = document.getElementById("result-area");
const actLabel = document.getElementById("act-label");
const counter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const instruction = document.getElementById("instruction");
const answers = document.getElementById("answers");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const feedback = document.getElementById("feedback");
const timerWrap = document.getElementById("timer-wrap");
const timerDisplay = document.getElementById("timer");
const resultKicker = document.getElementById("result-kicker");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const resultImage = document.getElementById("result-image");
const restartBtn = document.getElementById("restart-btn");

let currentQuestion = 1;
let timerInterval = null;
let timerTimeout = null;
let locked = false;

function clearQuestionTimer() {
  if (timerInterval) clearInterval(timerInterval);
  if (timerTimeout) clearTimeout(timerTimeout);
  timerInterval = null;
  timerTimeout = null;
}

function renderQuestion() {
  clearQuestionTimer();
  locked = false;
  const q = questions[currentQuestion - 1];

  questionArea.hidden = false;
  resultArea.hidden = true;
  actLabel.textContent = q.act;
  counter.textContent = `QUESTION ${currentQuestion} / ${questions.length}`;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  questionNumber.textContent = `QUESTION ${String(currentQuestion).padStart(2, "0")}`;
  questionText.textContent = q.text;
  feedback.textContent = "";
  feedback.className = "feedback";
  timerWrap.hidden = true;
  timerDisplay.textContent = "3";
  answers.innerHTML = "";

  if (q.special === "chinese-timer") {
    instruction.textContent = "Vous avez 3 secondes. Bonne chance.";
    addAnswer("是", "是");
    addAnswer("不是", "不是");
    startThreeSecondTimer();
  } else if (q.special === "dhivehi") {
    instruction.textContent = "Veuillez sélectionner votre réponse.";
    addAnswer("އާން", "އާން");
    addAnswer("ނޫން", "ނޫން");
  } else if (q.special === "english-duplicate") {
    instruction.textContent = "Choose the correct answer. (Both answers are accepted.)";
    addAnswer("YES, I AM.", "yes");
    addAnswer("YES, I AM.", "yes");
  } else {
    instruction.textContent = "Une seule bonne réponse. Votre avenir se joue maintenant.";
    addAnswer("OUI", "oui");
    addAnswer("NON", "non");
  }
}

function addAnswer(label, value) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "answer-btn";
  button.textContent = label;
  button.addEventListener("click", () => chooseAnswer(value, button));
  answers.appendChild(button);
}

function startThreeSecondTimer() {
  timerWrap.hidden = false;
  let remaining = 3;
  timerDisplay.textContent = remaining;
  timerInterval = setInterval(() => {
    remaining -= 1;
    timerDisplay.textContent = Math.max(remaining, 0);
    if (remaining <= 0) clearInterval(timerInterval);
  }, 1000);
  timerTimeout = setTimeout(() => {
    if (!locked && currentQuestion === 14) showFailure("Le temps est écoulé. Même pas trois secondes pour répondre…");
  }, 3000);
}

function chooseAnswer(value, selectedButton) {
  if (locked) return;
  const q = questions[currentQuestion - 1];
  if (String(value).toLowerCase() !== String(q.answer).toLowerCase()) {
    showFailure("Mauvaise réponse. Votre candidature a été soigneusement… écartée.");
    return;
  }

  locked = true;
  clearQuestionTimer();
  [...answers.children].forEach(button => {
    button.disabled = true;
    if (button === selectedButton) button.classList.add("correct");
  });
  feedback.textContent = "✓ Réponse validée. Le jury est… impressionné.";
  feedback.className = "feedback success";

  window.setTimeout(() => {
    if (q.branch) {
      currentQuestion = q.branch[value];
    } else if (currentQuestion < questions.length) {
      currentQuestion += 1;
    } else {
      showSuccess();
      return;
    }
    renderQuestion();
  }, 650);
}

function showFailure(message) {
  if (locked) return;
  locked = true;
  clearQuestionTimer();
  questionArea.hidden = true;
  resultArea.hidden = false;
  resultKicker.textContent = "FIN DE L'ENTRETIEN";
  resultTitle.textContent = "Nous vous remercions pour votre candidature.";
  resultMessage.textContent = message;
  resultImage.src = "image1.jpg";
  resultImage.alt = "Image de fin après une mauvaise réponse";
  restartBtn.hidden = false;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function showSuccess() {
  clearQuestionTimer();
  questionArea.hidden = true;
  resultArea.hidden = false;
  resultKicker.textContent = "FÉLICITATIONS — 28 QUESTIONS VALIDÉES";
  resultTitle.textContent = "Vous êtes le candidat idéal !";
  resultMessage.textContent = "Vous avez survécu au processus de recrutement. Le poste etait presque à vous. Malheureusement, l'entreprise a fait faillite, pas de chance!";
  resultImage.src = "image2.jpg";
  resultImage.alt = "Image de victoire après avoir répondu à toutes les questions";
  restartBtn.hidden = false;
  progressFill.style.width = "100%";
}

function restartGame() {
  clearQuestionTimer();
  currentQuestion = 1;
  renderQuestion();
}

restartBtn.addEventListener("click", restartGame);
renderQuestion();
