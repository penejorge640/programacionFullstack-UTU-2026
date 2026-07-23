<?php

$minutos = 135;

$horas = intdiv($minutos, 60);
$minutosRestantes = $minutos % 60;

echo "$minutos minutos equivalen a $horas horas y $minutosRestantes minutos.";