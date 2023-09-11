const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (input) => {
  const inputArray = input.split(' ');

  if (inputArray.length === 2) {
    const operand1 = parseFloat(inputArray[0]);
    const operand2 = parseFloat(inputArray[1]);

    if (!isNaN(operand1) && !isNaN(operand2)) {
      rl.question('Enter operation (add/subtract): ', (operation) => {
        if (operation === 'add') {
          const result = operand1 + operand2;
          console.log(`Operands: ${operand1} ${operand2}`);
          console.log(`${operand1} + ${operand2} = ${result}`);
        } else if (operation === 'subtract') {
          const result = operand1 - operand2;
          console.log(`Operands: ${operand1} ${operand2}`);
          console.log(`${operand1} - ${operand2} = ${result}`);
        } else {
          console.log('unknown operater.');
        }

        rl.close();
      });
    } else {
      console.log('Invalid input. Please enter valid numbers.');
      rl.close();
    }
  } else {
    console.log('Invalid input. Please enter exactly two operands separated by space.');
    rl.close();
  }
});
