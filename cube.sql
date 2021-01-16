-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 16 jan. 2021 à 21:49
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cube`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `categories_ressources`
--

DROP TABLE IF EXISTS `categories_ressources`;
CREATE TABLE IF NOT EXISTS `categories_ressources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_ressource` int(11) NOT NULL,
  `fk_category` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.ressource` (`fk_ressource`),
  KEY `c.categories` (`fk_category`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `nb_like` int(11) NOT NULL,
  `date_creation` datetime NOT NULL,
  `date_edition` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `fk_ressource` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.users_comments` (`fk_user`),
  KEY `c.ressource_comments` (`fk_ressource`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `documents`
--

DROP TABLE IF EXISTS `documents`;
CREATE TABLE IF NOT EXISTS `documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `documents_ressources`
--

DROP TABLE IF EXISTS `documents_ressources`;
CREATE TABLE IF NOT EXISTS `documents_ressources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_document` int(11) NOT NULL,
  `fk_ressource` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.document` (`fk_document`),
  KEY `c.ressource_document` (`fk_ressource`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `logs`
--

DROP TABLE IF EXISTS `logs`;
CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` char(16) NOT NULL,
  `browser` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `action` text NOT NULL,
  `fk_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.user` (`fk_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `punishements`
--

DROP TABLE IF EXISTS `punishements`;
CREATE TABLE IF NOT EXISTS `punishements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `punishements_users`
--

DROP TABLE IF EXISTS `punishements_users`;
CREATE TABLE IF NOT EXISTS `punishements_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time_ban` timestamp NOT NULL,
  `fk_user` int(11) NOT NULL,
  `fk_punishment` int(11) NOT NULL,
  `punisher_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.user_punisher` (`punisher_id`),
  KEY `c.punishment` (`fk_punishment`),
  KEY `c.user_punishment` (`fk_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reasons`
--

DROP TABLE IF EXISTS `reasons`;
CREATE TABLE IF NOT EXISTS `reasons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `relationship_ressources`
--

DROP TABLE IF EXISTS `relationship_ressources`;
CREATE TABLE IF NOT EXISTS `relationship_ressources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reports`
--

DROP TABLE IF EXISTS `reports`;
CREATE TABLE IF NOT EXISTS `reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `treated` tinyint(1) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `fk_comment` int(11) NOT NULL,
  `fk_reason` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.reports_comments` (`fk_comment`),
  KEY `c.user_comments` (`fk_user`),
  KEY `c.reasons_comments` (`fk_reason`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `ressources`
--

DROP TABLE IF EXISTS `ressources`;
CREATE TABLE IF NOT EXISTS `ressources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `nb_consultation` int(11) NOT NULL,
  `nb_like` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL,
  `archived` tinyint(1) NOT NULL,
  `date_creation` datetime NOT NULL,
  `date_edition` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `fk_type_ressource` int(11) NOT NULL,
  `fk_relationship_ressouce` int(11) NOT NULL,
  `fk_status` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.relationship_ressouce` (`fk_relationship_ressouce`),
  KEY `c.status` (`fk_status`),
  KEY `c.type_ressource` (`fk_type_ressource`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `status`
--

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `types_ressources`
--

DROP TABLE IF EXISTS `types_ressources`;
CREATE TABLE IF NOT EXISTS `types_ressources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` char(20) NOT NULL,
  `street_nb` varchar(5) NOT NULL,
  `street_name` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `postal_code` varchar(5) NOT NULL,
  `country` varchar(50) NOT NULL,
  `date_creation` datetime NOT NULL,
  `last_connexion` timestamp NOT NULL,
  `checked` tinyint(1) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `fk_role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.role` (`fk_role`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users_ressources`
--

DROP TABLE IF EXISTS `users_ressources`;
CREATE TABLE IF NOT EXISTS `users_ressources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_user` int(11) NOT NULL,
  `fk_ressource` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `c.user_ressources` (`fk_user`),
  KEY `c.ressources_user` (`fk_ressource`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `categories_ressources`
--
ALTER TABLE `categories_ressources`
  ADD CONSTRAINT `c.categories` FOREIGN KEY (`fk_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.ressource` FOREIGN KEY (`fk_ressource`) REFERENCES `ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `c.ressource_comments` FOREIGN KEY (`fk_ressource`) REFERENCES `ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.users_comments` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `documents_ressources`
--
ALTER TABLE `documents_ressources`
  ADD CONSTRAINT `c.document` FOREIGN KEY (`fk_document`) REFERENCES `documents` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.ressource_document` FOREIGN KEY (`fk_ressource`) REFERENCES `ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `c.user` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `punishements_users`
--
ALTER TABLE `punishements_users`
  ADD CONSTRAINT `c.punishment` FOREIGN KEY (`fk_punishment`) REFERENCES `punishements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.user_punisher` FOREIGN KEY (`punisher_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.user_punishment` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `c.reasons_comments` FOREIGN KEY (`fk_reason`) REFERENCES `reasons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.reports_comments` FOREIGN KEY (`fk_comment`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.user_comments` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ressources`
--
ALTER TABLE `ressources`
  ADD CONSTRAINT `c.relationship_ressouce` FOREIGN KEY (`fk_relationship_ressouce`) REFERENCES `relationship_ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.status` FOREIGN KEY (`fk_status`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.type_ressource` FOREIGN KEY (`fk_type_ressource`) REFERENCES `types_ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `c.role` FOREIGN KEY (`fk_role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users_ressources`
--
ALTER TABLE `users_ressources`
  ADD CONSTRAINT `c.ressources_user` FOREIGN KEY (`fk_ressource`) REFERENCES `ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c.user_ressources` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
