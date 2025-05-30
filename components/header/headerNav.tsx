"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = [
  { id: 1, label: "Home", href: "/", icon: "Home" },
  { id: 2, label: "Client Communication", href: "/clientCom", icon: "MessageCircle" },
  { id: 3, label: "Client Features", href: "/clientFeatures", icon: "LayoutGrid" },
  { id: 4, label: "Loyalty Program", href: "/loyalty", icon: "Heart" },
  { id: 5, label: "Community", href: "/community", icon: "Users" },
  { id: 6, label: "Loyalty", href: "/loyalty", icon: "Gift" },
  { id: 7, label: "Host Communication", href: "/hostCom", icon: "Phone" },
  { id: 8, label: "Host Features", href: "/hostFeatures", icon: "Home" },
  { id: 9, label: "Invest", href: "/invest", icon: "DollarSign" },
  { id: 10, label: "Pricing", href: "/pricing", icon: "Tag" },
  { id: 11, label: "Our Story", href: "/story", icon: "BookOpen" },
  { id: 12, label: "Win-Win", href: "/winWin", icon: "Handshake" },
  { id: 13, label: "Links", href: "/links", icon: "Link" },
];

export default function HeaderNav({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <div className="p-4 space-y-2">
      {navLinks.map(({ id, label, href, icon }) => {
        const Icon = (LucideIcons[icon as keyof typeof LucideIcons] || ArrowRight) as LucideIcon;

        return (
          <Link
            key={id}
            href={href}
            onClick={onLinkClick}
            className="flex items-center justify-between p-3 rounded-md hover:bg-blue-50 transition"
          >
            <div className="flex items-center space-x-3">
              <Icon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-800 font-medium">{label}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        );
      })}
    </div>
  );
}
