// Selecting elements
const durationInput = document.querySelector("#duration");

const startBtn = document.querySelector("#start");

const pauseBtn = document.querySelector("#pause");

// Timer instance
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer is ticking down");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
