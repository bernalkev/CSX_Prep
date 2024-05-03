function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4

  function countBs(str){
    let counter = 0
    for (let i=0; i<str.length; i++){
      if(str[i]=== "B"){
        counter += 1
      }
    } return counter
  }
  
  function countChar(str, char){
    let counter = 0
    for (let i=0; i<str.length; i++){
      if(str[i]=== char){
        counter += 1
      }
    } return counter
    
  }