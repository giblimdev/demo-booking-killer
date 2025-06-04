"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, BarChart, Calendar, MessageSquare, CreditCard, Users, Gift, Shield } from 'lucide-react';

export default function HotelierOffer() {
  const [activeTab, setActiveTab] = useState('free');
  
  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const scaleUp = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 }
  };

  const features = [
    {
      category: "Gestion d'établissement",
      items: [
        { name: "Ajouter son établissement", free: true, premium: true },
        { name: "Créer des chambres/options", free: true, premium: true },
        { name: "Gestion multi-établissements", free: false, premium: true },
        { name: "Calendrier de disponibilité", free: true, premium: true },
      ]
    },
    {
      category: "Tarification & Promotions",
      items: [
        { name: "Adapter les prix en temps réel", free: true, premium: true },
        { name: "Créer des promotions ciblées", free: true, premium: true },
        { name: "Programmer des offres saisonnières", free: false, premium: true },
        { name: "Analyse concurrentielle des prix", free: false, premium: true },
      ]
    },
    {
      category: "Communication & Marketing",
      items: [
        { name: "Messagerie directe avec clients", free: true, premium: true },
        { name: "Mise en avant dans les recherches", free: false, premium: true },
        { name: "Badge 'Coup de cœur local'", free: false, premium: true },
        { name: "Campagnes marketing automatisées", free: false, premium: true },
      ]
    },
    {
      category: "Gestion des Réservations",
      items: [
        { name: "Enregistrement automatique", free: false, premium: true },
        { name: "Système de paiement sécurisé", free: false, premium: true },
        { name: "Check-in/out numérique", free: false, premium: true },
        { name: "Gestion des annulations", free: true, premium: true },
      ]
    },
    {
      category: "Analytique & Performance",
      items: [
        { name: "Tableau de bord basique", free: true, premium: true },
        { name: "Analytique avancée (taux d'occupation, revenus)", free: false, premium: true },
        { name: "Prévisions de demande", free: false, premium: true },
        { name: "Rapports personnalisables", free: false, premium: true },
      ]
    },
    {
      category: "Équipe & Organisation",
      items: [
        { name: "Gestion du personnel (1 compte)", free: true, premium: true },
        { name: "Multi-comptes avec permissions", free: false, premium: true },
        { name: "Liste de tâches collaborative", free: false, premium: true },
        { name: "Alertes et notifications", free: false, premium: true },
      ]
    }
  ];

  const premiumBenefits = [
    {
      icon: <BarChart size={24} />,
      title: "Augmentation du taux d'occupation",
      description: "Jusqu'à 40% d'augmentation avec nos outils de visibilité"
    },
    {
      icon: <Gift size={24} />,
      title: "Gain moyen par chambre",
      description: "Jusqu'à 25€ supplémentaires par nuit grâce aux commissions évitées"
    },
    {
      icon: <Shield size={24} />,
      title: "Sécurité renforcée",
      description: "Protection contre les fraudes et annulations abusives"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <span className="block mb-2">OFFRE HÔTELIERS</span>
          <span className="text-red-400">DIRECT HORIZON</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
        >
          Reprenez le contrôle de votre business sans intermédiaires coûteux
        </motion.p>
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
        >
          <div className="inline-flex bg-black bg-opacity-30 px-6 py-3 rounded-full">
            <Zap className="text-yellow-400 mr-2" />
            <span className="font-bold">ZÉRO COMMISSION SUR LES RÉSERVATIONS - TOUJOURS</span>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="flex border-b border-gray-700">
          <button
            className={`py-4 px-6 text-lg font-bold flex items-center ${
              activeTab === 'free' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('free')}
          >
            <span className="mr-2">Offre Gratuite</span>
            <span className="bg-green-600 text-xs px-2 py-1 rounded">Toujours disponible</span>
          </button>
          <button
            className={`py-4 px-6 text-lg font-bold flex items-center ${
              activeTab === 'premium' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('premium')}
          >
            <span className="mr-2">Offre Premium</span>
            <span className="bg-red-600 text-xs px-2 py-1 rounded">À partir de 19€/mois</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            {activeTab === 'free' ? "Tout ce que vous obtenez gratuitement" : "La puissance du Premium"}
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700"
                initial={fadeIn.initial}
                animate={fadeIn.animate}
                transition={{ ...fadeIn.transition, delay: 0.1 * index }}
              >
                <div className="p-4 bg-gray-900 border-b border-gray-700 rounded-t-xl">
                  <h3 className="text-xl font-bold text-red-400">{feature.category}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-4">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <div className="flex items-center">
                          {(activeTab === 'free' ? item.free : item.premium) ? (
                            <div className="flex items-center text-green-500">
                              <Check className="mr-1" size={18} />
                              <span className="hidden sm:inline">Inclus</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-red-500">
                              <X className="mr-1" size={18} />
                              <span className="hidden sm:inline">Non inclus</span>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Premium Benefits */}
      {activeTab === 'premium' && (
        <div className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span className="text-red-500">Pourquoi passer au Premium ?</span>
                <span className="block text-xl mt-2">Investissez moins qu'une nuit annulée, gagnez en liberté</span>
              </h2>
              




              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {premiumBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 border border-red-600 rounded-xl p-6"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-red-500 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 border border-red-600">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="text-xl font-bold mb-2">Garantie "Satisfait ou Remboursé"</h3>
                    <p>Si nos outils premium ne vous font pas économiser au moins 100€/mois, la première année est offerte !</p>
                  </div>
                  <motion.button
                    className="px-8 py-3 bg-white text-red-700 rounded-full font-bold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Essai gratuit 30 jours
                    <Zap className="ml-2" fill="currentColor" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-red-500">Tarification Simple & Juste</span>
              <span className="block text-xl mt-2">Payez en fonction de la taille de votre établissement</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Petit établissement</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">19€</span>
                  <span className="text-gray-400">/mois</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Jusqu'à 10 chambres</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>2 comptes utilisateurs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Tableau de bord complet</span>
                  </li>
                </ul>
                <motion.button
                  className="w-full py-3 bg-gray-700 rounded-lg font-bold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choisir cette offre
                </motion.button>
              </div>
              
              <div className="bg-gray-800 border-2 border-red-500 rounded-xl p-6 transform md:-translate-y-4 relative">
                <div className="absolute top-0 right-0 bg-red-600 px-4 py-1 rounded-bl-xl rounded-tr-xl">
                  <span className="font-bold">La plus populaire</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Établissement moyen</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">39€</span>
                  <span className="text-gray-400">/mois</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Jusqu'à 30 chambres</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>5 comptes utilisateurs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Analytique avancée</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>2 boosts mensuels inclus</span>
                  </li>
                </ul>
                <motion.button
                  className="w-full py-3 bg-red-600 rounded-lg font-bold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choisir cette offre
                </motion.button>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Grand établissement</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">79€</span>
                  <span className="text-gray-400">/mois</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Chambres illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Comptes utilisateurs illimités</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>Support prioritaire 24/7</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-green-500 mr-2" size={16} />
                    <span>5 boosts mensuels inclus</span>
                  </li>
                </ul>
                <motion.button
                  className="w-full py-3 bg-gray-700 rounded-lg font-bold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choisir cette offre
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">Prêt à reprendre le contrôle ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Rejoignez des milliers d'hôteliers qui ont libéré leur business des commissions abusives
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-white text-red-700 rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2" fill="currentColor" />
                Commencer gratuitement
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="mr-2" />
                Réserver une démo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">DIRECT HORIZON - Pour les hôteliers qui reprennent leur liberté</p>
        <p className="text-sm mt-2">Zéro commission sur réservations - Toujours</p>
      </footer>
    </div>
  );
}