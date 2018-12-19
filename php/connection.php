<?php
function openCon(){
	$dbhost = "localhost";
	$db = "opcomponentes";

	$conn = new mysqli($dbhost, $db) or die("Connect failed: %s\n". $conn -> error);

	return $conn;
}

function closeCon($conn){
	$conn->close();
}

?>