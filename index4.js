function Numbergenerator() {
  const num1 = 10;
  const num2 = 25;

  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

console.log(Numbergenerator());
