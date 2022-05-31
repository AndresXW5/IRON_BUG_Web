<?php
session_start();
if($_SESSION['rol'] == 2){
$id=$_GET["id"];
$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="iron_bug_web";
$nombre=$_POST["nombre"];
$precio=$_POST["precio"];
$descripcion=$_POST['descripcion'];

$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
if(isset($_POST['submit'])){
    $sql2="UPDATE `productos` SET `nombre`='".$nombre."',`precio`='".$precio."',`descripcion`='".$descripcion."' WHERE `id` like ".$id;
    $consulta=mysqli_query($con,$sql2); 
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
        echo "<li class='navbar-item'><a href='perfil.php'>".$_SESSION["login"]."</a></li>";
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
    $sql2="SELECT * FROM `productos` WHERE `id` like ".$id;
    $consulta=mysqli_query($con,$sql2);
    while($fila=$consulta->fetch_assoc()){
        echo "Producto: ".$fila["nombre"];
        echo "<br></br>";
        echo "<form method ='POST' class='form-signin'>
        <label >Nombre de Producto</label>
        <input type='text' name='nombre' placeholder=".$fila["nombre"]." class='form-styling'>
        <br></br>
        <label class='form-styling'>Descripcion</label>
        <input type='text' class='form-styling' name='descripcion' placeholder=".$fila["descripcion"]." >
        <br></br>
        <label >Precio</label>
        <input type='text' name='precio' placeholder=".$fila["precio"]." class='form-styling'>
        <br></br>
        <input type='submit' value='Guardar' name='submit' class='submit'>
       </form>";
    }
    ?>
    <?php
}else{
  header('Location:administrar.php');
}
?>