<?php

$stock_disponible = 40;
$cantidad_solicitada = 4;
$precio = 100;
$presupuesto_del_cliente = 1500;

if ($stock_disponible > $cantidad_solicitada) {
    echo "hay stock \n";
} else {
    echo "no hay suficiente \n";
}

if ($precio > $presupuesto_del_cliente) {
    echo "no alcanza ";
} else {
    echo "no hay plata ";
}


