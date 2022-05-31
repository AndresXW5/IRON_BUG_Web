<?php
session_start();
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
        <li class="navbar-item"><a href="productos.php">Inicio</a></li>
        <li class="navbar-item"><a href="productos.php">Productos</a></li>
        <li class="navbar-item"><a href="productos.php">Foro</a></li>
        <?php
        if(isset($_SESSION["login"])){
          echo "<li class='navbar-item'><a href='carrito.php'>Carrito</a></li>";    
        echo "<li class='navbar-item'><a href='logout.php'>Cerrar Sesion</a></li>";
        echo "<li class='navbar-item'><a href=''>".$_SESSION["login"]."</a></li>";
        if($_SESSION['id'] == 2){
          echo "<li class='navbar-item'><a href='administrar.php'>Administrar</a></li>";
        }
        }else{
        echo "<li class='navbar-item'><a href='registrar.html'>Registrarse</a></li>";
        echo "<li class='navbar-item'><a href='iniciosesion.html'>IniciarSesion</a></li>";
        
        }
         ?>
      </ul>
    </nav>
<div class="fondo">
    <div class="profile-card"><?php

foreach ($_SESSION['carrito'] as $value) {
    $servidor="localhost";
    $usuarioBD="root";
    $password="usbw";
    $bd="daw2";   
    $con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
$sql="SELECT * FROM `productos` WHERE `id` = $value";
    $consulta=mysqli_query($con,$sql);
    while($fila=$consulta->fetch_assoc()){
        echo $fila["id"];
        
        echo " ".$fila["nombreprod"];
        echo " <img src=".base64_decode($fila["foto"])." height=50 width=50 />";
        echo "<br></br>";
        
    }}
        echo "<form method='post'action='carrito.php'>";
        echo "<button name='modificar' type='submit' class='filtro2'>Comprar</button>";
        echo "</form>";
        
?> 
</div>
      </div>
      

