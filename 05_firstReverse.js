function firstReverse(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    for(let i = str.length - 1; i >= 0; i --) {
      result = result + str[i];
    }
    return result;
    }