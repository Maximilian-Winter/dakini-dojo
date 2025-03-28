// components/shared/footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone border-t border-bamboo/20 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-bamboo font-semibold mb-4">Dakini Dojo</h4>
            <p className="text-softwhite/70 text-sm">Temple of the Female Divine, Compassion and Fierce Wisdom</p>
          </div>
          
          <div>
            <h4 className="text-bamboo font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-softwhite/70 hover:text-bamboo transition-colors">About the Temple</Link></li>
              <li><Link href="/guidelines" className="text-softwhite/70 hover:text-bamboo transition-colors">Community Guidelines</Link></li>
              <li><Link href="/contact" className="text-softwhite/70 hover:text-bamboo transition-colors">Contact Us</Link></li>
              <li><Link href="/support" className="text-softwhite/70 hover:text-bamboo transition-colors">Support the Temple</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-bamboo font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="text-softwhite/70 hover:text-bamboo transition-colors">Practice Guides</Link></li>
              <li><Link href="/articles" className="text-softwhite/70 hover:text-bamboo transition-colors">Wisdom Articles</Link></li>
              <li><Link href="/downloads" className="text-softwhite/70 hover:text-bamboo transition-colors">Downloadable Materials</Link></li>
              <li><Link href="/faq" className="text-softwhite/70 hover:text-bamboo transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-bamboo font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-bamboo hover:bg-bamboo/20 transition-colors">
                <span>📱</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-bamboo hover:bg-bamboo/20 transition-colors">
                <span>✉️</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center text-bamboo hover:bg-bamboo/20 transition-colors">
                <span>📢</span>
              </a>
            </div>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-charcoal text-softwhite px-3 py-2 rounded-l text-sm flex-1 border-0"
                aria-label="Email address" 
              />
              <button className="bg-bamboo/40 hover:bg-bamboo/60 text-softwhite px-3 py-2 rounded-r text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 border-t border-bamboo/10 text-center text-sm text-softwhite/60">
          <p>© {new Date().getFullYear()} Dakini Dojo • Temple of Compassion & Wisdom</p>
        </div>
      </div>
    </footer>
  );
}