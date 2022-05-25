<?php
session_start();
$nombre=$_POST['filtro'];
$filtro=$_POST['xcarrera'];
$where="";
$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="daw2";
$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
if(isset($_POST['buscar'])){
  if(empty($POST['xcarrera'])){
    $where = "where nombreprod like'".$nombre."%'";
  }else if(empty($_POST['filtro'])){
    $where = "where precio='".$filtro."'";
  }else{
    $where = "where nombreprod like '".$nombre."%'";
  }
  }
  if(isset($_POST['modificar'])){
    $abc=$_GET['id'];
    $_SESSION['carrito'][] = $abc;
    }
?>
<!DOCTYPE html>
<html lang = "en"> 
  
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initalice">
    <h1>Productos</h1>
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
        <li class="navbar-item"><a href="productos.php">Inicio</a></li>
        <li class="navbar-item"><a href="productos.php">Productos</a></li>
        <li class="navbar-item"><a href="productos.php">Foro</a></li>
        <?php
        if(isset($_SESSION["login"])){
          echo "<li class='navbar-item'><a href='carrito.php'>Carrito</a></li>";    
        echo "<li class='navbar-item'><a href='logout.php'>Cerrar Sesion</a></li>";
        echo "<li class='navbar-item'><a href='perfil.php'>".$_SESSION["login"]."</a></li>";
        if($_SESSION['rol'] == 2){
          echo "<li class='navbar-item'><a href='administrar.php'>Administrar</a></li>";
        }
        }else{
        echo "<li class='navbar-item'><a href='registrar.html'>Registrarse</a></li>";
        echo "<li class='navbar-item'><a href='iniciosesion.html'>IniciarSesion</a></li>";
        
        }
         ?>
      </ul>
    </nav>
    
    <div class="row"> 
    <form method="post">
    <input type="text" placeholder="Filtrar" name="filtro" class="filtro1">
        <select name="xcarrera" class="filtro">
        <option value="">Relevancia</option>
        <option value=1>Precio Bajo</option>
        <option value=2>Precio Alto</option>
      </select>
      <button name="buscar" type="submit" class="filtro2">Filtrar</button>
    </form>
      </div>
        <?php   
        if($filtro==1){
          $argumento = "order by precio asc";
        }else{
          $argumento = "order by precio desc";
        }
        
          $sql2="SELECT * FROM `productos` $where $argumento";
          $consulta=mysqli_query($con,$sql2);
          while($fila=$consulta->fetch_assoc()){
              $hola=base64_decode($fila["foto"]);
              echo "<section>
               <div class='col'>
                <div class='card estilo-c'>
               
                    <div class='img-container'>
                      <img src=".$hola." alt='producto 1'>
                      
                    </div>
                  
                  <div class='info-container' >
                    <h3>".$fila["nombreprod"]."</h3>
                    <strong class = 'precio'>".$fila["precio"]."€</strong>
                    <form method='post' action='productos.php?id=".$fila['id']."'>
                    <button name='modificar' type='submit' class='add-cart'>Comprar</button>
                   </form>
                  </div>
                  </div>
                  </div>
                </div>
                <br>
            </section>";
          }
        
          
        
       
        ?>
        


    
    </body>
    </html>
   
