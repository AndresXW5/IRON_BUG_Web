<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');
   
    $json =file_get_contents('php://input');
    $profesores =json_decode($json);

  global $datos;
 
  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  //Documentacion https://www.php.net/manual/es/wrappers.php.php
  $json = file_get_contents('php://input');

  $params = json_decode($json);

  echo $json;

  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`,`avatar`)  
 VALUES (NULL, '$profesores->nick', '$profesores->fname', '$profesores->lname', '$profesores->mail', '$profesores->centro', '$profesores->pssw', '$profesores->psswConf', '$profesores->avatar')");


  echo "$registros";
  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';  
    }else{
      $resultado = 'NO';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO


 

?>



