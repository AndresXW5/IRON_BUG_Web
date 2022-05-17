<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  $id_user = $_GET['id_user'];
  $id_r = $_GET['id_r'];

  echo "ID/user  ", $id_user;
  echo "  _____   ID/rank  ", $id_r;

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  $json= file_get_contents('php://input');
  $unirse=json_decode($json);

  echo "Unirse ==>> ", $unirse, "<br>";


  // REALIZA LA QUERY A LA DB
  $registros = mysqli_query($conexion, "INSERT INTO `carrito` (`id_prod`, `id_user`) VALUES ('$id_r', '$id_user')");

  //echo "$registros";

    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'NO';
    }

  header('Content-Type: application/json');

  echo json_encode($resultado);

?>
