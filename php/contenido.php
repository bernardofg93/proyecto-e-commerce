<?php session_start();

if (isset($_SESSION['usuario'])){
    require '../view/contenidoview.php';
}else {
    header('Location: login.php');
}
?>