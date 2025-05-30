import React from "react";

export default function WinWinPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10 text-gray-800">
      <section className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600">
          💥 REBEL COIN : LA CRYPTO DU VOYAGEUR MODERNE
        </h1>
        <p className="italic text-sm text-gray-500">
          Token utilitaire ERC-20 sur Polygon – Frais quasi-nuls, respect de la planète 🌍
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900">🔄 Le Parrainage Rebelle 3.0</h2>
        <p className="text-gray-600 mt-2">Des récompenses pour chaque action !</p>
        <table className="w-full mt-4 text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Action</th>
              <th className="px-4 py-2 border-b">$REBEL</th>
              <th className="px-4 py-2 border-b">Valeur (€)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Parrainage vérifié</td>
              <td className="px-4 py-2 border-b">50</td>
              <td className="px-4 py-2 border-b">≈ 5 €</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">1ère résa du filleul</td>
              <td className="px-4 py-2 border-b">200</td>
              <td className="px-4 py-2 border-b">≈ 20 €</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">5 filleuls actifs</td>
              <td className="px-4 py-2 border-b">500 (bonus)</td>
              <td className="px-4 py-2 border-b">≈ 50 €</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-sm text-green-600 font-semibold">
          💸 Conversion : 100 $REBEL = 10 € de crédit voyage
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900">💎 Utilités concrètes du $REBEL</h2>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li><strong>Paiement partiel</strong> des réservations sur DIRECT HORIZON (ex. 30% € / 70% $REBEL)</li>
          <li><strong>Accès VIP</strong> : early booking & événements partenaires</li>
          <li><strong>Gouvernance</strong> : votez les fonctionnalités et proposez des hôtels</li>
          <li><strong>Écosystème éthique</strong> : nuits offertes & projets locaux 🌿</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900">📊 Tokenomics simples & éthiques</h2>
        <table className="w-full mt-4 text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Paramètre</th>
              <th className="px-4 py-2 border-b">Valeur</th>
              <th className="px-4 py-2 border-b">Détail</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="px-4 py-2 border-b">Supply</td><td className="px-4 py-2 border-b">10M $REBEL</td><td className="px-4 py-2 border-b">Fixe</td></tr>
            <tr><td className="px-4 py-2 border-b">Parrainage</td><td className="px-4 py-2 border-b">35%</td><td className="px-4 py-2 border-b">Alimentation progressive</td></tr>
            <tr><td className="px-4 py-2 border-b">Réserve</td><td className="px-4 py-2 border-b">20%</td><td className="px-4 py-2 border-b">Partenariats & développement</td></tr>
            <tr><td className="px-4 py-2 border-b">Brûlage</td><td className="px-4 py-2 border-b">5%</td><td className="px-4 py-2 border-b">Mensuel sur frais de plateforme</td></tr>
            <tr><td className="px-4 py-2 border-b">Staking</td><td className="px-4 py-2 border-b">15% APY</td><td className="px-4 py-2 border-b">Hôteliers</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900">🛠 Implémentation Technique</h2>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li>Wallet intégré avec seed sécurisée + récupération sociale</li>
          <li>Aucune vente initiale : gains uniquement par actions</li>
          <li>Conversion auto en € pour grand public</li>
          <li>Mini tutoriels vidéos dans l'app</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900">🌟 Scénarios concrets</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-bold text-indigo-700 mb-2">👤 Voyageur</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Parraine 3 amis → gagne 650 $REBEL (~65 €)</li>
              <li>Utilise 300 $REBEL pour une résa</li>
              <li>Stake le reste → 15% rendement</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">🏨 Hôtelier</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Reçoit 5% en $REBEL</li>
              <li>Stake = Badge “Éco-Warrior”</li>
              <li>Utilise tokens pour booster sa visibilité</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900">📈 Pourquoi ça marche ?</h2>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
          <li>Fidélisation & viralité naturelle</li>
          <li>Image tech & moderne</li>
          <li>Monétisation éthique & durable</li>
          <li>Communauté engagée</li>
        </ul>
      </section>

      <section className="bg-yellow-50 p-6 rounded-lg text-center">
        <h2 className="text-xl font-bold text-yellow-700">🔥 Campagne Lancement</h2>
        <p className="mt-2 text-lg font-medium">Parrainez 3 amis avant le <strong>30/06</strong> → <strong>500 $REBEL</strong> (50 €) + badge “Founding Rebel”</p>
      </section>

      <footer className="pt-10 border-t text-sm text-gray-500 text-center">
        En résumé : <strong>Polygon = rapidité ⚡ + low cost 💰 + éco-friendly 🌱</strong><br />
        Besoin d’un prototype testnet Mumbai ? On vous guide 🚀
      </footer>
    </div>
  );
}
