"use strict";

class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      const { onStart, onTick, onComplete } = callbacks;
      this.onStart = onStart;
      this.onTick = onTick;
      this.onComplete = onComplete;
    }

    // Events
    this.startButton.addEventListener("click", this.start);

    this.pauseButton.addEventListener("click", this.pause);
  }

  // Methodes
  start = () => {
    // console.log(this);
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.intervalId = setInterval(() => {
      this.tick();
    }, 20);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };

  onDurationChange = () => {};

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
