-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 31-05-2022 a las 19:15:31
-- Versión del servidor: 5.6.13
-- Versión de PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `iron_bug_web`
--
CREATE DATABASE IF NOT EXISTS `iron_bug_web` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `iron_bug_web`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(30) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `centro` varchar(2) NOT NULL COMMENT 'Si contiene cualquier caracter se considera administrador',
  `pssw` varchar(30) NOT NULL,
  `psswConf` varchar(30) NOT NULL,
  `avatar` longblob NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`id_admin`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`, `avatar`) VALUES
(1, 'admin', 'admin', 'admin-L', 'admin@gmail.com', 'si', '12345678', '12345678', ''),
(4, 'adminPrueba', 'AdminPrueba', 'prueba', 'adminPrueba@gmail.com', 'si', '12345678', '12345678', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE IF NOT EXISTS `carrito` (
  `id_carrito` int(10) NOT NULL AUTO_INCREMENT,
  `id_user` int(10) NOT NULL,
  `fecha_carrito` date NOT NULL,
  `cerrado` int(10) NOT NULL,
  PRIMARY KEY (`id_carrito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historialcompra`
--

CREATE TABLE IF NOT EXISTS `historialcompra` (
  `id_usuario` int(11) NOT NULL,
  `id_lineacarrito` int(11) NOT NULL,
  `nick` varchar(20) NOT NULL,
  `precio` int(11) NOT NULL,
  `estado` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `historialcompra`
--

INSERT INTO `historialcompra` (`id_usuario`, `id_lineacarrito`, `nick`, `precio`, `estado`) VALUES
(1, 1, 'adrenski', 20, 'abierto');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lineas_carrito`
--

CREATE TABLE IF NOT EXISTS `lineas_carrito` (
  `id_linea` int(10) NOT NULL AUTO_INCREMENT,
  `id_prod` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `nombre_prod` varchar(15) CHARACTER SET latin1 NOT NULL,
  `precio_prod` int(10) NOT NULL,
  PRIMARY KEY (`id_linea`),
  UNIQUE KEY `id_linea` (`id_linea`),
  KEY `id_prod` (`id_prod`),
  KEY `id_prod_2` (`id_prod`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=39 ;

--
-- Volcado de datos para la tabla `lineas_carrito`
--

INSERT INTO `lineas_carrito` (`id_linea`, `id_prod`, `id_user`, `nombre_prod`, `precio_prod`) VALUES
(32, 1, 1, 'tiburon', 777),
(33, 3, 1, 'Tortuga', 46),
(34, 4, 1, 'Cocodrilo', 299),
(35, 0, 1, 'PrimerProd', 59),
(36, 0, 1, 'PrimerProd', 59),
(37, 1, 1, 'tiburon', 777),
(38, 1, 1, 'tiburon', 777);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `foto`) VALUES
(0, 'PrimerProd', 59, 'Dinerodinero', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYFxcZGhwdGxoaGh0hIxwaICMcIBwhI'),
(1, 'tiburon', 777, 'A veces muerde\r\n', ''),
(3, 'Tortuga', 46, 'Tiene un gran blindaje pero una velocidad muy lenta. Una vez te muerde no te suelta', ''),
(4, 'Cocodrilo', 299, 'Una bestia terrible y acorazada, surge de las profundidades y te muerde el pie.', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int(30) NOT NULL AUTO_INCREMENT,
  `nick` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fname` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lname` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `pssw` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `psswConf` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `avatar` longblob NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nick`, `fname`, `lname`, `mail`, `fecha`, `pssw`, `psswConf`, `avatar`) VALUES
(1, 'andreski', 'Andres', 'Vilar', 'an@gmail.com', '2021-05-02', '12345678', '12345678', ''),
(4, 'A', 'a', 'a', 'a@gmail', '0000-00-00', '12345678', '12345678', 0x6173646164),
(5, 'Usuario', 'User', 'Usafina', 'usuario@gmail.com', '2016-06-08', '12345678', '12345678', ''),
(6, 'Ttes', 'tres', 'asd', 'tres@gmail.com', '2022-05-11', '12345678', '12345678', '');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `lineas_carrito`
--
ALTER TABLE `lineas_carrito`
  ADD CONSTRAINT `carito_id_prod_fk` FOREIGN KEY (`id_prod`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carito_id_user_fk` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id_usuario`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
