function ABCheck(str) {
    // code goes here
    let aIdx;
    let bIdx;
    for(let i = 0; i < str.length; i ++){
      if(str[i] === 'a' || str[i] === 'A') {
        aIdx = i;
        if(bIdx){
           if(aIdx - bIdx === 4) {
              return true;
           }
           else {
             bIdx = undefined;
           }   
        }
      }
      else if(str[i] === 'b' || str[i] === 'B') {
        bIdx = i;
        if(aIdx){
          if(bIdx - aIdx === 4) {
              return true;
           }
           else {
             aIdx = undefined;
           }   
        }
      }
    }
    return false;
  }