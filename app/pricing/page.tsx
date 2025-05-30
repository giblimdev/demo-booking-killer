"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function MonetizationPlan() {
  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scaleUp = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Direct Horizon | Plan de Monétisation Rebelle</title>
        <meta name="description" content="Notre modèle économique éthique qui défie les géants du voyage" />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 to-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <span className="block mb-2">NOTRE MODÈLE ÉCONOMIQUE</span>
            <span className="text-red-400">REBELLE & RENTABLE</span>
          </motion.h1>
          
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transformer l'industrie du voyage sans trahir nos valeurs
            </p>
            <div className="bg-red-600 py-4 px-6 rounded-lg inline-block">
              <p className="text-xl font-bold">LA MISE EN RELATION EST GRATUITE ET LE RESTERA</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Principle */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border-2 border-red-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              NOTRE ENGAGEMENT ABSOLU
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-800 rounded-lg border border-red-500">
                <div className="text-5xl mb-4">🚫</div>
                <h3 className="text-xl font-bold mb-2">ZERO COMMISSION</h3>
                <p>Jamais sur les réservations</p>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-lg border border-red-500">
                <div className="text-5xl mb-4">💯</div>
                <h3 className="text-xl font-bold mb-2">100% TRANSPARENCE</h3>
                <p>Pas de frais cachés, jamais</p>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-lg border border-red-500">
                <div className="text-5xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold mb-2">ÉQUILIBRE</h3>
                <p>Gagnant-gagnant pour tous</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freemium Model */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              FREEMIUM ÉTHIQUE POUR HÔTELIERS
            </h2>
            <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
              Un modèle équitable qui valorise votre travail sans vous exploiter
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-600 text-left">
                    <th className="p-4 font-bold">ACCÈS</th>
                    <th className="p-4 font-bold">OFFRE GRATUITE</th>
                    <th className="p-4 font-bold">OFFRE PREMIUM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="p-4 font-semibold">Fonctionnalités de base</td>
                    <td className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span> Mise en relation directe
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span> Profil hôtel + photos
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span> Messagerie voyageur
                        </li>
                      </ul>
                    </td>
                    <td className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Suite de gestion complète
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Check-in/out digital
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Gestion multi-propriétés
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="p-4 font-semibold">Visibilité</td>
                    <td className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span> Référencement basique
                        </li>
                      </ul>
                    </td>
                    <td className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Boost intelligente
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Mise en avant géolocalisée
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Badge "Coup de cœur local"
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="p-4 font-semibold">Analytics</td>
                    <td className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✗</span> Données limitées
                        </li>
                      </ul>
                    </td>
                    <td className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Dashboard pro
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> ROI par canal
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2">★</span> Comparatif prix/marché
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="p-4 font-semibold">Tarification</td>
                    <td className="p-4 text-green-400 font-bold">TOUJOURS GRATUIT</td>
                    <td className="p-4">
                      <span className="bg-red-600 py-1 px-3 rounded font-bold">À partir de 19€/mois</span>
                      <p className="mt-2 text-sm">ou 0.5% par réservation</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Pillars */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              3 PILIERS DE REVENUS
            </h2>
            <p className="text-center text-xl mb-10 max-w-3xl mx-auto">
              Un modèle économique diversifié sans commission sur les réservations
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gray-900 border-2 border-red-500 rounded-xl p-6"
                {...scaleUp}
              >
                <div className="text-red-500 text-4xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-4">ABONNEMENT "ESSENTIEL"</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> 19-49€/mois selon la taille
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> Outils de gestion avancés
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> 2 "Boosts" mensuels gratuits
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                  <p className="font-bold">Argument choc :</p>
                  <p>"Payez moins qu'une nuit annulée via Booking !"</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-900 border-2 border-red-500 rounded-xl p-6"
                {...scaleUp}
              >
                <div className="text-red-500 text-4xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">PUBLICITÉ CIBLÉE & ÉTHIQUE</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> Boost Intelligente (Pay-per-Use)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> 3€/jour : Mise en avant locale
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> 10€ : Badge "Élu des voyageurs"
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                  <p className="font-bold">Notre engagement :</p>
                  <p>Prix plafonnés + transparence totale des enchères</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-900 border-2 border-red-500 rounded-xl p-6"
                {...scaleUp}
              >
                <div className="text-red-500 text-4xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-4">SERVICES À VALEUR AJOUTÉE</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> Formations premium (49-99€)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> Solution Eco-Certification (199€/an)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">▹</span> Intégration API (29€/mois)
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                  <p className="font-bold">Impact :</p>
                  <p>Augmentation moyenne de 15% des résas avec le label Green Rebel</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Projection */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              MODÈLE ÉCONOMIQUE PRÉVISIONNEL
            </h2>
            <p className="text-center mb-10">(Pour 1 000 hôteliers actifs)</p>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-6 font-bold">
                <div className="p-4 bg-red-600 rounded-lg">Source de revenus</div>
                <div className="p-4 bg-red-600 rounded-lg">Taux d'adoption</div>
                <div className="p-4 bg-red-600 rounded-lg">Revenu mensuel</div>
                <div className="p-4 bg-red-600 rounded-lg">Potentiel annuel</div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-gray-700 rounded-lg">Abonnements Essentials</div>
                  <div className="p-4 bg-gray-700 rounded-lg">35%</div>
                  <div className="p-4 bg-gray-700 rounded-lg">12 250€</div>
                  <div className="p-4 bg-gray-700 rounded-lg font-bold text-green-400">147 000€</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-gray-700 rounded-lg">Boosts publicitaires</div>
                  <div className="p-4 bg-gray-700 rounded-lg">25%</div>
                  <div className="p-4 bg-gray-700 rounded-lg">15 000€</div>
                  <div className="p-4 bg-gray-700 rounded-lg font-bold text-green-400">180 000€</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-gray-700 rounded-lg">Services premium</div>
                  <div className="p-4 bg-gray-700 rounded-lg">15%</div>
                  <div className="p-4 bg-gray-700 rounded-lg">6 750€</div>
                  <div className="p-4 bg-gray-700 rounded-lg font-bold text-green-400">81 000€</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mt-8">
                  <div className="p-4 bg-gray-800 rounded-lg font-bold">TOTAL</div>
                  <div className="p-4 bg-gray-800 rounded-lg">-</div>
                  <div className="p-4 bg-gray-800 rounded-lg font-bold text-xl">34 000€</div>
                  <div className="p-4 bg-gray-800 rounded-lg font-bold text-xl text-green-400">408 000€</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Killer Argument */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-700 to-red-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8">ARGUMENT IMBATTABLE</h2>
            
            <div className="bg-black bg-opacity-30 p-8 rounded-xl mb-10">
              <p className="text-xl mb-6">
                "Avec nous, vous gardez <span className="font-bold text-green-400">97%</span> du prix de la nuit
                <br />
                (vs <span className="font-bold text-red-400">60-70%</span> ailleurs)."
              </p>
              <p className="text-xl">
                "Investissez <span className="font-bold">3%</span> dans des outils qui vous libèrent,
                <br />pas qui vous exploitent."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-red-400">Plateforme traditionnelle</h3>
                <p>Chambre à 100€ → 65€ pour l'hôtel</p>
                <div className="mt-4 h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="mt-2 text-red-400">35% de commission</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border-2 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-400">DIRECT HORIZON</h3>
                <p>Chambre à 100€ → 97€ pour l'hôtel</p>
                <div className="mt-4 h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '97%' }}></div>
                </div>
                <p className="mt-2">- 3€ d'abonnement outils = <span className="font-bold text-green-400">94€ net</span></p>
                <p className="mt-2 text-xl font-bold text-green-400">+45% vs Booking</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Adoption Strategy */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              TACTIQUES D'ADOPTION REBELLES
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-red-500">
                <h3 className="text-xl font-bold mb-4 text-red-400">1. PÉRIODE D'ESSAI OFFERTE</h3>
                <p>3 mois premium offerts pour tout hôtelier inscrit avant 2025</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-red-500">
                <h3 className="text-xl font-bold mb-4 text-red-400">2. GARANTIE "NO BRAINER"</h3>
                <p>
                  "Si nos outils ne vous font pas économiser 100€/mois → 
                  <span className="font-bold text-green-400"> 1 an gratuit</span>"
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-red-500">
                <h3 className="text-xl font-bold mb-4 text-red-400">3. PROGRAMME AMBASSADEUR</h3>
                <p>
                  Parrainer un collègue = <span className="font-bold">1 mois offert</span>
                  <br />
                  Avis vérifié = <span className="font-bold">10 Boosts gratuits</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              POURQUOI ÇA FONCTIONNE ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">▹</span>
                  <span><span className="font-bold">ZERO commission</span> sur réservation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">▹</span>
                  <span>Alignement intérêts : plus l'hôtelier réussit, plus il paye (volontairement !)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">▹</span>
                  <span>Échelle progressive : pas de mur de paiement</span>
                </li>
              </ul>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">▹</span>
                  <span><span className="font-bold">Rentabilité rapide</span> : seuil à ~800 hôteliers premium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">▹</span>
                  <span>Valeur perçue élevée : on paie pour gagner, pas pour exister</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">▹</span>
                  <span>Effet levier : utilise vos propres données comme argument commercial</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 bg-red-600 inline-block p-6 rounded-xl">
              <p className="text-xl font-bold">
                "M. Dupont, vos 30 résas/mois via nous vous ont fait économiser 1 200€ vs Booking.
                <br />
                Avec nos outils premium, vous pouvez passer à 50 résas sans frais supplémentaires. Essayez ?"
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">LA RÉBELLION S'AUTOFINANCE !</h3>
              <div className="text-6xl">💥</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">DIRECT HORIZON | Modèle Économique Éthique</p>
        <p className="text-sm mt-2">Créé par des rebelles, pour des rebelles</p>
      </footer>
    </div>
  );
}