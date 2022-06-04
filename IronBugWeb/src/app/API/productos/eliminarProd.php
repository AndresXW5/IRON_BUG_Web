<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');

  $id_user = $_GET['id_user'];
  $id_producto = $_GET['id_producto'];

  echo "ID producto:  ", $id_producto;
  echo "|||||||||||| ID usuario:  ", $id_user;

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  $json= file_get_contents('php://input');
  $unirse=json_decode($json);

  echo "Unirse ==>> ", $unirse, " |||||||||||| ";


  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "DELETE FROM `lineas_carrito` WHERE `id_user` LIKE '$id_user' AND `id_prod` LIKE '$id_producto'");

  //echo "$registros";

    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'NO';
    }

  header('Content-Type: application/json');

  echo json_encode($resultado);

?>
