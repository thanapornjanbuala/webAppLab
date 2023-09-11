let age = prompt("What is your age?", 18);
const welcome = age < 18
  ? () => alert("Hello!")
  : () => alert("Greetings!");

welcome(); // This will display the appropriate message based on the age input
