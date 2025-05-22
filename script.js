console.log("Welcome to DearMe – your cozy space ✨");
let timeLeft = 1500;
let timer;
let isRunning = false;
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("timerDisplay").innerText = "Time's up!";
      document.getElementById("successAnimation").style.display = "block";
    } else {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.getElementById("timerDisplay").innerText = \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
    }
  }, 1000);
}
function resetTimer() {
  clearInterval(timer);
  timeLeft = 1500;
  isRunning = false;
  document.getElementById("timerDisplay").innerText = "25:00";
  document.getElementById("successAnimation").style.display = "none";
}
function playCalmingSound() {
  const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/22/audio_c8ff165aa0.mp3?filename=relaxing-music-11750.mp3');
  audio.play();
}
const tips = [
  "Break big tasks into tiny steps.",
  "Do one thing at a time.",
  "5 minutes of focus is better than none.",
  "You don’t need to be perfect to start.",
  "Stretch. Hydrate. Breathe."
];
function showTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tipText").innerText = randomTip;
}
function showMoreNotes() {
  const moreNotes = document.getElementById("moreNotes");
  moreNotes.style.display = moreNotes.style.display === "none" ? "block" : "none";
}
function saveNote() {
  const input = document.getElementById("noteInput").value;
  if (input.trim()) {
    const li = document.createElement("li");
    li.innerText = input;
    document.getElementById("savedNotes").appendChild(li);
    document.getElementById("noteInput").value = "";
  }
}
function saveJournal() {
  const entry = document.getElementById("journalEntry").value;
  if (entry.trim()) {
    alert("Your journal entry has been saved in your heart.");
    document.getElementById("journalEntry").value = "";
  }
}
