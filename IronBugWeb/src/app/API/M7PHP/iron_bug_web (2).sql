-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 13-05-2022 a las 18:16:52
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
CREATE DATABASE IF NOT EXISTS `iron_bug_web` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
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
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `foto` longtext COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `foto`) VALUES
(0, 'PrimerProd', 59, 'Dinerodinero', 'd2FsbHBhcGVyMS5qcGc='),
(1, '2ewsf', 23, 'sdfsfsdf', 'bXktaW1hZ2UucG5n'),
(2, 'aaa', 1, '', 'bXktaW1hZ2UucG5n'),
(9, '', 12, 'a', 'VklELTIwMjExMjAzLVdBMDAwNy5tcDQ='),
(11, '12312', 10, 'a', 'UHJvZ2FtYWNpb24gKDEpLnBuZw==');

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
  `rol` int(11) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nick`, `fname`, `lname`, `mail`, `fecha`, `pssw`, `psswConf`, `avatar`, `rol`) VALUES
(1, 'andreski', 'Andres', 'Vilar', 'an@gmail.com', '2021-05-02', '12345678', '12345678', '', 2),
(4, 'A', 'a', 'a', 'a@gmail', '0000-00-00', '12345678', '12345678', 0x6173646164, 0),
(5, 'Usuario', 'User', 'Usafina', 'usuario@gmail.com', '2016-06-08', '12345678', '12345678', '', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
