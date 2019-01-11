<?php  

include 'connection.php';

$query="SELECT * FROM Catalogo_tiene";
$rs = mysqli_query($conn,$query);

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["nombre"];
		$array[$i][1]=$row["idProducto"];
		$array[$i][2]=$row["precio"];
		$array[$i][3]=$row["descripcion"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "noCatalogo";
}
?>