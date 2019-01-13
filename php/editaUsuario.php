<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "UPDATE Usuario SET
 nombre='$data[1]', correo='$data[2]', pass='$data[3]', telefono='$data[4]', direccion='$data[5]', admin='$data[6]' WHERE idUsuario='$data[0]'";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>