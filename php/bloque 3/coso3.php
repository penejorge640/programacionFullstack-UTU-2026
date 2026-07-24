<?php
$numero = 10;
$texto = "10";


if ($numero == $texto) {
    echo "Con == : Son iguales \n";
} else {
    echo "Con == : Son diferentes \n";
}


if ($numero === $texto) {
    echo "Con === : Son iguales \n";
} else {
    echo "Con === : Son diferentes";
}

//todo chatgepetiao pero yo entiendo q == solo compara el valor y === compara tambien el tipo osea al 10 segundo lo toma como texto