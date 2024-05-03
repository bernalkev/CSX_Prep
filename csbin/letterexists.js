function letterExists(word, letter) {
    for (let i=0; i<word.length; i++){
      if (word[i] === letter){
        return true
      } 
  }
}
  
  console.log(letterExists("superman", "e")) //=> true
  console.log(letterExists("starship", "S")) //=> false
  console.log(letterExists("th1s", "1")) //=> true
  console.log(letterExists("he!lo", "!")) //=> true