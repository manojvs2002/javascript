function tripToLocation(location) {
    return new Promise((resolve, reject) => {
      if (location === 'Paris') {
        resolve("Let's take a trip to Paris");
      } else {
        reject("Invalid Location");
      }
    });
  }
  
  // Example usage:
  const userInput = document.getElementById('locationInput');
  const tripButton = document.getElementById('tripButton');
  const resultContainer = document.getElementById('resultContainer');
  
  tripButton.addEventListener('click', () => {
    const location = userInput.value;
  
    tripToLocation(location)
      .then((message) => {
        resultContainer.textContent = message;
      })
      .catch((error) => {
        resultContainer.textContent = error;
      });
  });
  