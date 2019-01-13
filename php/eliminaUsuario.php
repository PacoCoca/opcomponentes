<?php
include 'connection.php';

$id = $_POST['idUsuario'];

$query = "DELETE FROM Usuario WHERE idUsuario='$id'";
$rs = mysqli_query($conn,$query);
if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>