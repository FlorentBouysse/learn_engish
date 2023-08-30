<?php
//================================
// conect to data base 
//================================

// Initiat data base with her name, location and encoding
$dns = "mysql:dbname=learn_english;host=localhost;charset=UTF8";

// instanciation new PDO for create the connexion 
$pdo = new PDO( $dns, "explorateur", "Ereul9Aeng", [PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING] );