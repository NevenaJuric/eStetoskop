--
-- Database: `estetoskop`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(10) NOT NULL,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `alergic` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `medicament` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `hrono` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `operation` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `username`, `alergic`, `medicament`, `hrono`, `operation`) VALUES
(4, 'marko', 'Nema alergije!', 'Panadol', 'Nema hronicna oboljenja!', 'Nema operacije!');

-- --------------------------------------------------------

--
-- Table structure for table `diagnosis`
--

CREATE TABLE `diagnosis` (
  `id` int(10) NOT NULL,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `diagnosis` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `diagnosis`
--

INSERT INTO `diagnosis` (`id`, `username`, `diagnosis`) VALUES
(4, 'marko', 'Povisen krvni pritisak.\r\nZadnji put izmeren 22.08.2018. i bio je: 150/87.\r\nLekovi: Urapidil'),
(6, 'pera', 'Veliki broj keratoza i mladeza na telu. Pregled: Dermatoskopija Terapija: Ne izlagati se suncu, zastitni faktor 40+'),
(7, 'nikola', 'Bol u misicima. Upotrebljavao magnezijum, bez uspeha. Terapija: primena analgetika'),
(8, 'zeljko', 'Bol u kostima i zglobovima. Dijagnoza: Reumatoidni artritis\nLekovi: Movalis, Metotreksat');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `type`, `parent_id`) VALUES
(1, 'nevena.juric', 'admin', 'Nevena', 'A', NULL),
(2, 'nada', 'nada123', 'Nada Nadic', 'L', 1),
(3, 'ivan', 'ivan123', 'Ivan Ivanovic', 'L', 1),
(4, 'marko', 'marko1', 'Marko Markovic', 'P', 2),
(6, 'pera', 'pera123', 'Pera Peric', 'P', 3),
(7, 'nikola', 'nikola123', 'Nikola Nikolic', 'P', 2),
(8, 'zeljko', 'zeljko', 'Zeljko Zeljkovic', 'P', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `diagnosis`
--
ALTER TABLE `diagnosis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `diagnosis`
--
ALTER TABLE `diagnosis`
  ADD CONSTRAINT `diagnosis_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
