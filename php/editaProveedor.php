<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "UPDATE Proveedor SET
 nombre='$data[0]', correo='$data[1]', CIF='$data[2]', telefono='$data[4]', direccion='$data[5]' WHERE idProveedor='$data[3]'";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>