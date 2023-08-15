// gestion de play

// =====================================
// ======= - Vider l'input une fois validé
// ======= - intégrer un bouton pour reset
// ======= - si l'input est vide, empêcher la validation
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
        play.createElementAnswer();
        if (answerOfUser === keyObject[0]) {
            play.goodAnswer();
            play.suggestWord();
        } else {
            play.badAnswer();
            play.suggestWord();
        };
        
        
    },

    /**
     * Pickup array in the key of object "english"
     * @returns array with value of key in object "english"
     */
    searchKeyInObject: function () {
        const word = document.querySelector('.recovers__word').textContent;
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
        const sectionToAdd  = document.querySelector('.container__answer');
        const articleToAdd  = document.createElement('div');
        let wordSuggest     = document.querySelector('.recovers__word').textContent;

        let answer              = document.createElement('h3');
        let answerConjugate     = document.createElement('p');
        let answerDefinition    = document.createElement('p');
        let answerExample       = document.createElement('p');
        let answerExample1      = document.createElement('p');
        
        articleToAdd.classList.add('answer__article');
        answer.classList.add('answer__title');
        answerConjugate.classList.add('answer__conjugate');
        answerDefinition.classList.add('answer__definition');
        answerExample.classList.add('answer__example');
        answerExample1.classList.add('answer__example');

        const keyArray = play.searchKeyInObject();

        answer.textContent              = "To " + wordSuggest + " => " + keyArray[0];
        answerDefinition.textContent    = "Def : " + keyArray[1];
        answerConjugate.textContent    = "Preterit : " + keyArray[2];
        answerExample.textContent       = "Example : " + keyArray[3];
        answerExample1.textContent       = "Example : " + keyArray[4]; 

        sectionToAdd.prepend(articleToAdd);
        articleToAdd.append(answer);
        articleToAdd.append(answerConjugate);
        articleToAdd.append(answerDefinition);
        articleToAdd.append(answerExample);
        articleToAdd.append(answerExample1);
    },

    
    goodAnswer: function () {
        let answer = document.querySelector('.answer__title');
        answer.style.backgroundColor = '#86B500';
    },


    badAnswer: function () {
        let answer = document.querySelector('.answer__title');
        answer.style.backgroundColor = '#FD812D';
    }
}

document.addEventListener('DOMContentLoaded', play.init);


