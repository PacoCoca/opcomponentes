<?php  

include 'connection.php';

//Introducimos los datos en Proveedor
$query="INSERT INTO Proveedor(idProveedor,nombre,correo,CIF,telefono,direccion) VALUES('1','NVIDIA','nvidia@correo.nvidia.es','0N0069374G','958674854','Avenida Central 38')";
$rs = mysqli_query($conn,$query);

$query1="INSERT INTO Proveedor(idProveedor,nombre,correo,CIF,telefono,direccion) VALUES('2','INTEL','intel@correo.intel.es','A28819381','914329090','PL. PABLO RUIZ PICASSO, 1 - TORRE PICASO. 28020, MADRID')";
$rs1 = mysqli_query($conn,$query1);

//Introducimos los datos en usuario
$query2="INSERT INTO Usuario(idUsuario, nombre, correo, pass, telefono,direccion,admin) VALUES ('1', 'Manuel', 'manuel@correo.ugr.es', '1234', '675849623', 'Camino de ronda 30','0')";
$rs2 = mysqli_query($conn,$query2);

$query3="INSERT INTO Usuario(idUsuario, nombre, correo, pass, telefono,direccion,admin) VALUES ('2', 'Sixto', 'sixto@correo.ugr.es', 'Granada', '674828901', 'Calle Alcala 30','1')";
$rs3 = mysqli_query($conn,$query3);

//Introducimos los datos en Factura

$query4="INSERT INTO Factura(idFactura,fecha) VALUES ('1', '2010-8-07')";
$rs4 = mysqli_query($conn,$query4);

$query5="INSERT INTO Factura(idFactura,fecha) VALUES ('2', '2012-2-05')";
$rs5 = mysqli_query($conn,$query5);

//Introducimos los datos en Promociones

$query6="INSERT INTO Promociones(idPromocion,descuento) VALUES ('1', '10')";
$rs6 = mysqli_query($conn,$query6);

$query7="INSERT INTO Promociones(idPromocion,descuento) VALUES ('2', '25')";
$rs7 = mysqli_query($conn,$query7);

//Introducimos los datos en Producto_suple

$query8="INSERT INTO Producto_suple(idProducto,idProveedor,coste,cantidadMin,cantidadsuple,cantidadProducto,nombre) VALUES ('1', '1', '100', '10', '5', '50', 'tarjeta grafica');";
$rs8 = mysqli_query($conn,$query8);

$query9="INSERT INTO Producto_suple(idProducto,idProveedor,coste,cantidadMin,cantidadsuple,cantidadProducto,nombre) VALUES ('2', '2', '150', '20', '10', '500', 'procesador');";
$rs9 = mysqli_query($conn,$query9);

$query10="INSERT INTO Producto_suple(idProducto,idProveedor,coste,cantidadMin,cantidadsuple,cantidadProducto,nombre) VALUES ('3', '2', '20', '15', '8', '43', 'procesador servidor');";
$rs10 = mysqli_query($conn,$query10);

//Introducimos los datos en Pedido
$query11="INSERT INTO Pedido(fecha,idProducto,idProveedor,cantidad,estado) VALUES ('2019-2-4', '1', '1', '100', 'finalizado')";
$rs11 = mysqli_query($conn,$query11);

$query12="INSERT INTO Pedido(fecha,idProducto,idProveedor,cantidad,estado) VALUES ('2019-2-7', '3', '2', '200', 'en espera')";
$rs12 = mysqli_query($conn,$query12);

//Introducimos los datos en Compra
$query13="INSERT INTO compra(fecha,idUsuario,idProducto,cantidad) VALUES ('2018-12-25', '1', '2', '10');";
$rs13 = mysqli_query($conn,$query13);

$query14="INSERT INTO compra(fecha,idUsuario,idProducto,cantidad) VALUES ('2018-12-13', '2', '3', '25');";
$rs14 = mysqli_query($conn,$query14);

//Introducimos los datos en Catalogo_tiene
$query15="INSERT INTO Catalogo_tiene(idCatalogo,idProducto,precio,descripcion,nombre,categoria,marca,destacado,src) VALUES ('1', '1', '150', 'es una tarjeta grafica', 'tarjeta grafica','grafica','nvidia','1','./images/home/grafica.jpg');";
$rs15 = mysqli_query($conn,$query15);

$query16="INSERT INTO Catalogo_tiene(idCatalogo,idProducto,precio,descripcion,nombre,categoria,marca,destacado,src) VALUES ('2', '3', '50', 'es un procesador para un servido', 'procesador servidor','procesador','intel','0','./images/home/procesador.jpg');";
$rs16 = mysqli_query($conn,$query16);

//Introducimos los datos en Anade

$query17="INSERT INTO Anade(fechaInicio,fechaFin,idPromocion,idCatalogo) VALUES ('2019-01-02', '2019-01-22', '1', '1');";
$rs17 = mysqli_query($conn,$query17);


if($rs && $rs1 && $rs2 && $rs3 && $rs4 && $rs5 && $rs6 && $rs7 && $rs8 && $rs9 && $rs10 && $rs11 && $rs12 && $rs13 && $rs14 && $rs15 && $rs16 && $rs17){
	echo "BienIntroducido";
} else{
	echo "MalIntroducido";
}
?>