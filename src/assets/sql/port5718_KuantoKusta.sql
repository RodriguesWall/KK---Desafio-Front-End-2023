-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 05, 2023 at 04:51 PM
-- Server version: 5.7.23-23
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `port5718_KuantoKusta`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` float NOT NULL,
  `picture` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `category`, `price`, `picture`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(2, '8 MESES + 2 ESFOLIANTES + BAG TENESSE', 'Barba', 300, 'https://barbaderespeito.com.br/media/catalog/product/optimized/f/0/f0c4038b0b8d5628f7e0e4899babce2d/blend_esfoliante_tenesse_sem_etiqueta.jpg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><p style=\"text-align: center;\"><strong style=\"font-size: medium;\"><span style=\"color: #000000;\">CUPONS NÃO APLICAVEIS A ESTE PRODUTO</span></strong></p><br>\r\n<h2 style=\"text-align: center;\"><strong style=\"font-size: medium;\"><span style=\"color: #000000;\">&nbsp;Blend Original Para Fortalecimento de Barba - 8 Meses + 2 Esfoliantes + Bag Tenesse</span></strong></h2><br>\r\n<p dir=\"ltr\"><span>Se você é o tipo de cara que deseja ser um barbudo respeitado, que se destaca na galera, o B</span><span>lend Original</span><span> vai mudar a sua vida, </span><span>fortalecendo os fios da sua barba</span><span> como você nunca viu antes.</span></p><br>\r\n<p dir=\"ltr\"><span>O blend original, ao </span><span>contrário</span><span> de outros produtos, possui baixo índice de </span><span>contra indicações</span><span> e </span><span>efeitos colaterais</span><span>, variando de acordo com o organismo de cada pessoa. Sendo </span><span>testado</span><span> e </span><span>comprovado</span><span> em laboratório,&nbsp;90% das pessoas que usaram e testaram confirmam que o produto funciona e notaram um maior preenchimento da barba.</span></p><br>\r\n<p dir=\"ltr\"><span>Já são mais de </span><span>600.000 produtos vendidos</span><span> para mais de </span><span>250.000 clientes satisfeitos</span><span> em 5 anos de Barba de Respeito. </span><a href=\"https://barbaderespeito.com.br/depoimentos/\"><span>clique aqui</span></a><span> e veja relatos dos barbudos que usaram o </span><span>Blend Original</span><span> e conquistaram sua tão sonhada </span><span>Barba de Respeito</span><span>.</span></p><br>\r\n<p><span><span>&nbsp;</span></span></p><br>\r\n<p dir=\"ltr\"><span>Do que é feito o Blend Original?</span></p><br>\r\n<p><span id=\"docs-internal-guid-9cee2e88-7fff-ab95-1987-5dc72ef41865\"><br><span>Ele é composto por princípios ativos </span><span>nacionais</span><span> e </span><span>importados</span><span> que possuem ingredientes e extratos de origem </span><span>vegetal,</span><span> promovem ação </span><span>nutriente</span><span> e </span><span>estimulante</span><span> sobre o folículo piloso, favorecendo assim o </span><span>fortalecimento da sua barba</span><span>, entre outros benefícios, além de deixá-la </span><span>macia</span><span> e </span><span>sedosa</span><span>.</span></span></p><br>\r\n<p><span style=\"color: #000000;\">&nbsp;</span></p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-05 02:07:43'),
(3, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(4, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(5, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(6, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(7, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(8, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(9, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(10, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(11, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(12, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 100, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-04 21:27:20'),
(13, 'GROOMING SPRAY BARBA DE RESPEITO\r\n', 'Barba', 125, 'https://barbaderespeito.com.br/media/catalog/product/optimized/c/5/c503e4f913b683f0787541b53fee97c0/foto01.jpg', '<p>Textura e estrutura para os mais variados tipos de cortes e cabelos, o Grooming Spray é um eficiente finalizador. Com destaque para o Colágeno e Pantenol em sua composição, ele auxilia na modelagem e estilização de penteados através de seu prático modo de aplicação.</p>', '2023-01-04 21:27:20', '2023-01-05 19:51:18'),
(14, 'Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)', 'Barba', 90, 'https://barbaderespeito.com.br/media/catalog/product/cache/1/small_image/285x285/85e4522595efc69f496374d01ef2bf13/b/l/blend_capilar_para_o_fortalecimento_e_redu_o_da_queda_de_cabelos_3_-min_1.jpeg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><h2 style=\"text-align: center;\">Blend Capilar - Tônico Acelerador (90ml) + Shampoo Antiqueda (200 ml)</h2><br>\r\n<p></p><br>\r\n<p>Exclusivo da Barba de Respeito, o <strong>Blend Capilar</strong>&nbsp;foi feito para quem quer seus dias cabeludos e gloriosos.<br>Este produto passou pelos mais rígidos controles de qualidades e seus resultados são garantidos, agindo no fortalecimento dos fios, atuando como antiqueda e garantindo que os fios sejam saúdaveis.<br>O kit Blend Capilar conta com um Shampoo Antiqueda para diminuir a oleosidade, prevenindo a queda de cabelo e preparando a pele para a ação da Loção Tônica, que atua no fortalecimento de cabelo.</p><br>\r\n<p>Dermatologicamente testado e comprovado:<br>85% dos usuários testados notaram menos oleosidade; <br>85%&nbsp;dos usuários&nbsp;testados notaram fortalecimento dos fios;<br>95% dos usuários&nbsp;testados notaram redução de queda.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-05 19:51:08'),
(15, 'BALM PARA BARBA - BARBA DE RESPEITO - 65G', 'Barba', 110, 'https://barbaderespeito.com.br/media/catalog/product/optimized/a/5/a59ca54cdabfb1b59771982f96418216/balm_para_a_barba_limpa_e_hidrata_barba_de_respeito_3.jpg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p><br>\r\n</p><p>O <strong>Balm para Barba</strong> da Barba de Respeito foi feito para aquele barbudo de atitude que sabe o que quer e que se destaca no meio da galera.<br>Sua função é hidratar e reduzir o frizz nos fios rebeldes da sua barba, dando volume e maciez. Além de diminuir as irritações causadas pelo crescimento e aparagem da barba.<br>Ah, e vale lembrar que ele ainda pode ser utilizado como um hidratante para quem tem a pele mais oleosa.</p><br>\r\n<p style=\"text-align: center;\"><strong><span style=\"font-size: large;\">Mas o que é Frizz?</span></strong></p><br>\r\n<p>Frizz são, nada mais nada menos, que aqueles fios arrepiados que faz parecer que o cara levou uma descarga elétrica.<br>São causados de forma involuntária, desde o ato de pentear a barba de forma errada à secá-la na toalha, mas também pela falta de hidratação nos fios.</p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-05 19:51:12'),
(16, 'BEARD CALM 3 MESES\r\n', 'Barba', 120, 'https://barbaderespeito.com.br/media/catalog/product/optimized/1/9/197d64d04c94a89beeab3a02784891ad/beard_calm_barba_de_respeito_reduz_a_irrita_o_e_pelos_encravados_da_barba_5__1.jpg', '<div class=\"short-description\" itemprop=\"description\">\r\n                        <p></p><p style=\"text-align: center;\"><span>CUPONS NÃO APLICAVEIS A ESTE PRODUTO</span></p><br>\r\n<p>O Beard Calm é rápido e eficaz contra coceira, irritação, pelos encravados e foliculite. O desejo da barba longa sem coceira agora é realidade, aplique 1ml do produto por dia, sinta a fragrância suave e a ação refrescante, dando fim as lesões avermelhadas e promovendo renovação celular.</p><br>\r\n<p>A fórmula inovadora garante alívio imediato e não tem contra indicações.</p><br>\r\n<p>- alívio imediato</p><br>\r\n<p>- elimina a coceira</p><br>\r\n<p>- combate a foliculite</p><br>\r\n<p>- reduz vermelhidão</p><br>\r\n<p>- uso diário</p><br>\r\n<p>- fácil aplicação</p><br>\r\n<p>- renovação celular</p><br>\r\n<p>- ação refrescante</p><br>\r\n<p>- sem contra indicações</p><br>\r\n<p></p><br>\r\n<p></p><br>\r\n<pre></pre><br>\r\n<p></p><p></p>\r\n                    </div>', '2023-01-04 21:27:20', '2023-01-05 02:08:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;