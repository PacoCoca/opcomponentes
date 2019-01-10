<?php
function openCon(){
	$dbhost = "localhost";
	$db = "opcomponentes";

	$conn = mysqli_connect($dbhost,'root','',$db);
	mysqli_set_charset($conn,'utf8');
	
	return $conn;
}

function closeCon($conn){
	$conn->close();
}

$conn=openCon();
?>