<?php

class User
{
    public string $name;
    public string $sexe;
    public string $avatar;

    public function __construct($p_name, $p_sexe, $p_avatar)
    {
        $this->name = $p_name;
        $this->sexe = $p_sexe;
        $this->avatar = $p_avatar;
    }
}