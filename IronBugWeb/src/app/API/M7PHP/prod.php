<?php
session_start();
if($_SESSION['rol'] == 2){
$nombre=$_POST['filtro'];
$filtro=$_POST['xcarrera'];
$idborrar=$_GET['id'];
$where="";
$servidor="localhost";
$usuarioBD="root";
$password="usbw";
$bd="iron_bug_web";
$contador=0;
$con=mysqli_connect($servidor,$usuarioBD,$password,$bd);
isset($_POST['buscar']);
$contador+1;
if(isset($_POST['buscar'])){
  if(empty($POST['xcarrera'])){
    $where = "where nombre like'".$nombre."%'";
  }else if(empty($_POST['filtro'])){
    $where = "where precio='".$filtro."'";
  }else{
    $where = "where nombre like '".$nombre."%'";
  }
  }
  if(isset($_POST['modificar'])){
    header('Location:modifproductos.php');
  }
  if(isset($_POST['borrar'])){
    echo $idborrar;
    $sql2="DELETE FROM `productos` WHERE `id` like ".$idborrar;
        $consulta=mysqli_query($con,$sql2);
  }
  if(isset($_POST['crear'])){
    header('Location:adminproduc.php');
  }
?>
<!DOCTYPE html>
<html lang = "en"> 
  
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initalice">
    <h1>Modificar Productos</h1>
    <link rel="stylesheet" href="f.css"/>
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
        echo " <form method='post' action='prod.php'>
        <button name='crear' type='crear' class='crear'>Crear</button>
       </form>
       <br></br>";
        if($filtro==1){
          $argumento = "order by precio asc";
        }else{
          $argumento = "order by precio desc";
        }
        $sql2="SELECT * FROM `productos` $where $argumento";
        $consulta=mysqli_query($con,$sql2);
        while($fila=$consulta->fetch_assoc()){
            
            echo "<section>
             <div class='col'>
              <div class='card estilo-c'>
             
                  <div class='img-container'>
                    <img src=".$fila["foto"]." alt='producto 1'>
                    
                  </div>
                
                <div class='info-container' >
                  <h3>".$fila["nombre"]."</h3>
                  <strong class = 'precio'>".$fila["precio"]."???</strong>
                  <form method='post' action='modifproductos.php?id=".$fila['id']."'>
                  <button name='modificar' type='submit' class='modifi-cart'>Modificar</button>
                 </form>
                <form method='post' action='prod.php?id=".$fila['id']."'>
                  <button name='borrar' type='submit' class='borrar-cart'>Borrar</button>
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
   
<?php
}else{
  header('Location:iniciosesion.html');
}
?>