<?php

class WordEnglish
{
    public string $guessWord;
    public string $translation;
    public string $definition;
    public string $example;

    public function __construct($p_guessWord, $p_translation, $p_definition, $p_example)
    {
        this->guessWord = $p_guessWord;
        this->translation = $p_translation;
        this->definition = $p_definition;
        this->example = $p_example;
    }
}