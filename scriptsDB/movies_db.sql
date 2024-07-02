-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2024 at 04:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `director`, `year`, `image`) VALUES
(1, 'hola', 'hola', 2024, 'uploads\\1719887953013-1718722371426-1200px-Toy_Story.svg.png'),
(2, 'hola', 'hola', 2024, 'uploads\\1719888292555-1719887953013-1718722371426-1200px-Toy_Story.svg.png'),
(3, 'hola', 'hola', 2023, 'uploads\\1719888351253-1719888292555-1719887953013-1718722371426-1200px-Toy_Story.svg.png');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(8) NOT NULL,
  `role` varchar(25) NOT NULL DEFAULT 'USER',
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `name`, `surname`, `email`, `password`, `role`, `active`, `created_at`) VALUES
(1, 'o', 'jz', 'hola@email.com', '12345678', 'USER', 1, '2024-06-25 23:23:16'),
(2, 'jhon', 'jz', 'hola@email.com', '12345678', 'USER', 1, '2024-06-25 23:38:44'),
(3, 'jj', 'jz', 'hola@email.com', '12345678', 'USER', 1, '2024-06-30 02:48:43'),
(4, 'pp', 'jz', 'hola@email.com', '12345678', 'USER', 1, '2024-06-30 04:01:07'),
(5, 'leo', 'caballero', 'hola@email.com', '12345678', 'USER', 1, '2024-06-30 04:03:17'),
(7, 'oo', 'lopez', 'hola@email.com', '12345678', 'USER', 1, '2024-06-30 04:52:22'),
(8, 'cc', 'jz', 'hola@email.com', '12345678', 'USER', 1, '2024-06-30 04:54:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
