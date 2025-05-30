"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Rocket, Check, Star, BarChart, Shield, Globe, Lock, 
  User, Users, Calendar, CreditCard, Map, Gift, CloudSun,
  Sparkles, Leaf, ArrowRight, ChevronDown, ChevronUp
} from 'lucide-react';

export default function StrategicRoadmap() {
  const [expandedLevel, setExpandedLevel] = useState(1);
  const [activeSection, setActiveSection] = useState('roadmap');
  
  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scaleUp = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 }
  };

  const roadmapLevels = [
    {
      level: 1,
      title: "MVP (Produit Minimum Viable)",
      icon: <Rocket size={24} />,
      color: "from-red-600 to-orange-500",
      features: {
        auth: [
          "Inscription/Connexion par email et mot de passe",
          "Confirmation d'inscription par email",
          "Authentification à deux facteurs (2FA)"
        ],
        client: [
          "Recherche par destination, dates, voyageurs",
          "Liste des résultats avec photos et prix",
          "Page de détail de l'annonce",
          "Réservation avec confirmation",
          "Notifications email"
        ],
        host: [
          "Création d'annonce simplifiée",
          "Notifications email de nouvelles réservations"
        ],
        features: [
          "Passerelle de paiement (Stripe/PayPal)",
          "Gestion des erreurs et feedback utilisateur"
        ],
        admin: [
          "Validation manuelle des annonces",
          "Gestion des utilisateurs"
        ]
      }
    },
    {
      level: 2,
      title: "Utilisabilité & Confiance",
      icon: <Check size={24} />,
      color: "from-blue-600 to-cyan-500",
      features: {
        auth: [
          "Vérification d'adresse email obligatoire",
          "Vérification d'identité optionnelle"
        ],
        client: [
          "Filtres avancés (type, équipements, prix)",
          "Tri des résultats",
          "Favoris",
          "Système de notation détaillé",
          "Notifications push",
          "Messagerie interne",
          "Conditions d'annulation claires"
        ],
        host: [
          "Équipements détaillés",
          "Politique d'annulation personnalisable",
          "Instructions d'arrivée",
          "Dashboard de base"
        ],
        features: [
          "Responsive design",
          "Filtres géographiques précis",
          "Affichage météo destination"
        ],
        admin: [
          "Gestion des signalements",
          "Contenu statique (FAQ, CGU)"
        ]
      }
    },
    {
      level: 3,
      title: "Structuration & Croissance",
      icon: <Globe size={24} />,
      color: "from-green-600 to-emerald-500",
      features: {
        auth: [
          "Connexion via Google/Facebook/Apple"
        ],
        client: [
          "Recherche par points d'intérêt",
          "Affichage sur carte interactive"
        ],
        host: [
          "Tableau de bord analytique",
          "Gestion multi-hébergements",
          "Synchronisation de calendrier",
          "Tarification flexible"
        ],
        features: [
          "Multi-langue",
          "Multi-devises",
          "Gestion des taxes locales",
          "SEO de base",
          "Comparaison météo destination/utilisateur"
        ],
        admin: [
          "Tableau de bord avancé",
          "Système de tickets"
        ]
      }
    },
    {
      level: 4,
      title: "Valeur ajoutée & Engagement",
      icon: <Gift size={24} />,
      color: "from-purple-600 to-fuchsia-500",
      features: {
        auth: [
          "Intégration avec réseaux sociaux"
        ],
        client: [
          "Suggestions personnalisées",
          "Partage facile sur réseaux sociaux",
          "Codes promos/réductions",
          "Système de parrainage",
          "Accessibilité (filtres adaptés)"
        ],
        host: [
          "Statistiques poussées",
          "Réponses automatiques/templates",
          "Check-in/out virtuel"
        ],
        features: [
          "Applications natives (iOS/Android)",
          "Expériences locales réservables",
          "Programme de fidélité",
          "Blog et guides de voyage",
          "Prévisions météo détaillées (7 jours)"
        ],
        admin: [
          "Gestion des promotions"
        ]
      }
    },
    {
      level: 5,
      title: "Plateforme intelligente",
      icon: <Sparkles size={24} />,
      color: "from-yellow-600 to-amber-500",
      features: {
        auth: [
          "Vérification d'identité obligatoire"
        ],
        client: [
          "Recommandations basées sur IA",
          "Réservations en groupe",
          "Visites virtuelles (AR)"
        ],
        host: [
          "Tarification dynamique IA",
          "Détection de fraude IA"
        ],
        features: [
          "Assistant virtuel IA",
          "Optimisation SEO avancée",
          "API publique",
          "Support client 24/7",
          "Forums d'échange",
          "Suggestions basées sur météo"
        ],
        admin: [
          "Modération automatique IA",
          "Analyse prédictive des tendances"
        ]
      }
    }
  ];

  const differentiationPoints = [
    {
      title: "Transparence Radicale des Prix",
      icon: <CreditCard size={24} />,
      description: "Prix Final 100% Visible Dès l'Instant 1 (pas de frais cachés, taxes incluses)",
      comparison: "Chez nous, le prix affiché = le prix payé. Chez les autres, +25% à la caisse."
    },
    {
      title: "Éthique & Équité",
      icon: <Shield size={24} />,
      description: "Commissions réduites pour les hôtes (3x moins de frais qu'ailleurs) permettant des tarifs plus bas ou une meilleure qualité",
      comparison: "Pas de 'push pricing': Garantie de prix stables même en période de forte demande"
    },
    {
      title: "Expérience Locale Authentique",
      icon: <Map size={24} />,
      description: "Sélection manuelle d'hébergements par des experts du territoire et filtres 'Inconnu des Masses'",
      comparison: "Conseils 'Off the Record': Guide numérique intégré avec bonnes adresses secrètes des hôtes"
    },
    {
      title: "Technologie Humaine",
      icon: <User size={24} />,
      description: "Service client proactif avec rappels automatiques et assistance en temps réel via chat (humain, pas de bot)",
      comparison: "Algorithme Anti-Surcharge: Pas de suggestions sur-touristiques"
    },
    {
      title: "Engagement Écologique Vérifiable",
      icon: <Leaf size={24} />,
      description: "Score Carbone Visible pour chaque réservation avec filtres 'Voyage Responsable'",
      comparison: "Compensation CO₂ intégrée au prix et hébergements avec labels écologiques certifiés"
    }
  ];

  const communicationArguments = [
    {
      target: "Voyageurs",
      arguments: [
        "Réservé par des passionnés, pas par des algorithmes",
        "Votre argent va aux hôtes, pas aux actionnaires",
        "Découvrez des lieux uniques: Votre prochaine aventure commence ici",
        "Simplicité et Facilité: Réservez votre escapade en quelques clics",
        "Confiance et Sécurité: Voyagez l'esprit tranquille"
      ]
    },
    {
      target: "Hôtes",
      arguments: [
        "Enfin une plateforme qui vous traite en partenaire, pas en numéro",
        "Reprenez le contrôle de votre business sans intermédiaires coûteux",
        "Augmentez vos revenus facilement",
        "Gestion simplifiée: Des outils intuitifs pour tout gérer",
        "Visibilité accrue: Touchez des milliers de voyageurs potentiels"
      ]
    }
  ];

  const socialProof = [
    "Témoignages vidéo de voyageurs surpris par la différence de prix",
    "Partages d'hôtes: 'Grâce à vous, j'ai pu rénover ma maison d'hôtes!'",
    "Études de cas montrant +45% de revenus pour les hôteliers",
    "Comparaisons côte à côte prix Direct Horizon vs plateformes traditionnelles",
    "Badges 'Hébergement vérifié' et 'Prix transparent'"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Navigation */}
      <div className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center py-4 gap-4">
            <button
              className={`px-4 py-2 rounded-full ${
                activeSection === 'roadmap' 
                  ? 'bg-red-600' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('roadmap')}
            >
              Feuille de Route
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeSection === 'differentiation' 
                  ? 'bg-red-600' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('differentiation')}
            >
              Points de Rupture
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeSection === 'communication' 
                  ? 'bg-red-600' 
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection('communication')}
            >
              Stratégie Com
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <span className="block mb-2">FEUILLE DE ROUTE STRATÉGIQUE</span>
          <span className="text-red-400">DIRECT HORIZON</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          La révolution du voyage en 5 étapes - De MVP à plateforme intelligente
        </motion.p>
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          <div className="inline-flex bg-black bg-opacity-30 px-6 py-3 rounded-full">
            <Zap className="text-yellow-400 mr-2" />
            <span className="font-bold">ZÉRO COMMISSION • TRANSPARENCE TOTALE • ÉTHIQUE RADICALE</span>
          </div>
        </motion.div>
      </div>

      {/* Roadmap Section */}
      {activeSection === 'roadmap' && (
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-red-500">
                NOTRE FEUILLE DE ROUTE EN 5 NIVEAUX
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Une progression stratégique pour dominer le marché du voyage
              </p>
            </motion.div>

            {/* Roadmap Levels */}
            <div className="space-y-8">
              {roadmapLevels.map((level) => (
                <motion.div 
                  key={level.level}
                  className={`bg-gradient-to-r ${level.color} rounded-xl border border-gray-700 overflow-hidden`}
                  initial={fadeIn.initial}
                  animate={fadeIn.animate}
                  transition={{ ...fadeIn.transition, delay: 0.1 * level.level }}
                >
                  <div 
                    className="p-6 flex justify-between items-center cursor-pointer"
                    onClick={() => setExpandedLevel(expandedLevel === level.level ? 0 : level.level)}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-black bg-opacity-30 flex items-center justify-center mr-4">
                        {level.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          Niveau {level.level} - {level.title}
                        </h3>
                        <p className="text-sm opacity-80">
                          {level.level === 1 && "MVP avec fonctionnalités essentielles"}
                          {level.level === 2 && "Amélioration UX et confiance"}
                          {level.level === 3 && "Internationalisation et croissance"}
                          {level.level === 4 && "Fidélisation et valeur ajoutée"}
                          {level.level === 5 && "IA et plateforme intelligente"}
                        </p>
                      </div>
                    </div>
                    <div>
                      {expandedLevel === level.level ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </div>
                  
                  {expandedLevel === level.level && (
                    <motion.div 
                      className="bg-gray-900 bg-opacity-50 p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-3 flex items-center">
                            <User className="mr-2" /> Client
                          </h4>
                          <ul className="space-y-2">
                            {level.features.client.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 flex items-center">
                            <Users className="mr-2" /> Hébergeur
                          </h4>
                          <ul className="space-y-2">
                            {level.features.host.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 flex items-center">
                            <Lock className="mr-2" /> Authentification
                          </h4>
                          <ul className="space-y-2">
                            {level.features.auth.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 flex items-center">
                            <BarChart className="mr-2" /> Fonctionnalités
                          </h4>
                          <ul className="space-y-2">
                            {level.features.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Weather Feature */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 border border-cyan-400"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
            >
              <div className="flex items-start">
                <CloudSun className="mr-4 mt-1 text-white" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Fonctionnalité Transversale: Comparaison Météo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-cyan-300">Niveau 2</div>
                      <p>Affichage prévisions météo destination</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-cyan-300">Niveau 3</div>
                      <p>Comparaison météo destination/utilisateur</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-cyan-300">Niveau 4</div>
                      <p>Prévisions détaillées sur 7 jours avec graphiques</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-cyan-300">Niveau 5</div>
                      <p>Suggestions basées sur météo via IA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Differentiation Section */}
      {activeSection === 'differentiation' && (
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-red-500">
                POINTS DE RUPTURE STRATÉGIQUES
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Comment nous défions les géants du voyage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiationPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6"
                  initial={fadeIn.initial}
                  animate={fadeIn.animate}
                  transition={{ ...fadeIn.transition, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="mr-4 p-3 bg-red-900 rounded-lg">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                  </div>
                  
                  <p className="mb-4">{point.description}</p>
                  
                  <div className="flex items-start bg-black bg-opacity-30 p-4 rounded-lg border-l-4 border-red-500">
                    <ArrowRight className="text-yellow-400 mr-2 mt-1" size={20} />
                    <span className="font-medium">{point.comparison}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technical Differentiation */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-xl p-6 border border-purple-500"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
            >
              <div className="flex items-start">
                <Zap className="mr-4 mt-1 text-yellow-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Différenciation Technique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-yellow-400">Carte interactive</div>
                      <p>Expériences gratuites autour du logement</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-yellow-400">Mode "SOS Voyageur"</div>
                      <p>Assistance 24/7 pour imprévus</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-yellow-400">Historique perso</div>
                      <p>Sauvegarde de vos critères préférés</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Communication Section */}
      {activeSection === 'communication' && (
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-6 text-red-500">
                STRATÉGIE DE COMMUNICATION
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Messages clés pour conquérir voyageurs et hôteliers
              </p>
            </motion.div>

            {/* Communication Arguments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {communicationArguments.map((target, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6"
                  initial={fadeIn.initial}
                  animate={fadeIn.animate}
                  transition={{ ...fadeIn.transition, delay: 0.1 * index }}
                >
                  <h3 className="text-xl font-bold mb-4 text-red-400">
                    POUR LES {target.target.toUpperCase()}
                  </h3>
                  
                  <ul className="space-y-4">
                    {target.arguments.map((arg, argIndex) => (
                      <li key={argIndex} className="flex items-start">
                        <div className="mr-3 mt-1">
                          {argIndex % 2 === 0 ? (
                            <Star className="text-yellow-400" size={18} />
                          ) : (
                            <Zap className="text-red-400" size={18} />
                          )}
                        </div>
                        <span>{arg}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Niche Targeting */}
            <motion.div 
              className="mb-16 bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl p-6 border border-emerald-500"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.5 }}
            >
              <div className="flex items-start">
                <Map className="mr-4 mt-1 text-emerald-300" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Spécialisation / Marché de Niche</h3>
                  <p className="mb-4">
                    Plutôt que de viser tout le monde, votre application se concentre sur des segments spécifiques:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-emerald-300">Hébergements éco-responsables</div>
                      <p>Tourisme durable et engagements vérifiés</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-emerald-300">Séjours thématiques</div>
                      <p>Bien-être, aventure, gastronomie, télétravail</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-emerald-300">Hébergements insolites</div>
                      <p>Yourtes, cabanes, châteaux, péniches</p>
                    </div>
                    <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                      <div className="font-bold text-emerald-300">Expérience UX supérieure</div>
                      <p>Interface épurée et processus simplifié</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-xl p-6 border border-amber-500"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
            >
              <div className="flex items-start">
                <Users className="mr-4 mt-1 text-amber-300" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Preuves Sociales</h3>
                  <p className="mb-4">
                  Valorisez ces éléments pour renforcer la crédibilité et la confiance:
                  </p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {socialProof.map((proof, index) => (
                      <li key={index} className="flex items-start bg-black bg-opacity-30 p-3 rounded-lg">
                        <Check className="text-green-500 mr-2 mt-1" size={16} />
                        <span>{proof}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">PRÊT À REJOINDRE LA RÉVOLUTION ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Ensemble, nous transformons l'industrie du voyage
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2" fill="currentColor" />
                Explorer la plateforme
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="mr-2" />
                Rejoindre notre communauté
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">DIRECT HORIZON - La révolution du voyage sans commission</p>
        <p className="text-sm mt-2">Transparence • Équité • Éthique</p>
      </footer>
    </div>
  );
}