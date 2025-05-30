"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ReferralProgram() {
  const [activeReward, setActiveReward] = useState(0);
  
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

  const rewards = [
    {
      title: "Crédit Voyage Sans Arnaque",
      icon: "💳",
      description: "15% de réduction en crédit voyage valable 1 an",
      highlight: "Offre Transparence 100% : crédit applicable sur le prix final (frais/taxes inclus)",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Expérience Locale Exclusive",
      icon: "🌟",
      description: "Soirée chez l'Hôte ou visite guidée Secret Spot",
      highlight: "Curatée par nos experts locaux (valeur 50€)",
      color: "from-amber-600 to-yellow-500"
    },
    {
      title: "Nuit Solidaire",
      icon: "❤️",
      description: "1 nuit offerte dans un hébergement éco-responsable",
      highlight: "10% reversés à une association locale + affichage transparent",
      color: "from-green-600 to-emerald-500"
    },
    {
      title: "Statut VIP Community Builder",
      icon: "👑",
      description: "Badge exclusif + accès early aux nouveaux hébergements",
      highlight: "Service client prioritaire 24/7 (vrai humain, pas de bot)",
      color: "from-purple-600 to-fuchsia-500"
    }
  ];

  const viralBonuses = [
    { referrals: "+5 filleuls", reward: "Nuit mystère (hébergement surprise 4★)" },
    { referrals: "+10 filleuls", reward: "Week-end éco-responsable (2 nuits + expérience locale)" },
    { referrals: "+15 filleuls", reward: "Devenir Ambassadeur (commission sur les résas des filleuls)" }
  ];

  const successKeys = [
    { title: "Simplicité radicale", description: "Suivi en temps réel du compteur de filleuls dans l'appli" },
    { title: "Preuves sociales", description: "Option de partage sur les réseaux sociaux" },
    { title: "Anti-gaspi numérique", description: "Limitation à 10 invitations/mois/parrain" },
    { title: "Cercle vertueux", description: "Chaque parrainage plante 1 arbre via Reforest'Action" },
    { title: "Avantage filleul", description: "-10% sur la 1ère réservation pour chaque filleul" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <span className="block mb-2">PROGRAMME DE PARRAINAGE</span>
            <span className="text-red-400">REBELLE & RÉCOMPENSANT</span>
          </motion.h1>
          
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Parrainez vos amis, gagnez des récompenses éthiques et faites partie de la révolution du voyage
            </p>
            <div className="inline-flex items-center bg-red-600 py-2 px-4 rounded-full">
              <span className="text-xl mr-2">🎯</span>
              <p className="text-lg font-bold">1 PARRAIN = 5 FILLEULS = RÉCOMPENSE IMMÉDIATE</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Program Structure */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              STRUCTURE REBELLE
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Un palier unique pour une simplicité maximale
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-gray-900 border-2 border-red-500 rounded-xl p-8 w-full max-w-md">
                <div className="text-5xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">PARRAIN</h3>
                <p>Vous invitez vos amis à rejoindre Direct Horizon</p>
              </div>
              
              <div className="text-4xl text-red-500 hidden md:block">→</div>
              <div className="text-4xl text-red-500 md:hidden">↓</div>
              
              <div className="bg-gray-900 border-2 border-red-500 rounded-xl p-8 w-full max-w-md">
                <div className="text-5xl mb-4">5</div>
                <h3 className="text-xl font-bold mb-4">FILLEULS VALIDÉS</h3>
                <p>Inscription + première réservation réussie</p>
              </div>
              
              <div className="text-4xl text-red-500 hidden md:block">→</div>
              <div className="text-4xl text-red-500 md:hidden">↓</div>
              
              <div className="bg-gray-900 border-2 border-red-500 rounded-xl p-8 w-full max-w-md">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-4">RÉCOMPENSE IMMÉDIATE</h3>
                <p>Choisissez parmi nos offres éthiques</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-red-400">
              PLUS VOUS PARRAINEZ, PLUS VOUS GAGNEZ
            </h3>
            <div className="bg-red-900 bg-opacity-30 p-4 rounded-xl text-center">
              <p className="text-xl font-bold">
                Récompenses cumulables : chaque palier de 5 filleuls supplémentaires débloque de nouveaux avantages
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reward Options */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              RÉCOMPENSES ÉTHIQUES & EXPÉRIENTIELLES
            </h2>
            <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
              Choisissez la récompense qui vous correspond ou cumulez-les
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {rewards.map((reward, index) => (
                <motion.button
                  key={index}
                  className={`py-3 font-bold rounded-lg ${activeReward === index ? 'bg-red-600' : 'bg-gray-800'}`}
                  onClick={() => setActiveReward(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl mr-2">{reward.icon}</span>
                  {reward.title}
                </motion.button>
              ))}
            </div>

            <motion.div 
              className={`bg-gradient-to-r ${rewards[activeReward].color} rounded-xl p-8`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-4">{rewards[activeReward].icon}</div>
              <h3 className="text-2xl font-bold mb-4">{rewards[activeReward].title}</h3>
              <p className="text-xl mb-6">{rewards[activeReward].description}</p>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <p className="font-bold">PLUS :</p>
                <p>{rewards[activeReward].highlight}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Viral Bonuses */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              BONUS DE VIRALITÉ
            </h2>
            <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
              Débloquez des avantages exceptionnels lorsque vous dépassez les 5 filleuls
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {viralBonuses.map((bonus, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-900 border-2 border-red-500 rounded-xl p-6"
                  {...scaleUp}
                >
                  <div className="text-4xl font-bold text-red-500 mb-4">{bonus.referrals}</div>
                  <p className="text-lg">{bonus.reward}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block bg-red-900 bg-opacity-50 p-4 rounded-xl">
                <p className="text-xl font-bold">
                  Devenez Ambassadeur à partir de 15 filleuls et gagnez des commissions sur leurs réservations !
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Keys */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              CLÉS DE RÉUSSITE
            </h2>
            <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
              Nous avons conçu ce programme pour qu'il soit simple, éthique et efficace
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {successKeys.map((key, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 border border-red-500 rounded-xl p-4 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-3">
                    {index === 0 && "📱"}
                    {index === 1 && "📢"}
                    {index === 2 && "🛑"}
                    {index === 3 && "🌳"}
                    {index === 4 && "🎁"}
                  </div>
                  <h3 className="font-bold mb-2">{key.title}</h3>
                  <p className="text-sm">{key.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-700 to-emerald-600 rounded-xl p-6 text-center">
              <p className="text-xl font-bold">
                Chaque parrainage plante 1 arbre via notre partenariat avec Reforest'Action
              </p>
              <p className="mt-2">Votre impact positif est immédiat et mesurable</p>
              <div className="mt-4 inline-flex items-center bg-black bg-opacity-30 px-4 py-2 rounded-full">
                <span className="mr-2">🌍</span>
                <span>Déjà 2 458 arbres plantés par notre communauté</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Messaging */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              MESSAGING IMPACTANT
            </h2>
            <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
              Des messages clés pour promouvoir le programme
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">POUR LE PARRAIN</h3>
                <div className="bg-black bg-opacity-20 p-4 rounded-lg">
                  <p className="text-lg italic">
                    "Parrainez 5 amis, choisissez votre avantage éthique : une nuit offerte, une expérience locale... 
                    ou faites un geste pour la planète ! Votre carte de fidélité, c'est votre impact positif."
                  </p>
                </div>
                <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                  <p className="font-bold">Template SMS/Email :</p>
                  <p className="mt-2">
                    *"Parrainez 3 amis, offrez-leur 10% sur leur 1ère résa DIRECTE.
                    Vous gagnez une nuit offerte 🌟 → C'est ça, la révolution du voyage !"*
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-700 to-blue-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-center">POUR LE FILLEUL</h3>
                <div className="bg-black bg-opacity-20 p-4 rounded-lg">
                  <p className="text-lg italic">
                    *"Votre ami vous offre 10% sur votre 1ère résa + 1 arbre planté. 
                    Ensemble, vous voyagez autrement."*
                  </p>
                </div>
                <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                  <p className="font-bold">Template SMS/Email :</p>
                  <p className="mt-2">
                    *"Votre ami vous offre 10% + 1 arbre planté.
                    Ensemble, vous dites NON aux commissions abusives.
                    Réservez en direct : le juste prix, des deux côtés ✊"*
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <motion.button
                className="px-8 py-4 bg-red-600 rounded-full text-xl font-bold hover:bg-red-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Démarrer mon parrainage
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-700 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.9 }}
          >
            <h2 className="text-4xl font-bold mb-6">PRÊT À LANCER LA RÉVOLUTION ?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Partagez Direct Horizon avec vos amis voyageurs, gagnez des récompenses éthiques
              et contribuez à un voyage plus juste pour tous
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-6 py-3 bg-white text-red-700 rounded-full font-bold hover:bg-gray-200 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inviter des amis
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-transparent border-2 border-white rounded-full font-bold hover:bg-white hover:text-red-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mon suivi de parrainage
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">DIRECT HORIZON | Programme de Parrainage Rebelle</p>
        <p className="text-sm mt-2">Fait par des voyageurs, pour des voyageurs</p>
      </footer>
    </div>
  );
}