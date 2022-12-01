function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = '';
    let space = true;
    for(let i = 0; i < str.length; i ++) {
      if(str[i] === ' '){
        answer = answer + ' ';
        space = true;
      }
      else if(space === true) {
        answer = answer + str[i].toUpperCase();
        space = false;
      }
      else {
        answer = answer + str[i];
        space = false;
      }
  
    }
    return answer;
  }
