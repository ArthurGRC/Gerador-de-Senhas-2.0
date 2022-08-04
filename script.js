"use strict";

const inputLeng = document.querySelector(".inputLen");
const numbers = document.querySelector(".number");
const maiuscula = document.querySelector(".maiuscula");
const minuscula = document.querySelector(".minuscula");
const Character = document.querySelector(".Character");
const btnGerar = document.querySelector(".gerar");
const btnCopy = document.querySelector(".copiar");
const senha = document.querySelector(".tittle");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const simbol = "@#$%¨¨&*(<>:?^}``";
const num = "0123456789";

const upperCase = function () {
  return upper[Math.floor(Math.random() * upper.length)];
};
const lowerCase = function () {
  return lower[Math.floor(Math.random() * lower.length)];
};
const numero = function () {
  return num[Math.floor(Math.random() * num.length)];
};
const simbolos = function () {
  return simbol[Math.floor(Math.random() * simbol.length)];
};

const generatePass = function () {
  const len = inputLeng.value;
  let pass = "";

  if (numbers.checked) {
    pass += numero();
  }
  if (maiuscula.checked) {
    pass += upperCase();
  }
  if (minuscula.checked) {
    pass += lowerCase();
  }
  if (Character.checked) {
    pass += simbolos();
  }

  for (let i = pass.length; i < len; i++) {
    const x = generateX();
    pass += x;
  }

  senha.textContent = pass;
};

const generateX = function () {
  const xs = [];

  if (numbers.checked) {
    xs.push(numero());
  }
  if (maiuscula.checked) {
    xs.push(upperCase());
  }
  if (minuscula.checked) {
    xs.push(lowerCase());
  }
  if (Character.checked) {
    xs.push(simbolos());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
};

const copy = function () {
  navigator.clipboard.writeText(senha.innerHTML);
  alert("Senha copiada com sucesso");
};

btnGerar.addEventListener("click", generatePass);
btnCopy.addEventListener("click", copy);
