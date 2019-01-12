<?php  

include 'connection.php';

$query="SELECT * FROM Proveedor";
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["nombre"];
		$array[$i][1]=$row["correo"];
		$array[$i][2]=$row["CIF"];
		$array[$i][3]=$row["telefono"];
		$array[$i][4]=$row["direccion"];
		$array[$i][5]=$row["idProveedor"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>