function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return emailRegex.test(email);
  }
  
  // Example usage:
  const email = "example@gmail.com";
  const isValidEmail = validateEmail(email);
  
  console.log(isValidEmail);
  