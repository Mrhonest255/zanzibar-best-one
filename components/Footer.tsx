
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send, ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE_1, OFFICE_ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-300 pt-20 pb-8 font-sans border-t-4 border-gold relative overflow-hidden">
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-slate-800 pb-12">
           <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-white font-magic font-bold">Secure Booking</h4>
                <p className="text-xs text-slate-400">256-bit SSL encryption & safe payments.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-gold shrink-0">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="text-white font-magic font-bold">Flexible Payment</h4>
                <p className="text-xs text-slate-400">Pay with Credit Card, Cash or Transfer.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-gold shrink-0">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-white font-magic font-bold">Privacy Guaranteed</h4>
                <p className="text-xs text-slate-400">We never share your personal data.</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white mb-2">
              <div className="h-10 w-10 bg-primary rounded-none flex items-center justify-center font-magic font-bold text-2xl text-white shadow-lg shadow-teal-900/50">Z</div>
              <h3 className="text-2xl font-magic font-bold tracking-wide text-white">{BRAND_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Experience the true magic of Zanzibar with the island's premier tour operator. 
              We craft bespoke itineraries that blend luxury, adventure, and authentic culture.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-slate-800 p-2.5 rounded hover:bg-primary hover:text-white transition-colors border border-slate-700"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2.5 rounded hover:bg-primary hover:text-white transition-colors border border-slate-700"><Instagram size={18} /></a>
              <a href="#" className="bg-slate-800 p-2.5 rounded hover:bg-primary hover:text-white transition-colors border border-slate-700"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-magic font-bold mb-6 uppercase tracking-widest text-sm text-gold">Discover</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/tours" className="hover:text-primary transition-colors block hover:pl-2 duration-300">All Tours</Link></li>
              <li><Link to="/calculator" className="hover:text-primary transition-colors block hover:pl-2 duration-300">Safari Calculator</Link></li>
              <li><Link to="/transfers" className="hover:text-primary transition-colors block hover:pl-2 duration-300">Airport Transfers</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors block hover:pl-2 duration-300">Our Pricing</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors block hover:pl-2 duration-300">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-magic font-bold mb-6 uppercase tracking-widest text-sm text-gold">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-primary shrink-0 group-hover:text-white transition-colors" />
                <a href={`tel:${CONTACT_PHONE_1}`} className="group-hover:text-white transition-colors">{CONTACT_PHONE_1}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-primary shrink-0 group-hover:text-white transition-colors" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="group-hover:text-white transition-colors">{CONTACT_EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-magic font-bold mb-6 uppercase tracking-widest text-sm text-gold">Newsletter</h4>
            <p className="text-sm mb-4 text-slate-400">Join our mailing list for exclusive Zanzibar travel tips.</p>
            <form className="flex flex-col gap-2 mb-6 relative" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Enter your email" className="bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm w-full" />
               <button className="absolute right-1 top-1 bottom-1 bg-primary text-white px-4 rounded hover:bg-teal-700 transition-colors"><Send size={16}/></button>
            </form>
            
            {/* Payment Methods Placeholder */}
            <div className="mt-6">
               <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">We Accept</p>
               <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-6 bg-white p-1 rounded" alt="visa"/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 bg-white p-1 rounded" alt="mastercard"/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" className="h-6 bg-white p-1 rounded" alt="paypal"/>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p className="font-magic">&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};