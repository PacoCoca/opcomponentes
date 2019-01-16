/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
	cargaCategoria();
	cargaMarca();
	muestraDestacados();
});

function cargaCategoria(){
	$.ajax({
		url: "php/cargaCategoria.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("accordian").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<div class='panel panel-default'>";
					row ="<div class='panel-heading' >";
					row+="<h4 class='panel-title'><a href='#' onclick='muestraCategorias(this)'> <span class='pull-right'>("+fila[1]+")</span>"+fila[0]+"</a></h4>";
					row+="</div>";
					row+="</div>";

	
					document.getElementById("accordian").innerHTML += row;
				}
			}
		}
	});
}

function cargaMarca(){
	$.ajax({
		url: "php/cargaMarca.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("idMarcas").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<li><a href='#' onclick='muestraMarcas(this)'> <span class='pull-right'>("+fila[1]+")</span>"+fila[0]+"</a></li>";
	
					document.getElementById("idMarcas").innerHTML += row;
				}
			}
		}
	});
}

function muestraDestacados(){
	$.ajax({
		url: "php/muestraDestacados.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("idProductoDestacados").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<div class='col-sm-4'>";
					row +="<div class='product-image-wrapper'>";
					row +="<div class='single-products'>";
					row +="<div class='productinfo text-center'>";
					row += "<img src='"+fila[4]+"' alt='' />";
					row+="<h2>"+fila[1]+"</h2>";
					row+="<p>"+fila[3]+"</p>";
					row+="<a href='#'' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Añadir a la cesta</a>";
					row+="</div>";
					row+="<div class='product-overlay'>";
					row+="<div class='overlay-content'>";
					row += fila[2];
					row+="<h2>"+fila[1]+"</h2>";
					row+="<p>"+fila[3]+"</p>";
					row+="<a href='#'' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Añadir a la cesta</a>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
					row+="</div>";

	
					document.getElementById("idProductoDestacados").innerHTML += row;
				}
			}
		}
	});
}


function muestraCategorias(boton){
	var categoria = boton.childNodes[2].data;
	$.ajax({
		url: "php/muestraCategorias.php",
		type: "POST",
		data: {categoria: categoria},
		cache: false,
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("idProductoDestacados").innerHTML = "";
				document.getElementById("idTituloProductos").innerHTML = "Categoria de "+categoria;
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<div class='col-sm-4'>";
					row +="<div class='product-image-wrapper'>";
					row +="<div class='single-products'>";
					row +="<div class='productinfo text-center'>";
					row += "<img src='"+fila[4]+"' alt='' />";
					row+="<h2>"+fila[1]+"</h2>";
					row+="<p>"+fila[3]+"</p>";
					row+="<a href='#'' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Añadir a la cesta</a>";
					row+="</div>";
					row+="<div class='product-overlay'>";
					row+="<div class='overlay-content'>";
					row += fila[2];
					row+="<h2>"+fila[1]+"</h2>";
					row+="<p>"+fila[3]+"</p>";
					row+="<a href='#'' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Añadir a la cesta</a>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
					row+="</div>";

	
					document.getElementById("idProductoDestacados").innerHTML += row;
				}
			}
		}
	});
}

function muestraMarcas(boton){
	var marca = boton.childNodes[2].data;
	$.ajax({
		url: "php/muestraMarcas.php",
		type: "POST",
		data: {marca: marca},
		cache: false,
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("idProductoDestacados").innerHTML = "";
				document.getElementById("idTituloProductos").innerHTML = "Productos de "+marca;
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<div class='col-sm-4'>";
					row +="<div class='product-image-wrapper'>";
					row +="<div class='single-products'>";
					row +="<div class='productinfo text-center'>";
					row += "<img src='"+fila[4]+"' alt='' />";
					row+="<h2>"+fila[1]+"</h2>";
					row+="<p>"+fila[3]+"</p>";
					row+="<a href='#'' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Añadir a la cesta</a>";
					row+="</div>";
					row+="<div class='product-overlay'>";
					row+="<div class='overlay-content'>";
					row += fila[2];
					row+="<h2>"+fila[1]+"</h2>";
					row+="<p>"+fila[3]+"</p>";
					row+="<a href='#'' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Añadir a la cesta</a>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
					row+="</div>";
	
					document.getElementById("idProductoDestacados").innerHTML += row;
				}
			}
		}
	});
}

function prueba(){
	console.log("prueba");
}