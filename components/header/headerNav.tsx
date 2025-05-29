"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, Heart, Globe } from "lucide-react";

function HeaderNav() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Value Proposition */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">TravelEthic</div>
            <div className="hidden lg:flex items-center space-x-1 text-xs text-gray-500">
              <Shield className="h-3 w-3" />
              <span>100% Transparent Pricing</span>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>

            <Link
              href="/loyalty"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <Heart className="h-4 w-4" />
              <span>Loyalty Program</span>
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <Link href={"#"}>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg">
                <Globe className="h-4 w-4" />
                <span>Become a Host</span>
                <div className="hidden lg:block text-xs bg-green-500 px-2 py-0.5 rounded-full ml-1">
                  3x Lower Fees
                </div>
              </button>
            </Link>

            <Link href={"#"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200">
                Try Demo
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
          <div className="flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 py-2">
              Home
            </Link>
            <Link
              href="/loyalty"
              className="text-gray-700 hover:text-blue-600 py-2 flex items-center space-x-2"
            >
              <Heart className="h-4 w-4" />
              <span>Loyalty Program</span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 py-2"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Value Proposition Banner (Optional) */}
        <div className="hidden xl:flex items-center justify-center mt-2 py-2 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1 text-blue-700">
              <Shield className="h-4 w-4" />
              <span className="font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-1 text-green-700">
              <Heart className="h-4 w-4" />
              <span className="font-medium">Ethical Tourism</span>
            </div>
            <div className="flex items-center space-x-1 text-purple-700">
              <Globe className="h-4 w-4" />
              <span className="font-medium">Handpicked by Locals</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
