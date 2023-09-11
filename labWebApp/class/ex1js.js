const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter input: ', (input) => {
  const operands = input.split(' ');

  if (operands.length === 2) {
    const operand1 = parseFloat(operands[0]);
    const operand2 = parseFloat(operands[1]);
    if (!isNaN(operand1) && !isNaN(operand2)) {
      const result = operand1 + operand2;
      console.log(`Operands: ${operand1} ${operand2}`);
      console.log(`${operand1} + ${operand2} = ${result}`);
    } else {
      console.log('Invalid input. Please enter valid numbers.');
    }
  } else {
    console.log('try.');
  }

  rl.close();
});
