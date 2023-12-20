// Function to simulate typing effect
function typeText(text, index, interval, element, callback) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(function () {
        typeText(text, index, interval, element, callback);
      }, interval);
    } else {
      setTimeout(function () {
        backspace(text, index, interval, element, callback);
      }, 1000); // Wait for 1 second before backspacing
    }
  }

  // Function to simulate backspace effect
  function backspace(text, index, interval, element, callback) {
    if (index > 0) {
      element.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(function () {
        backspace(text, index, interval, element, callback);
      }, interval);
    } else {
      callback(); // Call the callback function when backspacing is complete
    }
  }

  // Words to be typed
  var wordsToType = ["Sibaji Khillar", "Java Developer", "Fronted Developer", "UI/UX Desiner"];

  // Element to display typing effect
  var typingElement = document.getElementById("typing-text");

  // Function to start typing for each word
  function startTyping(index) {
    typeText(wordsToType[index], 0, 100, typingElement, function () {
      backspace(wordsToType[index], 0, 100, typingElement, function () {
        typingElement.innerHTML = ''; // Clear previous text
        startTyping((index + 1) % wordsToType.length); // Move to the next word
      });
    });
  }

  // Start typing for the first word
  startTyping(0);