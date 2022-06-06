<?php
session_start();
echo "<link rel='stylesheet' href='a.scss'/>";
echo "<div class='fondo'>";
echo "<div class='profile-card'>";
echo $_SESSION['foto2'];
echo "<h1>".$_SESSION["login"]."</h1>";
echo "</div>";
echo "</div>";
?> 