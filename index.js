module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// Defines Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Returns the letters in the content.
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
    // return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");

    // let theLetters = [];
    // const letterRegex = /[a-zA-z]/;
    // Array.from(this.content).forEach(function (character) {
    //   if (character.match(letterRegex)) {
    //     theLetters.push(character);
    //   }
    // });
    // return theLetters.join(""); 
  };

  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };
}

// Defines a TranslatedPhrase object

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();
