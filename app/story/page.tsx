"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Story() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Head>
        <title>Direct Horizon | Rebellious Travel</title>
        <meta name="description" content="Direct Horizon: Zero commissions, real prices, true travel. Join the rebellion against greedy travel platforms." />
      </Head>

      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-gray-900"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            DIRECT HORIZON
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-red-300">
            Travel the world. Pay the real price. Screw the middleman.
          </p>
          <motion.button 
            className="mt-8 px-6 py-3 bg-red-600 rounded-full text-lg font-bold hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Rebellion
          </motion.button>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">OUR STORY</h2>
          <p className="text-lg leading-relaxed">
            We're Luca and Hugo—tech geeks, travel junkies, and fed-up road warriors. For a decade, we lived the grind: coding by day, chasing flights by night. From Bangkok guesthouses to Patagonian lodges, we trusted the big platforms—until we saw the truth:
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            <li>🛑 <span className="font-semibold">Siem Reap:</span> An hôtelier showed us his bill—40% of our payment vanished to commissions.</li>
            <li>🛑 <span className="font-semibold">Lisbon:</span> Our "deal" was 20% pricier than booking direct.</li>
            <li>🛑 <span className="font-semibold">Bali:</span> Non-refunded booking? Canceled. Their profits? Untouched.</li>
          </ul>
          <p className="mt-6 text-xl font-bold">
            Over beers in Hanoi, we snapped: "Why let these giants rob travelers and hotels? Let’s code the fix."
          </p>
        </motion.div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">THE UGLY TRUTH</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Travelers Get Screwed</h3>
              <p>Hidden fees, jacked-up prices, and soulless bookings. You’re not a traveler—you’re a paycheck.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hotels Get Crushed</h3>
              <p>40% commissions leave hoteliers scraping by, forced to raise prices or cut corners.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold text-red-500 mb-6">DIRECT HORIZON: THE ANTI-PLATFORM</h2>
          <p className="text-lg mb-6">
            We built a rebellion in code. No middlemen. No BS. Just real travel.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-red-400">Zero Commissions</h3>
              <p>Hotels keep 100% of their revenue. They set fair prices—you save up to 40%.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-red-400">Direct Booking</h3>
              <p>Chat with hotels, not bots. Book person-to-person for real connections.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold text-red-400">Anti-Scam Tech</h3>
              <p>Our algorithm sniffs out inflated prices and alerts you in real-time.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-red-600 to-gray-900 text-center">
        <motion.div 
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="text-4xl font-bold mb-6">JOIN THE FIGHT</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Travelers: Save big and book real. Hoteliers: Take back your business. Together, we’re tearing down the greedy travel empire.
          </p>
          <motion.button 
            className="px-8 py-4 bg-red-600 rounded-full text-xl font-bold hover:bg-red-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-lg">DIRECT HORIZON | Real Travel. Real Prices. No Middlemen.</p>
        <p className="text-sm mt-2">Coded by Luca & Hugo, fueled by rage and bia hơi.</p>
      </footer>
    </div>
  );
}

