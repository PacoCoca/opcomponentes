<script type="text/javascript">
	function funcionAlerta(alerta){
		alert(alerta);
	}
</script>
<?php





 
include 'sesion.php';
 //$_SESSION['$user']; debe ir despues de session start
$sesion = new Cookies();
$usuario = $sesion->obtenerUsuario();
$mensaje = "Se ha cerrado la sesion de $usuario";
$sesion->destruir();
echo'<script type="text/javascript">funcionAlerta("'.$mensaje.'");window.location.href="../index.php"</script>';


?>