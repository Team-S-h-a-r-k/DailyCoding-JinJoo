function readVertically(arr) {
    let result = '';
    let longest = '';
  
    for(let i = 0; i < arr.length; i ++) {
      if(arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
  
    for(let j = 0; j < longest.length; j ++) {
      arr.reduce((acc, cur, idx) => {
        if(cur[0]){
          result = result + cur[0];
          arr[idx] = arr[idx].slice(1);
          return result;
        }
      }, '')
    }
    
    return result;
  }