<?php
session_start();
if($_SESSION['rol'] == 2){
if(isset($_POST['usuarios'])){
    header('Location:usus.php');
    }

if(isset($_POST['productos'])){
    header('Location:prod.php');
    }

    if(isset($_POST['historial'])){
      header('Location:historial.php');
      }
?>

<link rel="stylesheet" href="d.css"/>
    <link rel="stylesheet" href="./frontend/css/BARRA.css" />
    <link rel="stylesheet" href="./frontend/css/estilos.css" />
    <link rel="stylesheet" href="./frontend/css/navbar.css" />
    
 
</head>
    <body>
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

    <?php
    echo "<section>";
    echo "<form method='post' action='administrar.php'>
            <button name='usuarios' type='submit' class='mod'>Modificar Usuarios</button>
            </form>";
            echo "<form method='post' action='administrar.php'>
            <button name='productos' type='submit' class='mod'>Modificar Productos</button>
            </form>";
            
            echo "<form method='post' action='administrar.php'>
            <button name='historial' type='submit' class='mod'>Historial compras</button>
            </form>";echo "</section>";
                   ?>
                   <?php
}else{
  header('Location:index.administrar');
}
?>