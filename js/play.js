// gestion de play

// =====================================
// =======  erreur possible avec const dans la function generateRandom
// ======= 
// =====================================

const play = {
    
    init: function () {
        play.addClickEvent();
    },

    /**
     * This function recovers the click for play game
     */
    addClickEvent: function () {
        const btnPlay = document.querySelector('.play');
        btnPlay.addEventListener('click', play.startGame);
    },

    /**
     * This function start game, the div "display" display
     */
    startGame: function () {
        const display = document.querySelector('.display');
        display.style.display = 'block';
        play.suggestWord();
    },

    /**
     * Select word in object language and display it
     */
    suggestWord: function () {
        let suggestWord = document.querySelector('.recovers__word');
        const generateWord = play.generateRandomWord();
        suggestWord.textContent = generateWord; 
        play.validateAnswer(generateWord);
    },

    /**
     * Generate random key of object "english"
     * @returns key of object "english"
     */
    generateRandomWord: function () {
        const keys      = Object.keys(english);
        const randomKey = keys[Math.floor(Math.random()  * keys.length)];
        return randomKey;
    },

    /**
     * Pickup the click for validate answer
     */
    validateAnswer: function () {
        const btnValidate = document.querySelector('form');
        btnValidate.addEventListener('submit', play.checkAnswer);
    },

    /**
     * Check the answer of user
     */
    checkAnswer: function (event) {
        event.preventDefault();
        
        let answerOfUser = document.querySelector('input').value;
        const keyObject = play.searchKeyInObject();

        if (answerOfUser === keyObject[0]) {
            play.goodAnswer();
        } else {
            play.badAnswer();
        };

        play.createElementAnswer();
    },


    searchKeyInObject: function () {
        const word = document.querySelector('h3.recovers__word').textContent;
    
        for (const key in english) {
            if (key == word) {
             
                const result = english[key];
                return result;
            }
        }
    },

    /**
     * Create elements html for display answer with translate, definition and example
     */
    createElementAnswer: function () {
        let answer              = document.querySelector('h3.answer__title');
        let answerDefinition    = document.querySelector('.answer__definition');
        let answerExample       = document.querySelector('.answer__example');
        
        answer.textContent              = Object.keys(english) + " => " + english.good[0];
        answerDefinition.textContent    = english.good[1];
        answerExample.textContent       = english.good[2];
    },

    
    goodAnswer: function () {
        let answer = document.querySelector('article.answer__article');
        answer.style.backgroundColor = 'green';
    },


    badAnswer: function () {
        let answer = document.querySelector('article.answer__article');
        answer.style.backgroundColor = 'red';
    }
}

document.addEventListener('DOMContentLoaded', play.init);

