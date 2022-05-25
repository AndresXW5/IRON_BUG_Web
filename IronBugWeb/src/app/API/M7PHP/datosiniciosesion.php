<?php
session_start();
$usuario = $_POST['usuario'];
$contraseña = $_POST['contraseña'];  //$_GET muestra los datos en el link, POST NO

$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="iron_bug_web";
$sesion = false;
$nickname="";
$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
if(!$con){
die("no se ha podido realizar la conexion".mysqli_connect_error());

}else{
    mysqli_set_charset($con,"utf8");
    $sql="SELECT * FROM `usuarios` WHERE 1";
    $consulta=mysqli_query($con,$sql);
    while($fila=$consulta->fetch_assoc()){
    if($fila['nick'] == $usuario && $fila['pssw'] == $contraseña){
        $nickname =$fila['nick'];
        $a=$fila['id_usuario'];
        $b=$fila['rol'];
        $sesion = true;
        $foto="<img src=".base64_decode($fila['avatar'])." height=200 width=200 />";
    }
    }
    if($sesion == true){
        echo "Se ha iniciado sesion correctamente, bienvenido " .$nickname; 
        $_SESSION['login']=$nickname;
        $_SESSION['id']=$a;
        $_SESSION['carrito'] = array();
        $_SESSION['foto2'] = $foto;
        $_SESSION['rol'] = $b;

    }else{
        echo"no se ha iniciado sesion";
    }
}
if(isset($_SESSION['login'])){
    echo 'Bienvenido '.$usuario;
    
}else{
    echo 'sin sesion';
}

echo '<a href="logout.php">BOTON</a>';
echo '<a href="productos.php">prod</a>';
header('Location:administrar.php')
?>

