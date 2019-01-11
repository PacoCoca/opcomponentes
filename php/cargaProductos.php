<?php  

include 'connection.php';

$query="SELECT * FROM Producto_suple";
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["nombre"];
		$array[$i][1]=$row["idProducto"];
		$array[$i][2]=$row["idProveedor"];
		$array[$i][3]=$row["coste"];
		$array[$i][4]=$row["cantidadProducto"];
		$array[$i][5]=$row["cantidadMin"];
		$array[$i][6]=$row["cantidadsuple"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>