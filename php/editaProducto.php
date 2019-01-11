<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "UPDATE Producto_suple SET
 nombre='$data[0]', idProveedor='$data[1]', coste='$data[2]', cantidadProducto='$data[3]', cantidadMin='$data[4]', cantidadsuple='$data[5]'";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>