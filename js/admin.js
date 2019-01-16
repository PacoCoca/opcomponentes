$(document).ready(function(){
	$(".containerPlus").containerize();
});

function openContainer(id) {
	$("#"+id).containerize("open");
}

function cargaProductos(){
	$.ajax({
		url: "php/cargaProductos.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("bodyTableProducto").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<tr>";
					row+="<td>"+fila[0]+"</td>";
					row+="<td>"+fila[1]+"</td>";
					row+="<td>"+fila[2]+"</td>";
					row+="<td>"+fila[3]+"</td>";
					row+="<td>"+fila[4]+"</td>";
					row+="<td>"+fila[5]+"</td>";
					row+="<td>"+fila[6]+"</td>";
					row+="<td><button class='btn-warning' onclick='elimProducto(this);'><i class='fa fa-minus'></i></button> <button onclick='filaProductoMod(this);' class='btn-success'><i class='fa fa-edit'></i></button></td>";
					row+="</tr>";
	
					document.getElementById("bodyTableProducto").innerHTML += row;
				}
			}
		}
	});
}

function nuevaFilaProducto(){
	var row="";
	row+="<td><input type='text'/></td>";
	row+="<td></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><button onclick='guardaProducto(this);' class='btn-success'><i class='fa fa-save'></i></button></td>";
	row+="</tr>";

	document.getElementById("bodyTableProducto").innerHTML = row + document.getElementById("bodyTableProducto").innerHTML;
}

function guardaProducto(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;
	// Me salto idProducto que se rellena solo
	data[1] = filaArray[2].firstChild.value;
	data[2] = filaArray[3].firstChild.value;
	data[3] = filaArray[4].firstChild.value;
	data[4] = filaArray[5].firstChild.value;
	data[5] = filaArray[6].firstChild.value;

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/guardaProducto.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaProductos();
			} else{
				alert("Error creando el nuevo producto, revise los datos");
			}
		}
	});
}

function elimProducto(boton){
	var idProducto = (boton.parentNode.parentNode.childNodes)[1].innerText;
	$.ajax({
		url: "php/eliminaProducto.php",
		type: "POST",
		data: {idProducto: idProducto},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaProductos();
			} else{
				alert("Error eliminando el producto");
			}
		}
	});
}

function filaProductoMod(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;

	filaArray[0].innerHTML="<input type='text' value='"+filaArray[0].innerText+"'>";
	filaArray[2].innerHTML="<input class='width50' type='number' value='"+filaArray[2].innerText+"'>";
	filaArray[3].innerHTML="<input class='width50' type='number' value='"+filaArray[3].innerText+"'>";
	filaArray[4].innerHTML="<input class='width50' type='number' value='"+filaArray[4].innerText+"'>";
	filaArray[5].innerHTML="<input class='width50' type='number' value='"+filaArray[5].innerText+"'>";
	filaArray[6].innerHTML="<input class='width50' type='number' value='"+filaArray[6].innerText+"'>";
	filaArray[7].innerHTML="<button onclick='editaProducto(this);' class='btn-success'><i class='fa fa-save'></i></button>";
}

function editaProducto(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;
	data[6] =filaArray[1].innerText;
	data[1] = filaArray[2].firstChild.value;
	data[2] = filaArray[3].firstChild.value;
	data[3] = filaArray[4].firstChild.value;
	data[4] = filaArray[5].firstChild.value;
	data[5] = filaArray[6].firstChild.value;


	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/editaProducto.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
		console.log(respuesta);
			if(respuesta=="correcto"){
				cargaProductos();
			} else{
				alert("Error editando producto, revise los datos");
			}
		}
	});
}

function cargaPromociones(){
	$.ajax({
		url: "php/cargaPromociones.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta != "error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("bodyTablePromocion").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<tr id='"+fila[4]+"'>";
					row+="<td>"+fila[0]+"</td>";
					row+="<td>"+fila[1]+"</td>";
					row+="<td><input value='"+fila[2]+"' class='inputOculto' type='date' readonly /></td>";
					row+="<td><input value='"+fila[3]+"' class='inputOculto' type='date' readonly /></td>";
					row+="<td><button class='btn-warning' onclick='elimPromocion(this);'><i class='fa fa-minus'></i></button> <button onclick='filaPromocionMod(this);' class='btn-success'><i class='fa fa-edit'></i></button></td>";
					row+="</tr>";
	
					document.getElementById("bodyTablePromocion").innerHTML += row;
				}
			}
		}
	});
}

function nuevaFilaPromocion(){
	var row="";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input type='date'/></td>";
	row+="<td><input type='date'/></td>";
	row+="<td><button onclick='guardaPromocion(this);' class='btn-success'><i class='fa fa-save'></i></button></td>";
	row+="</tr>";

	document.getElementById("bodyTablePromocion").innerHTML = row + document.getElementById("bodyTablePromocion").innerHTML;
}

function guardaPromocion(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;
	data[1] = filaArray[1].firstChild.value;
	data[2] = filaArray[2].firstChild.value;
	data[3] = filaArray[3].firstChild.value;

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/guardaPromocion.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaPromociones();
			} else{
				alert("Error creando la nueva Promocion, revise los datos");
			}
		}
	});
}

function elimPromocion(boton){
	var idPromocion = boton.parentNode.parentNode.id;
	$.ajax({
		url: "php/eliminaPromocion.php",
		type: "POST",
		data: {idPromocion: idPromocion},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaPromociones();
			} else{
				alert("Error eliminando la promoción");
			}
		}
	});
}

function filaPromocionMod(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;

	filaArray[0].innerHTML="<input class='width50' type='number' value="+filaArray[0].innerText+">";
	filaArray[1].innerHTML="<input class='width50' type='number' value="+filaArray[1].innerText+">";

	filaArray[2].firstChild.removeAttribute('readonly');
	filaArray[2].firstChild.removeAttribute('class');
	filaArray[3].firstChild.removeAttribute('readonly');
	filaArray[3].firstChild.removeAttribute('class');

	filaArray[4].innerHTML="<button onclick='editaPromocion(this);' class='btn-success'><i class='fa fa-save'></i></button>";
}

function editaPromocion(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;

	data[1] = filaArray[1].firstChild.value;
	data[2] = filaArray[2].firstChild.value;
	data[3] = filaArray[3].firstChild.value;
	data[4] = boton.parentNode.parentNode.id;

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/editaPromocion.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaPromociones();
			} else{
				alert("Error editando promoción, revise los datos");
			}
		}
	});
}

function cargaCatalogo(){
	$.ajax({
		url: "php/cargaCatalogo.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta!="error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("bodyTableCatalogo").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<tr>";
					row+="<td>"+fila[0]+"</td>";
					row+="<td>"+fila[1]+"</td>";
					row+="<td>"+fila[2]+"</td>";
					row+="<td>"+fila[3]+"</td>";
					row+="<td>"+fila[4]+"</td>";
					row+="<td>"+fila[5]+"</td>";
					if(fila[6]==1){
						row+="<td>Si</td>";
					}else{
						row+="<td>No</td>";
					}
					row+="<td>"+fila[7]+"</td>";

					row+="<td><button class='btn-warning' onclick='eliminaCatalogo(this)'><i class='fa fa-minus'></i></button> <button class='btn-success' onclick='filaCatalogoMod(this)'><i class='fa fa-edit'></i></button></td>";
					row+="</tr>";
	
					document.getElementById("bodyTableCatalogo").innerHTML += row;
				}
			}
		}
	});
}

function eliminaCatalogo(boton){
	var idProducto = (boton.parentNode.parentNode.childNodes)[1].innerText;
	$.ajax({
		url: "php/eliminaCatalogo.php",
		type: "POST",
		data: {idProducto: idProducto},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaCatalogo();
			} else{
				alert("Error eliminando el Catalogo");
			}
		}
	});
}

function filaCatalogoMod(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	filaArray[0].innerHTML="<input type='text' value='"+filaArray[0].innerText+"'>";
	filaArray[2].innerHTML="<input class='width50' type='number' value='"+filaArray[2].innerText+"'>";
	filaArray[3].innerHTML="<input type='text' value='"+filaArray[3].innerText+"'>";
	filaArray[4].innerHTML="<input type='text' value='"+filaArray[4].innerText+"'>";
	filaArray[5].innerHTML="<input type='text' value='"+filaArray[5].innerText+"'>";
	filaArray[6].innerHTML="<input type='text' value='"+filaArray[6].innerText+"'>";
	filaArray[7].innerHTML="<input type='text' value='"+filaArray[7].innerText+"'>";
	filaArray[8].innerHTML="<button onclick='editaCatalogo(this);' class='btn-success'><i class='fa fa-save'></i></button>";
}

function editaCatalogo(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;
	data[3] = filaArray[1].innerText;
	data[1] = filaArray[2].firstChild.value;
	data[2] = filaArray[3].firstChild.value;
	data[4] = filaArray[4].firstChild.value;
	data[5] = filaArray[5].firstChild.value;
	data[6] = filaArray[6].firstChild.value;
	data[7] = filaArray[7].firstChild.value;

	if(data[6].toUpperCase() == "SI" ){
		data[6] = 1;
	}else{
		data[6] = 0;
	}

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/editaCatalogo.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaCatalogo();
			} else{
				alert("Error editando catalogo, revise los datos");
			}
		}
	});
}

function nuevaFilaCatalogo(){
	var row="";
	row+="<td><input type='text'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input class='width50' type='number'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><button onclick='guardaCatalogo(this);' class='btn-success'><i class='fa fa-save'></i></button></td>";
	row+="</tr>";

	document.getElementById("bodyTableCatalogo").innerHTML = row + document.getElementById("bodyTableCatalogo").innerHTML;	
}

function guardaCatalogo(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;
	data[1] = filaArray[1].firstChild.value;
	data[2] = filaArray[2].firstChild.value;
	data[3] = filaArray[3].firstChild.value;
	data[4] = filaArray[4].firstChild.value;
	data[5] = filaArray[5].firstChild.value;
	data[6] = filaArray[6].firstChild.value;
	data[7] = filaArray[7].firstChild.value;
	if(data[6].toUpperCase() == "SI" ){
		data[6] = 1;
	}else{
		data[6] = 0;
	}

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/guardaCatalogo.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaCatalogo();
			} else{
				alert("Error creando el nuevo Catalogo, revise los datos");
			}
		}
	});
}

function cargaProveedores(){
	$.ajax({
		url: "php/cargaProveedores.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta!="error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("bodyTableProveedores").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<tr>";
					row += "<input type='hidden' value='"+fila[5]+"'/>";
					row+="<td>"+fila[0]+"</td>";
					row+="<td>"+fila[1]+"</td>";
					row+="<td>"+fila[2]+"</td>";
					row+="<td>"+fila[3]+"</td>";
					row+="<td>"+fila[4]+"</td>";
					row+="<td><button class='btn-warning' onclick='eliminaProveedor(this)'><i class='fa fa-minus'></i></button> <button class='btn-success' onclick='filaProveedorMod(this)'><i class='fa fa-edit'></i></button></td>";
					row+="</tr>";

					document.getElementById("bodyTableProveedores").innerHTML += row;
				}
			}
		}
	});
}

function nuevaFilaProveedor(){
	var row="";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><button onclick='guardaProveedor(this)' class='btn-success'><i class='fa fa-save'></i></button></td>";
	row+="</tr>";

	document.getElementById("bodyTableProveedores").innerHTML = row + document.getElementById("bodyTableProveedores").innerHTML;	
}

function eliminaProveedor(boton){
	var idProveedor = (boton.parentNode.parentNode.childNodes)[0].value;
	$.ajax({
		url: "php/eliminaProveedor.php",
		type: "POST",
		data: {idProveedor: idProveedor},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaProveedores();
			} else{
				alert("Error eliminando el Proveedor");
			}
		}
	});
}

function filaProveedorMod(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	filaArray[0].innerHTML="<input type='hidden' value='"+filaArray[0].value+"'>";
	filaArray[0].innerHTML="<input type='text' value='"+filaArray[0].innerText+"'>";
	filaArray[1].innerHTML="<input type='text' value='"+filaArray[1].innerText+"'>";
	filaArray[2].innerHTML="<input type='text' value='"+filaArray[2].innerText+"'>";
	filaArray[3].innerHTML="<input type='text' value='"+filaArray[3].innerText+"'>";
	filaArray[4].innerHTML="<input type='text' value='"+filaArray[4].innerText+"'>";
	filaArray[5].innerHTML="<input type='text' value='"+filaArray[5].innerText+"'>";
	filaArray[6].innerHTML="<button onclick='editaProveedor(this);' class='btn-success'><i class='fa fa-save'></i></button>";
}

function guardaProveedor(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;
	data[1] = filaArray[1].firstChild.value;
	data[2] = filaArray[2].firstChild.value;
	data[3] = filaArray[3].firstChild.value;
	data[4] = filaArray[4].firstChild.value;

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/guardaProveedor.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaProveedores();
			} else{
				alert("Error creando el nuevo Proveedor, revise los datos");
			}
		}
	});
}

function editaProveedor(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[1].firstChild.value;
	data[3] = filaArray[0].value;
	data[1] = filaArray[2].firstChild.value;
	data[2] = filaArray[3].firstChild.value;
	data[4] = filaArray[4].firstChild.value;
	data[5] = filaArray[5].firstChild.value;

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/editaProveedor.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaProveedores();
			} else{
				alert("Error editando proveedores, revise los datos");
			}
		}
	});
}

function cargaUsuarios(){
	$.ajax({
		url: "php/cargaUsuarios.php",
		type: "POST",
		success: function(respuesta){
			if(respuesta!="error"){
				var res = jQuery.parseJSON(respuesta);
				document.getElementById("bodyTableUsuario").innerHTML = "";
				for (var i=0; i<res.length; i++) {
					var fila = res[i];
					var row="<tr>";
					row+="<td>"+fila[0]+"</td>";
					row+="<td>"+fila[1]+"</td>";
					row+="<td>"+fila[2]+"</td>";
					row+="<td>"+fila[3]+"</td>";
					row+="<td>"+fila[4]+"</td>";
					row+="<td>"+fila[5]+"</td>";
					if(fila[6] == 1){
						row+="<td>Si</td>";

					}else{
						row+="<td>No</td>";
					}
					row+="<td><button class='btn-warning' onclick='eliminaUsuario(this)'><i class='fa fa-minus'></i></button> <button class='btn-success' onclick='filaUsuarioMod(this)'><i class='fa fa-edit'></i></button></td>";
					row+="</tr>";

					document.getElementById("bodyTableUsuario").innerHTML += row;
				}
			}
		}
	});
}

function nuevaFilaUsuario(){
	var row="";
	row+="<td></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><input type='text'/></td>";
	row+="<td><button onclick='guardaUsuario(this)' class='btn-success'><i class='fa fa-save'></i></button></td>";
	row+="</tr>";

	document.getElementById("bodyTableUsuario").innerHTML = row + document.getElementById("bodyTableProveedores").innerHTML;	
}

function guardaUsuario(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[1].firstChild.value;
	data[1] = filaArray[2].firstChild.value;
	data[2] = filaArray[3].firstChild.value;
	data[3] = filaArray[4].firstChild.value;
	data[4] = filaArray[5].firstChild.value;
	data[5] = filaArray[6].firstChild.value;
	if(data[5].toUpperCase() == "SI" ){
		data[5] = 1;
	}else{
		data[5] = 0;
	}


	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/guardaUsuario.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaUsuarios();
			} else{
				alert("Error creando el nuevo Usuario, revise los datos");
			}
		}
	});
}

function filaUsuarioMod(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	filaArray[1].innerHTML="<input type='text' value='"+filaArray[1].innerText+"'>";
	filaArray[2].innerHTML="<input type='text' value='"+filaArray[2].innerText+"'>";
	filaArray[3].innerHTML="<input type='text' value='"+filaArray[3].innerText+"'>";
	filaArray[4].innerHTML="<input type='text' value='"+filaArray[4].innerText+"'>";
	filaArray[5].innerHTML="<input type='text' value='"+filaArray[5].innerText+"'>";
	filaArray[6].innerHTML="<input type='text' value='"+filaArray[6].innerText+"'>";
	filaArray[7].innerHTML="<button onclick='editaUsuario(this);' class='btn-success'><i class='fa fa-save'></i></button>";
}

function editaUsuario(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].innerText;
	data[1] = filaArray[1].firstChild.value;
	data[2] = filaArray[2].firstChild.value;
	data[3] = filaArray[3].firstChild.value;
	data[4] = filaArray[4].firstChild.value;
	data[5] = filaArray[5].firstChild.value;
	data[6] = filaArray[6].firstChild.value;
	if(data[6].toUpperCase() == "SI"){
		data[6] = 1;
	}else{
		data[6] = 0;
	}

	var dataJSON = JSON.stringify(data);
	$.ajax({
		url: "php/editaUsuario.php",
		type: "POST",
		data: {data: dataJSON},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaUsuarios();
			} else{
				alert("Error editando usuario, revise los datos");
			}
		}
	});
}

function eliminaUsuario(boton){
	var idUsuario = (boton.parentNode.parentNode.childNodes)[0].innerText;
	$.ajax({
		url: "php/eliminaUsuario.php",
		type: "POST",
		data: {idUsuario: idUsuario},
		cache: false,
		success: function(respuesta){
			if(respuesta=="correcto"){
				cargaUsuarios();
			} else{
				alert("Error eliminando el Usuario");
			}
		}
	});
}