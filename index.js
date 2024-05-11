"use strict";

// Selecting elements
const durationInput = document.querySelector("#duration");

const startBtn = document.querySelector("#start");

const pauseBtn = document.querySelector("#pause");

const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

// Timer instance
let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    // console.log("Timer started")
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    // console.log("Timer is ticking down");
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
