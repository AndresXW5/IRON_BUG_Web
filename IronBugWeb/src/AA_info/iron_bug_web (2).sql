-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-05-2022 a las 12:30:09
-- Versión del servidor: 5.6.34
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iron_bug_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `nick` varchar(30) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `centro` varchar(2) NOT NULL COMMENT 'Si contiene cualquier caracter se considera administrador',
  `pssw` varchar(30) NOT NULL,
  `psswConf` varchar(30) NOT NULL,
  `avatar` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

CREATE TABLE `carrito` (
  `id_linea` int(10) NOT NULL,
  `id_prod` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `nombre_prod` varchar(15) CHARACTER SET latin1 NOT NULL,
  `precio_prod` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id_linea`, `id_prod`, `id_user`, `nombre_prod`, `precio_prod`) VALUES
(32, 1, 1, 'tiburon', 777),
(33, 3, 1, 'Tortuga', 46),
(34, 4, 1, 'Cocodrilo', 299);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historialcompra`
--

CREATE TABLE `historialcompra` (
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
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `foto` longtext COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `foto`) VALUES
(0, 'Primerprod', 111, '12', 'd2FsbHBhcGVyMS5qcGc='),
(1, '2ewsf', 23, 'sdfsfsdf', 'bXktaW1hZ2UucG5n'),
(2, 'aaa', 1, '', 'bXktaW1hZ2UucG5n'),
(9, '', 12, 'a', 'VklELTIwMjExMjAzLVdBMDAwNy5tcDQ='),
(11, '12312', 10, 'a', 'UHJvZ2FtYWNpb24gKDEpLnBuZw=='),
(12, 'a12', 21, '2', 'MmE4MGJhNGI1ZWU2YWI4MWMxNWMyN2RkM2Y1OTQ5ZDIzNzYxZTMxM3IxLTI4NC0yODR2Ml91aHEuanBn');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(30) NOT NULL,
  `nick` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fname` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lname` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `pssw` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `psswConf` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `avatar` longblob NOT NULL,
  `rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nick`, `fname`, `lname`, `mail`, `fecha`, `pssw`, `psswConf`, `avatar`, `rol`) VALUES
(1, 'andreski', 'Andres', 'Vilar', 'an@gmail.com', '2021-05-02', '12345678', '12345678', '', 2),
(4, 'b', 'a', 'a', 'a@gmail', '0000-00-00', '12345678', '12345678', 0x6173646164, 1),
(5, 'Usuario', 'User', 'Usafina', 'usuario@gmail.com', '2016-06-08', '12345678', '12345678', '', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id_linea`),
  ADD UNIQUE KEY `id_linea` (`id_linea`),
  ADD KEY `id_prod` (`id_prod`),
  ADD KEY `id_prod_2` (`id_prod`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `historialcompra`
--
ALTER TABLE `historialcompra`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id_linea` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `historialcompra`
--
ALTER TABLE `historialcompra`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
