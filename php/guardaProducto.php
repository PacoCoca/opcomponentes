<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "INSERT INTO Producto_suple(nombre,idProveedor,coste,cantidadProducto,cantidadMin,cantidadsuple) VALUES('$data[0]', '$data[1]','$data[2]','$data[3]','$data[4]','$data[5]')";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>