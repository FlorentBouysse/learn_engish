// gestion de play

// =====================================
// =======  
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
        suggestWord.textContent = Object.keys(english); 
        play.validateAnswer();
        // for (const key in english) {
            
        // }
    },


    generateRandomWord: function () {
        
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

        let answerOfUser        = document.querySelector('input').value;
        if (answerOfUser === english.good[0]) {
            play.goodAnswer();
        } else {
            play.badAnswer();
        };

        play.createElementAnswer();
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