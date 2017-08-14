-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : database:3306
-- Généré le :  lun. 14 août 2017 à 02:41
-- Version du serveur :  5.7.18
-- Version de PHP :  7.0.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `anthologieAPI`
--

-- --------------------------------------------------------

--
-- Structure de la table `authors`
--

CREATE TABLE IF NOT EXISTS `authors` (
  `id_author` int(10) UNSIGNED NOT NULL,
  `city_born` int(11) DEFAULT NULL,
  `city_died` int(11) DEFAULT NULL,
  `id_era` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `born` int(11) DEFAULT NULL,
  `born_range` int(11) DEFAULT NULL,
  `died` int(11) DEFAULT NULL,
  `died_range` int(11) DEFAULT NULL,
  `activity` int(11) DEFAULT NULL,
  `activity_range` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `authors`
--

INSERT INTO `authors` (`id_author`, `city_born`, `city_died`, `id_era`, `id_user`, `id_group`, `born`, `born_range`, `died`, `died_range`, `activity_start`, `activity_range`, `createdAt`, `updatedAt`) VALUES
(1, 3, 4, NULL, 1, NULL, -307, 2, -240, 0, NULL, NULL, '2017-05-29 09:06:43', '2017-05-29 09:12:31'),
(2, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-05-29 09:13:23', '2017-05-29 09:13:50'),
(3, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-05-29 09:16:00', '2017-05-29 09:16:00'),
(4, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-05-29 09:17:08', '2017-05-29 09:17:25'),
(5, 2, 5, NULL, 1, NULL, -110, 0, -37, 2, NULL, NULL, '2017-05-29 09:18:39', '2017-05-29 09:21:52'),
(6, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-05-29 09:23:08', '2017-05-29 09:23:08'),
(7, 0, 0, NULL, 1, NULL, -335, 5, -260, 0, NULL, NULL, '2017-05-29 09:24:19', '2017-05-29 09:26:17'),
(8, 6, 0, NULL, 1, NULL, -620, 0, -550, 50, NULL, NULL, '2017-05-29 09:28:44', '2017-05-29 09:31:33'),
(9, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-05-29 09:33:17', '2017-05-29 09:33:38'),
(10, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-05-29 09:35:06', '2017-05-29 09:35:23');

-- --------------------------------------------------------

--
-- Structure de la table `authors_entities__entities_authors`
--

CREATE TABLE IF NOT EXISTS `authors_entities__entities_authors` (
  `id` int(10) UNSIGNED NOT NULL,
  `authors_entities` int(11) DEFAULT NULL,
  `entities_authors` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `authors_entities__entities_authors`
--

INSERT INTO `authors_entities__entities_authors` (`id`, `authors_entities`, `entities_authors`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 4, 5),
(4, 5, 6),
(5, 6, 7),
(6, 7, 9),
(7, 8, 10),
(8, 2, 11),
(9, 9, 12),
(10, 9, 14),
(11, 5, 15),
(12, 9, 16),
(13, 9, 17),
(14, 10, 18),
(15, 9, 19);

-- --------------------------------------------------------

--
-- Structure de la table `authors_images__images_authors`
--

CREATE TABLE IF NOT EXISTS `authors_images__images_authors` (
  `id` int(10) UNSIGNED NOT NULL,
  `authors_images` int(11) DEFAULT NULL,
  `images_authors` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `author_authority`
--

CREATE TABLE IF NOT EXISTS `author_authority` (
  `id_author_authority` int(10) UNSIGNED NOT NULL,
  `id_author` int(11) DEFAULT NULL,
  `URI` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `author_translations`
--

CREATE TABLE IF NOT EXISTS `author_translations` (
  `id_author_translation` int(10) UNSIGNED NOT NULL,
  `id_author` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `about` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `author_translations`
--

INSERT INTO `author_translations` (`id_author_translation`, `id_author`, `id_user`, `id_group`, `id_language`, `name`, `about`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, 3, 'Callimachus', NULL, '2017-05-29 09:06:43', '2017-05-29 09:06:43'),
(2, 1, 1, NULL, 4, 'Καλλίμαχος', NULL, '2017-05-29 09:07:08', '2017-05-29 09:07:08'),
(3, 2, 1, NULL, 3, 'Meleager', NULL, '2017-05-29 09:13:23', '2017-05-29 09:13:23'),
(4, 2, 1, NULL, 2, 'Méléagre', NULL, '2017-05-29 09:13:33', '2017-05-29 09:13:33'),
(5, 2, 1, NULL, 4, 'Μελέαγρος', NULL, '2017-05-29 09:13:50', '2017-05-29 09:13:50'),
(6, 3, 1, NULL, 3, 'Constantinus Cephalas', NULL, '2017-05-29 09:16:00', '2017-05-29 09:16:00'),
(7, 4, 1, NULL, 3, 'Antipater of Sidon', NULL, '2017-05-29 09:17:08', '2017-05-29 09:17:08'),
(8, 4, 1, NULL, 4, 'Ἀντίπατρος ὁ Σιδώνιος', NULL, '2017-05-29 09:17:25', '2017-05-29 09:17:25'),
(9, 5, 1, NULL, 3, 'Philodemus of Gadara', NULL, '2017-05-29 09:18:39', '2017-05-29 09:18:39'),
(10, 5, 1, NULL, 4, 'Φιλόδημος ὁ Γαδαρεύς', NULL, '2017-05-29 09:18:58', '2017-05-29 09:18:58'),
(11, 6, 1, NULL, 3, 'Statyllius Flaccus', NULL, '2017-05-29 09:23:08', '2017-05-29 09:23:08'),
(12, 7, 1, NULL, 3, 'Asclepiades of Samos', NULL, '2017-05-29 09:24:19', '2017-05-29 09:24:19'),
(13, 7, 1, NULL, 4, 'Ἀσκληπιάδης ὁ Σάμιος', NULL, '2017-05-29 09:24:36', '2017-05-29 09:24:36'),
(14, 8, 1, NULL, 3, 'Alcaeus of Mytilene', NULL, '2017-05-29 09:28:44', '2017-05-29 09:28:45'),
(15, 8, 1, NULL, 3, 'Ἀλκαῖος ὁ Μυτιληναῖος', NULL, '2017-05-29 09:29:05', '2017-05-29 09:29:05'),
(16, 9, 1, NULL, 3, 'Rufinus', NULL, '2017-05-29 09:33:17', '2017-05-29 09:33:17'),
(17, 9, 1, NULL, 4, 'Ῥουφῖνος', NULL, '2017-05-29 09:33:38', '2017-05-29 09:33:38'),
(18, 10, 1, NULL, 3, 'Marcus Argentarius', NULL, '2017-05-29 09:35:07', '2017-05-29 09:35:07'),
(19, 10, 1, NULL, 1, 'Μάρκος Ἀργεντάριος', NULL, '2017-05-29 09:35:23', '2017-05-29 09:35:23');

-- --------------------------------------------------------

--
-- Structure de la table `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id_book` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `books_translations`
--

CREATE TABLE IF NOT EXISTS `books_translations` (
  `id_book_translation` int(10) UNSIGNED NOT NULL,
  `id_book` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
  `id_city` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `GPS` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `cities`
--

INSERT INTO `cities` (`id_city`, `id_user`, `id_group`, `GPS`, `createdAt`, `updatedAt`) VALUES
(2, 1, NULL, '32.6544208,35.6878856', '2017-05-29 08:59:52', '2017-05-29 09:02:50'),
(3, 1, NULL, '32.8079925,21.8661611', '2017-05-29 09:08:19', '2017-05-29 09:09:17'),
(4, 1, NULL, '31.2000995,29.9185702', '2017-05-29 09:10:29', '2017-05-29 09:12:23'),
(5, 1, NULL, '40.8059273,14.3468049', '2017-05-29 09:20:44', '2017-05-29 09:21:43'),
(6, 1, NULL, '39.1000356,26.5547483', '2017-05-29 09:30:16', '2017-05-29 09:31:23');

-- --------------------------------------------------------

--
-- Structure de la table `cities_images__images_cities`
--

CREATE TABLE IF NOT EXISTS `cities_images__images_cities` (
  `id` int(10) UNSIGNED NOT NULL,
  `cities_images` int(11) DEFAULT NULL,
  `images_cities` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cities_translations`
--

CREATE TABLE IF NOT EXISTS `cities_translations` (
  `id_city_translation` int(10) UNSIGNED NOT NULL,
  `id_city` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `current_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `cities_translations`
--

INSERT INTO `cities_translations` (`id_city_translation`, `id_city`, `id_user`, `id_group`, `id_language`, `name`, `current_name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, 2, 'Paris', NULL, NULL, '2017-05-26 19:47:58', '2017-05-26 19:47:58'),
(2, 2, 1, NULL, 3, 'Umm Qais', NULL, NULL, '2017-05-29 08:59:52', '2017-05-29 08:59:52'),
(3, 2, 1, NULL, 8, 'Gadara', NULL, NULL, '2017-05-29 09:01:04', '2017-05-29 09:01:04'),
(4, 2, 1, NULL, 2, 'Umm Qeis', NULL, NULL, '2017-05-29 09:02:18', '2017-05-29 09:02:18'),
(5, 3, 1, NULL, 3, 'Cyrene', NULL, NULL, '2017-05-29 09:08:19', '2017-05-29 09:08:19'),
(6, 3, 1, NULL, 4, 'Κυρήνη Kyrēnē', NULL, NULL, '2017-05-29 09:08:35', '2017-05-29 09:08:35'),
(7, 4, 1, NULL, 3, 'Alexandria', NULL, NULL, '2017-05-29 09:10:29', '2017-05-29 09:10:29'),
(8, 4, 1, NULL, 4, 'Ἀλεξάνδρεια', NULL, NULL, '2017-05-29 09:11:50', '2017-05-29 09:11:50'),
(9, 5, 1, NULL, 1, 'Ercolano', NULL, NULL, '2017-05-29 09:20:44', '2017-05-29 09:20:44'),
(10, 5, 1, NULL, 3, 'Herculaneum', NULL, NULL, '2017-05-29 09:21:00', '2017-05-29 09:21:00'),
(11, 6, 1, NULL, 3, 'Mytilene', NULL, NULL, '2017-05-29 09:30:16', '2017-05-29 09:30:16'),
(12, 6, 1, NULL, 4, 'Μυτιλήνη', NULL, NULL, '2017-05-29 09:30:34', '2017-05-29 09:30:34');

-- --------------------------------------------------------

--
-- Structure de la table `entities`
--

CREATE TABLE IF NOT EXISTS `entities` (
  `id_entity` int(10) UNSIGNED NOT NULL,
  `id_book` int(11) DEFAULT NULL,
  `id_era` int(11) DEFAULT NULL,
  `id_genre` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `date_range` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `entities`
--

INSERT INTO `entities` (`id_entity`, `id_book`, `id_era`, `id_genre`, `id_user`, `id_group`, `title`, `date`, `date_range`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.6', NULL, NULL, '2017-05-29 09:36:47', '2017-05-31 20:31:26'),
(2, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 4.1', NULL, NULL, '2017-05-29 09:37:13', '2017-05-29 10:14:02'),
(3, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 14.2', NULL, NULL, '2017-05-29 09:38:02', '2017-05-29 10:02:11'),
(4, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 14.7', NULL, NULL, '2017-05-29 09:40:43', '2017-05-29 10:02:27'),
(5, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.3', NULL, NULL, '2017-05-29 09:42:58', '2017-05-29 10:14:35'),
(6, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.4', NULL, NULL, '2017-05-29 09:52:32', '2017-05-29 10:14:48'),
(7, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.5', NULL, NULL, '2017-05-29 09:52:41', '2017-05-29 10:15:08'),
(8, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.2', NULL, NULL, '2017-05-29 09:52:49', '2017-05-29 10:06:24'),
(9, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.7', NULL, NULL, '2017-05-29 09:52:56', '2017-05-29 10:15:22'),
(10, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.10', NULL, NULL, '2017-05-29 09:53:02', '2017-05-29 10:15:38'),
(11, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.8', NULL, NULL, '2017-05-29 09:53:11', '2017-05-29 10:15:53'),
(12, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.9', NULL, NULL, '2017-05-29 09:53:17', '2017-05-29 10:16:10'),
(13, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.11', NULL, NULL, '2017-05-29 09:53:23', '2017-05-29 10:10:10'),
(14, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.12', NULL, NULL, '2017-05-29 09:53:29', '2017-05-29 10:16:26'),
(15, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.13', NULL, NULL, '2017-05-29 09:53:35', '2017-05-29 10:16:42'),
(16, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.14', NULL, NULL, '2017-05-29 09:53:42', '2017-05-29 10:16:56'),
(17, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.15', NULL, NULL, '2017-05-29 09:53:51', '2017-05-29 10:17:15'),
(18, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.16', NULL, NULL, '2017-05-29 09:53:58', '2017-05-29 10:17:33'),
(19, NULL, NULL, NULL, 1, NULL, 'Greek Anthology 5.18', NULL, NULL, '2017-05-29 09:54:04', '2017-05-29 10:17:45'),
(20, NULL, NULL, NULL, 3, NULL, 'Greek Anthology 5.19', NULL, NULL, '2017-05-31 20:29:59', '2017-05-31 20:29:59');

-- --------------------------------------------------------

--
-- Structure de la table `entities_id_entity__entities_references`
--

CREATE TABLE IF NOT EXISTS `entities_id_entity__entities_references` (
  `id` int(10) UNSIGNED NOT NULL,
  `entities_references` int(11) DEFAULT NULL,
  `entities_id_entity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entities_images__images_entities`
--

CREATE TABLE IF NOT EXISTS `entities_images__images_entities` (
  `id` int(10) UNSIGNED NOT NULL,
  `entities_images` int(11) DEFAULT NULL,
  `images_entities` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entities_keywords__keywords_entities`
--

CREATE TABLE IF NOT EXISTS `entities_keywords__keywords_entities` (
  `id` int(10) UNSIGNED NOT NULL,
  `entities_keywords` int(11) DEFAULT NULL,
  `keywords_entities` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `entities_translations`
--

CREATE TABLE IF NOT EXISTS `entities_translations` (
  `id_entity_translation` int(10) UNSIGNED NOT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `text_translated` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `entities_translations`
--

INSERT INTO `entities_translations` (`id_entity_translation`, `id_entity`, `id_user`, `id_group`, `id_language`, `text_translated`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, NULL, 8, 'ὤμοσε Καλλίγνωτος Ἰωνίδι, μήποτε κείνης\nἕξειν μήτε φίλον κρέσσονα μήτε φίλην.\nὤμοσεν: ἀλλὰ λέγουσιν ἀληθέα, τοὺς ἐν ἔρωτι\nὅρκους.μὴ δύνειν οὔατ᾽ ἐς ἀθανάτων.\n\n                     νῦν δ᾽ ὁ μὲν ἀρσενικῷ θέρεται πυρί: τῆς δὲ ταλαίνης\nνύμφης, ὡς Μεγαρέων, οὐ λόγος οὐδ᾽ ἀριθμός. .', '2017-05-29 09:58:43', '2017-05-29 09:58:43'),
(2, 1, 1, NULL, 1, 'Callignoto ha giurato a Ionide che mai\namerà qualcuno più di lei - né uomo né donna.\nL’ha giurato, ma è vero quel che dice la gente : i giuramenti in amore\nnon arrivano agli orecchi degli immortali.\nOra il fuoco che lo scalda è un ragazzo : la sua triste\ngiovane sposa, come i megarici, non la calcola più.', '2017-05-29 09:59:14', '2017-05-29 09:59:14'),
(3, 1, 1, NULL, 1, 'Callignoto giurò a Ionide che non avrebbe mai avuto \nné un amico né un’amica migliore di quella.\nGiurò: ma dicono cose vere, (dicendo) che i giuramenti in amore \nnon entrano nelle orecchie degli immortali.\nMa ora egli è bruciato da un fuoco virile, e della misera fidanzata \nnon (c’è) né stima né considerazione, come dei Megaresi.', '2017-05-29 09:59:27', '2017-05-29 09:59:27'),
(4, 1, 1, NULL, 1, 'Callignoto giurò a Ionide che non avrebbe mai avuto \nun compagno o una compagna migliore di lei.\nSi dice, però, che i giuramenti d’amore \nnon arrivino alle orecchie degli dei immortali, ed è vero.\nInfatti ora egli arde di passione per un uomo e non ha più \nné stima né considerazione della povera fidanzata, come dei Megaresi.', '2017-05-29 09:59:42', '2017-05-29 09:59:42'),
(5, 2, 1, NULL, 8, 'Μοῦσα φίλα, τίνι τάνδε φέρεις πάγκαρπον ἀοιδάν;\nἢ τίς  ὁ καὶ τεύξας ὑμνοθετᾶν στέφανον;\nἄνυσε μὲν Μελέαγρος, ἀριζάλῳ δὲ Διοκλεῖ\nμναμόσυνον ταύταν ἐξεπόνησε χάριν,\n\n                     πολλὰ μὲν ἐμπλέξας Ἀνύτης κρίνα, πολλὰ δὲ Μοιροῦς\nλείρια, καὶ Σαπφοῦς βαιὰ μέν, ἀλλὰ ῥόδα:\nνάρκισσόν τε τορῶν Μελανιππίδου ἔγκυον ὕμνων,\nκαὶ νέον οἰνάνθης κλῆμα Σιμωνίδεω:\nσὺν δ᾽ ἀναμὶξ πλέξας μυρόπνουν εὐάνθεμον ἶριν\n\n                     Νοσσίδος, ἧς δέλτοις κηρὸν ἔτηξεν Ἔρως:\nτῇ δ᾽ ἅμα καὶ σάμψυχον ἀφ᾽ ἡδυπνόοιο Ῥιανοῦ,\nκαὶ γλυκὺν Ἠρίννης παρθενόχρωτα κρόκον,\nἈλκαίου τε λάληθρον ἐν ὑμνοπόλοις ὑάκινθον,\nκαὶ Σαμίου δάφνης κλῶνα μελαμπέταλον\n\n                    ἐν δὲ Λεωνίδεω θαλεροὺς κισσοῖο κορύμβους,\nΜνασάλκου τε κόμας ὀξυτόρου πίτυος:\nβλαισήν τε πλατάνιστον ἀπέθρισε Παμφίλου οἴμης,\nσύμπλεκτον καρύης ἔρνεσι Παγκράτεος,\n\n                    Τύμνεὼ τ᾽ εὐπέταλον λεύκην, χλοερόν τε σίσυμβρον\n\n                     Νικίου, Εὐφήμου τ᾽ ἀμμότροφον πάραλον\nἐν δ᾽ ἄρα Δαμάγητον, ἴον μέλαν, ἡδύ τε μύρτον\nΚαλλιμάχου, στυφελοῦ μεστὸν ἀεὶ μέλιτος,\nλυχνίδα τ᾽ Εὐφορίωνος, ἰδ᾽ ἐν Μούσαις κυκλάμινον,\nὃς Διὸς ἐκ κούρων ἔσχεν ἐπωνυμίην.\n\n                     τῇσι δ᾽ ἅμ᾽ Ἡγήσιππον ἐνέπλεκε, μαινάδα βότρυν,\nΠέρσου τ᾽ εὐώδη σχοῖνον ἀμησάμενος,\nσὺν δ᾽ ἅμα καὶ γλυκὺ μῆλον ἀπ᾽ ἀκρεμόνων Διοτίμου,\nκαὶ ῥοιῆς ἄνθη πρῶτα Μενεκράτεος,\nσμυρναίους τε κλάδους Νικαινέτου, ἠδὲ Φαέννου\n\n                    τέρμινθον, βλωθρὴν τ᾽ ἀχράδα Σιμμίεω:\nἐν δὲ καὶ ἐκ λειμῶνος ἀμωμήτοιο σελίνου\nβαιὰ διακνίζων ἄνθεα Παρθενίδος,\nλείψανὰ τ᾽ εὐκαρπεῦντα μελιστάκτων ἀπὸ Μουσέων,\nξανθοὺς ἐκ καλάμης Βακχυλίδεω στάχυας:\n\n                    ἐν δ᾽ ἄρ᾽ Ἀνακρείοντα, τὸ μὲν γλυκὺ κεῖνο μέλισμα,\nνέκταρος, εἰς δ᾽ ἐλέγους ἄσπορον ἀνθέμιον\nἐν δὲ καὶ ἐκ φορβῆς σκολιότριχος ἄνθος ἀκάνθης\nἈρχιλόχου, μικρὰς στράγγας ἀπ᾽ ὠκεανοῦ:\nτοῖς δ᾽ ἅμ᾽ Ἀλεξάνδροιο νέους ὄρπηκας ἐλαίης,\n\n                     ἠδὲ Πολυκλείτου πορφυρέην κύανον.\nἐν δ᾽ ἄρ᾽ ἀμάρακον ἧκε, Πολύστρατον, ἄνθος ἀοιδῶν,\nφοίνισσάν τε νέην κύπρον ἀπ᾽ Ἀντιπάτρου:\nκαὶ μὴν καὶ Συρίαν σταχυότριχα θήκατο νάρδον,\nὑμνοθέταν, Ἑρμοῦ δῶρον ἀειδόμενον\n\n                    ἐν δὲ Ποσείδιππόν τε καὶ Ἡδύλον, ἄγρι᾽ ἀρούρης,\nΣικελίδεὼ τ᾽ ἀνέμοις ἄνθεα φυόμενα.\n\n                     ναὶ μὴν καὶ χρύσειον ἀεὶ θείοιο Πλάτωνος\nκλῶνα, τὸν ἐξ ἀρετῆς πάντοθι λαμπόμενον\nἄστρων τ᾽ ἴδριν Ἄρατον ὁμοῦ βάλεν, οὐρανομάκεως\n\n                     φοίνικος κείρας πρωτογόνους ἕλικας,\nλωτὸν τ᾽ εὐχαίτην Χαιρήμονος, ἐν φλογὶ μίξας\nΦαιδίμου, Ἀνταγόρου τ᾽ εὔστροφον ὄμμα βοός,\nτάν τε φιλάκρητον Θεοδωρίδεω νεοθαλῆ\nἕρπυλλον, κυάμων τ᾽ ἄνθεα Φανίεω,\n\n                     ἄλλων τ᾽ ἔρνεα πολλὰ νεόγραφα: τοῖς δ᾽ ἅμα Μούσης\nκαὶ σφετέρης ἔτι που πρώιμα λευκόια.\nἀλλὰ φίλοις μὲν ἐμοῖσι φέρω χάριν ἔστι δὲ μύσταις\nκοινὸς ὁ τῶν Μουσέων ἡδυεπὴς στέφανος.', '2017-05-29 10:00:25', '2017-05-29 10:00:25'),
(6, 2, 1, NULL, 7, 'Cara Musa per chi porti questi frutti canori?', '2017-05-29 10:00:49', '2017-05-29 10:00:49'),
(7, 2, 1, NULL, 7, 'Μοῦσα φίλα, τίνι τάνδε φέρεις πάγκαρπον ἀοιδάν;\nἢ τίς ὁ καὶ τεύξας ὑμνοθετᾶν στέφανον;\nἌνυσε μὲν Μελέαγρος, ἀριζάλῳ δὲ Διοκλεῖ\nμναμόσυνον ταύταν ἐξεπόνησε χάριν:\nπολλὰ μὲν ἐμπλέξας Ἀνύτης κρίνα, πολλὰ δὲ \nΜοιροῦς\nλείρια, καὶ Σαπφοῦς βαιὰ μὲν, ἀλλὰ ῥόδα:\nνάρκισσόν τε τορῶν Μελανιππίδου ἔγκυον ὕμνων,\nκαὶ νέον οἰνάνθης κλῆμα Σιμωνίδεω:\nσὺν δ᾽ ἀναμὶξ πλέξας μυρόπνουν εὐάνθεμον ἶριν\nΝοσσίδος, ἧς δέλτοις κηρὸν ἔτηξεν Ἔρως:\nτῇ δ᾽ ἅμα καὶ σάμψυχον ἀφ᾽ ἡδυπνόοιο Ῥιανοῦ,\nκαὶ γλυκὺν Ἠρίννης παρθενόχρωτα κρόκον,\nἈλκαίου τε λάληθρον ἐν ὑμνοπόλοις ὑάκινθον,\nκαὶ Σαμίου δάφνης κλῶνα μελαμπέταλον:\nἐν δὲ Λεωνίδεω θαλεροὺς κισσοῖο κορύμβους,\nΜνασάλκου τεκόμας ὀξυτόρου πίτυος:\nβλαισήν τε πλατάνιστον ἀπέθρισε Παμφίλου οἴνης,\nσύμπλεκτον καρύης ἔρνεσι Παγκράτεος,\nΤύμνεὼ τ᾽ εὐπέταλον λεύκην, χλοερόν τε σίσυμβρον\nΝικίου, Εὐφήμου τ᾽ ἀμμότροφον πάραλον:\nἐν δ᾽ ἄρα Δαμαγήτου, ἴον μέλαν, ἡδύ τε μύρτον\nΚαλλιμάχου, στυφελοῦ μεστὸν ἀεὶ μέλιτος, \nλυχνίδα τ᾽ Εὐφορίωνος, ἰδ᾽ ἐν Μούσησιν ἄμωμον,\nὃς Διὸς ἐκ κούρων ἔσχεν ἐπωνυμίην.\nΤῇσι δ᾽ ἅμ᾽ Ἡγησίππου νέπλεκε μαινάδα βότρυν, \nΠέρσου τ᾽ εὐώδη σχοῖνον ἀμησάμενος,\nσὺν δ᾽ ἅμα καὶ γλυκὺμηλον ἀπ᾽ ἀκρεμόνων Διοτίμου, \nκαὶ ῥοιῆς ἄνθη πρῶτα Μενεκράτεος, \nμυρραίους τε κλάδους Νικαινέτου, ἠδὲ Φαέννου\nτέρμινθον, βλωθρὴν τ᾽ ἀχράδα Σιμίεω:\nἐν δὲ καὶ ἐκ λειμῶνος ἀμωμήτοιο σέλινα,\nβαιὰ διακνίζων ἄνθεα, Παρθενίδος,\nλείψανὰ τ᾽ εὐκαρπεῦντα μελιστάκτων ἀπὸ Μουσέων,\nξανθοὺς ἐκ καλάμης Βακχυλίδεω στάχυας:\nἐν δ᾽ ἄρ᾽ Ἀνακρείοντα, τὸ μὲν γλυκὺ κεῖνο μέλισμα\nνέκταρος, ἐν δ᾽ ἐλέγους ἄσπορον ἀνθέμιον:\nἐν δὲ καὶ ἐκ φορβῆς σκολιότριχος ἄνθος ἀκάνθης \nἈρχιλόχου μικρὰς στράγγας ἀπ᾽ ὠκεανοῦ \nτοῖς δ᾽ ἅμ᾽ Ἀλεξάνδροιο νέους ὄρπηκας ἐλαίης\nἠδὲ Πολυκλείτου πορφυρέoν κύαmον. \nἐν δ᾽ ἄρ᾽ ἀμάρακον ἧκε Πολuστραvτοu, ἄνθος ἀοιδῶν, \nφοίνισσάν τε νέην κύπρον ἀπ᾽ Ἀντιπάτρου:\nναὶ μὴν καὶ Συρίαν σταχυότριχα θήκατο νάρδον\nὑμνοθέταν Ἑρμοῦ δῶρον ἀειδόμενον. \nEν δὲ Ποσείδιππόν τε καὶ Ἡδύλον ἄγρι᾽ ἀρούρης, \nΣικελίδεὼ τ᾽ ἀνέμοις ἄνθεα φυόμενα:\nναὶ μὴν καὶ χρύσειον ἀεὶ θείοιο Πλάτωνος\nκλῶνα, τὸν ἐξ ἀρετῆς πάντοθι λαμπόμενον. \nἌστρων τ᾽ ἴδριν Ἄρατον ὁμοῦ βάλεν, οὐρανομάκευς\nφοίνικος κείρας πρωτογόνους ἕλικας,\nλωτὸν τ᾽ εὐχαίτην Χαιρήμονος, ἐν φλογὶ μίξας\nΦαιδίμου, Ἀνταγόρου τ᾽ εὔστροφον ὄμμα βοός,\nτάν τε φιλάκρητον Θεοδωρίδεω νεοθαλῆ\nἕρπυλλον, κυάνων τ᾽ ἄνθεα Φανίεω,\nἄλλων τ᾽ ἔρνεα πολλὰ νεόγραφα: τοῖς δ᾽ ἅμα Μούσης\nκαὶ σφετέρης ἔτι που πρώιμα λευκόια.\nἈλλὰ φίλοις μὲν ἐμοῖσι φέρω χάριν: ἔστι δὲ μύσταις\nκοινὸς ὁ τῶν Μουσέων ἡδυεπὴς στέφανος.', '2017-05-29 10:01:09', '2017-05-29 10:01:09'),
(8, 2, 1, NULL, 1, 'Musa amata, a chi porti questo canto di frutti?\nChi intrecciò questa corona di poeti?\nLa realizzò Meleagro: compose questo dono come \nricordo per il celebre Diocle;\nunì tanti gigli di Anite, tanti narcisi di Mero\ne pochi fiori di Saffo, ma erano rose;\nun narciso di Melanippide, pieno di canti acuti, \ne un ramo giovane della infiorescenza della vite di Simonide;\nintrecciò  contemporaneamente in modo confuso l’iris dal fiore profumato \ndi Nosside, sulle cui tavolette Amore sciolse la cera;\ninsieme a lei la maggiorana lontana dal dolce Riano,\ne il dolce zafferano dal colore verginale d’Erinna,\ne il giacinto d’Alceo rinomato tra i poeti, e il fascio d’alloro di Samio dalle foglie scure;\ne di Leonida le sommità fiorenti dell’edera,\ne di Mnasalce la chioma di pino pungente;\ntagliò i rami del contorto platano del canto di Panfilo,\ne intrecciò in ghirlande il noce di Pancrate, \nil pioppo frondoso di Timne, la verdeggiante menta \ndi Nicia, di Eufemo la pianta che cresce nella sabbia vicino la costa;\npoi ancora di Damageto, la scura violetta, e il dolce mirto \ndi Callimaco, sempre pieno di aspro miele, \ne d’Euforione la licnide, il cardamomo per le Muse,\nche prese il nome dai giovani fanciulli di Zeus.\nDunque aggiungeva a questi di Egesippo il grappolo d’uva furente, \ndopo aver raccolto anche un giunco profumato di Perse,\ncon una dolce mela di Diotimo\ndai rami e prima ancora fiori di melograno di Menecrate,\nrami di mirra di Niceneto, un pistacchio \ndi Foenno e un alto pero di Simia;\nraccogliendo inoltre dal prato perfetto \nun po’ di sedano e fiori di Partenide, \ne spighe dorate dalla paglia di Bacchilide,\nreliquie fiorenti di dolcissime Muse:\nE dunque per Anacreonte, quel famoso dolce canto,\ndi miele, fiore sterile di elegie\nnonché  fiore d’acanto dalla chioma ricciuta, formato dall’insegnamento\ndi Archiloco, scelse piccole gocce dal grande Oceano:\ninvece per Alessandro acerbi ramoscelli d’ulivo,\ne per Policlito un lapislazzulo di  porpora.\nPer Polistrato, invece, trovò una maggiorana, fiore aedo,\ne per Antipatro una giovane alcanna fenicia:\ne pose anche un nardo di Siria coronato di spighe,\npoeta lirico, celebrato dono di Ermes,\nper Edilo e Posidippo scelse l’erbetta del campo,\nfiori generati dalle correnti del Sicelide.\nSicuramente anche del sempre divino Platone \nmise un ramo dorato che risplendeva di virtù. \nInsieme, sistemò anche Arato, esperto di stelle, \ntagliando i viticci appena nati di una palma altissima, \ne mise anche il frondoso loto di Cherèmone, dopo aver finito \ndi mescolare nella fiamma di Fedimo l’occhio girevole di bue di Antagora,\nil fresco serpillo amante del vino di Teodorida,\nun fiore di fiordalisi di Fania, e molti frutti già scritti di altri personaggi:\na questi, inoltre, aggiunse, se non erro, \ngarofani di stagione della loro Musa.\nRingrazio i miei amici, ma la soave corona \ndelle Muse è di comune possesso degli iniziati.', '2017-05-29 10:01:33', '2017-05-29 10:01:33'),
(9, 2, 1, NULL, 1, 'Musa amata, a chi porti questo canto di frutti?\nChi intrecciò questa corona di poeti?', '2017-05-29 10:01:44', '2017-05-29 10:01:44'),
(10, 3, 1, NULL, 8, ' Παλλὰς ἐγὼ χρυσῆ σφυρήλατος: αὐτὰρ ὁ χρυσὸς\nαἰζηῶν πέλεται δῶρον ἀοιδοπόλων.\nἥμισυ μὲν χρυσοῖο Χαρίσιος, ὀγδοάτην δὲ\nΘέσπις, καὶ δεκάτην μοῖραν ἔδωκε Σόλων,\n\n                    αὐτὰρ ἐεικοστὴν Θεμίσων τὰ δὲ λοιπὰ τάλαντα\nἐννέα, καὶ τέχνη δῶρον Ἀριστοδίκου.', '2017-05-29 10:02:11', '2017-05-29 10:02:11'),
(11, 4, 1, NULL, 8, 'χάλκεός εἰμι λέων κρουνοὶ δέ μοι ὄμματα δοιά,\nκαὶ στόμα, καὶ δὲ θέναρ δεξιτεροῖο ποδός.\nπλήθει δὲ κρητῆρα δύ᾽ ἤμασι δεξιὸν ὄμμα,\nκαὶ λαιὸν τρισσοῖς, καὶ πισύροισι θέναρ:\n\n                     ἄρκιον ἓξ ὥραις πλῆσαι στόμα: σὺν δ᾽ ἅμα πάντα,\nκαὶ στόμα καὶ γλῆναι καὶ θέναρ, εἰπὲ πόσον.', '2017-05-29 10:02:27', '2017-05-29 10:02:27'),
(12, 5, 1, NULL, 8, ' ὄρθρος ἔβη, Χρύσιλλα, πάλαι δ᾽ ἠῷος ἀλέκτωρ\nκηρύσσων φθονερὴν Ἠριγένειαν ἄγει.\nὀρνίθων ἔρροις φθονερώτατος, ὅς με διώκεις\nοἴκοθεν εἰς πολλοὺς ἠιθέων ὀάρους.\n\n                     γηράσκεις, Τιθωνέ: τί γὰρ σὴν εὐνέτιν Ἠῶ\nοὕτως ὀρθριδίην ἤλασας ἐκ λεχέων;', '2017-05-29 10:02:49', '2017-05-29 10:02:49'),
(13, 5, 1, NULL, 1, 'L’alba è andata, Crisilla, e il gallo del mattino da molto tempo\nporta cantando Erigenia maligna.\nVa’ in malora, (tu che sei) il più invidioso degli uccelli, che mi spingi\nfuori dalla casa verso molte chiacchiere di giovani.\nStai invecchiando,  Titone: perché infatti così di primo mattino \nscacciasti dal letto la tua amante Aurora?', '2017-05-29 10:03:09', '2017-05-29 10:03:09'),
(14, 5, 1, NULL, 1, 'L’alba è giunta, Crisilla: il canto del gallo mattutino \nda sempre annuncia l’arrivo di Erigenia maligna. \nVa’ in malora, tu che tra gli uccelli sei il più invidioso!\nMi spingi  fuori di casa a perdermi in chiacchiere tra giovani!\nStai invecchiando, Titone: altrimenti perché avresti cacciato \ncosì presto la tua amante Aurora dal letto?', '2017-05-29 10:03:23', '2017-05-29 10:03:23'),
(15, 6, 1, NULL, 8, 'τὸν σιγῶντα, Φιλαινί, συνίστορα τῶν ἀλαλήτων\nλύχνον ἐλαιηρῆς ἐκμεθύσασα δρόσου,\nἔξιθι: μαρτυρίην γὰρ Ἔρως μόνος οὐκ ἐφίλησεν\nἔμπνουν καὶ πηκτὴν κλεῖε, Φιλαινί, θύρην.\n\n                     καὶ σύ, φίλη Ξανθώ, με: σὺ δ᾽, ὦ φιλεράστρια κοίτη,\nἤδη τῆς Παφίης ἴσθι τὰ λειπόμενα.', '2017-05-29 10:03:48', '2017-05-29 10:03:48'),
(16, 6, 1, NULL, 1, 'O Filènide, esci, dopo aver inzuppato d’olio d’oliva\nla lucerna che tace, testimone delle cose indicibili;\ninfatti Eros solo non apprezzò la testimonianza viva;\no Filènide, chiudi la solida porta.\nE tu, Xantò, baciami; e tu, o letto d’amore,\noramai sappi le cose che rimangono di Afrodite.', '2017-05-29 10:03:58', '2017-05-29 10:03:58'),
(17, 6, 1, NULL, 1, 'Vattene via e chiudi la porta, Filènide, dopo aver riempito d’olio\nla lanterna, testimone muta di segreti indicibili:\ninfatti, solamente Eros non ha mai gradito chi li rivela.\nE tu, Xantò, baciami; mentre per te, mio letto amante di amanti, \nè tempo di  conoscere ciò che rimane da scoprire dell’amore.', '2017-05-29 10:04:09', '2017-05-29 10:04:09'),
(18, 7, 1, NULL, 8, 'ἀργύρεον νυχίων με συνίστορα πιστὸν ἐρώτων\nοὐ πιστῇ λύχνον Φλάκκος ἔδωκε Νάπῃ,\nἧς παρὰ νῦν λεχέεσσι μαραίνομαι, εἰς ἐπιόρκου\nπαντοπαθῆ κούρης αἴσχεα δερκόμενος.\n\n                     Φλάκκε, σὲ δ᾽ ἄγρυπνον χαλεπαὶ τείρουσι μέριμναι:\nἄμφω δ᾽ ἀλλήλων ἄνδιχα καιόμεθα.', '2017-05-29 10:04:38', '2017-05-29 10:04:38'),
(19, 7, 1, NULL, 1, 'Flacco donò me, (che sono) un lume d’argento,\naffidabile testimone d’amori notturni, \nall’inaffidabile Nape, presso il letto della quale ora mi consumo, \nvedendo tutte le esperienze vergognose della fanciulla traditrice.\nFlacco, penosi affanni logorano te, insonne:\ned entrambi bruciamo l’uno senza l’altro.', '2017-05-29 10:05:17', '2017-05-29 10:05:17'),
(20, 7, 1, NULL, 1, 'Io, lume argenteo, d’amori notturni testimone fidato,\nfui dato in dono all’infida Nape, e presso il talamo di lei, ora,\nmi consumo assistendo alle relazioni vergognose\nd’ogni sorta della fanciulla spergiura.\nO Flacco, anche tu, insonne, sei logorato da penosi affanni:\nl’uno senza l’altro, entrambi, bruciamo.', '2017-05-29 10:05:32', '2017-05-29 10:05:32'),
(21, 8, 1, NULL, 8, ' τὴν καταφλεξίπολιν Σθενελαΐδα, τὴν βαρύμισθον,\nτὴν τοῖς βουλομένοις χρυσὸν ἐρευγομένην\nγυμνήν μοι διὰ νυκτὸς ὅλης παρέκλινεν ὄνειρος\nἄχρι φίλης ἠοῦς προῖκα χαριζομένην.\n\n                    οὐκέτι γουνάσομαι τὴν βάρβαρον, οὐδ᾽ ἐπ᾽ ἐμαυτῷ\nκλαύσομαι, ὕπνον ἔχων κεῖνα χαριζόμενον.', '2017-05-29 10:06:24', '2017-05-29 10:06:24'),
(22, 9, 1, NULL, 8, ' λύχνε, σὲ γὰρ παρεοῦσα τρὶς ὤμοσεν Ἡράκλεια\nἥξειν, κοὐχ ἥκει: λύχνε, σὺ δ᾽, εἰ θεὸς εἶ,\n\n                     τὴν δολίην ἀπάμυνον ὅταν φίλον ἔνδον ἔχουσα\nπαίζῃ, ἀποσβεσθεὶς μηκέτι φῶς πάρεχε.', '2017-05-29 10:06:41', '2017-05-29 10:06:41'),
(23, 9, 1, NULL, 1, 'O lume, Eraclea, mentre era qui, giurò infatti tre volte su di te\nche sarebbe venuta, e non è venuta; tu dunque, lume, se sei un dio,\npunisci quell’infida: qualora, avendo un amante in casa,\nsi diverta, essendoti spento, non fornire più luce.', '2017-05-29 10:06:55', '2017-05-29 10:06:55'),
(24, 9, 1, NULL, 1, 'Mentre era qui, Eraclea giurò tre volte su di te, lume,\nche sarebbe tornata, ma non si è fatta viva; lume, dunque, se davvero sei un dio,\nvendicati di quell’infida: si sta divertendo tra le braccia di un amante?\nSpegniti e non far più luce.', '2017-05-29 10:07:03', '2017-05-29 10:07:03'),
(25, 10, 1, NULL, 8, ' ἐχθαίρω τὸν Ἔρωτα: τί γὰρ βαρὺς οὐκ ἐπὶ θῆρας\nὄρνυται, ἀλλ᾽ ἐπ᾽ ἐμὴν ἰοβολεῖ κραδίην;\nτί πλέον, εἰ θεὸς ἄνδρα καταφλέγεί; ἢ τί τὸ σεμνὸν\nδῃώσας ἀπ᾽ ἐμῆς ἆθλον ἔχει κεφαλῆς;', '2017-05-29 10:07:33', '2017-05-29 10:07:33'),
(28, 11, 1, NULL, 8, ' νὺξ ἱερὴ καὶ λύχνε, συνίστορας οὔτινας ἄλλους\nὅρκοις, ἀλλ᾽ ὑμέας, εἱλόμεθ᾽ ἀμφότεροι\nχὠ μὲν ἐμὲ στέρξειν, κεῖνον δ᾽ ἐγὼ οὔ ποτε λείψειν\nὠμόσαμεν κοινὴν δ᾽ εἴχετε μαρτυρίην.\n\n                    νῦν δ᾽ ὁ μὲν μὲν ὅρκια φησιν ἐν ὕδατι κεῖνα φέρεσθαι,\nλύχνε, σὺ δ᾽ ἐν κόλποις αὐτὸν ὁρᾷς ἑτέρων.', '2017-05-29 10:09:19', '2017-05-29 10:09:19'),
(29, 11, 1, NULL, 1, 'Notte divina e lucerna, entrambi scegliemmo, come testimoni di giuramento, nessun altro se non voi, noi giurammo egli di amarmi e io che non avrei mai lasciato quello; e voi avevate una prova comune. Ora egli dice che questi giuramenti  sono nell’acqua, lucerna, e tu lo vedi tra le braccia  di altre.', '2017-05-29 10:09:28', '2017-05-29 10:09:28'),
(30, 11, 1, NULL, 1, 'Notte divina e lucerna, solo voi e nessun altro scegliemmo come complici delle nostre                promesse. Lui giurò che mi avrebbe amata e io che non l’avrei mai lasciato; voi due eravate testimoni dei nostri giuramenti. Ora (egli) dice che quelle promesse scorrono come acqua, lucerna, tu lo vedi tra le braccia di altre.', '2017-05-29 10:09:36', '2017-05-29 10:09:36'),
(31, 12, 1, NULL, 1, 'Ῥουφῖνος τῇ  μῇ γλυκερωτάτῃ Ἐλπίδι πολλὰ\nχαίρειν, εἰ χαίρειν χωρὶς ἐμοῦ δύναται.\nοὐκέτι βαστάζω, μὰ τὰ ς1᾽ ὄμματα, τὴν φιλέρημον\nκαὶ τὴν μουνολεχῆ σεῖο διαζυγίην\n\n                     ἀλλ᾽ αἰεὶ δακρύοισι πεφυρμένος ἢ  πὶ Κορησσὸν\nἔρχομαι ἢ μεγάλης νηὸν ἐς Ἀρτέμιδος.\nαὔριον ἀλλὰ πάτρη με δεδέξεται: ἐς δὲ σὸν ὄμμα\nπτήσομαι, ἐρρῶσθαι μυρία ς1᾽ εὐχόμενος.', '2017-05-29 10:09:53', '2017-05-29 10:09:53'),
(32, 13, 1, NULL, 8, 'εἰ τοὺς ἐν πελάγει σῴζεις, Κύπρι, κἀμὲ τὸν ἐν γᾷ\nναυαγόν, φιλίη, σῶσον ἀπολλύμενον.', '2017-05-29 10:10:10', '2017-05-29 10:10:10'),
(33, 14, 1, NULL, 8, ' λουσάμενοι, Προδίκη, πυκασώμεθα, καὶ τὸν  ἄκρατον \nἕλκωμεν, κύλικας μείζονας αἰρόμενοι.\nβαιὸς ὁ χαιρόντων ἐστὶν βίος: εἶτα τὰ λοιπὰ\nγῆρας κωλύσει, καὶ τὸ τέλος θάνατος.', '2017-05-29 10:10:26', '2017-05-29 10:10:26'),
(34, 15, 1, NULL, 8, 'ἑξήκοντα τελεῖ Χαριτὼ λυκαβαντίδας ὥρας,\nἀλλ᾽ ἔτι κυανέων σύρμα μένει πλοκάμων,\nκἠν στέρνοις ἔτι κεῖνα τὰ λύγδινα κώνια μαστῶν\nἕστηκεν, μίτρης γυμνὰ περιδρομάδος,\n\n                     καὶ χρὼς ἀρρυτίδωτος ἔτ᾽ ἀμβροσίην, ἔτι πειθὼ\nπᾶσαν, ἔτι στάζει μυριάδας χαρίτων.\nἀλλὰ πόθους ὀργῶντας ὅσοι μὴ φεύγετ᾽ ἐρασταί,\nδεῦρ᾽ ἴτε, τῆς ἐτέων ληθόμενοι δεκάδος.', '2017-05-29 10:10:46', '2017-05-29 10:10:46'),
(35, 16, 1, NULL, 8, 'Εὐρώπης τὸ φίλημα, καὶ ἢν ἄχρι χείλεος ἔλθῃ,\nἡδύ γε, κἂν ψαύσῃ μοῦνον ἄκρου στόματος:\nψαύει δ᾽ οὐκ ἄκροις τοῖς χείλεσιν, ἀλλ᾽ ἐρίσασα\nτὸ στόμα τὴν ψυχὴν ἐξ ὀνύχων ἀνάγει.', '2017-05-29 10:11:04', '2017-05-29 10:11:04'),
(36, 17, 1, NULL, 1, 'ποῦ νῦν Πραξιτέλης; ποῦ δ᾽ αἱ χέρες αἱ Πολυκλείτου,\nαἱ ταῖς πρόσθε τέχναις πνεῦμα χαριζόμεναι ;\nτίς  πλοκάμους Μελίτης εὐώδεας, ἢ πυρόεντα\nὄμματα καὶ δειρῆς φέγγος ἀποπλάσεται;\n\n                    ποῦ πλάσται; ποῦ δ᾽ εἰσὶ λιθοξόοι; ἔπρεπε τοίῃ\nμορφῇ νηὸν ἔχειν, ὡς μακάρων ξοάνῳ.', '2017-05-29 10:11:16', '2017-05-29 10:11:16'),
(37, 18, 1, NULL, 8, 'μήνη χρυσόκερως, δέρκευ τάδε, καὶ περιλαμπεῖς\nἀστέρες, οὓς κόλποις Ὠκεανὸς δέχεται,\nὥς με μόνον  προλιποῦσα μυρόπνοος ᾤχετ᾽ Ἀρίστη:\nἑκταίην δ᾽ εὑρεῖν τὴν μάγον οὐ δύναμαι.\n\n                     ἀλλ᾽ ἔμπης αὐτὴν ζωγρήσομεν, ἢν ἐπιπέμψω\nΚύπριδος ἰχνευτὰς ἀργυρέους σκύλακας.', '2017-05-29 10:11:32', '2017-05-29 10:11:32'),
(38, 19, 1, NULL, 8, ' μᾶλλον τῶν σοβαρῶν τὰς δουλίδας ἐκλεγόμεσθα,\nοἱ μὴ τοῖς σπαταλοῖς κλέμμασι τερπόμενοι.\nταῖς μὲν χρὼς ἀπόδωδε μύρου, σοβαρόν τε φρύαγμα,\nκαὶ μέχρι †    κινδύνου ἑσπομένη σύνοδος:\n\n                     ταῖς δὲ χάρις καὶ χρὼς ἴδιος, καὶ λέκτρον ἑτοῖμον,\nδώροις ἐκ σπατάλης οὐκ †   ἀλεγιζόμενον.\nμιμοῦμαι Πύρρον τὸν Ἀχιλλέος, ὃς προέκρινεν\nἙρμιόνης ἀλόχου τὴν λάτριν Ἀνδρομάχην.', '2017-05-29 10:11:48', '2017-05-29 10:11:48');

-- --------------------------------------------------------

--
-- Structure de la table `entities_translations_align`
--

CREATE TABLE IF NOT EXISTS `entities_translations_align` (
  `id_align` int(10) UNSIGNED NOT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `source` int(11) DEFAULT NULL,
  `source_lang` int(11) DEFAULT NULL,
  `target` int(11) DEFAULT NULL,
  `target_lang` int(11) DEFAULT NULL,
  `json` longtext COLLATE utf8_unicode_ci,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `entities_translations_align`
--

INSERT INTO `entities_translations_align` (`id_align`, `id_entity`, `source`, `source_lang`, `target`, `target_lang`, `json`, `id_user`, `id_group`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 8, 4, 1, '[[[{\"t\":\"ὤμοσε\",\"h\":[[1],[]],\"pos\":\"[1][1]\",\"parent\":0,\"children\":1},{\"t\":\"Καλλίγνωτος\",\"h\":[[2],[1]],\"pos\":\"[1][2]\",\"parent\":0,\"children\":2},{\"t\":\"Ἰωνίδι\",\"h\":[[3],[]],\"pos\":\"[1][3]\",\"parent\":0,\"children\":3},{\"p\":\",\"},{\"t\":\"μήποτε\",\"h\":[[4],[]],\"pos\":\"[1][4]\",\"parent\":0,\"children\":4},{\"t\":\"κείνης\",\"h\":[[5],[]],\"pos\":\"[1][5]\",\"parent\":0,\"children\":5}],[{\"t\":\"ἕξειν\",\"h\":[[6],[]],\"pos\":\"[1][6]\",\"parent\":0,\"children\":6},{\"t\":\"μήτε\",\"h\":[[7],[]],\"pos\":\"[1][7]\",\"parent\":0,\"children\":7},{\"t\":\"φίλον\",\"h\":[[8],[]],\"pos\":\"[1][8]\",\"parent\":0,\"children\":8},{\"t\":\"κρέσσονα\",\"h\":[[9],[]],\"pos\":\"[1][9]\",\"parent\":0,\"children\":9},{\"t\":\"μήτε\",\"h\":[[10],[]],\"pos\":\"[1][10]\",\"parent\":0,\"children\":10},{\"t\":\"φίλην\",\"h\":[[11],[]],\"pos\":\"[1][11]\",\"parent\":0,\"children\":11},{\"p\":\".\"}],[{\"t\":\"ὤμοσεν\",\"h\":[[12],[]],\"pos\":\"[1][12]\",\"parent\":0,\"children\":12},{\"p\":\":\"},{\"t\":\"ἀλλὰ\",\"h\":[[13],[]],\"pos\":\"[1][13]\",\"parent\":0,\"children\":13},{\"t\":\"λέγουσιν\",\"h\":[[14],[]],\"pos\":\"[1][14]\",\"parent\":0,\"children\":14},{\"t\":\"ἀληθέα\",\"h\":[[15],[]],\"pos\":\"[1][15]\",\"parent\":0,\"children\":15},{\"p\":\",\"},{\"t\":\"τοὺς\",\"h\":[[16],[]],\"pos\":\"[1][16]\",\"parent\":0,\"children\":16},{\"t\":\"ἐν\",\"h\":[[17],[]],\"pos\":\"[1][17]\",\"parent\":0,\"children\":17},{\"t\":\"ἔρωτι\",\"h\":[[18],[]],\"pos\":\"[1][18]\",\"parent\":0,\"children\":18}],[{\"t\":\"ὅρκους\",\"h\":[[19],[]],\"pos\":\"[1][19]\",\"parent\":0,\"children\":19},{\"p\":\".\"},{\"t\":\"μὴ\",\"h\":[[20],[]],\"pos\":\"[1][20]\",\"parent\":0,\"children\":20},{\"t\":\"δύνειν\",\"h\":[[21],[]],\"pos\":\"[1][21]\",\"parent\":0,\"children\":21},{\"t\":\"οὔατ\",\"h\":[[22],[]],\"pos\":\"[1][22]\",\"parent\":0,\"children\":22},{\"t\":\"ἐς\",\"h\":[[23],[]],\"pos\":\"[1][23]\",\"parent\":0,\"children\":23},{\"t\":\"ἀθανάτων\",\"h\":[[24],[32]],\"pos\":\"[1][24]\",\"parent\":0,\"children\":24},{\"p\":\".\"}],[],[{\"t\":\"νῦν\",\"h\":[[25],[]],\"pos\":\"[1][25]\",\"parent\":0,\"children\":25},{\"t\":\"δ\",\"h\":[[26],[]],\"pos\":\"[1][26]\",\"parent\":0,\"children\":26},{\"t\":\"ὁ\",\"h\":[[27],[]],\"pos\":\"[1][27]\",\"parent\":0,\"children\":27},{\"t\":\"μὲν\",\"h\":[[28],[]],\"pos\":\"[1][28]\",\"parent\":0,\"children\":28},{\"t\":\"ἀρσενικῷ\",\"h\":[[29],[]],\"pos\":\"[1][29]\",\"parent\":0,\"children\":29},{\"t\":\"θέρεται\",\"h\":[[30],[]],\"pos\":\"[1][30]\",\"parent\":0,\"children\":30},{\"t\":\"πυρί\",\"h\":[[31],[]],\"pos\":\"[1][31]\",\"parent\":0,\"children\":31},{\"p\":\":\"},{\"t\":\"τῆς\",\"h\":[[32],[]],\"pos\":\"[1][32]\",\"parent\":0,\"children\":32},{\"t\":\"δὲ\",\"h\":[[33],[]],\"pos\":\"[1][33]\",\"parent\":0,\"children\":33},{\"t\":\"ταλαίνης\",\"h\":[[34],[]],\"pos\":\"[1][34]\",\"parent\":0,\"children\":34}],[{\"t\":\"νύμφης\",\"h\":[[35],[]],\"pos\":\"[1][35]\",\"parent\":0,\"children\":35},{\"p\":\",\"},{\"t\":\"ὡς\",\"h\":[[36],[]],\"pos\":\"[1][36]\",\"parent\":0,\"children\":36},{\"t\":\"Μεγαρέων\",\"h\":[[37],[58]],\"pos\":\"[1][37]\",\"parent\":0,\"children\":37},{\"p\":\",\"},{\"t\":\"οὐ\",\"h\":[[38],[]],\"pos\":\"[1][38]\",\"parent\":0,\"children\":38},{\"t\":\"λόγος\",\"h\":[[39],[]],\"pos\":\"[1][39]\",\"parent\":0,\"children\":39},{\"t\":\"οὐδ\",\"h\":[[40],[]],\"pos\":\"[1][40]\",\"parent\":0,\"children\":40},{\"t\":\"ἀριθμός\",\"h\":[[41],[]],\"pos\":\"[1][41]\",\"parent\":0,\"children\":41},{\"p\":\".\"},{\"p\":\".\"}]],[[{\"t\":\"Callignoto\",\"h\":[[2],[1]],\"pos\":\"[2][1]\",\"parent\":1,\"children\":1},{\"t\":\"giurò\",\"h\":[[],[2]],\"pos\":\"[2][2]\",\"parent\":1,\"children\":2},{\"t\":\"a\",\"h\":[[],[3]],\"pos\":\"[2][3]\",\"parent\":1,\"children\":3},{\"t\":\"Ionide\",\"h\":[[],[4]],\"pos\":\"[2][4]\",\"parent\":1,\"children\":4},{\"t\":\"che\",\"h\":[[],[5]],\"pos\":\"[2][5]\",\"parent\":1,\"children\":5},{\"t\":\"non\",\"h\":[[],[6]],\"pos\":\"[2][6]\",\"parent\":1,\"children\":6},{\"t\":\"avrebbe\",\"h\":[[],[7]],\"pos\":\"[2][7]\",\"parent\":1,\"children\":7},{\"t\":\"mai\",\"h\":[[],[8]],\"pos\":\"[2][8]\",\"parent\":1,\"children\":8},{\"t\":\"avuto\",\"h\":[[],[9]],\"pos\":\"[2][9]\",\"parent\":1,\"children\":9}],[{\"t\":\"un\",\"h\":[[],[10]],\"pos\":\"[2][10]\",\"parent\":1,\"children\":10},{\"t\":\"compagno\",\"h\":[[],[11]],\"pos\":\"[2][11]\",\"parent\":1,\"children\":11},{\"t\":\"o\",\"h\":[[],[12]],\"pos\":\"[2][12]\",\"parent\":1,\"children\":12},{\"t\":\"una\",\"h\":[[],[13]],\"pos\":\"[2][13]\",\"parent\":1,\"children\":13},{\"t\":\"compagna\",\"h\":[[],[14]],\"pos\":\"[2][14]\",\"parent\":1,\"children\":14},{\"t\":\"migliore\",\"h\":[[],[15]],\"pos\":\"[2][15]\",\"parent\":1,\"children\":15},{\"t\":\"di\",\"h\":[[],[16]],\"pos\":\"[2][16]\",\"parent\":1,\"children\":16},{\"t\":\"lei\",\"h\":[[],[17]],\"pos\":\"[2][17]\",\"parent\":1,\"children\":17},{\"p\":\".\"}],[{\"t\":\"Si\",\"h\":[[],[18]],\"pos\":\"[2][18]\",\"parent\":1,\"children\":18},{\"t\":\"dice\",\"h\":[[],[19]],\"pos\":\"[2][19]\",\"parent\":1,\"children\":19},{\"p\":\",\"},{\"t\":\"però\",\"h\":[[],[20]],\"pos\":\"[2][20]\",\"parent\":1,\"children\":20},{\"p\":\",\"},{\"t\":\"che\",\"h\":[[],[21]],\"pos\":\"[2][21]\",\"parent\":1,\"children\":21},{\"t\":\"i\",\"h\":[[],[22]],\"pos\":\"[2][22]\",\"parent\":1,\"children\":22},{\"t\":\"giuramenti\",\"h\":[[],[23]],\"pos\":\"[2][23]\",\"parent\":1,\"children\":23},{\"t\":\"d\",\"h\":[[],[24]],\"pos\":\"[2][24]\",\"parent\":1,\"children\":24},{\"p\":\"’\"},{\"t\":\"amore\",\"h\":[[],[25]],\"pos\":\"[2][25]\",\"parent\":1,\"children\":25}],[{\"t\":\"non\",\"h\":[[],[26]],\"pos\":\"[2][26]\",\"parent\":1,\"children\":26},{\"t\":\"arrivino\",\"h\":[[],[27]],\"pos\":\"[2][27]\",\"parent\":1,\"children\":27},{\"t\":\"alle\",\"h\":[[],[28]],\"pos\":\"[2][28]\",\"parent\":1,\"children\":28},{\"t\":\"orecchie\",\"h\":[[],[29]],\"pos\":\"[2][29]\",\"parent\":1,\"children\":29},{\"t\":\"degli\",\"h\":[[],[30]],\"pos\":\"[2][30]\",\"parent\":1,\"children\":30},{\"t\":\"dei\",\"h\":[[],[31]],\"pos\":\"[2][31]\",\"parent\":1,\"children\":31},{\"t\":\"immortali\",\"h\":[[24],[32]],\"pos\":\"[2][32]\",\"parent\":1,\"children\":32},{\"p\":\",\"},{\"t\":\"ed\",\"h\":[[],[33]],\"pos\":\"[2][33]\",\"parent\":1,\"children\":33},{\"t\":\"è\",\"h\":[[],[34]],\"pos\":\"[2][34]\",\"parent\":1,\"children\":34},{\"t\":\"vero\",\"h\":[[],[35]],\"pos\":\"[2][35]\",\"parent\":1,\"children\":35},{\"p\":\".\"}],[{\"t\":\"Infatti\",\"h\":[[],[36]],\"pos\":\"[2][36]\",\"parent\":1,\"children\":36},{\"t\":\"ora\",\"h\":[[],[37]],\"pos\":\"[2][37]\",\"parent\":1,\"children\":37},{\"t\":\"egli\",\"h\":[[],[38]],\"pos\":\"[2][38]\",\"parent\":1,\"children\":38},{\"t\":\"arde\",\"h\":[[],[39]],\"pos\":\"[2][39]\",\"parent\":1,\"children\":39},{\"t\":\"di\",\"h\":[[],[40]],\"pos\":\"[2][40]\",\"parent\":1,\"children\":40},{\"t\":\"passione\",\"h\":[[],[41]],\"pos\":\"[2][41]\",\"parent\":1,\"children\":41},{\"t\":\"per\",\"h\":[[],[42]],\"pos\":\"[2][42]\",\"parent\":1,\"children\":42},{\"t\":\"un\",\"h\":[[],[43]],\"pos\":\"[2][43]\",\"parent\":1,\"children\":43},{\"t\":\"uomo\",\"h\":[[],[44]],\"pos\":\"[2][44]\",\"parent\":1,\"children\":44},{\"t\":\"e\",\"h\":[[],[45]],\"pos\":\"[2][45]\",\"parent\":1,\"children\":45},{\"t\":\"non\",\"h\":[[],[46]],\"pos\":\"[2][46]\",\"parent\":1,\"children\":46},{\"t\":\"ha\",\"h\":[[],[47]],\"pos\":\"[2][47]\",\"parent\":1,\"children\":47},{\"t\":\"più\",\"h\":[[],[48]],\"pos\":\"[2][48]\",\"parent\":1,\"children\":48}],[{\"t\":\"né\",\"h\":[[],[49]],\"pos\":\"[2][49]\",\"parent\":1,\"children\":49},{\"t\":\"stima\",\"h\":[[],[50]],\"pos\":\"[2][50]\",\"parent\":1,\"children\":50},{\"t\":\"né\",\"h\":[[],[51]],\"pos\":\"[2][51]\",\"parent\":1,\"children\":51},{\"t\":\"considerazione\",\"h\":[[],[52]],\"pos\":\"[2][52]\",\"parent\":1,\"children\":52},{\"t\":\"della\",\"h\":[[],[53]],\"pos\":\"[2][53]\",\"parent\":1,\"children\":53},{\"t\":\"povera\",\"h\":[[],[54]],\"pos\":\"[2][54]\",\"parent\":1,\"children\":54},{\"t\":\"fidanzata\",\"h\":[[],[55]],\"pos\":\"[2][55]\",\"parent\":1,\"children\":55},{\"p\":\",\"},{\"t\":\"come\",\"h\":[[],[56]],\"pos\":\"[2][56]\",\"parent\":1,\"children\":56},{\"t\":\"dei\",\"h\":[[],[57]],\"pos\":\"[2][57]\",\"parent\":1,\"children\":57},{\"t\":\"Megaresi\",\"h\":[[37],[58]],\"pos\":\"[2][58]\",\"parent\":1,\"children\":58},{\"p\":\".\"}]]]', 3, NULL, '2017-05-31 20:28:29', '2017-05-31 20:28:29');

-- --------------------------------------------------------

--
-- Structure de la table `entity_translations_alignements__entity_translations_align_pair`
--

CREATE TABLE IF NOT EXISTS `entity_translations_alignements__entity_translations_align_pair` (
  `id` int(10) UNSIGNED NOT NULL,
  `entity_translations_alignements` int(11) DEFAULT NULL,
  `entity_translations_align_pair` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `eras`
--

CREATE TABLE IF NOT EXISTS `eras` (
  `id_era` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `date_begin` int(11) DEFAULT NULL,
  `date_end` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `eras_images__images_eras`
--

CREATE TABLE IF NOT EXISTS `eras_images__images_eras` (
  `id` int(10) UNSIGNED NOT NULL,
  `eras_images` int(11) DEFAULT NULL,
  `images_eras` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `eras_translations`
--

CREATE TABLE IF NOT EXISTS `eras_translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_era` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `culture_centers` longtext COLLATE utf8_unicode_ci,
  `description` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `genres`
--

CREATE TABLE IF NOT EXISTS `genres` (
  `id_genre` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `genres_translations`
--

CREATE TABLE IF NOT EXISTS `genres_translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_genre` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id_image` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `date_range` int(11) DEFAULT NULL,
  `URL` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `credit` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `images_keywords__keywords_images`
--

CREATE TABLE IF NOT EXISTS `images_keywords__keywords_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `images_keywords` int(11) DEFAULT NULL,
  `keywords_images` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `images_manuscripts__manuscripts_images`
--

CREATE TABLE IF NOT EXISTS `images_manuscripts__manuscripts_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `images_manuscripts` int(11) DEFAULT NULL,
  `manuscripts_images` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `images_scholies__scholies_images`
--

CREATE TABLE IF NOT EXISTS `images_scholies__scholies_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `images_scholies` int(11) DEFAULT NULL,
  `scholies_images` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `keywords`
--

CREATE TABLE IF NOT EXISTS `keywords` (
  `id_keyword` int(10) UNSIGNED NOT NULL,
  `category` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `keywords_categories`
--

CREATE TABLE IF NOT EXISTS `keywords_categories` (
  `id_keyword_category` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `keywords_categories_translation`
--

CREATE TABLE IF NOT EXISTS `keywords_categories_translation` (
  `id_keyword_category_translations` int(10) UNSIGNED NOT NULL,
  `id_keyword_category` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `label` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `keywords_families`
--

CREATE TABLE IF NOT EXISTS `keywords_families` (
  `id_keyword_family` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `keywords_translations`
--

CREATE TABLE IF NOT EXISTS `keywords_translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_keyword` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `keyword_families_keywords__keywords_families`
--

CREATE TABLE IF NOT EXISTS `keyword_families_keywords__keywords_families` (
  `id` int(10) UNSIGNED NOT NULL,
  `keyword_families_keywords` int(11) DEFAULT NULL,
  `keywords_families` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `languages`
--

CREATE TABLE IF NOT EXISTS `languages` (
  `id_language` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `family` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `languages`
--

INSERT INTO `languages` (`id_language`, `name`, `family`, `id_user`, `id_group`, `createdAt`, `updatedAt`) VALUES
(1, 'italiano moderno', 'italiano', 1, NULL, '2017-05-26 18:34:13', '2017-05-26 18:34:13'),
(2, 'français moderne', 'français', 1, NULL, '2017-05-29 08:52:43', '2017-05-29 08:52:43'),
(3, 'modern english', 'english', 1, NULL, '2017-05-29 08:53:04', '2017-05-29 08:53:04'),
(4, 'αρχαία ελληνικά', 'ελληνικά', 1, NULL, '2017-05-29 08:53:48', '2017-05-29 08:53:48'),
(5, 'français littéraire', 'français', 1, NULL, '2017-05-29 08:54:04', '2017-05-29 08:54:04'),
(6, 'français littéral', 'français', 1, NULL, '2017-05-29 08:54:17', '2017-05-29 08:54:17'),
(7, 'greco versione Cagnazzi', 'ελληνικά', 1, NULL, '2017-05-29 08:54:33', '2017-05-29 08:54:33'),
(8, 'perseus', 'ελληνικά', 1, NULL, '2017-05-29 08:54:48', '2017-05-29 08:54:48');

-- --------------------------------------------------------

--
-- Structure de la table `manuscripts`
--

CREATE TABLE IF NOT EXISTS `manuscripts` (
  `id_manuscript` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `manuscripts_translations`
--

CREATE TABLE IF NOT EXISTS `manuscripts_translations` (
  `id_manuscript_translations` int(10) UNSIGNED NOT NULL,
  `id_manuscript` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `page` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `motifs`
--

CREATE TABLE IF NOT EXISTS `motifs` (
  `id_motif` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `motifs_translations`
--

CREATE TABLE IF NOT EXISTS `motifs_translations` (
  `id_motif_translation` int(10) UNSIGNED NOT NULL,
  `id_motif` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `id_motif` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notes_translations`
--

CREATE TABLE IF NOT EXISTS `notes_translations` (
  `id_note_translation` int(10) UNSIGNED NOT NULL,
  `id_note` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `text` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `scholies`
--

CREATE TABLE IF NOT EXISTS `scholies` (
  `id_scholie` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `manuscript` int(11) DEFAULT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `scholies_translations`
--

CREATE TABLE IF NOT EXISTS `scholies_translations` (
  `id_scholie_translation` int(10) UNSIGNED NOT NULL,
  `id_scholie` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `text` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `texts`
--

CREATE TABLE IF NOT EXISTS `texts` (
  `id_text` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `texts_translations`
--

CREATE TABLE IF NOT EXISTS `texts_translations` (
  `id_text_translation` int(10) UNSIGNED NOT NULL,
  `id_text` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `editor` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sound_url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text` longtext COLLATE utf8_unicode_ci,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `URId`
--

CREATE TABLE IF NOT EXISTS `URId` (
  `id_urid` int(10) UNSIGNED NOT NULL,
  `id_entity` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_urid_category` int(11) DEFAULT NULL,
  `id_urid_source` int(11) DEFAULT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `URN` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `URId_categories`
--

CREATE TABLE IF NOT EXISTS `URId_categories` (
  `id_URId_category` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `URId_categories_translation`
--

CREATE TABLE IF NOT EXISTS `URId_categories_translation` (
  `id_urid_category_translation` int(10) UNSIGNED NOT NULL,
  `id_urid_category` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `id_language` int(11) DEFAULT NULL,
  `label` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `URI_source`
--

CREATE TABLE IF NOT EXISTS `URI_source` (
  `id_URI_source` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `base` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `displayName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci,
  `admin` tinyint(1) DEFAULT NULL,
  `first_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `institution` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_user`, `displayName`, `roles`, `admin`, `first_name`, `last_name`, `institution`, `country`, `createdAt`, `updatedAt`) VALUES
(1, 'ImportScript', NULL, 1, '', '', 'API', '', '2017-05-26 18:33:43', '2017-05-26 18:33:43'),
(2, 'marviro', NULL, 0, 'Marcello', 'Vitali-Rosati', 'Université de Montréal', 'Canada', '2017-05-27 11:12:12', '2017-05-29 11:05:16'),
(3, 'nicolasS', NULL, 1, '', '', 'CRCEN', '', '2017-05-29 11:04:36', '2017-07-05 10:26:26');

-- --------------------------------------------------------

--
-- Structure de la table `user_credentials`
--

CREATE TABLE IF NOT EXISTS `user_credentials` (
  `id_credential` int(10) UNSIGNED NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `locked` tinyint(1) DEFAULT NULL,
  `expired` tinyint(1) DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `user_credentials`
-- Prevented from export
--


-- --------------------------------------------------------

--
-- Structure de la table `user_groups`
--

CREATE TABLE IF NOT EXISTS `user_groups` (
  `id_group` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `visibile` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user_groups_users__users_groups`
--

CREATE TABLE IF NOT EXISTS `user_groups_users__users_groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `users_groups` int(11) DEFAULT NULL,
  `user_groups_users` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id_author`);

--
-- Index pour la table `authors_entities__entities_authors`
--
ALTER TABLE `authors_entities__entities_authors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `authors_images__images_authors`
--
ALTER TABLE `authors_images__images_authors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `author_authority`
--
ALTER TABLE `author_authority`
  ADD PRIMARY KEY (`id_author_authority`);

--
-- Index pour la table `author_translations`
--
ALTER TABLE `author_translations`
  ADD PRIMARY KEY (`id_author_translation`);

--
-- Index pour la table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id_book`);

--
-- Index pour la table `books_translations`
--
ALTER TABLE `books_translations`
  ADD PRIMARY KEY (`id_book_translation`);

--
-- Index pour la table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id_city`);

--
-- Index pour la table `cities_images__images_cities`
--
ALTER TABLE `cities_images__images_cities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cities_translations`
--
ALTER TABLE `cities_translations`
  ADD PRIMARY KEY (`id_city_translation`);

--
-- Index pour la table `entities`
--
ALTER TABLE `entities`
  ADD PRIMARY KEY (`id_entity`);

--
-- Index pour la table `entities_id_entity__entities_references`
--
ALTER TABLE `entities_id_entity__entities_references`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `entities_images__images_entities`
--
ALTER TABLE `entities_images__images_entities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `entities_keywords__keywords_entities`
--
ALTER TABLE `entities_keywords__keywords_entities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `entities_translations`
--
ALTER TABLE `entities_translations`
  ADD PRIMARY KEY (`id_entity_translation`);

--
-- Index pour la table `entities_translations_align`
--
ALTER TABLE `entities_translations_align`
  ADD PRIMARY KEY (`id_align`);

--
-- Index pour la table `entity_translations_alignements__entity_translations_align_pair`
--
ALTER TABLE `entity_translations_alignements__entity_translations_align_pair`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `eras`
--
ALTER TABLE `eras`
  ADD PRIMARY KEY (`id_era`);

--
-- Index pour la table `eras_images__images_eras`
--
ALTER TABLE `eras_images__images_eras`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `eras_translations`
--
ALTER TABLE `eras_translations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Index pour la table `genres_translations`
--
ALTER TABLE `genres_translations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id_image`);

--
-- Index pour la table `images_keywords__keywords_images`
--
ALTER TABLE `images_keywords__keywords_images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `images_manuscripts__manuscripts_images`
--
ALTER TABLE `images_manuscripts__manuscripts_images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `images_scholies__scholies_images`
--
ALTER TABLE `images_scholies__scholies_images`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `keywords`
--
ALTER TABLE `keywords`
  ADD PRIMARY KEY (`id_keyword`);

--
-- Index pour la table `keywords_categories`
--
ALTER TABLE `keywords_categories`
  ADD PRIMARY KEY (`id_keyword_category`);

--
-- Index pour la table `keywords_categories_translation`
--
ALTER TABLE `keywords_categories_translation`
  ADD PRIMARY KEY (`id_keyword_category_translations`);

--
-- Index pour la table `keywords_families`
--
ALTER TABLE `keywords_families`
  ADD PRIMARY KEY (`id_keyword_family`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `keywords_translations`
--
ALTER TABLE `keywords_translations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `keyword_families_keywords__keywords_families`
--
ALTER TABLE `keyword_families_keywords__keywords_families`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id_language`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `manuscripts`
--
ALTER TABLE `manuscripts`
  ADD PRIMARY KEY (`id_manuscript`);

--
-- Index pour la table `manuscripts_translations`
--
ALTER TABLE `manuscripts_translations`
  ADD PRIMARY KEY (`id_manuscript_translations`);

--
-- Index pour la table `motifs`
--
ALTER TABLE `motifs`
  ADD PRIMARY KEY (`id_motif`);

--
-- Index pour la table `motifs_translations`
--
ALTER TABLE `motifs_translations`
  ADD PRIMARY KEY (`id_motif_translation`);

--
-- Index pour la table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id_motif`);

--
-- Index pour la table `notes_translations`
--
ALTER TABLE `notes_translations`
  ADD PRIMARY KEY (`id_note_translation`);

--
-- Index pour la table `scholies`
--
ALTER TABLE `scholies`
  ADD PRIMARY KEY (`id_scholie`);

--
-- Index pour la table `scholies_translations`
--
ALTER TABLE `scholies_translations`
  ADD PRIMARY KEY (`id_scholie_translation`);

--
-- Index pour la table `texts`
--
ALTER TABLE `texts`
  ADD PRIMARY KEY (`id_text`);

--
-- Index pour la table `texts_translations`
--
ALTER TABLE `texts_translations`
  ADD PRIMARY KEY (`id_text_translation`);

--
-- Index pour la table `URId`
--
ALTER TABLE `URId`
  ADD PRIMARY KEY (`id_urid`);

--
-- Index pour la table `URId_categories`
--
ALTER TABLE `URId_categories`
  ADD PRIMARY KEY (`id_URId_category`);

--
-- Index pour la table `URId_categories_translation`
--
ALTER TABLE `URId_categories_translation`
  ADD PRIMARY KEY (`id_urid_category_translation`);

--
-- Index pour la table `URI_source`
--
ALTER TABLE `URI_source`
  ADD PRIMARY KEY (`id_URI_source`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Index pour la table `user_credentials`
--
ALTER TABLE `user_credentials`
  ADD PRIMARY KEY (`id_credential`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `user_groups`
--
ALTER TABLE `user_groups`
  ADD PRIMARY KEY (`id_group`);

--
-- Index pour la table `user_groups_users__users_groups`
--
ALTER TABLE `user_groups_users__users_groups`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `authors`
--
ALTER TABLE `authors`
  MODIFY `id_author` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `authors_entities__entities_authors`
--
ALTER TABLE `authors_entities__entities_authors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT pour la table `authors_images__images_authors`
--
ALTER TABLE `authors_images__images_authors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `author_authority`
--
ALTER TABLE `author_authority`
  MODIFY `id_author_authority` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `author_translations`
--
ALTER TABLE `author_translations`
  MODIFY `id_author_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT pour la table `books`
--
ALTER TABLE `books`
  MODIFY `id_book` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `books_translations`
--
ALTER TABLE `books_translations`
  MODIFY `id_book_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `cities`
--
ALTER TABLE `cities`
  MODIFY `id_city` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `cities_images__images_cities`
--
ALTER TABLE `cities_images__images_cities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `cities_translations`
--
ALTER TABLE `cities_translations`
  MODIFY `id_city_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `entities`
--
ALTER TABLE `entities`
  MODIFY `id_entity` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `entities_id_entity__entities_references`
--
ALTER TABLE `entities_id_entity__entities_references`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `entities_images__images_entities`
--
ALTER TABLE `entities_images__images_entities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `entities_keywords__keywords_entities`
--
ALTER TABLE `entities_keywords__keywords_entities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `entities_translations`
--
ALTER TABLE `entities_translations`
  MODIFY `id_entity_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT pour la table `entities_translations_align`
--
ALTER TABLE `entities_translations_align`
  MODIFY `id_align` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `entity_translations_alignements__entity_translations_align_pair`
--
ALTER TABLE `entity_translations_alignements__entity_translations_align_pair`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `eras`
--
ALTER TABLE `eras`
  MODIFY `id_era` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `eras_images__images_eras`
--
ALTER TABLE `eras_images__images_eras`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `eras_translations`
--
ALTER TABLE `eras_translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `genres`
--
ALTER TABLE `genres`
  MODIFY `id_genre` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `genres_translations`
--
ALTER TABLE `genres_translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id_image` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `images_keywords__keywords_images`
--
ALTER TABLE `images_keywords__keywords_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `images_manuscripts__manuscripts_images`
--
ALTER TABLE `images_manuscripts__manuscripts_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `images_scholies__scholies_images`
--
ALTER TABLE `images_scholies__scholies_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `keywords`
--
ALTER TABLE `keywords`
  MODIFY `id_keyword` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `keywords_categories`
--
ALTER TABLE `keywords_categories`
  MODIFY `id_keyword_category` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `keywords_categories_translation`
--
ALTER TABLE `keywords_categories_translation`
  MODIFY `id_keyword_category_translations` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `keywords_families`
--
ALTER TABLE `keywords_families`
  MODIFY `id_keyword_family` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `keywords_translations`
--
ALTER TABLE `keywords_translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `keyword_families_keywords__keywords_families`
--
ALTER TABLE `keyword_families_keywords__keywords_families`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `languages`
--
ALTER TABLE `languages`
  MODIFY `id_language` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `manuscripts`
--
ALTER TABLE `manuscripts`
  MODIFY `id_manuscript` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `manuscripts_translations`
--
ALTER TABLE `manuscripts_translations`
  MODIFY `id_manuscript_translations` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `motifs`
--
ALTER TABLE `motifs`
  MODIFY `id_motif` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `motifs_translations`
--
ALTER TABLE `motifs_translations`
  MODIFY `id_motif_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `notes`
--
ALTER TABLE `notes`
  MODIFY `id_motif` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `notes_translations`
--
ALTER TABLE `notes_translations`
  MODIFY `id_note_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `scholies`
--
ALTER TABLE `scholies`
  MODIFY `id_scholie` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `scholies_translations`
--
ALTER TABLE `scholies_translations`
  MODIFY `id_scholie_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `texts`
--
ALTER TABLE `texts`
  MODIFY `id_text` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `texts_translations`
--
ALTER TABLE `texts_translations`
  MODIFY `id_text_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `URId`
--
ALTER TABLE `URId`
  MODIFY `id_urid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `URId_categories`
--
ALTER TABLE `URId_categories`
  MODIFY `id_URId_category` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `URId_categories_translation`
--
ALTER TABLE `URId_categories_translation`
  MODIFY `id_urid_category_translation` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `URI_source`
--
ALTER TABLE `URI_source`
  MODIFY `id_URI_source` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `user_credentials`
--
ALTER TABLE `user_credentials`
  MODIFY `id_credential` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `user_groups`
--
ALTER TABLE `user_groups`
  MODIFY `id_group` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user_groups_users__users_groups`
--
ALTER TABLE `user_groups_users__users_groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
