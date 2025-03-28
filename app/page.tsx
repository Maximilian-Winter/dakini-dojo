// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [wisdomQuote, setWisdomQuote] = useState({
    text: "The dakini is the energetic principle of wisdom, the movement of energy in space that connects wisdom and compassion.",
    source: "Khandro Rinpoche"
  });
  
  const [featuredDeity, setFeaturedDeity] = useState({
    name: "Vajrayogini",
    description: "Embodiment of supreme wisdom that cuts through illusion",
    attribute: "Transformation"
  });
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-900 opacity-5 animate-pulse"></div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="text-center mb-16">
            <div className="text-bamboo text-6xl mb-4">✨</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-bamboo to-sage">
              Dakini Dojo
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-softwhite">
              Temple of the Female Divine, Compassion and Fierce Wisdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Wisdom of the Day */}
            <div className="bg-stone/70 backdrop-blur-sm rounded-lg p-6 border border-bamboo/30 shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-bamboo text-lg font-semibold mb-3">Wisdom of the Day</h3>
              <p className="text-softwhite mb-4 italic">"{wisdomQuote.text}"</p>
              <p className="text-softwhite/70 text-right">— {wisdomQuote.source}</p>
            </div>
            
            {/* Featured Deity */}
            <div className="bg-stone/70 backdrop-blur-sm rounded-lg p-6 border border-sage/30 shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-sage text-lg font-semibold mb-3">Featured Dakini</h3>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">💃</span>
                </div>
                <h4 className="text-xl font-medium text-sage">{featuredDeity.name}</h4>
                <p className="text-softwhite/80 text-sm mt-2 text-center">{featuredDeity.description}</p>
                <span className="mt-3 px-3 py-1 bg-sage/20 rounded-full text-xs text-softwhite">
                  {featuredDeity.attribute}
                </span>
              </div>
            </div>
            
            {/* Daily Practice */}
            <div className="bg-stone/70 backdrop-blur-sm rounded-lg p-6 border border-bamboo/30 shadow-lg transform hover:scale-105 transition-all">
              <h3 className="text-bamboo text-lg font-semibold mb-3">Daily Practice</h3>
              <p className="text-softwhite/80 mb-4">Begin your journey today with a guided meditation on fierce compassion</p>
              <button className="w-full bg-bamboo/20 hover:bg-bamboo/30 text-softwhite py-2 rounded-md transition-colors">
                Enter Sacred Space
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Temple Halls Navigation */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-softwhite">Temple Halls</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Training Halls", icon: "🏛️", href: "/training-halls", color: "from-stone to-charcoal border-sage/30", description: "Wisdom teachings and practices" },
            { name: "Hall of Expression", icon: "🎨", href: "/hall-of-expression", color: "from-stone to-charcoal border-bamboo/30", description: "Art and creative offerings" },
            { name: "Community", icon: "🌸", href: "/community", color: "from-stone to-charcoal border-sage/30", description: "Connect with fellow practitioners" },
            { name: "Temple Courtyard", icon: "🌿", href: "/courtyard", color: "from-stone to-charcoal border-bamboo/30", description: "Nature and contemplation" },
            { name: "Inner Sanctum", icon: "🌌", href: "/inner-sanctum", color: "from-stone to-charcoal border-sage/30", description: "Personal practice space" },
            { name: "Resource Library", icon: "📚", href: "/resource-library", color: "from-stone to-charcoal border-bamboo/30", description: "Archives of wisdom" },
            { name: "Developer's Corner", icon: "💻", href: "/developers-corner", color: "from-stone to-charcoal border-sage/30", description: "Contribute to the temple" },
            { name: "Temple Administration", icon: "🛕", href: "/about", color: "from-stone to-charcoal border-bamboo/30", description: "About & contact" }
          ].map((hall) => (
            <Link
              key={hall.name}
              href={hall.href}
              className="rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className={`p-6 bg-gradient-to-br ${hall.color} h-full flex flex-col items-center justify-center text-center group-hover:scale-105 transition-all border border-opacity-20`}>
                <span className="text-4xl mb-3">{hall.icon}</span>
                <h3 className="text-lg font-bold mb-2 text-softwhite">{hall.name}</h3>
                <p className="text-sm text-softwhite/70">{hall.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Latest Wisdom Blog */}
      <div className="bg-charcoal py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-softwhite">Latest Wisdom</h2>
            <Link href="/blog" className="text-bamboo hover:text-bamboo/80">View all articles →</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Sacred Dance of the Dakinis", category: "Tradition", href: "/blog/sacred-dance", date: "March 21, 2025" },
              { title: "Fierce Compassion: The Heart of Feminine Wisdom", category: "Practice", href: "/blog/fierce-compassion", date: "March 18, 2025" },
              { title: "Embracing Transformation: Lessons from Vajrayogini", category: "Deity Study", href: "/blog/embracing-transformation", date: "March 15, 2025" }
            ].map((article) => (
              <Link key={article.title} href={article.href} className="group">
                <div className="bg-stone/30 rounded-lg overflow-hidden shadow-lg group-hover:shadow-bamboo/20 transition-all">
                  <div className="h-48 bg-gradient-to-br from-stone to-charcoal group-hover:from-bamboo/10 group-hover:to-sage/10 transition-all"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-bamboo/20 text-bamboo">{article.category}</span>
                      <span className="text-xs text-softwhite/60">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-softwhite group-hover:text-bamboo transition-colors">{article.title}</h3>
                    <p className="text-softwhite/60 text-sm">Discover the ancient wisdom teachings that unlock your innate potential for clarity and compassion.</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Coming Temple Events */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-softwhite">Upcoming Temple Events</h2>
        
        <div className="max-w-4xl mx-auto bg-stone/30 backdrop-blur-sm rounded-lg p-6 border border-bamboo/20 shadow-lg">
          <div className="space-y-6">
            {[
              { title: "Spring Equinox Ceremony", date: "March 20, 2025", time: "7:00 PM", type: "Celebration" },
              { title: "Introduction to Dakini Practices", date: "March 22, 2025", time: "10:00 AM", type: "Workshop" },
              { title: "Community Practice: Fierce Compassion", date: "March 24, 2025", time: "6:30 PM", type: "Meditation" }
            ].map((event) => (
              <div key={event.title} className="flex items-center space-x-4 p-4 hover:bg-stone/50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-bamboo/10 to-sage/10 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-sm font-bold text-bamboo">{event.date.split(', ')[0].split(' ')[1]}</span>
                  <span className="text-xs text-softwhite/80">{event.date.split(', ')[0].split(' ')[0]}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-softwhite">{event.title}</h3>
                  <div className="flex text-xs space-x-4 mt-1">
                    <span className="text-softwhite/60">{event.date}, {event.time}</span>
                    <span className="text-bamboo">{event.type}</span>
                  </div>
                </div>
                
                <button className="px-3 py-1 bg-bamboo/20 hover:bg-bamboo/30 text-bamboo rounded text-sm transition-colors">
                  Join
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link href="/events" className="inline-block px-4 py-2 bg-bamboo/20 hover:bg-bamboo/30 text-bamboo rounded transition-colors">
              View All Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}