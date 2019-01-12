<?php
include 'connection.php';

$id = $_POST['idProveedor'];

$query = "DELETE FROM Proveedor WHERE idProveedor='$id'";
$rs = mysqli_query($conn,$query);
if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>