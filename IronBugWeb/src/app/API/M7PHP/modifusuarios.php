<?php
session_start();
if($_SESSION['rol'] == 2){
$id=$_GET["id"];
$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="iron_bug_web";
$nombre=$_POST["usuario"];
$rol=$_POST["rol"];

$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
if(isset($_POST['submit'])){
    $sql2="UPDATE `usuarios` SET `nick`='".$nombre."',`rol`='".$rol."' WHERE `id_usuario` like ".$id;
    $consulta=mysqli_query($con,$sql2);   
    header('Location:prod.php');
}
?>
<link rel="stylesheet" href="b.scss"/>
<link rel="stylesheet" href="d.scss"/>
<link rel="stylesheet" href="./frontend/css/BARRA.css" />
    <link rel="stylesheet" href="./frontend/css/estilos.css" />
    <link rel="stylesheet" href="./frontend/css/navbar.css" />
<nav class="navbar">
      <div class="logo">Iron<span>BUG</span></div>

      <input type="checkbox" id="burger-checkbox" />
      <label for="burger-checkbox" class="burger-label"></label>

      <ul class="navbar-list">
        <?php
        if(isset($_SESSION["login"])){
            
        echo "<li class='navbar-item'><a href='logout.php'>Cerrar Sesion</a></li>";
        echo "<li class='navbar-item'><a href=''>".$_SESSION["login"]."</a></li>";
        if($_SESSION['rol'] == 2){
          echo "<li class='navbar-item'><a href='administrar.php'>Administrar</a></li>";
        }
        }else{
       
        echo "<li class='navbar-item'><a href='iniciosesion.html'>IniciarSesion</a></li>";
        
        }
         ?>
      </ul>
    </nav>
<div class="fondo">
    <div class="profile-card">
        
    <?php
    $sql2="SELECT * FROM `usuarios` WHERE `id_usuario` like ".$id;
    $consulta=mysqli_query($con,$sql2);
    while($fila=$consulta->fetch_assoc()){
        echo "Usuario ".$fila["nick"];
        echo "<br></br>";
        echo "<form method ='POST'>
        <label >Nombre de Usuario</label>
        <input type='text' class='form-styling' name='usuario' placeholder=".$fila["nick"].">
        <br></br>
        <label >Rol</label>
        <input type='text' class='form-styling' name='rol' placeholder=".$fila["rol"].">
        <br></br>
        <input type='submit' class='submit' value='Guardar' name='submit'>
       </form>";
    }
    ?>
    <?php
}else{
  header('Location:index.html');
}
?>