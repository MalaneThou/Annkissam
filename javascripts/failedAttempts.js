
//FAILED TRIALS
/*
function combinationFinder(aString){
  var testing = aString;

  for(i = 0; i <= testing.length; i++) {
    for(j = 0; j <= testing.length; j++) {
      stringIterate = testing.substr(i, j);
      if(vocabulary.includes(stringIterate)){
        newString = newString + stringIterate + " ";
        i += j;
        alert(newString);
      }
    }
  }

  listOfStrings.push(newString);
  newString = "";
} */

/**
FOR LOOP FOR VARIABLE-A.length to count which letter we are on -i
  FOR LOOP FOR VARIABLE-A.length to count which letter we are going up until -j
    1) Start at 0 position in string -i
    2) check if the NEXT character in string has a space (" ") -j
      A) If it has a space
        1) Add the next letter from the space
        2) Store new variable removing the space in between and checkmatch
        3) Repeat adding one counter
      B) If it has no space
        1)CheckMatch in the list of words in dictionary
          A) If match
            1) functiontoaddstringifmatch
            2) continue outter loop
          B) If no match
            1) continue inner for loop


**/

/*comboSeek(inputString);
function comboSeek(aString) {
  var inputStr = aString;
  var tester = "";
  var storeString = "";
  var solidStuff = [""];
  var counter = 0;
    for(i = 0; i < inputStr.length; i++) {
      for(j = 0; j < inputStr.length; j++) {
        tester = inputStr.substr(i, j);
        console.log("tester: " + tester);
        if(matchString(tester)){
          console.log(counter);
          console.log("The string: " + tester);
          storeString += tester + " ";
        }
      }counter++;
    } console.log("list of EVERYTHING: ", storeString );
}*/

/*
comboSeeker(inputString);
function comboSeeker(aString) {
  var testing = "";
  var counter = 1;
  while (counter < aString.length) {
  for(i = 0; i < aString.length; i++) {
    console.log("Each char: " + aString[i]);
    var testing = aString.substr(i, counter);
        console.log(testing);
        counter++;
    }
  }
}

comboSeeker(inputString);
function comboSeeker(aString) {
  var newString = "";
  var counter = 1;
  for(i = 0; i < aString.length; i++) {
    console.log("Each char: " + aString[i]);
      for(j = 1; j <= aString.length; j++ ) {
        var testing = aString.substr(i, counter);
        console.log(testing);
        counter++;
    } counter = 0;
  }
}

*/
