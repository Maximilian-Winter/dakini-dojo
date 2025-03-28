// components/shared/sidebar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: "Entrance Hall", href: "/", icon: "✨" },
  { name: "Training Halls", href: "/training-halls", icon: "🏛️" },
  { name: "Expression Hall", href: "/hall-of-expression", icon: "🎨" },
  { name: "Community", href: "/community", icon: "🌸" },
  { name: "Temple Courtyard", href: "/courtyard", icon: "🌿" },
  { name: "Inner Sanctum", href: "/inner-sanctum", icon: "🌌" },
  { name: "Library", href: "/resource-library", icon: "📚" },
  { name: "Developer's Corner", href: "/developers-corner", icon: "💻" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      {/* Mobile toggle button - only visible on small screens */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-stone rounded-full shadow-lg md:hidden"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '✖️' : '📖'}
      </button>

      <aside className={`fixed inset-y-0 left-0 transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 bg-stone shadow-lg`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-bamboo/30 flex items-center space-x-4">
            <div className="bg-bamboo/10 p-2 rounded-full">
              <span className="text-2xl">🌟</span>
            </div>
            <h2 className="text-2xl font-semibold text-bamboo">Dakini Dojo</h2>
          </div>

          <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-bamboo/20 text-bamboo font-medium' 
                      : 'hover:bg-sage/10 text-softwhite/80 hover:text-softwhite'
                  }`}
                >
                  <span className={`flex-shrink-0 ${isActive ? 'text-bamboo' : 'text-softwhite/60'}`}>{link.icon}</span>
                  <span>{link.name}</span>
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-bamboo"></span>}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t border-bamboo/20">
            <div className="bg-stone/70 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center">
                  <span className="text-sm">🔥</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-bamboo">Daily Practice</h3>
                  <p className="text-xs text-softwhite/60">5 minutes of presence</p>
                </div>
              </div>
              <div className="w-full bg-charcoal rounded-full h-1.5">
                <div className="bg-gradient-to-r from-bamboo to-sage h-1.5 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}