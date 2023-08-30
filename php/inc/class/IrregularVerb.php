<?php

class IrregularVerb
{
    public string $verb;
    public string $translation;
    public string $definition;
    public string $example;

    public function __construct($p_verb, $p_translation, $p_definition, $p_example)
    {
        $this->verb = $p_verb;
        $this->translation = $p_translation;
        $this->definition = $p_definition;
        $this->example[] = $p_example;
    }
}