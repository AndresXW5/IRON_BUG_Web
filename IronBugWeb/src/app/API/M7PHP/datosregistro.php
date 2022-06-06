<?php
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];  
$probar = $_FILES['foto']["tmp_name"];
echo "El nombre es ".$usuario;

$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="iron_bug_web";
if(isset($_POST['submit']))
{ 
$filepath = $_FILES["foto"]["name"];

if(move_uploaded_file($_FILES["foto"]["tmp_name"], $filepath)) 
{
echo "<img src=".$filepath." height=200 width=300 />";
} 
else 
{
$filepath = "https://www.theholler.org/wp-content/uploads/2021/10/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg";
}
} 
$salt = substr(bin2hex(openssl_random_pseudo_bytes(16)),0,16);
$base64 = base64_encode($filepath);
$encrip =  base64_encode($contraseña);
$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
if(!$con){
die("no se ha podido realizar la conexion".mysqli_connect_error());


}else{
    mysqli_set_charset($con,"utf8");
    echo "se ha conectado correctamente";
    $sql="INSERT INTO `usuarios` (`id_usuario`, `nick`, `pssw`,`psswConf` ,`avatar`, `rol`) VALUES (null,'".$usuario."', '".$encrip."', '".$encrip."','".$filepath."', 1)";
    $consulta=mysqli_query($con,$sql);
    if(!$consulta){
        die("no se ha podido realizar el insert");
    }else{
        echo "la consulta o insert se ha realizado correctamente";
    }
    
?>
<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initalice">
    <title>Document</title>


</head>
<body>
    <table>
        <?php
        $sql2="SELECT * FROM `usuarios` WHERE 1";
        $consulta=mysqli_query($con,$sql2);
        while($fila=$consulta->fetch_assoc()){
            echo "<tr>";
            echo "<td>".$fila["id"]."</td>";
            echo "<td>".$fila["usuario"]."</td>";
            echo "<td>".$fila["contraseña"]."</td>";
            echo "<td>".$fila["foto"]."</td>";
            echo "</tr>";
        }
        ?>


        

    </table>
    </body>
    </html>
   
<?php
}
header('Location:usus.php')
?>