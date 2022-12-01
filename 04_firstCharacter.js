function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split(' ');
    let answer = '';
    if(!str) return '';
    for(let el of arr){
      answer = answer + el[0];
    }
    return answer;
  }