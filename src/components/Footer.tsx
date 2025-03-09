import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Opsvio</h3>
            <p className="text-neutral-light/80">
              Transforming businesses through technology innovation and strategic leadership.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-light/80 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="text-neutral-light/80 hover:text-white transition-colors">DevOps</a></li>
              <li><a href="#services" className="text-neutral-light/80 hover:text-white transition-colors">Security</a></li>
              <li><a href="#services" className="text-neutral-light/80 hover:text-white transition-colors">Engineering Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-light/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-neutral-light/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-neutral-light/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-light/80 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-light/80 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-neutral-light/80 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-neutral-light/80 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-neutral-light/80 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-neutral-light/60">
          <p>&copy; {new Date().getFullYear()} Opsvio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}