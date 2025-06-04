import React from "react";

export default function WinWinPage() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-black min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10 text-white">
        {/* Section Titre */}
        <section className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
            💥 REBEL COIN : LA CRYPTO DU VOYAGEUR MODERNE
          </h1>
          <p className="italic text-yellow-200">
            Token utilitaire ERC-20 sur Polygon – Frais quasi-nuls, respect de
            la planète 🌍
          </p>
        </section>

        {/* Section Parrainage */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🔄 Le Parrainage Rebelle 3.0
          </h2>
          <p className="text-white mt-2">
            Des récompenses pour chaque action !
          </p>
          <table className="w-full mt-4 text-left border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Action
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  $REBEL
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Valeur (€)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Parrainage vérifié
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  50
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  ≈ 5 €
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  1ère résa du filleul
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  200
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  ≈ 20 €
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  5 filleuls actifs
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  500 (bonus)
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  ≈ 50 €
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-yellow-300 font-semibold">
            💸 Conversion : 100 $REBEL = 10 € de crédit voyage
          </p>
        </section>

        {/* Section Utilités */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            💎 Utilités concrètes du $REBEL
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-white">
            <li>
              <strong className="text-yellow-200">Paiement partiel</strong> des
              réservations sur DIRECT HORIZON (ex. 30% € / 70% $REBEL)
            </li>
            <li>
              <strong className="text-yellow-200">Accès VIP</strong> : early
              booking & événements partenaires
            </li>
            <li>
              <strong className="text-yellow-200">Gouvernance</strong> : votez
              les fonctionnalités et proposez des hôtels
            </li>
            <li>
              <strong className="text-yellow-200">Écosystème éthique</strong> :
              nuits offertes & projets locaux 🌿
            </li>
          </ul>
        </section>

        {/* Section Tokenomics */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            📊 Tokenomics simples & éthiques
          </h2>
          <table className="w-full mt-4 text-left border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Paramètre
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Valeur
                </th>
                <th className="px-4 py-2 border-b border-white/20 text-white">
                  Détail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Supply
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  10M $REBEL
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Fixe
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Parrainage
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  35%
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Alimentation progressive
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Réserve
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  20%
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Partenariats & développement
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Brûlage
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  5%
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Mensuel sur frais de plateforme
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Staking
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  15% APY
                </td>
                <td className="px-4 py-2 border-b border-white/10 text-white">
                  Hôteliers
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section Technique */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🛠 Implémentation Technique
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-white">
            <li>Wallet intégré avec seed sécurisée + récupération sociale</li>
            <li>Aucune vente initiale : gains uniquement par actions</li>
            <li>Conversion auto en € pour grand public</li>
            <li>Mini tutoriels vidéos dans l'app</li>
          </ul>
        </section>

        {/* Section Scénarios */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            🌟 Scénarios concrets
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="p-4 bg-indigo-900/50 rounded-lg">
              <h3 className="font-bold text-indigo-300 mb-2">👤 Voyageur</h3>
              <ul className="list-disc list-inside space-y-1 text-white">
                <li>Parraine 3 amis → gagne 650 $REBEL (~65 €)</li>
                <li>Utilise 300 $REBEL pour une résa</li>
                <li>Stake le reste → 15% rendement</li>
              </ul>
            </div>
            <div className="p-4 bg-green-900/50 rounded-lg">
              <h3 className="font-bold text-green-300 mb-2">🏨 Hôtelier</h3>
              <ul className="list-disc list-inside space-y-1 text-white">
                <li>Reçoit 5% en $REBEL</li>
                <li>Stake = Badge "Éco-Warrior"</li>
                <li>Utilise tokens pour booster sa visibilité</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Pourquoi */}
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-yellow-300">
            📈 Pourquoi ça marche ?
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-white">
            <li>Fidélisation & viralité naturelle</li>
            <li>Image tech & moderne</li>
            <li>Monétisation éthique & durable</li>
            <li>Communauté engagée</li>
          </ul>
        </section>

        {/* Section Lancement */}
        <section className="bg-yellow-600/20 p-6 rounded-lg text-center border border-yellow-500/30">
          <h2 className="text-xl font-bold text-yellow-300">
            🔥 Campagne Lancement
          </h2>
          <p className="mt-2 text-lg font-medium text-white">
            Parrainez 3 amis avant le{" "}
            <strong className="text-yellow-300">30/06</strong> →{" "}
            <strong className="text-yellow-300">500 $REBEL</strong> (50 €) +
            badge "Founding Rebel"
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-white/20 text-center text-white">
          En résumé :{" "}
          <strong>Polygon = rapidité ⚡ + low cost 💰 + éco-friendly 🌱</strong>
          <br />
          <span className="text-yellow-300">
            Besoin d'un prototype testnet Mumbai ? On vous guide 🚀
          </span>
        </footer>
      </div>
    </div>
  );
}
