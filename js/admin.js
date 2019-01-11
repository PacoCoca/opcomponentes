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
			if(respuesta!="noProductos"){
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
			console.log(respuesta);
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

	filaArray[0].innerHTML="<input type='text' value="+filaArray[0].innerText+">";
	filaArray[2].innerHTML="<input class='width50' type='number' value="+filaArray[2].innerText+">";
	filaArray[3].innerHTML="<input class='width50' type='number' value="+filaArray[3].innerText+">";
	filaArray[4].innerHTML="<input class='width50' type='number' value="+filaArray[4].innerText+">";
	filaArray[5].innerHTML="<input class='width50' type='number' value="+filaArray[5].innerText+">";
	filaArray[6].innerHTML="<input class='width50' type='number' value="+filaArray[6].innerText+">";
	filaArray[7].innerHTML="<button onclick='editaProducto(this);' class='btn-success'><i class='fa fa-save'></i></button>";
}

function editaProducto(boton){
	var filaArray = boton.parentNode.parentNode.childNodes;
	var data = new Array();
	data[0] = filaArray[0].firstChild.value;

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
			if(respuesta=="correcto"){
				cargaProductos();
			} else{
				alert("Error editando producto, revise los datos");
			}
		}
	});
}

function cargaPromociones(){
	
}

function cargaCatalogo(){
	
}

function cargaProveedores(){
	
}