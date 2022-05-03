<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');

  $codigo = $_GET['codigo'];
  echo $codigo;

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION
  $json= file_get_contents('php://input');
  $unirse=json_decode($json);
  // echo $unirse;

  $list = mysqli_query($conexion, "SELECT name_r, id_r FROM ranking WHERE codigo = $_GET[codigo]");


  // REALIZA LA QUERY A LA DB
  //$registros = mysqli_query($conexion, "SELECT name_r FROM ranking WHERE codigo ='$unirse->codigo';");
  $registros = mysqli_query($conexion, "INSERT INTO `r_alumno` (`id_usuario`, `id_r`, `name_r_a`) VALUES ('$_GET.....','$unirse->id_r', '$unirse->name_r_a')");


  //echo "$registros";

    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado);

  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY


  if(!$registros){
    $response = 'Error';
    echo json_encode($response);
  }else if($registros->num_rows == 0){
          $response = 'No esta';
          echo json_encode($response);
  }


?>
