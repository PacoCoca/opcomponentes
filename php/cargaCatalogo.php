<?php  

include 'connection.php';

$query="SELECT * FROM Catalogo_tiene";
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["nombre"];
		$array[$i][1]=$row["idProducto"];
		$array[$i][2]=$row["precio"];
		$array[$i][3]=$row["descripcion"];
		$array[$i][4]=$row["categoria"];
		$array[$i][5]=$row["marca"];
		$array[$i][6]=$row["destacado"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>