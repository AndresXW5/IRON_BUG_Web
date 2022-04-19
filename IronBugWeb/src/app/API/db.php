<?php

//Variable global para la conexion con la BD
global  $enlace;

function conexion() {

  //conexion a la BD
  $enlace = mysqli_connect('localhost','root','usbw','ajesty');
    mysqli_set_charset($enlace,"utf8");

    if (!$enlace) {
      echo "Error: No se puede conectar a MySQL." . PHP_EOL;
      echo "Error de depuracion: " . mysqli_connect_error() . PHP_EOL;
      echo "Error de depuracion: " . mysqli_connect_error() . PHP_EOL;
      exit;
     }
    return $enlace;

    }

?>

