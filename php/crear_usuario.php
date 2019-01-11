<?php
include 'connection.php';

$data[0] = $_POST['nombre'];
$data[1] = $_POST['correo'];
$data[2] = $_POST['password'];
$data[3] = $_POST['telefono'];
$data[4] = $_POST['direccion'];

$query = "INSERT INTO Usuario(nombre,correo,pass,telefono,direccion) VALUES('$data[0]', '$data[1]','$data[2]','$data[3]','$data[4]')";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>