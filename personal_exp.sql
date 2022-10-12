-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 12, 2022 at 08:21 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personal_exp`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_jurusan`
--

CREATE TABLE `detail_jurusan` (
  `id` int(11) NOT NULL,
  `akreditasi` enum('A','B','C','D') NOT NULL,
  `jenjang` enum('D3','D4','S1','S2') NOT NULL,
  `tingkat_keketatan` float NOT NULL,
  `kuota_mhs_baru` int(11) NOT NULL,
  `url_web` varchar(255) NOT NULL,
  `kampusId` int(11) DEFAULT NULL,
  `fakultasId` int(11) DEFAULT NULL,
  `jurusanId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detail_jurusan`
--

INSERT INTO `detail_jurusan` (`id`, `akreditasi`, `jenjang`, `tingkat_keketatan`, `kuota_mhs_baru`, `url_web`, `kampusId`, `fakultasId`, `jurusanId`) VALUES
(1, 'A', 'D4', 90.9, 30, 'www.tni.com/ad', 3, 3, 3),
(2, 'A', 'S2', 99.99, 20, 'www.ui.com/si', 2, 2, 1),
(3, 'B', 'S1', 70.09, 50, 'www.unicen.com/mtk', 1, 1, 2),
(4, 'A', 'S1', 99.99, 120, 'www.unicen.com/si', 1, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `fakultas`
--

CREATE TABLE `fakultas` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fakultas`
--

INSERT INTO `fakultas` (`id`, `nama`) VALUES
(1, 'Fakultas Mipa'),
(2, 'Fakultas Ilkom'),
(3, 'Perwira');

-- --------------------------------------------------------

--
-- Table structure for table `jurusan`
--

CREATE TABLE `jurusan` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jurusan`
--

INSERT INTO `jurusan` (`id`, `nama`) VALUES
(1, 'Sistem Informasi'),
(2, 'Matematika'),
(3, 'Perwira TNI-AD');

-- --------------------------------------------------------

--
-- Table structure for table `kampus`
--

CREATE TABLE `kampus` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jenis` enum('Negeri','Swasta','Kedinasan') NOT NULL,
  `status` enum('PTN','PTS','PTN-BLU','PTN_BH') NOT NULL,
  `akreditasi` enum('A','B','C','D') NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_telp` int(11) NOT NULL,
  `no_fax` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kampus`
--

INSERT INTO `kampus` (`id`, `nama`, `jenis`, `status`, `akreditasi`, `alamat`, `no_telp`, `no_fax`) VALUES
(1, 'Universitas Cenderawasih', 'Negeri', 'PTN', 'B', 'Jl.Demo 29, Perumnas IV, Waena', 645342, 12345),
(2, 'Universitas Indonesia', 'Negeri', 'PTN', 'A', 'Jl.Sudirman(mungkin salah), Jakarta', 3454555, 23444),
(3, 'Sekolah Perwira TNI', 'Kedinasan', 'PTN', 'A', 'Jl.Perjuangan 90, Bandung', 83889283, 2323);

-- --------------------------------------------------------

--
-- Table structure for table `mengikuti`
--

CREATE TABLE `mengikuti` (
  `id` int(11) NOT NULL,
  `penggunaId` int(11) DEFAULT NULL,
  `kampusId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mengikuti`
--

INSERT INTO `mengikuti` (`id`, `penggunaId`, `kampusId`) VALUES
(3, 1, 1),
(4, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `pengguna`
--

CREATE TABLE `pengguna` (
  `id` int(11) NOT NULL,
  `nama_lengkap` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengguna`
--

INSERT INTO `pengguna` (`id`, `nama_lengkap`, `email`, `created_at`) VALUES
(1, 'yotam', 'yotam@email.com', '2022-10-12 17:38:08'),
(2, 'lambu', 'lambu@gmail.com', '2022-10-12 17:38:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_jurusan`
--
ALTER TABLE `detail_jurusan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_381287a925688166d0d7f99d6c5` (`kampusId`),
  ADD KEY `FK_1ee776665848e0068aca0ee78b0` (`fakultasId`),
  ADD KEY `FK_806caf6543856ad7dc3fffbb2b8` (`jurusanId`);

--
-- Indexes for table `fakultas`
--
ALTER TABLE `fakultas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jurusan`
--
ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kampus`
--
ALTER TABLE `kampus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mengikuti`
--
ALTER TABLE `mengikuti`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_61beff6ddde6623e6583245cea8` (`penggunaId`),
  ADD KEY `FK_e8256365d804a53f6dc5239651d` (`kampusId`);

--
-- Indexes for table `pengguna`
--
ALTER TABLE `pengguna`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `detail_jurusan`
--
ALTER TABLE `detail_jurusan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fakultas`
--
ALTER TABLE `fakultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `jurusan`
--
ALTER TABLE `jurusan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kampus`
--
ALTER TABLE `kampus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mengikuti`
--
ALTER TABLE `mengikuti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `pengguna`
--
ALTER TABLE `pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_jurusan`
--
ALTER TABLE `detail_jurusan`
  ADD CONSTRAINT `FK_1ee776665848e0068aca0ee78b0` FOREIGN KEY (`fakultasId`) REFERENCES `fakultas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_381287a925688166d0d7f99d6c5` FOREIGN KEY (`kampusId`) REFERENCES `kampus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_806caf6543856ad7dc3fffbb2b8` FOREIGN KEY (`jurusanId`) REFERENCES `jurusan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `mengikuti`
--
ALTER TABLE `mengikuti`
  ADD CONSTRAINT `FK_61beff6ddde6623e6583245cea8` FOREIGN KEY (`penggunaId`) REFERENCES `pengguna` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_e8256365d804a53f6dc5239651d` FOREIGN KEY (`kampusId`) REFERENCES `kampus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
