
  <?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization');
    header('Content-Type application/json; charset=utf-8');




  global $datos;

  require("../db.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  $conexion = conexion(); // CREA LA CONEXION

  $json = file_get_contents('php://input');
  $admin =json_decode($json);

  // echo "Php abierto correctamente";
  // echo $json;

  // REALIZA LA QUERY A LA DB
 $registros = mysqli_query($conexion, "UPDATE `admin` SET nick = '$admin->nick', fname = '$admin->fname', lname = '$admin->lname', mail = '$admin->mail', centro = '$admin->centro',pssw = '$admin->pssw', psswConf = '$admin->psswConf', avatar = '$admin->avatar' WHERE id_admin ='$admin->id_admin';");


  // GENERA LOS DATOS DE RESPUESTA
    if($registros){
      $resultado = 'OK';
    }else{
      $resultado = 'No';
    }
  header('Content-Type: application/json');

  echo json_encode($resultado); // MUESTRA EL JSON GENERADO

?>
