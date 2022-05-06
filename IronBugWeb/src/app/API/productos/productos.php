<?php
header('Access-Control-Allow-Origin', 'http://localhost:4200');
header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS, POST');
header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');

$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="daw2";
class response{}
$res = new response(); 
$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
if(!$con){
  echo "A";
}else {
  # code...

$sql2="SELECT `nombreprod`, `descripcion`, `precio` FROM `productos` WHERE `id`";

          $consulta=mysqli_query($con,$sql2);
          
          //while ($resultadoArray = mysqli_fetch_array($consulta)) {
          //  $productoArray[] = $resultadoArray;
        //  };
        //  $resultado = $consulta->fetch_assoc();

          //$json = json_encode("a",5); // GENERA EL JSON CON LOS DATOS OBTENIDOS

          //; //envía el encabezado http json al navegador para informarle qué tipo de datos espera.
        
         // echo $json;
         while($fila=$consulta->fetch_assoc()){ 
          $res->data = $fila["nombreprod"];
          $res->code = $fila["precio"];
  
  header('Content-Type: application/json')
          //}
  $json = json_encode($res);
  
  
  echo $json;

        }
          


?>