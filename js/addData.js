

const addData = {
    init: function () {
        addData.handleClickAddVerb();
        addData.handleClickAddWord();
        addData.handleClickAddSentence();
    },

    handleClickAddVerb: function () {
        const btnVerb = document.querySelector('#verb');
        btnVerb.addEventListener('click', addData.eventClickVerb);
    },

    handleClickAddWord: function () {
        const btnWord = document.querySelector('#word');
        btnWord.addEventListener('click', addData.eventClickWord);
    },

    handleClickAddSentence: function () {
        const btnSentence = document.querySelector('#sentence');
        btnSentence.addEventListener('click', addData.eventClickSentence);
    },

    eventClickVerb: function () {
        addData.removeClass();
        const form = document.querySelector('#form__verb');
        form.classList.toggle('open');
    },

    eventClickWord: function () {
        addData.removeClass();
        const form = document.querySelector('#form__word');
        form.classList.toggle('open');
    },

    eventClickSentence: function () {
        addData.removeClass();
        const form = document.querySelector('#form__sentence');
        form.classList.toggle('open');
    },

    removeClass: function () {
        const allForm = document.querySelectorAll('.form__admin');
        for ( const form of allForm ) {
            form.classList.remove('open');
        }
    }
}

addData.init();