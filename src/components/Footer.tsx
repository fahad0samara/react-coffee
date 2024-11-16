
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">coffeeshop</h3>
            <p className="text-white/60">
              Serving the finest coffee since 1970. Quality in every cup.
            </p>
          </div>
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-white/60 hover:text-white transition">Menu</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Contact Us</h4>
            <address className="text-white/60 not-italic">
              123 Coffee Street<br />
          
              Phone: (555) 123-4567<br />
              Email: fahad@coffee.com
            </address>
          </div>
          <div>
            <h4 className="text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>© 2024 coffeeshop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}