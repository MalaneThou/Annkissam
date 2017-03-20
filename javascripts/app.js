var inputString = prompt("Please enter a string to test.");
var domOutput = document.getElementById("output-values");


//Entire dictionary with nouns, verbs, and articles
var dictionary = {
  nouns: ["abcd", "c", "def", "h", "ij", "cde"],
  verbs: ["bc", "fg", "g", "hij", "bcd"],
  articles: ["a", "ac", "e"]
};

var matchedWordsList = []; //Stores all matched words
var completeSentence = ""; //Used to combine all in matchedWordsList
var sentenceComboList = []; //Stores all sentence combinations


//Main function
combinationSeeker(inputString);

//Starts at the string's first letter
//Searches that letter onward until it finds a match in the dictionary
//If a match is found then the word is added to an array of matched words
//The function will repeat starting from the last letter of the matched word
function combinationSeeker(aString) {
  var testMatch = "";
  for(i = 0; i <= aString.length; i++) {
    for(j = 0; j <= aString.length; j++) {
      testMatch = aString.substr(i, j);
        if(matchString(testMatch)){
          addWord(testMatch);
          i+=j;
        }
      }
    }
    if(isSentenceCorrect(matchedWordsList, aString)) {
      wordsToSentence(matchedWordsList);
      sentenceCombinations(completeSentence);
  }
}

//Matches a given string with the entire dictionary
function matchString(aString) {
  if(dictionary.nouns.includes(aString)||
     dictionary.verbs.includes(aString)||
     dictionary.articles.includes(aString)) {
       console.log("Matched: " + aString);
       return true;
  } else {
        console.log("No match for: " + aString);
  }
}

//Takes a string and adds it to matchedWordsList array
function addWord(aString) {
  matchedWordsList.push(aString);
  console.log("Matched words list: " + matchedWordsList);
}

//Determines if a list is gramatically correct
//Passes the completed sentence array to four "rule" functions
//Returns boolean
function isSentenceCorrect(anArray, aString) {
  return (anyRemainingChars(anArray, aString) &&
          isVerbCorrect(anArray) &&
          (isNounCorrect(anArray) || isArticlesCorrect(anArray)));
}

//Determines if a list has at least one verb
//Returns boolean
function isVerbCorrect(anArray) {
  for(i = 0; i < anArray.length; i++) {
    if(dictionary.verbs.includes(anArray[i])){
      console.log("Verb matched: " + dictionary.verbs[i]);
      return true;
    }
  } console.log("No verb found.")
}

//Determines if a list has at least one noun
//Returns boolean
function isNounCorrect(anArray) {
  for(i = 0; i < anArray.length; i++) {
    if(dictionary.nouns.includes(anArray[i])){
      console.log("Noun matched: " + dictionary.nouns[i]);
      return true;
    }
  } console.log("No noun found.")
}

//Determines if a list has more than one article
//Returns boolean
function isArticlesCorrect(anArray) {
  var counter = 0;
  for(i = 0; i < anArray.length; i++) {
    if(dictionary.articles.includes(anArray[i])){
      console.log("Article matched: " + dictionary.articles[i]);
      counter++;
    }
  }
  console.log("Articles found: " + counter);
  return counter > 1
}

//Finds if any characters are out of the rules
//Determines if original string length matches string length of all matched words when combined
//Returns boolean
function anyRemainingChars(anArray, aString) {
  var lengthToMatch = "";
  //contactonates all words
  for(i = 0; i < anArray.length; i++){
    lengthToMatch += anArray[i];
  }
  console.log("Length to match: " + lengthToMatch.length);
  console.log("String length: " + aString.length);
  console.log("String length matches: ", lengthToMatch.length == aString.length);
  return lengthToMatch.length == aString.length
}

//Takes a list of words and contactonates them to a single sentence with spaces
function wordsToSentence(anArray) {
  for(i = 0; i < anArray.length; i++) {
    completeSentence += anArray[i] + " ";
  }
  completeSentence.slice(0,-1); //Trim last space
  console.log("Your complete sentence: " + completeSentence);
}

//Takes a string and adds it to sentenceComboList array
function sentenceCombinations(aSentence) {
  sentenceComboList.push(aSentence);
  console.log("Combination of sentences: " + sentenceComboList);
}

//Display output on html page
for (var i = 0; i < sentenceComboList.length; i++) {
  var output = document.createElement("li");
  output.innerHTML = sentenceComboList[i];
  domOutput.appendChild(output);
}
