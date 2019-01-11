-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-12-2018 a las 19:09:24
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `opcomponentes`
--

-- --------------------------------------------------------


CREATE TABLE `Usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `correo` varchar(100) NOT NULL,
  `pass` text NOT NULL,
  `telefono` text,
  `direccion` text,
  PRIMARY KEY(`idUsuario`),
  UNIQUE KEY `correo` (`correo`)
) DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE `Proveedor` (
  `idProveedor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `correo` varchar(100) NOT NULL,
  `CIF` text NOT NULL,
  `telefono` text,
  `direccion` text,
  PRIMARY KEY(idProveedor),
  UNIQUE KEY `correo` (`correo`)
)  DEFAULT CHARSET=utf8;

CREATE TABLE `Producto_suple` (
	`idProducto` int(11) NOT NULL AUTO_INCREMENT,
	`idProveedor` int(11) NOT NULL ,
 	`coste` int(11) NOT NULL,
	`cantidadMin` int(11) NOT NULL,
	`cantidadsuple` int(11) NOT NULL,
	`cantidadProducto` int(11) NOT NULL,
  `nombre` text,
	PRIMARY KEY (`idProducto`),
	FOREIGN KEY(`idProveedor`) REFERENCES `Proveedor`(`idProveedor`) ON DELETE CASCADE ON UPDATE CASCADE

) DEFAULT CHARSET=utf8;

CREATE TABLE `Catalogo_tiene` (
	`idCatalogo` int(11) NOT NULL AUTO_INCREMENT,
	`idProducto` int(11) NOT NULL ,
 	`precio` int(11) NOT NULL,
	`descripcion` text,
  `nombre` text,
	PRIMARY KEY (`idCatalogo`),
	FOREIGN KEY(`idProducto`) REFERENCES `Producto_suple`(`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE

) DEFAULT CHARSET=utf8;

CREATE TABLE `Promociones` (
  `idPromocion` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  PRIMARY KEY (`idPromocion`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `Factura` (
  `idFactura` int(11) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idFactura`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `Pedido` (
  `fecha` date NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idProveedor` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` text,
  PRIMARY KEY (`fecha`, `idProducto`, `idProveedor`),
  FOREIGN KEY(`idProducto`) REFERENCES `Producto_suple`(`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(`idProveedor`) REFERENCES `Proveedor`(`idProveedor`) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET=utf8;

CREATE TABLE `Anade` (
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `idPromocion` int(11) NOT NULL,
  `idCatalogo` int(11) NOT NULL,
  PRIMARY KEY (`fechaInicio`, `fechaFin`, `idCatalogo`),
  FOREIGN KEY(`idPromocion`) REFERENCES `Promociones`(`idPromocion`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(`idCatalogo`) REFERENCES `Catalogo_tiene`(`idCatalogo`) ON DELETE CASCADE ON UPDATE CASCADE 
)DEFAULT CHARSET=utf8;

CREATE TABLE `compra` (
  `fecha` date NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`fecha`, `idUsuario`, `idProducto`),
  FOREIGN KEY(`idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(`idProducto`) REFERENCES `Producto_suple`(`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET=utf8;

CREATE TABLE `genera` (
  `fecha` date NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `idFactura` int(11) NOT NULL,
  PRIMARY KEY (`fecha`, `idUsuario`, `idProducto`, `idFactura`),
  FOREIGN KEY(`idUsuario`) REFERENCES `Usuario`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(`idProducto`) REFERENCES `Producto_suple`(`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(`idFactura`) REFERENCES `Factura`(`idFactura`) ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET=utf8;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
