-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.11-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para agencia_viajes
CREATE DATABASE IF NOT EXISTS `agencia_viajes` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `agencia_viajes`;

-- Volcando estructura para tabla agencia_viajes.testimoniales
CREATE TABLE IF NOT EXISTS `testimoniales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `mensaje` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla agencia_viajes.viajes
CREATE TABLE IF NOT EXISTS `viajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(60) NOT NULL DEFAULT '0',
  `precio` varchar(10) NOT NULL DEFAULT '0',
  `fecha_ida` date NOT NULL DEFAULT '1000-01-01',
  `fecha_vuelta` date NOT NULL DEFAULT '1000-01-01',
  `imagen` varchar(20) NOT NULL DEFAULT '0',
  `descripcion` longtext NOT NULL DEFAULT '0',
  `disponibles` varchar(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
