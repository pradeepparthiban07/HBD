// ===============================================
// PERSONALIZE THESE SETTINGS
// ===============================================
const birthdayGirl = "Keerthana...";


celebration();




document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("wishes").scrollIntoView({ behavior: "smooth" });
  celebration();
});

// Set the birthday date in YYYY-MM-DD format.
// Example: "2026-11-15". Leave as "" to show a friendly prompt.
const birthdayDate = "2026-11-06";

// Add your photo filenames and captions here.
// Put matching image files inside the images folder.
const photos = [
  { src: "images/photo1.jpg", caption: "A happy moment ✨" },
  { src: "images/photo2.jpg", caption: "Keep smiling! 😊" },
  { src: "images/photo3.jpg", caption: "Another lovely memory 🌸" },
  { src: "images/photo4.jpg", caption: "Picture-perfect! 📸" }
];

document.querySelectorAll("#heroName, .name-slot, #certificateName")
  .forEach(el => el.textContent = birthdayGirl);

// ===============================================
// PLAYFUL SECURITY CHECK
// ===============================================
const gate = document.getElementById("gate");
const site = document.getElementById("site");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gateMessage = document.getElementById("gateMessage");

// yesBtn.addEventListener("click", () => {
//   gate.classList.add("hidden");
//   site.classList.remove("hidden");
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   celebration();
// });

let noClicks = 0;
noBtn.addEventListener("click", () => {
  noClicks++;
  const messages = [
    "Hmm... the system thinks you're definitely the birthday girl. Try again! 😂",
    "Incorrect answer detected. Nice try! 😜",
    "This button is starting to get suspicious... 🤨",
    "Okay, the birthday police are on their way! 🚓"
  ];
  gateMessage.textContent = messages[Math.min(noClicks - 1, messages.length - 1)];

  // Keep the button within the action area while playfully dodging.
  const area = noBtn.parentElement.getBoundingClientRect();
  const maxX = Math.max(0, area.width - noBtn.offsetWidth);
  noBtn.style.transform = `translate(${Math.random() * Math.min(70, maxX)}px, ${Math.random() * 18 - 9}px)`;
});

// ===============================================
// WELCOME / SCROLL
// ===============================================


// ===============================================
// CAKE / CANDLES
// ===============================================
let candlesBlown = false;
function blowCandles() {
  const cakeMessage = document.getElementById("cakeMessage");
  if (candlesBlown) {
    cakeMessage.textContent = "The candles are already out! No double birthday, please. 😂";
    return;
  }
  candlesBlown = true;
  document.getElementById("cakeButton").textContent = "🍰✨";
  cakeMessage.textContent = "Wish sent to the universe! Delivery time: hopefully ASAP. 🌟";
  celebration();
}
// document.getElementById("cakeButton").addEventListener("click", blowCandles);
// document.getElementById("blowBtn").addEventListener("click", blowCandles);

// ===============================================
// FUN QUIZ
// ===============================================
const quizResponses = {
  study: "Books can wait! Today your only assignment is cake. 📚🍰",
  work: "Office work on your birthday? Absolutely not. System rejected! 😂",
  cake: "Correct! Finally, someone with excellent priorities. 🍰🏆",
  sleep: "A strong choice. Cake first, nap second. 😴"
};
document.querySelectorAll(".quiz-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("quizResult").textContent =
      quizResponses[button.dataset.answer];
  });
});

// ===============================================
// BIRTHDAY COUNTDOWN
// ===============================================
// function updateCountdown() {
//   const caption = document.getElementById("countdownCaption");
//   if (!birthdayDate) {
//     caption.textContent = "Set birthdayDate in script.js to activate the countdown. ⏳";
//     ["days", "hours", "minutes", "seconds"].forEach(id =>
//       document.getElementById(id).textContent = "--"
//     );
//     return;
//   }

//   const target = new Date(`${birthdayDate}T00:00:00`);
//   if (Number.isNaN(target.getTime())) {
//     caption.textContent = "Please enter a valid date in script.js (YYYY-MM-DD).";
//     return;
//   }

//   let difference = target.getTime() - Date.now();
//   if (difference <= 0) {
//     caption.textContent = "It's birthday time! Let the celebrations begin! 🎉";
//     difference = 0;
//   } else {
//     caption.textContent = "The birthday excitement is getting closer...";
//   }

//   const days = Math.floor(difference / 86400000);
//   const hours = Math.floor((difference % 86400000) / 3600000);
//   const minutes = Math.floor((difference % 3600000) / 60000);
//   const seconds = Math.floor((difference % 60000) / 1000);

//   document.getElementById("days").textContent = days;
//   document.getElementById("hours").textContent = hours;
//   document.getElementById("minutes").textContent = minutes;
//   document.getElementById("seconds").textContent = seconds;
// }


function updateCountdown() {
    const caption = document.getElementById("countdownCaption");

    const birthdayDate = "2004-05-15T10:30:00";
    const birthDate = new Date(birthdayDate);

    if (Number.isNaN(birthDate.getTime())) {
        caption.textContent = "Please enter a valid birth date.";
        return;
    }

    let difference = Date.now() - birthDate.getTime();

    if (difference < 0) {
        caption.textContent = "Birth date is in the future!";
        return;
    }

    caption.textContent = "Every second is another beautiful moment since you were born! ❤️";

    const days = Math.floor(difference / 86400000);
    difference %= 86400000;

    const hours = Math.floor(difference / 3600000);
    difference %= 3600000;

    const minutes = Math.floor(difference / 60000);
    difference %= 60000;

    const seconds = Math.floor(difference / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===============================================
// SCRATCH CARD
// ===============================================
const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
let scratching = false;
let scratchInitialized = false;

function setupScratchCard() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#c9b3e9";
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#65445a";
  ctx.font = "800 20px Nunito, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("✨ SCRATCH HERE ✨", rect.width / 2, rect.height / 2 - 5);
  ctx.font = "14px Nunito, sans-serif";
  ctx.fillText("Reveal your birthday surprise!", rect.width / 2, rect.height / 2 + 23);
  ctx.globalCompositeOperation = "destination-out";
  scratchInitialized = true;
}
function scratchAt(event) {
  if (!scratchInitialized) return;
  const rect = canvas.getBoundingClientRect();
  const point = event.touches ? event.touches[0] : event;
  const x = point.clientX - rect.left;
  const y = point.clientY - rect.top;
  ctx.beginPath();
  ctx.arc(x, y, 19, 0, Math.PI * 2);
  ctx.fill();
}
canvas.addEventListener("pointerdown", event => {
  scratching = true;
  canvas.setPointerCapture(event.pointerId);
  scratchAt(event);
});
canvas.addEventListener("pointermove", event => {
  if (scratching) scratchAt(event);
});
canvas.addEventListener("pointerup", () => scratching = false);
canvas.addEventListener("pointercancel", () => scratching = false);
document.getElementById("resetScratch").addEventListener("click", setupScratchCard);
window.addEventListener("load", setupScratchCard);
window.addEventListener("resize", setupScratchCard);

// ===============================================
// GIFT BOX
// ===============================================
let giftOpened = false;
document.getElementById("giftButton").addEventListener("click", () => {
  const button = document.getElementById("giftButton");
  const message = document.getElementById("giftMessage");
  if (!giftOpened) {
    giftOpened = true;
    button.textContent = "🎊";
    button.classList.add("opened");
    message.textContent = "Surprise! Your gift is unlimited laughter, good luck and permission for a second slice of cake. 😂";
    celebration();
  } else {
    message.textContent = "The gift has been opened. Please do not attempt to return the happiness. 😁";
  }
});

// ===============================================
// PHOTO SLIDESHOW
// ===============================================
let currentSlide = 0;
const slideImage = document.getElementById("slideImage");
const slideFallback = document.getElementById("slideFallback");

function showSlide(index) {
  currentSlide = (index + photos.length) % photos.length;
  const photo = photos[currentSlide];
  // slideImage.src = photo.src;
  // slideImage.alt = photo.caption;
  // document.getElementById("slideCaption").textContent = photo.caption;
  // document.getElementById("slideCount").textContent =
  //   `${currentSlide + 1} / ${photos.length}`;
  // slideImage.style.display = "block";
  // slideFallback.style.display = "none";
  // slideImage.onerror = () => {
  //   slideImage.style.display = "none";
  //   slideFallback.style.display = "grid";
  // };
}
document.getElementById("prevSlide").addEventListener("click", () => showSlide(currentSlide - 1));
document.getElementById("nextSlide").addEventListener("click", () => showSlide(currentSlide + 1));
showSlide(0);
setInterval(() => showSlide(currentSlide + 1), 5000);

// ===============================================
// CERTIFICATE
// ===============================================
document.getElementById("certificateBtn").addEventListener("click", () => {
  document.getElementById("certificate").classList.remove("hidden");
  celebration();
  document.getElementById("certificate").scrollIntoView({
    behavior: "smooth", block: "center"
  });
});

// ===============================================
// CONFETTI + BALLOONS
// ===============================================
function celebration() {
  const symbols = ["🎉", "🎊", "✨", "🌸", "⭐", "🎈"];
  const layer = document.getElementById("confettiLayer");
  for (let i = 0; i < 55; i++) {
    const item = document.createElement("span");
    item.className = "confetti";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.left = `${Math.random() * 100}%`;
    item.style.fontSize = `${16 + Math.random() * 18}px`;
    item.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    layer.appendChild(item);
    setTimeout(() => item.remove(), 5000);
  }
}
function createBalloon() {
  // alert('h')
  if (document.hidden || site.classList.contains("hidden")) return;
  const balloon = document.createElement("span");
  balloon.className = "balloon";
  balloon.textContent = Math.random() > 0.5 ? "🎈" : "🎀";
  balloon.style.left = `${Math.random() * 95}%`;
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 6500);
}
createBalloon()
setInterval(createBalloon, 1800);

 function playMusic() {
        document.getElementById("bgMusic").play();
    }
playMusic()
   function stopMusic() {
    const music = document.getElementById("bgMusic");
    music.pause();
    music.currentTime = 0;
}
