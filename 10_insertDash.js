function insertDash(str) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = '';
    for(let i = 0; i < str.length; i ++){
      if(Number(str[i]) % 2 === 1 && Number(str[i - 1]) % 2 === 1){
        answer = answer + '-' + str[i]; 
      }
      else {
        answer = answer + str[i];
      }
    }
    return answer;
  }