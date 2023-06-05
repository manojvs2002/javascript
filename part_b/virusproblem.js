function identifyInfection(virusComposition, bloodComposition) {
    let virusIndex = 0;
    let bloodIndex = 0;
  
    while (virusIndex < virusComposition.length && bloodIndex < bloodComposition.length) {
      if (virusComposition[virusIndex] === bloodComposition[bloodIndex]) {
        virusIndex++;
      }
      bloodIndex++;
    }
  
    if (virusIndex === virusComposition.length) {
      return "POSITIVE";
    } else {
      return "NEGATIVE";
    }
  }
  
  // Example usage:
  const virusComposition = "coronavirus";
  const bloodComposition = "ravus";
  
  const result = identifyInfection(virusComposition, bloodComposition);
  console.log(result);
  