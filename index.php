<?php
include 'php/sesion.php';
 //$_SESSION['$user']; debe ir despues de session start
$sesion = new Cookies();
$tipo = $sesion->tipoConexion();
if ($tipo == 0){
	//$usuario = "Administrador";
	header('Location: admin.html');

}
else if($tipo == 1){
	$usuario = $sesion->obtenerUsuario();
}
else if($tipo == 3){
	$usuario = "";
}
//echo "Usuario: $usuario ";


?>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Home | OPComponentes</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/prettyPhoto.css" rel="stylesheet">
    <link href="css/price-range.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<link href="css/responsive.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->       
    <link rel="shortcut icon" href="images/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
</head><!--/head-->
<body>
	<header id="header"><!--header-->
		<div class="header_top"><!--header_top-->
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="contactinfo">
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i>  958 188 821</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> info@opcomponentes.com</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="social-icons pull-right">
							<ul class="nav navbar-nav">
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header_top-->
		<div class="header-middle"><!--header-middle-->
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<a href="index.php"><img src="images/home/logo.png"  height="70" alt="" /></a>
						</div>
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav">	
								<?php if($usuario != ""): ?>
								<li><a href="#"><i class="fa fa-user"></i><?php echo $usuario ?></a></li>
								<li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Cesta</a></li>
								<li><a href="php/cerrar_sesion.php"><i class="fa fa-lock"></i> Cerrar sesión</a></li>
								<?php else: ?>
								<li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Cesta</a></li>
								<li><a href="login.html"><i class="fa fa-lock"></i> Iniciar sesión</a></li>
								<?php endif; ?>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-middle-->
	
		<div class="header-bottom"><!--header-bottom-->
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><a href="index.php" class="active">Home</a></li>
								<li><a href="contact-us.html">Contacto</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-bottom-->
	</header><!--/header-->

	<section id="slider"><!--slider-->
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div id="slider-carousel" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div class="carousel-inner">
							<div class="item active">
								<div class="col-sm-6">
									<h1><span>OP</span>Componentes</h1>
									<h2>Gráfica Nvidia</h2>
									<p> Juega al Minecraft a 90 fps ESTABLES! </p>
									<button type="button" class="btn btn-default get">Consíguelo</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/grafica.jpg"  style="height: 300" class="girl img-responsive" alt="" />
									<img src="images/home/pricing.png"  class="pricing" height="80" alt="" />
								</div>
							</div>
							<div class="item">
								<div class="col-sm-6">
									<h1><span>OP</span>Componentes</h1>
									<h2>Teclado gamer</h2>
									<p>Igual que un teclado normal, pero con luces LEDs</p>
									<button type="button" class="btn btn-default get">Consíguelo</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/teclado.jpg" class="girl img-responsive" alt="" />
									<img src="images/home/pricing.png"  class="pricing" height="80" alt="" />
								</div>
							</div>
							
							<div class="item">
								<div class="col-sm-6">
									<h1><span>OP</span>Componentes</h1>
									<h2>Silla gamer</h2>
									<p>Silla de oficina con colores chillones y precio exagerado</p>
									<button type="button" class="btn btn-default get">Consíguelo</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/silla.jpg" class="girl img-responsive" alt="" />
									<img src="images/home/pricing.png" class="pricing" height="80" alt="" />
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
					</div>
					
				</div>
			</div>
		</div>
	</section><!--/slider-->

	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						<h2>Categorías</h2>
						<div class="panel-group category-products" id="accordian"><!--category-productsr-->
						</div><!--/category-products-->
					
						<div class="brands_products" ><!--brands_products-->
							<h2>Marcas</h2>
							<div class="brands-name">
								<ul class="nav nav-pills nav-stacked" id="idMarcas">
								
								</ul>
							</div>
						</div><!--/brands_products-->
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<h2 class="title text-center" id="idTituloProductos" >Productos Destacados</h2>
					<div class="features_items" id="idProductoDestacados"><!--features_items-->
						
						
					</div><!--features_items-->
					
				</div>
			</div>
		</div>
	</section>
	
	<footer id="footer"><!--Footer-->
		
		<div class="footer-widget">
			<div class="container">
				<div class="row">
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Servicios</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">Ayuda Online</a></li>
								<li><a href="#">Contáctanos</a></li>
								<li><a href="#">Estado del pedido</a></li>
								<li><a href="#">Preguntas frecuentes</a></li>
							</ul>
						</div>
					</div>
				
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Política</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">Términos de uso</a></li>
								<li><a href="#">Política</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-2">
						<div class="single-widget">
							<h2>Sobre la tienda</h2>
							<ul class="nav nav-pills nav-stacked">
								<li><a href="#">Información adicional</a></li>
								<li><a href="#">Localización</a></li>
								<li><a href="#">Copyright</a></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3 col-sm-offset-1">
						<div class="single-widget">
							<h2>Suscríbete</h2>
							<form action="#" class="searchform">
								<input type="text" placeholder="Tu correo electrónico" />
								<button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
								<p>Recibe instantáneamente las novedades <br />de nuestra tienda...</p>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<p class="pull-left">Copyright © 2018 OPComponentes Inc. All rights reserved.</p>
					<p class="pull-right">Disenado por <span><a target="_blank" href="www.opcomponentes.es">OPComponentes</a></span></p>
				</div>
			</div>
		</div>
		
	</footer><!--/Footer-->
	

  
    <script src="js/jquery.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.scrollUp.min.js"></script>
	<script src="js/price-range.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/main.js"></script>
</body>
</html>