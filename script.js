"use strict";

//------------------------------Урок №11

const btn = document.getElementById("btn");

const range = document.getElementById("range");
const spanValue = document.getElementById("range-span");

const link = document.querySelector("a");

const square = document.getElementById("square");
const circle = document.getElementById("circle");
const button = document.getElementById("e_btn");

const btnClick = function () {
  const text = document.getElementById("text").value;
  square.style.backgroundColor = text;
};
btn.addEventListener("click", btnClick);

const hiddenButton = function () {
  button.style.display = "none";
};
button.addEventListener("click", hiddenButton);

const rangeValue = function () {
  spanValue.textContent = range.value + "%";
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
};
range.addEventListener("input", rangeValue);

circle.style.width = rangeValue();
