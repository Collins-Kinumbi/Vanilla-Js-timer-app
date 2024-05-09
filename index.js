class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Events
    this.startButton.addEventListener("click", this.start);

    this.pauseButton.addEventListener("click", this.pause);
  }

  // Methodes
  start = () => {
    // console.log(this);
    this.tick();
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  onDurationChange = () => {};

  tick = () => {
    this.timeRemaining
      ? (this.timeRemaining = this.timeRemaining - 1)
      : this.pause();
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

// Selecting elements
const durationInput = document.querySelector("#duration");

const startBtn = document.querySelector("#start");

const pauseBtn = document.querySelector("#pause");

// Timer instance
const timer = new Timer(durationInput, startBtn, pauseBtn);
