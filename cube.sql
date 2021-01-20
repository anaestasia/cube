-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 20 jan. 2021 à 14:01
-- Version du serveur :  5.7.32
-- Version de PHP : 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données : `cube`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `categories_ressources`
--

CREATE TABLE `categories_ressources` (
  `id` int(11) NOT NULL,
  `fk_ressource` int(11) NOT NULL,
  `fk_category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `nb_like` int(11) NOT NULL,
  `date_creation` datetime NOT NULL,
  `date_edition` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `fk_ressource` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL,
  `deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `documents`
--

INSERT INTO `documents` (`id`, `title`, `url`, `type`, `deleted`) VALUES
(1, 'Vidéo Arte', 'https://www.youtube.com/watch?v=Dpzv8H16R-Q', 'Vidéo', 0),
(2, 'Image Arte', './img/imgRessource/KarlMarxArte.jpg', 'Image', 0),
(3, 'Source Arte', 'https://www.cairn.info/revue-@grh-2013-1-page-45.html', 'Source', 0),
(4, 'tableau 7 cas', './public/img/imgRessource/casEtudeArticleMarx.png', 'Annexe', 0),
(5, 'tableau Mal Rire', 'client/public/img/imgRessource/tableauMalRire.png', 'Annexe', 0);

-- --------------------------------------------------------

--
-- Structure de la table `documents_ressources`
--

CREATE TABLE `documents_ressources` (
  `id` int(11) NOT NULL,
  `fk_document` int(11) NOT NULL,
  `fk_ressource` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `documents_ressources`
--

INSERT INTO `documents_ressources` (`id`, `fk_document`, `fk_ressource`) VALUES
(1, 1, 16),
(2, 2, 16),
(3, 4, 17),
(4, 5, 17);

-- --------------------------------------------------------

--
-- Structure de la table `logs`
--

CREATE TABLE `logs` (
  `id` int(11) NOT NULL,
  `ip` char(16) NOT NULL,
  `browser` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `action` text NOT NULL,
  `fk_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `punishements`
--

CREATE TABLE `punishements` (
  `id` int(11) NOT NULL,
  `label` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `punishements_users`
--

CREATE TABLE `punishements_users` (
  `id` int(11) NOT NULL,
  `time_ban` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fk_user` int(11) NOT NULL,
  `fk_punishment` int(11) NOT NULL,
  `punisher_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reasons`
--

CREATE TABLE `reasons` (
  `id` int(11) NOT NULL,
  `label` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `relationship_ressources`
--

CREATE TABLE `relationship_ressources` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `relationship_ressources`
--

INSERT INTO `relationship_ressources` (`id`, `name`) VALUES
(1, 'Soi'),
(2, 'Conjoints'),
(3, 'Famille'),
(4, 'Professionnelle'),
(5, 'Amis et communautés'),
(6, 'Inconnus');

-- --------------------------------------------------------

--
-- Structure de la table `reports`
--

CREATE TABLE `reports` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `treated` tinyint(1) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `fk_comment` int(11) NOT NULL,
  `fk_reason` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `ressources`
--

CREATE TABLE `ressources` (
  `id` int(11) NOT NULL,
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
  `fk_relationship_ressource` int(11) NOT NULL,
  `fk_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ressources`
--

INSERT INTO `ressources` (`id`, `title`, `content`, `nb_consultation`, `nb_like`, `approved`, `archived`, `date_creation`, `date_edition`, `deleted`, `fk_type_ressource`, `fk_relationship_ressource`, `fk_status`) VALUES
(15, 'Reconnaître ses émotions', '', 0, 0, 1, 0, '2021-01-20 13:49:47', '2021-01-20 17:06:49', 0, 5, 1, 1),
(16, 'Emission ARTE : Travail | Travail, Salaire, Profit', 'Travail | Travail, Salaire, Profit', 0, 0, 1, 0, '2021-01-20 12:10:47', '2021-01-20 12:12:01', 0, 8, 4, 2);
INSERT INTO `ressources` (`id`, `title`, `content`, `nb_consultation`, `nb_like`, `approved`, `archived`, `date_creation`, `date_edition`, `deleted`, `fk_type_ressource`, `fk_relationship_ressource`, `fk_status`) VALUES
(17, 'Le rire au travail et l’éthique', 'Introduction\r\n1Dans cet article, nous souhaitons apporter des éléments de réponse à la question du rire\r\ndans les situations professionnelles. Notre objectif est d’orienter les travaux de recherche\r\nportant plus globalement sur l’éthique au travail, mais aussi de fournir des repères pour le\r\ndéveloppement des pratiques de management. Si le rire comme expression émotionnelle\r\nspontanée de joie semble de prime abord échapper à toute tentative de management, c’est\r\njustement cette attribution communément positive et, de plus, associée à une liberté\r\ninaliénable du sujet qui ressort de notre étude comme contribuant en partie aux problèmes\r\nqu’il soulève. En effet, le rire désigne un comportement individuel ou collectif qui n’émerge\r\net ne trouve son sens que dans un contexte d’échanges sociaux. Située dans le champ de la\r\ngestion des ressources humaines, cette étude se limite aux situations professionnelles\r\nd’interactions directes entre des personnes au travail. La complexité de la problématique du\r\nrire s’en trouve réduite puisque nous écartons les phénomènes de foule, les tabous sociétaux,\r\nle rapport au sacré ou encore l’exercice des contre-pouvoirs dans nos démocraties modernes.\r\n2Le point de départ des travaux présentés est le constat dans le cadre d’une recherche plus\r\nlarge menée par recherche-action sur le rôle du tiers avec la posture de coach, que plusieurs\r\nsalariés, demandeurs d’une aide ponctuelle pour résoudre un problème ou sortir d’une\r\nsituation qu’ils ressentaient comme insupportable, évoquaient “le rire”, celui des autres ou le\r\nleur propre, soit comme une source de mal-être, soit comme un mode de résistance ou de\r\ndéfense de soi. Nous nous sommes alors appuyés sur sept cas sélectionnés car ils s’avéraient\r\nen rapport direct avec le sujet et l’analyse de contenu des 42 entretiens individuels ainsi\r\nréalisés pour proposer une grille d’intelligibilité du phénomène plaçant le rire au travail au\r\ncœur d’une problématique managériale d’ordre éthique.\r\n3Pour cela, nous avons dans un premier temps effectué une revue de littérature en\r\nl’élargissant à la philosophie morale, pour dans une seconde partie procéder à l’analyse de nos\r\nmatériaux recueillis empiriquement. Nous avions en effet à traiter du rire d’une part en ce\r\nqu’il émerge au sein d’une situation professionnelle qu’il transforme, et de l’éthique abordée\r\ncomme un processus de questionnement de la morale (Ricœur, 2010). Ces deux notions\r\nsemblaient relever d’obligations s’imposant au sujet pour des raisons obscures et “au-delà” de\r\nlui de par sa nature humaine ou d’un impératif supérieur. La question centrale de notre étude\r\nest ainsi : le rire au travail est-il mal ? Et si oui, comment le réguler ? D’emblée, nous\r\npouvons préciser que le rire ne peut être considéré comme mal en soi et que par suite, notre\r\n\r\nCUBE 2020 ANNEXE AU CCTP 8/21\r\nquestionnement doit trouver une formulation plus appropriée. C’est déjà rentrer dans cette\r\nréflexion éthique chère aux philosophes et à laquelle ne peut échapper ni le chercheur en\r\ngestion soucieux d’apporter des réponses à la question du bon ou du mal-rire au travail, ni le\r\nmanager incapable de savoir quand et comment le réguler. Ainsi, les demandeurs d’aide de\r\nl’étude, tous cadres d’entreprise et tous, pour des raisons différentes, subissant concrètement\r\nune situation, où deux obligations, celle du rire et celle de la morale, se trouvaient en\r\nopposition, faisaient appel à un tiers pour en sortir.\r\n4Comment dès lors identifier et traiter de ce qui rentre en tension pour les individus ou les\r\ncollectifs et qui semble relever moins d’un jugement que du sentiment moral ? S’agit-il, pour\r\nreprendre une grille d’analyse tirée de la psychologie sociale (Moscovici, 1984, p.9), d’un\r\nconflit dans le rapport à un objet, pour nous le travail, entre un sujet individuel en quête\r\nd’authenticité et d’affirmation, et un sujet social en quête de conformité et d’intégration ? Le\r\nrire se situant dans le champ des expressions spontanées d’un ressenti, peut-on solliciter la\r\nnotion de “dissonance émotionnelle”, déjà développée en appui sur les travaux de Leon\r\nFestinger (1957) dans le domaine du management (Van Hoorebeke, 2003) ?\r\nL’approfondissement dans cette voie au regard de notre problématique considérerait comme\r\nun double postulat initial que premièrement, pour prévenir les éventuelles divergences entre\r\nrire et morale, les sujets doivent au préalable accéder à la connaissance de l’un comme de\r\nl’autre, et deuxièmement, qu’ils arriveront par suite à un contrôle individuel et social des\r\nphénomènes du rire. Ce serait supposer que les définitions préexistent à la manifestation du\r\nrire, posées définitivement comme des vérités préalables et confondre “éthique” avec discours\r\nnormatif et pression de conformité. Or, le propre du rire est qu’il ne s’explique pas : il arrive\r\net surprend le rieur. Or, le propre du mal-rire est que s’il est désigné comme une vérité, c’est\r\ndans une approche par la manifestation consistant « à laisser-être ce qui se montre »\r\n(Thomasset, 1996, p.253).\r\n5Nous souhaitons emprunter ce chemin de questionnement et de réflexion pour poser puis\r\ntenter de résoudre la problématique de cette étude. Partant de ce mal-rire présent dans les\r\ndiscours de plainte sur le travail, notre objectif est de nous tourner du côté des pratiques de\r\nmanagement au sein des organisations pour identifier en quoi elles en favorisent ou non\r\nl’émergence. L’objet de notre étude délimitant par ailleurs le champ de sa problématique est\r\ndonc le vécu d’un rire désigné comme “mal” par au moins un des acteurs de la situation, soit\r\ndans l’instant, soit après-coup. Nous avons ensuite questionné ce mal-rire désigné au regard\r\nde la littérature et par la mise en évidence et la discussion de trois puis quatre indicateurs nous\r\nconcluons sur les pratiques de régulation.\r\n1 – Des bienfaits du rire au travail à la\r\nproblématique de sa nécessaire régulation\r\n6Le questionnement sous-tendu par la tension entre rire et morale pourrait nous renvoyer à\r\nl’un des débats philosophiques toujours ouvert (Darwall, 1995), opposant notamment le comte\r\nde Shaftesbury (1715) [1][1]« On peut objecter que ces affections, toutes dénaturées..., qui\r\ndans la lignée des stoïciens, en appelait à un gouvernement de soi mais hors de toute loi\r\nexterne, hors de toute sanction, par satisfaction de l’action bonne, à Emmanuel Kant pour qui\r\nl’autodétermination est un exercice de la volonté individuelle pour appliquer la loi morale.\r\nMalgré tout, l’un comme l’autre se tournent vers le sujet avec implicitement l’injonction de ne\r\npas “mal-rire”. Sous cet angle, le management ne saurait être concerne?, puisqu’il ne s’agirait\r\nque d’une moralité proche de la discipline personnelle et hors du champ des compétences\r\n\r\nCUBE 2020 ANNEXE AU CCTP 9/21\r\nprofessionnelles. Le problème est tout autre si l’on aborde la question de l’interdiction du rire\r\nconsidéré comme un comportement professionnel inapproprié ou producteur de mal-être au\r\ntravail. Ainsi, l’interrogation, qui sous-tend cette étude est bien : « faut-il réguler le rire au\r\ntravail ? » avec pour corollaires : « comment sait-on qu’une régulation est nécessaire ? » et\r\n« si c’est nécessaire, comment procéder ? ». Pour répondre à ces questions, nous avons\r\nprocédé à une revue de littérature notamment dans le domaine de la philosophie morale.\r\n1.1 – Le rire comme problème d’ordre\r\néthique entre droit naturel et contrôle\r\nsocial\r\n7Sans considérer avec Jacques Abadie (2003, p.267) que « les hommes pensent que leur rire\r\nest toujours innocent, et pourtant il est toujours criminel et condamnable » car il émerge au\r\ndétriment d’un autre, la croyance opposée et socialement partagée que « les rieurs sont\r\ntoujours du bon côté [2][2]Nous indiquons les « extraits de discours » entre guillemets en... »\r\nen devient une arme puissante de domination. Pour Robert Solomon (1998), les émotions ne\r\n« font pas juste de nous arriver », et nous les utilisons pour affronter les autres. Sous cet\r\nangle, les personnes utilisent leurs émotions pour agir en leur faveur en mettant en œuvre ce\r\nqui peut être désigné comme une “stratégie du rire”. Si une conception d’un rire\r\nexclusivement “sous contrôle” est rapidement démentie empiriquement, ne serait-ce que par\r\nnotre propre expérience, quand le rire “éclate”, il est certes hors de la volonté du sujet, mais il\r\ns’inscrit dans un contexte social et même dans une situation directement vécue. Ainsi, le rire\r\nressort comme la résultante d’une forme d’obligation, qui rejoint celle du sens moral de\r\nFrancis Hutcheson (1993) dans la mesure où elle « n’est pas la contrainte d’une loi\r\nextérieure ; mais [où Hutcheson] n’a pas pour autant conçu cette obligation comme une\r\nobligation intérieure » (Jaffro, 2000, p.45). « Rire nerveux », « fou-rire », les rieurs\r\ns’exclameront : « c’est plus fort que moi ! ».\r\n8Mais que faire ? Interdire de rire dans les organisations ? Bien évidemment même la\r\nquestion est absurde pour trois raisons, dont deux au moins semblent évidentes. D’une part, le\r\nrire est une expression émotionnelle généralement spontanée, échappant à la volonté des\r\npersonnes, voire à leur conscience. L’exiger [3][3]Le point souligné ressort comme encore plus\r\névident si on... ou l’interdire par une loi ou une règle en ressort comme contraire à l’éthique\r\ndans la mesure où, elle placerait les sujets dans une situation où il est impossible de bien se\r\nconduire, puisque quoi qu’ils fassent, aucun être humain n’a la capacité de s’y\r\nconformer [4][4]Nous nous démarquons ici des stoïciens qui avec Cicéron.... On retrouve la\r\nnotion “d’injonction paradoxale”, consistant à exiger un comportement « qui ne peut surgir\r\nque spontanément et non sur commande » (Watzlawick, 1980, p.106) et source de détresse\r\nchez les individus qui y sont soumis. Un autre courant théorique traitant des “obscurs\r\nressorts” du rire incontrôlé en introduisant la notion “d’inconscient” nous permet de souligner\r\nl’aberration de l’interdiction du rire, celui de la psychanalyse freudienne. Considérant que\r\n« Le sur-moi-de-la-culture a produit ses idéaux et élevé ses exigences ? Parmi ces dernières,\r\ncelles qui concernent les relations des hommes entre eux sont regroupées en tant\r\nqu’éthique », Sigmund Freud (1929, p.85-86) va s’interroger sur la possibilité « d’écarter le\r\nplus grand obstacle à la culture » qu’il ramène à deux pulsions humaines en conflit, celle de\r\nl’agression ou de l’auto-anéantissement et celle de la vie (Eros), tout en expliquant que leur\r\nrefoulement ou leur négation ne peut que conduire à leur surgissement inconscient et\r\nsocialement inapproprié, voir destructeur de soi ou d’autrui.\r\n\r\nCUBE 2020 ANNEXE AU CCTP 10/21\r\n9Si le propos de Freud représente un modèle du constat contre-intuitif d’un développement\r\nconjoint de la violence et de la culture, il conforte la pertinence de notre premier argument.\r\n10Une deuxième raison est que le recours formel à la coercition soulèverait des objections\r\nmorales bien plus importantes au point qu’on ne peut imaginer la stipulation dans un\r\nrèglement intérieur ou le code du travail qu’il est formellement interdit de rire dans les\r\nsituations professionnelles [5][5]Par contre, plusieurs cas de « fou-rire » ont été relevés.... En\r\neffet, d’un côté, cela atteindrait la liberté de critiquer, ce que le comte de Shaftesbury (1710,\r\np.1) condamnait dès le XVIII\r\ne\r\nsiècle, tout en en questionnant les soubassements et les dérives\r\npotentielles : « Mais qui sera le juge de ce que la censure peut examiner librement, ou de ce\r\nqu’elle doit souffrir impunément ? Qui décidera des circonstances où la liberté peut agir sans\r\nscrupule, ou se taire ? ». Resituée dans le contexte actuel d’une entreprise, cela déposséderait\r\nles salariés de l’un de leurs modes d’expression fondamental, celui des émotions, dont l’usage\r\nserait défini hors d’eux-mêmes. Cela reviendrait à une forme de déshumanisation du\r\npersonnel, dont il n’est plus nécessaire aujourd’hui, de rappeler les multiples critiques non\r\nseulement d’ordre éthique, mais aussi associées au constat qu’un tel mode de gouvernance\r\nréifiant les forces de travail est contre-productif et dessert les intérêts économiques de\r\nl’organisation. D’un autre côté, la loi se tromperait là encore d’objet, car ou bien le rire est\r\n“bon” et l’interdire est injustifiable ou bien il est “mal”, et n’est-ce pas dès lors la dynamique\r\nmême du mal-rire qui est à bannir ? Si l’on considère que les ressorts du rire sont mauvais,\r\ncomme le soulignait en 1720 Gottfried Wilhelm Leibniz (1720, p.3) dans ce qu’il présentait\r\ncomme une réponse à Shaftesbury et qui ici nous semble se situer dans une logique\r\ncomplémentaire : « Je ne vois pas aussi que le ris, c’est-à-dire quelque chose qui tient du\r\nmépris et abaisse l’idée de l’objet, soit une pierre de touche qui serve à reconnaître la vérité.\r\nMépriser ce qu’on ne connaît pas encore est une prévention dont il faut se défaire ». Sous cet\r\nangle, et en poussant le raisonnement, la crainte du rire serait une peur des puissants que\r\ncelui-ci ne puisse révéler une vérité : au final, la censure serait l’indicateur de mensonges que\r\nles personnes ries chercheraient à protéger. Sans rentrer dans le débat, Shaftesbury comme\r\nLeibniz, nous ramène à la même interrogation : si une interdiction ou des sanctions sont à\r\nposer par une règle ou une loi, ne doivent-elles pas porter sur ce qui conduit à un mal-rire ?\r\n11La troisième raison de l’inimaginable interdiction du rire est reliée aux deux autres mais\r\ntout en rappelant l’existence des vertus du “bon rire” qui permet de supporter sa condition\r\nhumaine et les épreuves de la vie, voire de préserver sa dignité. Malgré tout, la problématique\r\ndu rire au travail va bien au-delà d’un tri entre le bon et le mauvais rire. Nous pouvons\r\nretrouver à la fois la figure maléfique du pervers qui rit du malheur d’autrui, le surgissement\r\n\r\nd’une émotion échappant au contrôle du sujet, et qui par contrecoup le dessert ou que lui-\r\nmême trouve inapproprié, et en dernier une situation ou? le rire est la seule issue permettant à\r\n\r\nla personne d’exister dans un contexte d’aliénation. Le rire se manifeste mais rien n’est\r\n“risible” en soi. Cette expression émotionnelle spécifique ne donne que peu d’informations\r\nsur son objet ou sur ce que nous pourrions tenter de cerner en définissant la catégorie du\r\n“risible”. Par contre il désigne un contexte ou renseigne sur la nature du rieur, et soit dans\r\nl’un, soit dans le second, ou encore dans les deux, quelque chose de mauvais se joue, qu’il\r\nrévèle. Au final, aucuns des rieurs concernés - harceleurs, manipulée ou exclu - ne se trouvent\r\ndu bon côté. Il en ressort que la question posée n’est pas celle du “comique”, celui-ci\r\nd’ailleurs ne suscitant pas forcément un éclat de rire, mais celle de la dynamique du rire au\r\ntravail, qui semble associée à trois notions principales elles-mêmes inter-reliées [6][6]Cette\r\ninterrelation entre pouvoir, vérité et existence se..., celles du “pouvoir”, de “la vérité”, et de\r\n“l’existence”, avec une fonction restant à identifier et à questionner de régulateur et/ou\r\nd’indicateur.\r\n\r\nCUBE 2020 ANNEXE AU CCTP 11/21\r\n1.2 – Le rire au travail, un régulateur\r\néthique ?\r\n12Abordé comme régulateur, le rire peut tout d’abord être considéré comme une pratique\r\nsociale présupposant un déclencheur du rire et au moins un rieur. Il s’agit a minima d’une\r\ninteraction entre un sujet et son environnement social. Si le débat semble ouvert entre les\r\nphilosophes sur la possibilité de rire de soi, de rire seul ou si un tiers est nécessaire [7][7]Pour\r\nFreud S. (1905, p. 262-263), « Nul ne peut se satisfaire..., nous n’aborderons cette question\r\nqu’indirectement en nous focalisant sur les théories nous permettant d’éclairer l’éventuelle\r\nfonction d’indicateur ou de régulateur éthique du rire en situations professionnelles. Dans les\r\norganisations, comme le soulignait Ignasi Marti en 2009 (p.128) : « La vision traditionnelle\r\nde la résistance est une vision connotée d’opposition, voire d’agressivité ». Si l’apport des\r\nformes d’action sans violence est souligné par l’auteur, tout comme l’impact de la\r\ndéstabilisation, le recours à l’humour ou à l’ironie n’est pas évoqué.\r\n13Par ailleurs, plusieurs travaux en sciences de gestion abordent le management en\r\nsoulignant le rôle d’une notion, “l’intelligence émotionnelle”, pour l’efficacité des leaders et\r\nleur capacité à influencer les individus et les groupes pour atteindre leurs objectifs (Kotzé et\r\nVenter, 2011). Le rire peut en ressortir comme une aptitude à extérioriser des émotions\r\n« positives » permettant de mieux faire face au stress et d’entretenir une vision optimiste de\r\nl’avenir favorable à la réalisation mais aussi à la mobilisation au travail. Le processus est\r\nsouvent identifié comme relevant de ce qui est désigné comme un processus de\r\n« contagion émotionnelle » (Barsade, 2002) favorisant, lorsque les émotions sont “positives”,\r\nla coopération et la performance individuelle et collective. Le rire est presque\r\nsystématiquement ramené à une expression de joie, cette dernière étant catégorisée dans le\r\ngroupe de ces émotions “positives”. Notre approche est bien différente dans la mesure où\r\nd’une part même si cette attribution est communément admise depuis Darwin [8][8]Darwin\r\nC.R. (1872) reste toutefois prudent, puisqu’il considère..., nous nous limiterons à considérer\r\nprudemment que le rire correspond à l’extériorisation d’une décharge émotionnelle et que\r\nd’autre part, tout en restant toutefois “binaire” puisque nous opposons le “bien” et le “mal”, le\r\nqualificatif de “positif” nous semble inapproprié pour le “mal-rire”. Cette affirmation trouve\r\nun étayage empirique dans l’un des cas de coaching ayant initié la réflexion présentée dans cet\r\narticle. En dehors de plusieurs situations où les coachés interprétaient mal la nature de leurs\r\némotions par conformité sociale et en éprouvaient un mal-être à l’origine de leur demande,\r\nnotamment du fait du caractère “sexué” des émotions (Braconnier, 2000), Or de nombreux\r\ntravaux ont montré que le processus de changement dans les situations de travail présente de\r\nfortes similitudes avec celui du deuil (Kets de Vries et Miller, 1985), dont la psychiatre\r\nElisabeth Kubler-Ross (1989) a conceptualisé les étapes : allant du déni de la réalité qui\r\nheurte le sujet, à l’acceptation, en passant par la révolte et le marchandage. Au niveau affectif,\r\nles personnes doivent « s’arracher pour se détacher » de leur état antérieur, ce qui\r\ns’accompagne de différents ressentis émotionnels, dont les deux principaux sont la colère puis\r\nla peine, deux émotions désignées comme “négatives”. Il en ressort que ce n’est pas le rire ou\r\nl’expression d’émotions positives qui représente en soi un mode de régulation mais la\r\nrégulation des émotions ressenties en autorisant et canalisant leur expression d’une façon\r\nsocialement acceptable. Ainsi, dans la lignée des études déjà menées, définissant comme\r\ncompétence du leader, celle de « régulateur des états émotionnels » de son équipe (Haag et\r\nLaroche, 2009), plus que d’orienter le groupe vers un type d’émotions, ne peut-on pas faire la\r\nproposition qu’il s’agirait plutôt de lui permettre une expression moralement acceptable d’un\r\nressenti par nature échappant au contrôle ? Ce cas confirme également d’autres résultats de\r\n\r\nCUBE 2020 ANNEXE AU CCTP 12/21\r\nrecherche soulignant l’importance pour les décideurs d’écouter leurs émotions pour bien\r\norienter leur jugement (Coger, Haag et Bonnefous, 2009).\r\n1.3 – Quels indicateurs du mal-rire au\r\ntravail ?\r\n14Notre analyse nous conduit également à questionner le caractère moralement acceptable de\r\nla moquerie, en ce qu’elle définit un rire dont l’objet est autrui, et par suite à nous interroger\r\nsur les indicateurs du mal-rire. En effet, lorsqu’elle se tourne vers autrui, qui d’objet du rire se\r\nretrouve placée en position de victime, la moquerie est aujourd’hui considérée comme\r\nillégitime et condamnable depuis la loi de 2002 contre le harcèlement moral au\r\ntravail [9][9]Loi n° 2002-73 du 17 janvier 2002 de modernisation sociale,.... Dans ces\r\nsituations, le “mal-rire” est évident, tout autant que la violence subie, tant depuis Nietzsche,\r\nl’on sait que : « Ce n’est pas par la colère, c’est par le rire que l’on tue » (Kessler, 2005,\r\np.507). Par contre, dans d’autres contextes une “gentille moquerie” peut « détendre\r\nl’atmosphère » et susciter le rire de l’intéressé(e), se considérant lui-même/elle-même comme\r\n“taquiné(e) avec bienveillance”. Ainsi, ce n’est pas la moquerie qui en ressort comme\r\nl’indicateur systématique du “mal-rire”, mais la volonté de son “bon usage”. Emmanuel\r\nJaffelin (2010, p.106) propose ainsi entre autres définitions de la gentillesse, celle de\r\n« l’expression de notre bon vouloir, qui est aussi vouloir du bien ». Nous retrouvons ici le\r\n“bon usage des passions” de René Descartes (1649, p.227 à 230) qui s’opère non par\r\ndomination de la raison mais par la volonté « résolue » d’un sujet « averti de l’emportement »\r\nque peut être une passion, et du « rempart que constitue sa fermeté ? d’âme ou sa\r\nrésolution », la générosité se définissant pour Descartes par l’estime de soi-même, considérée\r\ncomme une vertu, et non par l’altruisme ou l’oubli de soi. Malgré tout, et sans rentrer dans les\r\nressorts de ce bon usage des passions, il nous semblerait hasardeux de tenter de différencier\r\nles “méchantes” des “gentilles” moqueries en prenant comme critère la volonté du moqueur\r\nde blesser le moqué ou son incompétence à exercer son « libre arbitre avec justesse ». En\r\ndehors de la difficulté à “mesurer” l’intention de sujets qui dans bien des cas n’en ont pas une\r\nconscience claire, l’effet destructeur est tout aussi puissant quand les harceleurs s’exclament\r\n« mais c’est pas méchant ! » que lorsqu’ils avouent leur désir de faire souffrir. Ce serait plutôt\r\ntrois autres notions qui feraient la différence et qui définissent nos propositions de recherche\r\nsur les indicateurs du mal-rire au travail et dont nous avons étayé le bien-fondé\r\nempiriquement dans une deuxième partie : la “réciprocité”, “l’unanimité”, et la “persistance”.\r\n15Il semble que la “réciprocité” ait deux dimensions. En effet, elle vise à indiquer que les\r\nrieurs sont à la fois moqueurs et moqués mais aussi que la situation est elle-même un\r\ndéclencheur du rire. Nous entendons par le deuxième indicateur, “l’unanimité”, non pas que la\r\nmoquerie fasse rire “tout le monde”, mais que le rire soit partagé par les trois groupes de\r\nprotagonistes directement concernés : moqueur, moqué mais aussi témoin. Pour ce dernier,\r\nplusieurs travaux soulignent que les spectateurs peuvent être affligés par l’expérience subie\r\nd’un “mal-rire” et en éprouver un malaise profond (Houba, 2007). À ce stade, il nous semble\r\nque deux conceptions opposées du rire et de son rapport à la régulation sociale peuvent être\r\nrelevées. Pour l’une, « Le rire est une expérience subversive [...] Le rire est une arme de\r\nlibération massive contre les oppresseurs, un outil pour résister aux forces\r\nd’anéantissement » (Birnbaum, 2011, p.9), quand pour l’autre, le rire va être considéré avec\r\nHenri Bergson (1940) comme une « sanction sociale symbolique » permettant à la société\r\nd’exercer un contrôle et de se prémunir des sujets la menaçant. Si dans les deux cas,\r\nl’intelligence ou la clairvoyance est postulée du côté des rieurs et des moqueurs, pour le\r\npremier, elle s’inscrit dans une dynamique de refus de se soumettre à ce qui domine, alors que\r\n\r\nCUBE 2020 ANNEXE AU CCTP 13/21\r\ndans le second, elle exerce une pression de conformité sociale. Replacée dans le monde du\r\n\r\ntravail, chacune des approches peut trouver des objections remettant en question leur bien-\r\nfondé et leur possible orientation des pratiques. En effet, de nombreux cas, comme par\r\n\r\nexemple ceux portant sur la discrimination au travail, mettent en évidence que résister peut\r\naussi consister à ne pas rire d’un bouc-émissaire au milieu d’un groupe hilare, ou affirmer son\r\nopposition à la ridiculisation de l’autre. Par ailleurs, le phénomène conduisant les collectifs à\r\nune euphorie groupale associée à un sentiment de surpuissance illusoire et une perte du sens\r\ndes réalités, a été largement étudié [10][10]Le premier à avoir affirme? que « l’individu en\r\nfoule diffère.... Non seulement les résultats sur les équipes professionnelles contredisent le\r\npostulat de clairvoyance des rieurs, mais ils conduisent au constat que les groupes alors\r\ndésignés comme fusionnels (Anzieu et Martin, 1982) finissent toujours par éclater : ce type de\r\nrire ne préserve la cohésion sociale que de façon précaire et artificielle. Le mouvement de\r\nretour à la réalité est aussi une prise de conscience individuelle que le collectif peut conduire à\r\nadopter un comportement que chaque membre condamne après-coup et considère comme\r\nirresponsable. Ainsi, désigner un autre comme une victime expiatoire ou un objet légitime de\r\nmoqueries est une ignorance de sa valeur d’homme et place dans une posture illusoire de\r\nsupériorité. Nous avons d’ailleurs relevé que Bergson (1932, p.90) affirme dans un ouvrage\r\nantérieur que « si sévèrement que nous affections de juger les autres hommes, nous les\r\ncroyons, au fond, meilleurs que nous. Sur cette heureuse illusion repose une bonne partie de\r\nla vie sociale ». Nous retrouvons ici une définition du troisième indicateur proposé : la\r\n“persistance”. Il répond à la question : le rieur considère-t-il après-coup qu’il a “mal-ri” ? La\r\nrégulation en ressort également comme un processus inachevable, toujours en cours et à\r\nmener.\r\n2 – Etayage empirique de l’existence du\r\nmal-rire au travail et de ses indicateurs\r\n16Dans cette partie, après avoir explicité la méthodologie de la recherche, nous présentons les\r\nrésultats de sept études de cas d’accompagnement de responsables confrontés à des difficultés\r\nde management et demandeurs d’aide auprès d’un tiers complétés par l’analyse de contenu\r\n\r\ndes entretiens individuels menés, enregistrés et retranscrits dans le cadre de cette recherche-\r\naction. Celle-ci s’inscrivait dans un projet visant plus globalement à explorer le rôle du tiers\r\n\r\ndans le changement des comportements professionnels et la résolution des problèmes de\r\nmanagement. L’étude présentée dans cet article a pour objectif de conforter l’existence de\r\nsituations de rire producteur de mal-être et d’étayer nos propositions de recherche sur les\r\nindicateurs de ce mal-rire au travail afin d’orienter les pratiques de régulation.\r\n2.1 – Méthodologie de l’étude : quand le\r\nrire conduit à une demande d’aide\r\n17D’un point de vue épistémologique, nous nous situons dans un paradigme interprétativiste.\r\nEn effet, si notre recherche est de type exploratoire, il ne s’agit pas de faire abstraction des\r\ncadres théoriques existants mais d’identifier les théories pertinentes, de s’y appuyer pour les\r\nconfronter et investiguer la réalité, avec l’adoption d’une posture réflexive avec le terrain\r\n(Jodelet, 2003), dans un “va-et-vient” entre observations empiriques et hypothèses\r\ninterprétatives permettant “d’ancrer” une théorie en cours d’élaboration (Glaser et Strauss,\r\n1967). La méthode de cas nous est apparue comme la plus pertinente pour étudier les\r\n\r\nCUBE 2020 ANNEXE AU CCTP 14/21\r\nsituations du rire dans les situations de travail. Selon Miles et Huberman (1991), elle permet\r\nde développer les conceptualisations à partir de descriptions approfondies des phénomènes. Il\r\ns’agit d’appréhender l’impact d’un comportement humain dans une complexité, dont nous\r\nsouhaitons saisir toutes les dimensions, ce que l’étude de cas favorise (Giroux et Tremblay,\r\n2002). Enfin, le caractère éthique ou non est une préoccupation organisationnelle\r\ncontemporaine, et l’étude de cas, comme le souligne Yin (1994), est par définition une\r\ndémarche de recherche qui traite des phénomènes en prise directe avec les contextes dans\r\nlesquels ils émergent. La méthode utilisée est celle de la recherche-action (Koenig, 1993) avec\r\ncomme objectif en cohérence avec notre posture interprétativiste de nous appuyer sur un cadre\r\nthéorique issu de la littérature afin de faire émerger une grille d’intelligibilité du mal-rire au\r\ntravail, tout en co-élaborant avec les acteurs (les coachés) des construits opératoires.\r\n18L’étude a été menée de 2006 à 2008. Elle a consisté à accompagner individuellement des\r\ndemandeurs d’aide dans une série de dix entretiens au maximum d’environ 60 minutes chacun\r\net enregistrés avec l’accord des intéressés. Seul un cas s’est concrétisé par dix entretiens. Pour\r\nles six autres cas, le coaché a considéré qu’il n’avait plus besoin d’accompagnement avant la\r\nfin des dix séances qui lui étaient ouvertes car son problème était résolu et qu’il pouvait faire\r\nface sans aide à ses situations professionnelles aussi difficiles soient-elles. Renforcer\r\nl’autonomie du coaché et la confiance en ses propres ressources est l’une des caractéristiques\r\nmajeures de la démarche d’accompagnement servant d’appui à la recherche-action. Les sept\r\ncas de l’étude présentée sont extraits d’un corpus de 34 cas et a abouti à l’analyse de 42\r\nentretiens. Sans que leur demande d’accompagnement concerne initialement directement le\r\nrire, les coachés ont été choisis car ils avaient évoqué la question du rire en termes éthiques et\r\ncela a émergé de l’échange comme définissant en totalité ou en partie ce qui leur posait\r\nproblème. La population de l’étude est composée de quatre femmes et de trois hommes, de 26\r\nà 54 ans et occupant des postes de responsable dans différents secteurs d’activités avec le statut\r\nde cadre.\r\nTableau 1\r\nLes sept cas de l’étude\r\n\r\n19En plus de l’analyse de cas proprement dite effectuée en confrontant nos notes prises avec\r\nla posture de chercheur-coach et l’évolution du discours des coachés au fil des séances, nous\r\navons procédé à une analyse de contenu des entretiens par strates de relecture manuelle et\r\n\r\nCUBE 2020 ANNEXE AU CCTP 15/21\r\nrépartition des extraits de discours dans les catégories issues d’une part de la revue de la\r\nlittérature (1\r\n\r\nère phase avec deux séries de relecture) puis d’autre part de l’analyse de contenu\r\n\r\nproprement dite (2\r\ne\r\nphase avec trois strates de relecture : approfondissement des contenus\r\n\r\nclassés avec émergence de nouvelles dimensions ; émergence d’un 4\r\ne\r\nindicateur du mal-rire ;\r\n\r\nrepérage des contenus d’étayage et de définition du 4\r\ne\r\nindicateur). La 1\r\n\r\nère phase d’analyse\r\ns’est appuyée sur les critères classant des discours tirés de la revue de la littérature : mal-être\r\ndu sujet ri, mal-être du sujet rieur et les trois indicateurs du mal-rire. Son apport a été\r\nd’approfondir le cadre théorique initial, que la 2\r\ne\r\nphase a permis de compléter essentiellement\r\n\r\npar le repérage d’une 4\r\ne\r\ncaractéristique.\r\n\r\n2.2 – Résultats : Le bon et le mauvais rire\r\ncoexistent au travail\r\n20La situation des quatre premiers cas permet d’illustrer les différentes dynamiques du rire au\r\ntravail et leur rapport à l’éthique. Les trois cas suivants nous ont permis de conforter nos\r\npropositions de recherche sur les trois indicateurs du mal rire. Nous les avons étayées par une\r\nanalyse de contenu des 42 entretiens retranscrits des sept cas de l’étude.\r\n2.2.1 – Les dynamiques du rire et leur\r\nrapport à l’éthique\r\n21Pour confirmer l’existence du mal-rire au travail et en proposer une grille d’intelligibilité,\r\nnous pourrions citer la déclaration de cette femme cadre de 48 ans en congé maladie pour\r\ndépression du cas n°1, qui confiait : « Au début, je suis restée de marbre mais à force ça\r\natteint. Stupidement ce sont les blagues sur mon poids qui m’ont usée. C’était juste...\r\nméchant ? ». Nos résultats font ressortir que le mal-être généré par le vécu du rire peut être\r\nressenti non seulement par le sujet-ri que par le sujet-rieur. Ainsi dans le cas n°2, une femme\r\nde 27 ans nouvellement embauchée dans un service marketing, se « sentait mal » de se\r\nretrouver à rire dans un groupe ayant pris l’habitude avant son arrivée de « taquiner » un\r\nstagiaire handicapé qui présentait de « légères difficultés d’élocution ». L’intérêt du poste et\r\n« la chance d’avoir décroché un job... formateur,... le salaire,... bien quoi ! » ne l’ont pas\r\nempêché de changer d’emploi au plus vite. Cela confirme que le “côté des rieurs” est loin\r\nd’être désigné systématiquement comme “le bon” même par l’inconfort qu’il procure. Une\r\ninterrogation d’ordre éthique est bien posée sur le rire au travail, non comme un jeu abstrait\r\nvisant principalement à distraire les philosophes, mais comme un facteur de souffrance en\r\nsituation professionnelle à aborder comme tel pour mettre en œuvre les politiques de\r\nprévention appelées de leurs vœux par les responsables d’entreprises et les syndicats. Nos\r\nrésultats ont également fait ressortir les bienfaits potentiels du rire. Ainsi dans le cas n°3, un\r\nresponsable de production de 54 ans qui nous avait sollicité pour la « redéfinition de [son]\r\nprojet professionnel » s’est exclamé lors du premier entretien : « Si y’a une chose qu’on ne\r\npeut pas m’empêcher, c’est de me marrer... c’est la seule chose... quand l’autre avec sa\r\ncravate m’a dit que c’était mon tour... éjecté... vous rigolez !... la veille j’ai fini à... je sais\r\npas... neuf heures... et le matin j’étais là pour leur réunion et ensuite... l’un après l’autre...\r\ndans son bureau... allez : j’étais dans le lot... dehors !... j’ai rien dit... je l’ai regardé en me\r\nmarrant... pas question de s’écrouler... et moi ça va... ».\r\n\r\nCUBE 2020 ANNEXE AU CCTP 16/21\r\n22Dans ces trois premiers cas nous retrouvons à la fois la figure maléfique du pervers qui rit\r\ndu malheur d’autrui, le surgissement d’une émotion échappant au contrôle du sujet, et qui par\r\ncontrecoup le dessert ou que lui-même trouve inapproprié, et en dernier une situation où le\r\nrire est la seule issue permettant à la personne d’exister dans un contexte d’aliénation. Le rire\r\nse manifeste mais rien n’est « risible » en soi. Le cas n°4 d’un manager de 38 ans, responsable\r\nd’une équipe chargée d’un projet dans le domaine de la haute technologie, que la direction lui\r\navait demandé d’abandonner en pleine réalisation pour se consacrer à un autre, nous permet\r\nde préciser cette dynamique du rire et ses limites. Convaincu que son rôle était de « maintenir\r\nle moral des troupes », il mettait son « point d’honneur à faire bonne figure », ce qui se\r\ntraduisait par ce qu’il désignait comme sa « nature à blaguer tout le temps ». Or, ni lui, ni son\r\ngroupe - « pourtant, on est des pros ! » - n’arrivaient à s’investir sur le nouveau dossier et\r\ncontinuaient à évoquer le précédent. Au cours du deuxième entretien, le manager a exprimé ce\r\nqu’il a défini ensuite comme sa “colère rentrée”. Il en est arrivé à la conclusion que ses\r\ncollègues devaient aussi « lâcher leur venin » pour pouvoir « se remettre au travail ». Ce qu’il\r\nfit, déclarant à la troisième et dernière séance : « Je leur ai dit : je sais pas vous mais moi je\r\nsuis furieux ; alors je vous propose d’en parler mais interdiction d’injurier ou de crier et\r\nchacun son tour et uniquement si vous avez envie... et alors, c’est parti !... je crois que c’est\r\nréglé... ils m’ont même dit : tu nous saoulais, parce qu’on voyait bien que c’était faux, ça\r\ngrinçait ! ».\r\n\r\n23L’analyse du contenu des 42 entretiens a permis de conforter cette notion de mal-rire inter-\r\nreliée à celles d’un double mal-être en miroir : le mal-être du sujet ri et le mal-être du sujet-\r\nrieur (voir tableau 2).\r\n\r\nTableau 2\r\nLe mal-rire comme générateur de mal-être\r\n\r\nCUBE 2020 ANNEXE AU CCTP 17/21\r\n2.2.2 – Les indicateurs du mal-rire\r\n24Nous avons pu sélectionner trois cas permettant de conforter et préciser les trois indicateurs\r\ndu mal-rire issus de la revue de littérature, tout en confirmant la pertinence de la transposition\r\nd’un cadre théorique issu d’une revue de la littérature essentiellement philosophique.\r\nConcernant la “réciprocité”, nous retrouvons cette notion lorsque les sujets abordent la\r\ncompétition dans les relations professionnelles. Celle-ci comme pour les équipes de\r\ncommerciaux par exemple, peut être stimulante et prendre la définition donnée dans le sport.\r\nNous avons relevé dans les propos de l’une d’entre elles représentant notre cas n°5, cadre de\r\n47 ans, responsable d’une équipe de vente, qu’elle pouvait s’accompagner d’échanges\r\nverbaux utilisant une moquerie qu’elle qualifiait de « bonne guerre ». Notre coachée nous les\r\nindiquait pour expliciter son tempérament de « gagnante », ses compétences assertives et sa\r\npugnacité. Il en ressortait que si les moqueries étaient interprétées comme un échange\r\nconfraternel et respectueux, c’est qu’elle en « recevait tout autant ; ça me booste ! ». C’est\r\nd’ailleurs ce qui nous semble pouvoir réguler les formes autodestructrices d’autodérision,\r\ncomme pour le cas n°6 un malade du sida de 46 ans qui a arrêté de s’exclamer en riant lorsque\r\ndes échéanciers étaient en cours d’élaboration : « vous me raconterez, si je suis au\r\ncimetière ! ». La notion “d’unanimité” renvoie par suite à une nécessaire forme individuelle\r\nd’autorégulation du rire dans une même volonté de respect mutuel de soi et des autres. Enfin,\r\ndans le cas n°7, une femme de 26 ans, chef de travaux dans le bâtiment souhaitait « changer\r\nde secteur d’activité » car nous disait-elle dans le cadre de son coaching : « j’en peux plus de\r\nleur douce rigolade vulgaire d’obsédés par leur pénis ». Après plusieurs séances, et\r\nconsidérant qu’elle n’avait « rien à perdre d’essayer », elle a décidé de « leur dire » et s’y est\r\npréparée. Elle fut surprise de constater que plusieurs de ses collègues masculins également\r\npris à témoins des plaisanteries, appuyaient sa demande. Les rieurs furent priés de réserver\r\nl’usage de leur humour à une sphère non professionnelle d’amis susceptibles de l’apprécier.\r\n25L’analyse de contenu de nos 42 entretiens, nous a permis non seulement de retrouver dans\r\nles situations de travail les trois indicateurs au fil des discours des sujets de l’étude, mais d’en\r\nidentifier un quatrième que nous avons désigné par les termes de “plein accord préalable”. En\r\neffet, nous avons relevé la distinction faite entre le rire subi ou même consenti et le rire\r\napprouve?. Si les deux peuvent conduire le sujet-ri à « rire avec les rieurs » pour éviter de\r\nperdre la face, seul le second semble être une « sortie sans casse » pour la personne. Ainsi\r\npour Goffman (1974, p.39), « on peut [donc] considérer une relation sociale comme étant une\r\nsituation où une personne est particulièrement forcée de compter sur le tact et la probité\r\nd’autrui pour sauver la face et l’image qu’elle a d’elle-même ». Nous avons retrouvé cette\r\nsituation décrite par les sujets dans leurs entretiens, comme par exemple comme discours\r\ntype : « j’ai bien vu qu’il se retenait de rire... faut dire que quand je bafouille, j’y vais pas à\r\nmoitié... alors j’ai dit : ma chompre a trouché... et j’ai éclaté de rire... c’était marrant... on a\r\nbien ri et ça fait du bien ». On retrouve ici le rire, source de bien-être et permettant de\r\ndévelopper sa capacité de faire face aux situations critiques du monde professionnel (Mittal et\r\nMathur, 2011). Par contre, « rire jaune » tout en sortant meurtri de la situation d’échanges est\r\nrevenu dans les entretiens comme l’indicateur que « le rire n’était pas de bonne qualité ». Ne\r\npas rire est considéré comme une façon « d’empirer la situation », les protestations pouvant\r\nêtre encore plus risibles. Un discours type pourrait être « le plus douloureux est que je n’ai\r\nrien pu faire d’autres que faire semblant de trouver ça drôle » ou « c’était outrageant, il se\r\nmoquait de mon apparence ; le seul qui peut le faire c’est moi... c’est comme les blagues\r\njuives... c’est antisémite hein quand seuls les juifs ne rient pas ».\r\n\r\nCUBE 2020 ANNEXE AU CCTP 18/21\r\n\r\n2.3 – Discussion : vers la régulation du mal-\r\nrire au travail\r\n\r\n26Repérer en se référant aux indicateurs qu’il s’agit d’un mal-rire au travail ne suffit pas à\r\ndéfinir les modes de régulation. En effet, il ne faudrait pas en déduire qu’il s’agit de définir les\r\nnormes générales du “bon comique” au travail, mais plutôt que la nécessité s’impose d’en\r\nsouligner les dysfonctionnements. Nous avons ainsi montré que le poids du contexte sur\r\nl’évaluation de la situation, comme Hackney (2011) qui a démontré que certaines pratiques de\r\nmanagement pouvaient conduire à faire perdre le sens de l’humour des salariés même lorsque\r\nles plaisanteries ont été pré-testées comme drôles. Ce qui fait rire est non seulement\r\nculturellement ancré mais fait le ciment des groupes sociaux. Il est une arme de stéréotypage\r\net de discrimination tout autant qu’un puissant levier d’émancipation, comme en témoignent\r\nles travaux sur le rire des femmes (Willett et al., 2012). Gkorezis, Hatzithomas et Petridou\r\n(2011) soulignent ainsi que si l’utilisation de l’humour par les dirigeants est un levier puissant\r\nde mobilisation, son recours peut avoir des effets négatifs en fonction notamment de\r\nl’ancienneté des salariés. D’une part, le rôle de l’humour comme activateur de créativité ou de\r\nrésolution de problème a été mis en évidence, voire même pour assouplir les rigidités\r\norganisationnelles propres aux administrations publiques (Cates, 1979). D’autre part,\r\nplusieurs travaux ont souligné que les émotions positives comme l’euphorie pouvaient\r\nconduire à une prise de risque plus importante et inconsidérée notamment dans les décisions\r\nfinancières (Cavalheiro et al., 2011).\r\n27Nos quatre indicateurs, “réciprocité”, “unanimité”, “persistance” et “plein accord\r\npréalable” peuvent également ressortir comme des règles de comportement collectif à poser\r\npour permettre aux salariés de les intérioriser émotionnellement. Il s’agit ainsi moins de règles\r\nde politesse formelle que de l’apprentissage d’une forme de “civilité au travail”, en référence\r\nà la définition de l’incivilité par les philosophes et de leur étude de la recrudescence du\r\nphénomène dans nos civilisations (Habib et Raynaud, 2012 ; Bourin, 2012). Face au mal-être\r\nressenti par les “mal-rieurs” et de l’effet destructeur sur la personne “rie”, il s’agirait pour les\r\nmanagers en lien avec les travaux initiés par Sen (2004) au niveau socio-économique de créer\r\nles conditions d’une “vie au travail humainement digne” et une gestion des ressources\r\nhumaines qui intègre ce que Nussbaum (2012) désigne comme des “culpabilités” et parmi\r\nlesquelles se positionnent le ressenti émotionnel et la conception du bien.\r\nConclusion\r\n28Cette recherche menée en appui sur sept cas de coaching avec 42 entretiens individuels,\r\nnous a conduits à définir quatre indicateurs du rire au travail : la “réciprocité”, “l’unanimité”,\r\n“la persistance” et le “plein accord préalable” permettant d’orienter les pratiques de\r\nrégulation. Dans ce qu’ils présupposent comme dynamique à l’œuvre, les notions qu’ils\r\ndésignent sont aussi ce qui permet de ne pas limiter le rire à la moquerie. Il nous semble\r\nmême que le rire prend toute sa portée « d’intervention créatrice de la conscience » soulignée\r\npar Robert Escarpit (1960, p.94), et peut devenir une véritable force de progrès potentielle\r\ndans les organisations si le comique renonce à ridiculiser les personnes pour se positionner\r\ndans le champ de la dénonciation de et par l’absurde des systèmes ou des politiques. Hors de\r\nla moquerie, le rire est aussi un mode de faire face à la détresse de vivre et peut être relié à un\r\ncomique qui « manifeste la fragilité essentielle du sens humain, mais nous donne les moyens\r\nde l’exorciser » (Giribone, 2009, p. 58). Le rire des autres est dès lors potentiellement un\r\n\r\nCUBE 2020 ANNEXE AU CCTP 19/21\r\nencouragement à se distancier et même à transcender notre condition d’homme et la finitude\r\nde la vie. En cela, il est un vecteur de réflexivité et même de bien-être, non dans une\r\nrecherche exclusive de plaisir hédoniste, qui ne résiste pas au questionnement d’ordre éthique,\r\nmais dans une quête existentielle telle que Martin Heidegger (1927) l’a théorisée.\r\n29Cette première étude sur le rire au travail et l’éthique débouche enfin sur plusieurs pistes de\r\nrecherche et, nous semble-t-il, plus particulièrement sur un recensement des différentes\r\nsituations professionnelles d’émergence du rire afin de valider quantitativement nos résultats\r\naffirmant que c’est seulement lorsque le rire est réciproque, unanime, qu’il perdure et qu’il a\r\némergé dans un plein accord préalable des parties, qu’il s’inscrit dans une dynamique positive\r\npour les personnes comme pour les organisations.\r\nNotes\r\n• [1] « On peut objecter que ces affections, toutes dénaturées qu’elles sont, ne vont\r\npoint sans plaisir ; & qu’un plaisir quelque inhumain qu’il soit, est toujours un\r\nplaisir, fût-il place? dans la vengeance, dans la malignité & dans l’exercice même de\r\nla tyrannie. Cette difficulté serait sans réponse, si, comme dans les joies cruelles &\r\nbarbares, on ne pouvait arriver au plaisir qu’en passant par le tourment ; mais aimer\r\nles hommes, les traiter avec humanité, exercer la complaisance, la douceur, la\r\nbienveillance, & les autres affections sociales ; c’est jouir d’une satisfaction\r\nimmédiate à l’action & qui n’est payée d’aucune peine antérieure ; satisfaction\r\noriginelle & pure, qui n’est prévenue d’aucune amertume. Au contraire, l’animosité,\r\nla haine, la malignité, sont des tourments réels dont la suspension occasionnée par\r\nl’accomplissement du désir, est comptée pour un plaisir. » Cooper A.A., comte de\r\nShaftesbury (1715, p.248-249)\r\n• [2] Nous indiquons les « extraits de discours » entre guillemets en les distinguant\r\ndes « citations » mises quant à elles en italique. Nous utilisons un autre caractère pour\r\nles “notions” que nous questionnons. Ici il s’agit d’une affirmation prononcée\r\ncommunément comme un dicton.\r\n• [3] Le point souligné ressort comme encore plus évident si on questionne la mesure\r\nconsistant à imposer aux salariés de rire. Si l’on associe rire et joie, on pourrait y\r\nretrouver la dénonciation d’une pression exercée actuellement de façon implicite dans\r\ncertaines organisations et revenant à exiger que les salariés expriment leur bonheur de\r\ntravailler - Cf. en sciences de gestion : Gori R., Le Coz P. (2006) ; en philosophie :\r\nManzano M. (2008).\r\n• [4] Nous nous démarquons ici des stoïciens qui avec Cicéron considéraient que la\r\n« joie folle » est une « maladie de l’âme » au même titre que toutes les passions qui\r\néloigne l’homme de « la conscience du sage » : Cicéron (45 av. J.C.), Tusculanes, III,\r\nIV-V, in Bréhier E. (1997), pour considérer avec Baruch Spinoza (1677, Ethique, IV,\r\npropositions IV-VII) que « l’homme est nécessairement toujours soumis aux\r\npassions », Korichi M. (2000, p.113), mais sans rejeter toute possibilité\r\nd’autorégulation individuelle dans la lignée de René Descartes (1649) pour qui selon\r\nMichel Meyer (1991, p.238), « la passion m’aveugle, donc je suis dans la possible\r\nerreur, et je sais cela, donc je suis au-delà de la passion, la connaissant pour ce\r\nqu’elle est ».\r\n\r\nCUBE 2020 ANNEXE AU CCTP 20/21\r\n• [5] Par contre, plusieurs cas de « fou-rire » ont été relevés aboutissant au licenciement\r\ndes rieurs, comme par exemple pour l’employé d’une entreprise de pompes funèbres\r\nou encore pour une vendeuse de lingerie féminine.\r\n• [6] Cette interrelation entre pouvoir, vérité et existence se retrouve dans le manifeste\r\ncensuré d’Albert Camus, qui devait paraître dans Le Soir républicain, date? du 25\r\nnovembre 1939 et publie? dans le cahier du journal Le Monde, N° 20888, date? du 17\r\nmars 2012 : « [...] l’ironie demeure une arme sans précédent contre les trop\r\npuissants. Elle complète le refus en ce sens qu’elle permet, non plus de rejeter ce qui\r\nest faux, mais de dire souvent ce qui est vrai. Un journaliste libre, en 1939, ne se fait\r\npas trop d’illusions sur l’intelligence de ceux qui l’oppriment. Il est pessimiste en ce\r\nqui regarde l’homme. [...] Oui, c’est souvent à son corps défendant qu’un esprit libre\r\nde ce siècle fait sentir son ironie. Que trouver de plaisant dans ce monde enflamme? ?\r\nMais la vertu de l’homme est de maintenir en face de tout ce qui le nie. »\r\n• [7] Pour Freud S. (1905, p. 262-263), « Nul ne peut se satisfaire d’avoir fait un mot\r\nd’esprit pour soi tout seul. Au travail du mot d’esprit, est indissociablement lié le\r\nprofond besoin de communiquer le mot d’esprit à autrui »\r\n• [8] Darwin C.R. (1872) reste toutefois prudent, puisqu’il considère que le rire\r\n« paraît être » l’expression « primitive » de la joie et du bonheur (Smadja, 1993, p.33).\r\n• [9] Loi n° 2002-73 du 17 janvier 2002 de modernisation sociale, J.O. n°15 daté du 18\r\njanvier 2002, p. 1008.\r\n• [10] Le premier à avoir affirme? que « l’individu en foule diffère de l’individu isole? »\r\n\r\net souligne? les risques d’emportement associés aux dynamiques collectifs, est peut-\r\nêtre Gustave Le Bon (1895, p.11).', 0, 0, 1, 0, '2021-01-20 14:27:28', '2021-01-20 14:27:29', 0, 1, 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Not verified'),
(2, 'citoyen'),
(3, 'Modérateur'),
(4, 'Admin'),
(5, 'Super-Admin');

-- --------------------------------------------------------

--
-- Structure de la table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'publique'),
(2, 'privée');

-- --------------------------------------------------------

--
-- Structure de la table `types_ressources`
--

CREATE TABLE `types_ressources` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `types_ressources`
--

INSERT INTO `types_ressources` (`id`, `name`) VALUES
(1, 'Article'),
(2, 'Activité / Jeu à réaliser'),
(3, 'Carte défi'),
(4, 'Cours au format PDF '),
(5, 'Exercice / Atelier '),
(6, 'Fiche de lecture '),
(7, 'Jeu en ligne '),
(8, 'Vidéo');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
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
  `last_connexion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `checked` tinyint(1) NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  `fk_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `mail`, `password`, `token`, `street_nb`, `street_name`, `city`, `postal_code`, `country`, `date_creation`, `last_connexion`, `checked`, `deleted`, `fk_role`) VALUES
(1, 'Mathys', 'Florent', 'florentmathys@gmail.com', 'd7a9a2f5e91ede3d55e56989e6ec58b042d341e1', 'tNTQ3aSVTF7wXabA7uVj', '666', 'rue du diable', 'Hell', '666', 'Les tréfonds', '2021-01-19 00:00:00', '2021-01-20 13:44:59', 0, 0, 2);

-- --------------------------------------------------------

--
-- Structure de la table `users_ressources`
--

CREATE TABLE `users_ressources` (
  `id` int(11) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `fk_ressource` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories_ressources`
--
ALTER TABLE `categories_ressources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.ressource` (`fk_ressource`),
  ADD KEY `c.categories` (`fk_category`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.users_comments` (`fk_user`),
  ADD KEY `c.ressource_comments` (`fk_ressource`);

--
-- Index pour la table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `documents_ressources`
--
ALTER TABLE `documents_ressources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.document` (`fk_document`),
  ADD KEY `c.ressource_document` (`fk_ressource`);

--
-- Index pour la table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.user` (`fk_user`);

--
-- Index pour la table `punishements`
--
ALTER TABLE `punishements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `punishements_users`
--
ALTER TABLE `punishements_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.user_punisher` (`punisher_id`),
  ADD KEY `c.punishment` (`fk_punishment`),
  ADD KEY `c.user_punishment` (`fk_user`);

--
-- Index pour la table `reasons`
--
ALTER TABLE `reasons`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `relationship_ressources`
--
ALTER TABLE `relationship_ressources`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.reports_comments` (`fk_comment`),
  ADD KEY `c.user_comments` (`fk_user`),
  ADD KEY `c.reasons_comments` (`fk_reason`);

--
-- Index pour la table `ressources`
--
ALTER TABLE `ressources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.relationship_ressouce` (`fk_relationship_ressource`),
  ADD KEY `c.status` (`fk_status`),
  ADD KEY `c.type_ressource` (`fk_type_ressource`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `types_ressources`
--
ALTER TABLE `types_ressources`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.role` (`fk_role`);

--
-- Index pour la table `users_ressources`
--
ALTER TABLE `users_ressources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c.user_ressources` (`fk_user`),
  ADD KEY `c.ressources_user` (`fk_ressource`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories_ressources`
--
ALTER TABLE `categories_ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `documents_ressources`
--
ALTER TABLE `documents_ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `punishements`
--
ALTER TABLE `punishements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `punishements_users`
--
ALTER TABLE `punishements_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reasons`
--
ALTER TABLE `reasons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `relationship_ressources`
--
ALTER TABLE `relationship_ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ressources`
--
ALTER TABLE `ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `types_ressources`
--
ALTER TABLE `types_ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `users_ressources`
--
ALTER TABLE `users_ressources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `c.relationship_ressouce` FOREIGN KEY (`fk_relationship_ressource`) REFERENCES `relationship_ressources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
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
