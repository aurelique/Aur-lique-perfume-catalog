
import React from 'react';

const SocialIcon: React.FC<{ href: string, path: string }> = ({ href, path }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-ivory hover:text-brand-gold transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black text-brand-ivory pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-3xl font-bold tracking-wider mb-4">aurélique</h3>
            <p className="text-sm text-gray-400 max-w-xs">Crafting memories through the art of perfumery since 2024.</p>
          </div>
          
          <div>
            <h4 className="font-sans uppercase tracking-widest text-lg font-semibold mb-4 text-brand-gold">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:aurelique.perfumery@gmail.com" className="hover:text-brand-gold-light transition-colors">aurelique.perfumery@gmail.com</a></li>
              <li><a href="https://wa.me/6283840556211" className="hover:text-brand-gold-light transition-colors">+62 838 4055 6211</a></li>
              <li><p>Jakarta, Indonesia</p></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans uppercase tracking-widest text-lg font-semibold mb-4 text-brand-gold">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialIcon href="#" path="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm3.5 6.44c.48 0 .88.39.88.88v5.3c0 .48-.4.88-.88.88h-1.75v-3.5h1.17l.17-1.37h-1.34V9.6c0-.4.1-.63.63-.63h.75V7.8s-.68-.12-1.33-.12c-1.36 0-2.27.82-2.27 2.33v1.02h-1.5v1.37h1.5v3.5h-2.63c-.48 0-.88-.4-.88-.88V9.36c0-.48.4-.88.88-.88h7zm0 0" />
              <SocialIcon href="#" path="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.48 2.96,10.3 2.38,10.03C2.38,10.05 2.38,10.07 2.38,10.08C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.03 6.02,17.25 7.86,17.29C6.38,18.45 4.54,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
              <SocialIcon href="#" path="M12,2.4c-2.7,0-3,0-4.1,0.1c-1.1,0-1.8,0.2-2.4,0.4C4.8,3.1,4.3,3.5,3.9,4C3.5,4.3,3.1,4.8,2.9,5.5C2.7,6.1,2.6,6.8,2.5,7.9C2.5,9,2.4,9.3,2.4,12s0,3,0.1,4.1c0,1.1,0.2,1.8,0.4,2.4c0.2,0.7,0.6,1.2,1.1,1.6c0.4,0.4,0.9,0.8,1.6,1.1c0.6,0.2,1.3,0.3,2.4,0.4c1.1,0.1,1.4,0.1,4.1,0.1s3-0,4.1-0.1c1.1-0,1.8-0.2,2.4-0.4c0.7-0.2,1.2-0.6,1.6-1.1c0.4-0.4,0.8-0.9,1.1-1.6c0.2-0.6,0.3-1.3,0.4-2.4c0.1-1.1,0.1-1.4,0.1-4.1s0-3-0.1-4.1c-0-1.1-0.2-1.8-0.4-2.4c-0.2-0.7-0.6-1.2-1.1-1.6c-0.4-0.4-0.9-0.8-1.6-1.1c-0.6-0.2-1.3-0.3-2.4-0.4C15,2.5,14.7,2.4,12,2.4z M12,4.3c2.6,0,2.9,0,4,0.1c1,0,1.5,0.2,1.8,0.3c0.4,0.1,0.7,0.3,1,0.6c0.3,0.3,0.5,0.6,0.6,1c0.1,0.3,0.3,0.8,0.3,1.8c0.1,1,0.1,1.4,0.1,4s0,2.9-0.1,4c-0,1-0.2,1.5-0.3,1.8c-0.1,0.4-0.3,0.7-0.6,1c-0.3,0.3-0.6,0.5-1,0.6c-0.3,0.1-0.8,0.3-1.8,0.3c-1,0.1-1.4,0.1-4,0.1s-2.9,0-4-0.1c-1,0-1.5-0.2-1.8-0.3c-0.4-0.1-0.7-0.3-1-0.6c-0.3-0.3-0.5-0.6-0.6-1c-0.1-0.3-0.3-0.8-0.3-1.8c-0.1-1-0.1-1.4-0.1-4s0-2.9,0.1-4c0-1,0.2-1.5,0.3-1.8c0.1-0.4,0.3-0.7,0.6-1c0.3-0.3,0.6-0.5,1-0.6c0.3-0.1,0.8-0.3,1.8-0.3C9.1,4.3,9.4,4.3,12,4.3z M12,8.9c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S13.7,8.9,12,8.9z M12,13.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2s1.2,0.5,1.2,1.2S12.7,13.2,12,13.2z M16.9,8.2c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9S16.9,7.7,16.9,8.2z"/>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aurélìque. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
