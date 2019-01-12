<?php
include 'connection.php';

$data = json_decode($_POST['data']);

$query = "UPDATE Catalogo_tiene SET
 nombre='$data[0]', precio='$data[1]', descripcion='$data[2]', categoria='$data[4]', marca='$data[5]', destacado='$data[6]' WHERE idProducto='$data[3]'";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>