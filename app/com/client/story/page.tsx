"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Story() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Direct Horizon - Le Voyage en Direct</title>
      </Head>

      {/* Hero Section */}
      <motion.section
        className="h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-gray-900"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            LE VOYAGE EN DIRECT, <br className="hidden md:inline" />
            COMME IL DEVRAIT TOUJOURS ÊTRE
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-red-300 mb-6">
            🌍 Et si chaque euro de votre voyage allait VRAIMENT dans votre
            aventure ?
          </p>
          <motion.button
            className="mt-8 px-8 py-4 bg-red-600 rounded-full text-lg font-bold hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rejoignez le Mouvement
          </motion.button>
        </div>
      </motion.section>

      {/* L'Étincelle */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            L’ÉTINCELLE : ON EN A MARRE D’ÊTRE PLUMÉS
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Nous, voyageurs, on a ouvert les yeux. Les plateformes qu’on
            utilisait pour booker nos escapades ? Des machines à cash qui
            siphonnent jusqu’à{" "}
            <span className="font-bold text-red-300">
              35% de chaque réservation
            </span>
            . Des frais opaques, des prix gonflés, des hôtes asphyxiés. Ça
            suffit.
            <br />
            <br />
            On s’est dit : le voyage, c’est pas un business pour algorithmes
            voraces. L’hospitalité, c’est pas une vache à lait. Et nous, on
            n’est pas des portefeuilles sur pattes.
          </p>
        </motion.div>
      </section>

      {/* La Révolte */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            DIRECT HORIZON : LA RÉVOLTE QUI LIBÈRE
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            On est cinq. Cinq rêveurs qui en ont ras-le-bol des vieilles règles.
            <br />
            Des baroudeurs qui ont dormi partout, du hamac bancal à l’hôtel 5
            étoiles.
            <br />
            <span className="italic text-red-300">
              Notre mantra ? « La tech doit casser les chaînes, pas en créer. »
            </span>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                ✅ Zéro Commissions
              </h3>
              <p>Jusqu’à 30% d’économie pour vous et les hôtes.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                ✅ Chat 100% humain
              </h3>
              <p>
                Parlez direct à l’hôtelier. Négociez le prix, créez un séjour
                sur mesure.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                ✅ Avis clean
              </h3>
              <p>
                Seuls ceux qui ont séjourné parlent. Les faux commentaires ? On
                les dégage.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Votre Voyage, Vos Règles */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            VOTRE VOYAGE, VOS RÈGLES
          </h2>
          <p className="text-lg mb-6">
            Chez Direct Horizon, on envoie valser les algorithmes standardisés.
            Faites la recherche qui vous correspond.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
              <div className="text-4xl mb-2">🎒</div>
              <div className="font-bold mb-1">Aventurier</div>
              <p className="text-center">Qui dort sous les étoiles ?</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
              <div className="text-4xl mb-2">🏨</div>
              <div className="font-bold mb-1">Pro du luxe</div>
              <p className="text-center">Du calme et du Wi-Fi qui claque ?</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center">
              <div className="text-4xl mb-2">💼</div>
              <div className="font-bold mb-1">Digital nomad</div>
              <p className="text-center">Zoom à 3h du mat’ ?</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-lg space-y-2 mb-4">
            <li>Des promos négociées en direct avec les hôtes.</li>
            <li>
              Des pépites engagées : éco-lodges, familles locales, projets qui
              ont du sens.
            </li>
            <li>
              Des solutions pro : chambres work friendly, bureaux ergonomiques,
              salles de réunion gratuites, connexion en titane.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Le Mouvement */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            LE MOUVEMENT, C’EST MAINTENANT
          </h2>
          <p className="text-lg mb-6">
            On construit un monde meilleur :{" "}
            <span className="font-bold">
              « devenez un voyageur constructeur, pas un touriste consommateur »
            </span>
            <br />
            <span className="block mt-4">
              Impact local concret :{" "}
              <span className="italic">
                Chaque réservation soutient directement des projets locaux :
                écoles, initiatives éco-responsables, ou artisans qui préservent
                leur culture. Votre voyage devient une histoire qui profite à
                tous.
              </span>
            </span>
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mb-4">
            <li>
              Un monde où les intermédiaires opaques se prennent une claque.{" "}
              <span className="italic">« on réinvente le circuit court »</span>
            </li>
            <li>Où l’hospitalité redevient une histoire d’humains.</li>
            <li>
              Où votre budget voyage finance vos souvenirs, pas des actionnaires
              en costard.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Voyageur Fondateur */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            DEVENEZ VOYAGEUR FONDATEUR
          </h2>
          <div className="text-lg mb-6">
            Pourquoi ?
            <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
              <li>Parce que vous en avez marre des frais cachés.</li>
              <li>
                Parce que vous voulez parler à de vrais hôtes, pas à des bots.
              </li>
              <li>
                Parce que chaque euro économisé, c’est un cocktail en plus sous
                les tropiques.
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🔑</div>
              <div className="font-bold mb-1">Accès exclusif à la bêta</div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-bold mb-1">
                Un mot à dire sur les prochaines features
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">💸</div>
              <div className="font-bold mb-1">
                Crédits voyage offerts dès votre première résa
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bougez-vous */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-red-600 to-gray-900 text-center">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold mb-6">
            BOUGEZ-VOUS : VOYAGEZ LIBRE EN 3 COUPS
          </h2>
          <ol className="list-decimal list-inside text-lg max-w-2xl mx-auto mb-8 space-y-2 text-left">
            <li>
              <span className="font-bold">Rejoignez la bande</span> →{" "}
              <a
                href="https://directhorizon.com"
                className="underline text-red-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                directhorizon.com
              </a>{" "}
              en 3 clics.
            </li>
            <li>
              <span className="font-bold">Créez votre profil</span> → Balancez
              vos envies, vos galères, vos besoins pro ou perso. Le blog est
              ouvert.
            </li>
            <li>
              <span className="font-bold">Réservez en direct</span> → Chopez de
              la crypto pour vos futurs voyages.
              <br />
              <span className="italic">
                « Avec la crypto gagnée sur vos réservations, financez vos
                prochains voyages ou échangez-la pour des services exclusifs.
                Votre fidélité est récompensée, sans conditions tordues. »
              </span>
            </li>
          </ol>
        </motion.div>
      </section>

      {/* Le mot du commencement */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl font-bold text-red-400 mb-6">
            LE MOT DU COMMENCEMENT
          </h2>
          <p className="text-xl italic mb-6">
            Direct Horizon, c’est la fin des plateformes qui vous prennent pour
            des portefeuilles ambulants.
            <br />
            C’est le début d’un dialogue cash entre vous et ceux qui vous
            ouvrent leur porte.
            <br />✨ Rejoignez les rebelles qui choisissent l’humain, l’éthique,
            et la liberté.
          </p>
        </motion.div>
      </section>

      {/* Les arguments qui tapent fort */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-3xl font-bold text-red-500 mb-6">
            LES ARGUMENTS QUI TAPENT FORT
          </h2>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>
              <span className="font-bold text-yellow-300">
                Transparence totale
              </span>{" "}
              : « Le prix que vous voyez ? C’est le VRAI prix. Zéro commission
              planquée. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">Liberté max</span> :
              « Négociez direct avec l’hôtelier. Faites baisser la note. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">
                Communauté béton
              </span>{" "}
              : « Un groupe privé pour partager vos plans avec des voyageurs
              vérifiés. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">
                Économies qui comptent
              </span>{" "}
              : « la réduction c’est pour vous ; l’absence de comm’ exorbitante
              c’est pour l’établissement. Tout le monde y gagne. »
            </li>
            <li>
              <span className="font-bold text-yellow-300">Voyage éthique</span>{" "}
              : « Soutenez des hôtes qui respectent l’environnement et les
              communautés locales, pour un voyage qui a du sens. »
            </li>
          </ul>
          <p className="mt-8 text-center text-2xl font-bold text-red-300">
            « Voyager comme vous êtes. Voyager éthique. Voyager libre. »
          </p>
          <div className="mt-8 text-center">
            <motion.button
              className="px-8 py-4 bg-red-600 rounded-full text-xl font-bold hover:bg-red-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Rejoignez le mouvement
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center border-t border-red-700">
        <p className="text-lg">
          DIRECT HORIZON – Le voyage en direct, éthique et libre
        </p>
        <p className="text-sm mt-2">
          Fait par des voyageurs, pour des voyageurs
        </p>
      </footer>
    </div>
  );
}
