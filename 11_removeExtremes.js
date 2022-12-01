function removeExtremes(arr) {
    let shortest = 20;
    let longest = 0;
    let shortestIdx = 0;
    let longestIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= longest) {
        longest = arr[i].length;
        longestIdx = i;
      }
  
      if (arr[i].length <= shortest) {
        shortest = arr[i].length;
        shortestIdx = i;
      }
    }
  
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== shortestIdx && i !== longestIdx) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }