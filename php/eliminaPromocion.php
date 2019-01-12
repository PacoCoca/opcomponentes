<?php
include 'connection.php';

$id = $_POST['idPromocion'];

$query = "DELETE FROM Promociones WHERE idPromocion='$id'";
$rs = mysqli_query($conn,$query);

if($rs){
  echo "correcto";
} else{
  echo "error";
}

?>