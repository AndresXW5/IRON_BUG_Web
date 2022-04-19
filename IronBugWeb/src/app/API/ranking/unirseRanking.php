<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Content-Type: text/html; charset=UTF-8');


  global $datos;

  require("db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION
  $unirse->json_decode($json);

  // REALIZA LA QUERY A LA DB
  //$registros = mysqli_query($conexion, "SELECT name_r FROM ranking WHERE codigo ='$unirse->codigo';");
  $registros = mysqli_query($conexion, "INSERT INTO `ranking` (`id_r`, `name_r`, `cont_r`, `codigo`) VALUES (NULL, '$unirse->name_r', NULL , '$unirse->codigo')");


  echo "$registros";
  
    if($registros){
      $resultado = 'OK';  
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); 

  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY


    // if(!$registros){
    //     $response = 'Error';
    //     echo json_encode($response);
    // }else{
    //   if($registros->num_rows == 0){
    //           $response = 'No existe';
    //           echo json_encode($response);
    //   } else{
    //       $ranking = $registros->fetch_assoc();
    //       $name_r_a = $ranking['name_r'];
    //       $registros2 = mysqli_query($conexion, "INSERT INTO `r_alumno` (`name_r_a`,`id_alumno`)");

    //       if(!$registros2){
    //           $response = 'Error';
    //       } else{
    //           $response = $name_r_a;
    //       }
    //       echo json_encode($response);
    //     }
    // }

?>