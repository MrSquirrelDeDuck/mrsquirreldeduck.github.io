var guessId = 0;
var words = [];

fetch('https://mrsquirreldeduck.github.io/worchle/words.txt')
  .then(response => response.text())
  .then((data) => {
    words = data.split("\n");
  })

addEventListener("keydown", (event) => {
    const key = event.key;
    if (key == "Enter") {
        makeGuess();
    } else if (key == "Backspace") {
        removeLetter();
    } else if (key.length == 1 &&
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(key)) {
        addLetter(key);
    }
})

function addLetter(letter) {
    if (guessId >= 7) {
        return;
    }
    
    
    currentGuess = getGuess();
    if (currentGuess.length == 5) {
        return;
    }

    row = getRowLetters();

    for (letterIndex = 0; letterIndex < row.length; letterIndex++) {
        letterElement = row.item(letterIndex)
        if (letterElement.innerHTML.length == 0) {
            letterElement.innerHTML = letter.toUpperCase();
            return;
        }
    }
}

function removeLetter() {
    if (guessId >= 7) {
        return;
    }

    currentGuess = getGuess();
    if (currentGuess.length == 0) {
        return;
    }

    row = getRowLetters();

    for (letterIndex = row.length - 1; letterIndex >= 0; letterIndex--) {
        letter = row.item(letterIndex)
        if (letter.innerHTML.length != 0) {
            letter.innerHTML = "";
            return;
        }
    }
}

function makeGuess() {
    if (guessId >= 7) {
        return;
    }

    guess = getGuess().toLocaleLowerCase();
    
    // Only do a guess if all 5 letters are typed.
    if (guess.length != 5) {
        return;
    }
    
    if (!words.includes(guess)) {
        return;
    }

    guessId++;
    
    const solution = "worch"; // Shh, don't tell anyone!
    used = [];

    for (letterIndex = 0; letterIndex < row.length; letterIndex++) {
        letter = row.item(letterIndex)
        typed = letter.innerHTML.toLocaleLowerCase()
        
        if (typed == solution.at(letterIndex)) {
            used.push(typed);
            letter.style.backgroundColor = "#538d4e"
            document.getElementById("letter-" + typed).style.backgroundColor = "#538d4e"
        }
    }
    
    for (letterIndex = 0; letterIndex < row.length; letterIndex++) {
        letter = row.item(letterIndex)
        typed = letter.innerHTML.toLocaleLowerCase()
        
        if (used.includes(typed)) {
            continue;
        }
        
        if (solution.includes(typed)) {
            used.push(typed);
            letter.style.backgroundColor = "#b59f3b"
            
            button = document.getElementById("letter-" + typed)
            if (button.style.backgroundColor != "#538d4e") {
                button.style.backgroundColor = "#b59f3b";
            }
        }
    }
    
    for (letterIndex = 0; letterIndex < row.length; letterIndex++) {
        letter = row.item(letterIndex)
        typed = letter.innerHTML.toLocaleLowerCase()
        
        if (!used.includes(typed)) {
            document.getElementById("letter-" + typed).style.backgroundColor = "#3a3a3c";
        }
    }

    if (guess == solution) {
        guessId = 8
    }
}

function getRowLetters() {
    letterContainer = document.getElementById("letter-container");
    return letterContainer.children.item(guessId).children;
}

function getGuess() {
    row = getRowLetters();
    var concatenated = "";
    for (letterIndex = 0; letterIndex < row.length; letterIndex++) {
        letter = row.item(letterIndex)
        concatenated = concatenated.concat(letter.innerHTML);
    }

    return concatenated;
}