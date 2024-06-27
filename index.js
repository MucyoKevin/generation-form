const form = document.getElementById('userForm');  // Get the form element

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent default form submission

  const name = document.getElementById('name').value.trim();  // Get and trim name
  const age = parseInt(document.getElementById('age').value);  // Get and convert age to integer

  // Define generation ranges (adjust as needed)
  const generations = {
    "Silent Generation": (birthYear) => birthYear >= 1928 && birthYear <= 1945,
    "Baby Boomer": (birthYear) => birthYear >= 1946 && birthYear <= 1964,
    "Generation X": (birthYear) => birthYear >= 1965 && birthYear <= 1980,
    "Millennials": (birthYear) => birthYear >= 1981 && birthYear <= 1996,
    "Generation Z": (birthYear) => birthYear >= 1997 && birthYear <= 2012,
  };

  // Calculate estimated birth year based on current year and age
  const estimatedBirthYear = new Date().getFullYear() - age;

  let generation;
  for (const gen in generations) {
    if (generations[gen](estimatedBirthYear)) {
      generation = gen;
      break;
    }
  }

  const message = generation ? `Hello, ${name}! You belong to the ${generation} generation.` : "Age could not be determined for generation.";
  alert(message);  // Display an alert message
});
