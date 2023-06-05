function bookFlight() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const isSuccess = true; // Change to false to simulate a failed booking
  
        if (isSuccess) {
          resolve("Flight booked successfully");
        } else {
          reject("Flight booking failed");
        }
      }, 2000); // Delay of 2 seconds
    });
  }
  
  function bookHotel() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        resolve("Hotel booked successfully");
      }, 1500); // Delay of 1.5 seconds
    });
  }
  
  // Example usage:
  bookFlight()
    .then((flightBookingResult) => {
      console.log(flightBookingResult);
      return bookHotel(); // Return the promise from bookHotel
    })
    .then((hotelBookingResult) => {
      console.log(hotelBookingResult);
    })
    .catch((error) => {
      console.error(error);
    });
  