function add(x, y) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x + y);
      }, 2000); // Delay of 2 seconds
    });
  }
  
  function subtract(x, y) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x - y);
      }, 1500); // Delay of 1.5 seconds
    });
  }
  
  function multiply(x, y) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x * y);
      }, 1000); // Delay of 1 second
    });
  }
  
  function divide(x, y) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (y === 0) {
          reject("Division by zero is not allowed.");
        } else {
          resolve(x / y);
        }
      }, 2500); // Delay of 2.5 seconds
    });
  }
  
  async function performOperations() {
    try {
      const result1 = await add(5, 3);
      console.log("Addition:", result1);
  
      const result2 = await subtract(result1, 2);
      console.log("Subtraction:", result2);
  
      const result3 = await multiply(result2, 4);
      console.log("Multiplication:", result3);
  
      const result4 = await divide(result3, 2);
      console.log("Division:", result4);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  performOperations();
  