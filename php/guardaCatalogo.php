<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "INSERT INTO Catalogo_tiene(idProducto,precio,descripcion,nombre) VALUES('$data[1]', '$data[2]','$data[3]','$data[0]')";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>