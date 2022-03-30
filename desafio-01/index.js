function hasUnderlineNumberAndLetter(str){
    for(let i of str){
      if(typeof i === 'number' || typeof i === 'string' || i === "_"){
        return true
      }else{
        return false;
      }
    }
  }
  
  
  function CodelandUsernameValidation(str) { 
  
    const charactersIsValid = str.length >= 4 && str.length <= 25;
    const startWithLetter = typeof Number(str[0]) != Number;
    const lettersNumbersAndUnderline = hasUnderlineNumberAndLetter(str);
    const lastCharacterIsNotUnderline = str[str.length] !== "_";
  
    const allRight = charactersIsValid && startWithLetter && lettersNumbersAndUnderline && lastCharacterIsNotUnderline;
    const result  = allRight ? true : false;
    
    return result;
  }
  const data = readline();  
  const result = CodelandUsernameValidation(data);
  
  console.log(result);