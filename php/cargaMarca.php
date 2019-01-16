<?php  

include 'connection.php';

$query="SELECT marca, count(*) as c FROM Catalogo_tiene GROUP BY marca";
$rs = mysqli_query($conn,$query);
$array = array();

if($rs){
	$i=0;
	while($row = mysqli_fetch_array($rs)){
		$array[$i][0]=$row["marca"];
		$array[$i][1]=$row["c"];
		$i++;
	}

	echo json_encode($array);
} else{
	echo "error";
}
?>