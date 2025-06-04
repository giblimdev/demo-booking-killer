"use client";

import React from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navLinks = [{ id: 1, label: "Home", href: "/demo", icon: "Home" }];

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
