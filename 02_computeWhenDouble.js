function computeWhenDouble(interestRate) {
    let principal = 10;
    let year = 0;
    while(principal < 20) {
      principal = principal + principal * (interestRate / 100);
      year ++;
    }
    return year;
  }