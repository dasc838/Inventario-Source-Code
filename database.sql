CREATE DATABASE inventario;

CREATE TABLE `users` (
  `Nombre` varchar(50) NOT NULL,
  `Contrasenia` varchar(45) DEFAULT NULL,
  `Permiso` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `articulos` (
  `Idarticulo` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) DEFAULT NULL,
  `Cantidad` int DEFAULT NULL,
  `Descripcion` varchar(500) DEFAULT NULL,
  `Tipo` varchar(1) DEFAULT NULL,
  `Preciounidad` int DEFAULT NULL,
  `Categoria` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Idarticulo`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `categorias` (
  `Nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`Nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ordenes` (
  `Idordenes` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Idordenes`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `articuloxorden` (
  `Idordenes` int NOT NULL,
  `Idarticulo` int NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Cantidad` int DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Categoria` varchar(100) DEFAULT NULL,
  `Precio` int DEFAULT NULL,
  `Tipo` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`Idordenes`,`Idarticulo`),
  KEY `Nombre_idx` (`Idarticulo`),
  CONSTRAINT `Idarticulo` FOREIGN KEY (`Idarticulo`) REFERENCES `articulos` (`Idarticulo`),
  CONSTRAINT `Idordenes` FOREIGN KEY (`Idordenes`) REFERENCES `ordenes` (`Idordenes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;