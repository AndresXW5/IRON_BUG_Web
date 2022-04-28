<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Allow-Headers: Authorization');
  header('Content-Type text/html; charset=utf-8');
  header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.
 
  $json = file_get_contents('php://input');
  $alumnoParam = json_decode($json);

  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB


  $conexion = conexion(); // CREA LA CONEXION


  // REALIZA LA QUERY A LA BD
  $registros = mysqli_query($conexion, "SELECT * FROM alumnos WHERE mail='$alumnoParam->mail' AND pssw='$alumnoParam->pssw'");


  // RECORRE EL RESULTADO Y LO GUARDA EN UN ARRAY

  $resultado = $registros->fetch_assoc();


    $json = json_encode($datos); // GENERA EL JSON CON LOS DATOS OBTENIDOS


    header('Content-Type: application/json'); //envía el encabezado http json al navegador para informarle qué tipo de datos espera.


    echo $json; // MUESTRA EL JSON GENERADO AL EJECUTAR DIRECTAMENTE EL LOCALHOST

?>
