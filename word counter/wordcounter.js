const atLeastTwoCharacters = (text) => {
  const letters = text.match(/[a-z]/gi) || [];

  return letters.lenght >= 2;
}

const absenceOfThreeConsecutiveCharacters = (text) => {
 for (const character of text) {
  const occurences = Array.from(text).filter(v => v == character).length; 

  if (occurences >= 3) {
    return false;
  }
 }
 return true

}

const checks = [absenceOfThreeConsecutiveCharacters, atLeastTwoCharacters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement= document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener('input', () => {
const splitted = textInput.value.trim().split(/[\s-]/);
const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
const spaceCount =  (textInput.value.match(/\s+/g) || []).length; 

let wordCount = 0;

outer:

for (const text of splitted) {
for (const check of checks ) {
  if(!check(text)) {
    continue outer;
  }
}
wordCount++;
}
wordCountElement.textContent = wordCount;
letterCountElement.textContent = letterCount;
spaceCountElement.textContent = spaceCount;

});

