<?php

include 'connection.php';
 
$conn = openCon();
 
echo "Connected Successfully";

closeCon($conn);

?>