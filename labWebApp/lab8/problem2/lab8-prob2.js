function areAllNumbers(args) {
  return args.every(arg => !isNaN(arg));
}

function calculate(operator, numbers) {
  if (operator === 'add') {
    return numbers.reduce((acc, num) => acc + num, 0);
  } else if (operator === 'subtract') {
    return numbers.reduce((acc, num) => acc - num);
  } else {
    return NaN;
  }
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Please enter a valid input.');
} else {
  const operator = args[0].toLowerCase();
  const numbers = args.slice(1).map(Number);

  if (areAllNumbers(numbers)) {
    const result = calculate(operator, numbers);
    if (!isNaN(result)) {
      console.log(`Result: ${result}`);
    } else {
      console.log('Unknown operator. Please use "add" or "subtract".');
    }
  } else {
    console.log('Please enter numbers as arguments.');
  }
}
