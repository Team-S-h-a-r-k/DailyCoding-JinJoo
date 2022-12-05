function findBugInApples(arr) {
    let result = [];
    for(let i  = 0; i < arr.length; i ++) {
      arr[i].filter((el, idx) => {
        el === 'B'? (result.push(i), result.push(idx)) : false
      })
    }
    return result;
  }