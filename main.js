function disemvowel(string) {
    const vowelsList = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true,
    }
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      //turn to lowercase to match properties in dictionary are lower case
      let currentLetter = string[i].toLowerCase();
      if (!vowelsList[currentLetter]) {
        newString += currentLetter;
      }
    }
    return newString;
}
