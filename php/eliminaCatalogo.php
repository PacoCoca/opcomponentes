<?php
include 'connection.php';

$id = $_POST['idProducto'];

$query = "DELETE FROM Catalogo_tiene WHERE idProducto='$id'";
$rs = mysqli_query($conn,$query);
if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>