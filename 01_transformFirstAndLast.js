function transformFirstAndLast(arr) {
    let obj = {};
    if(arr.length === 0) return {};
    obj[arr[0]] = arr[arr.length - 1];
    return obj
  }