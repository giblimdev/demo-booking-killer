"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = [
  { id: 1, label: "Home", href: "/com", icon: "Home" },
  {
    id: 2,
    label: "Client Communication",
    href: "/com/clientCom",
    icon: "MessageCircle",
  },
  {
    id: 3,
    label: "Client Features",
    href: "/com/clientFeatures",
    icon: "LayoutGrid",
  },
  { id: 4, label: "Loyalty Program", href: "/com/loyalty", icon: "Heart" },
  { id: 5, label: "Community", href: "/com/community", icon: "Users" },
  { id: 6, label: "Loyalty", href: "/com/loyalty", icon: "Gift" },
  { id: 7, label: "Host Communication", href: "/com/hostCom", icon: "Phone" },
  { id: 8, label: "Host Features", href: "/com/hostFeatures", icon: "Home" },
  { id: 9, label: "Invest", href: "/com/invest", icon: "DollarSign" },
  { id: 10, label: "Pricing", href: "/com/pricing", icon: "Tag" },
  { id: 11, label: "Our Story", href: "/com/story", icon: "BookOpen" },
  { id: 12, label: "Win-Win", href: "/com/winWin", icon: "Handshake" },
  { id: 13, label: "Links", href: "/com/links", icon: "Link" },
];

export default function HeaderNav({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  return (
    <nav className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-2 md:items-center">
      {navLinks.map(({ id, label, href, icon }) => {
        const Icon = (LucideIcons[icon as keyof typeof LucideIcons] ||
          ArrowRight) as LucideIcon;

        return (
          <Link
            key={id}
            href={href}
            onClick={onLinkClick}
            className="flex items-center p-3 md:p-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
          >
            <Icon className="w-5 h-5 text-blue-600 md:mr-2" />
            <span className="text-gray-800 font-medium">{label}</span>
            <ArrowRight className="ml-auto md:hidden w-4 h-4 text-gray-400" />
          </Link>
        );
      })}
    </nav>
  );
}
