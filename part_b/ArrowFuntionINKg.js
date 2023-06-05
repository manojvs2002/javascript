const convertWeightToLbs = (weightInKg) => {
    const weightInLbs = weightInKg * 2.2;
  
    if (weightInLbs > 150) {
      return "obese";
    } else if (weightInLbs >= 100 && weightInLbs <= 150) {
      return "you are ok";
    } else {
      return "underweight";
    }
  };
  
  // Example usage:
  const weight = 80; // Enter weight in kilograms
  const weightCategory = convertWeightToLbs(weight);
  
  console.log(`Weight: ${weight} kg`);
  console.log(`Weight in lbs: ${weight * 2.2}`);
  console.log(`Weight Category: ${weightCategory}`);
  