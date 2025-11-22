import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { TRANSFERS, WHATSAPP_LINK } from '../constants';
import { Car, Check, Plane, MapPin, Clock, ShieldCheck } from 'lucide-react';

const Transfers: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      
      <div className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Premium Transfers</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">Reliable, air-conditioned, and comfortable transport across Zanzibar.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Flight Monitoring</h3>
              <p className="text-slate-500 text-sm">We track your flight. If you are delayed, our driver waits for you at no extra cost.</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
              <p className="text-slate-500 text-sm">Licensed vehicles, professional English-speaking drivers, and full insurance.</p>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2">Fixed Pricing</h3>
              <p className="text-slate-500 text-sm">The price you see is the price you pay. Tolls, parking, and taxes included.</p>
           </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
           <h2 className="text-3xl font-serif font-bold text-slate-800">Transfer Rates</h2>
           <div className="h-px bg-slate-200 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRANSFERS.map(transfer => (
            <div key={transfer.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 overflow-hidden flex flex-col">
              <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                 <div className="flex items-center gap-2 text-slate-700 font-bold">
                   <MapPin size={18} className="text-secondary" />
                   <span className="text-sm">Zone Transfer</span>
                 </div>
                 <Car size={20} className="text-slate-400" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="font-bold text-lg text-slate-800 mb-2 min-h-[3.5rem] flex items-center">{transfer.route}</h4>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                   <span className="bg-slate-100 px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide">{transfer.vehicleType}</span>
                   <span>•</span>
                   <span>{transfer.capacity}</span>
                </div>
                
                <ul className="text-sm text-slate-500 space-y-2 mb-6 flex-grow">
                  {transfer.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" /> 
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-slate-50">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-xs text-slate-400 font-semibold uppercase">One Way</span>
                    <span className="text-3xl font-bold text-primary">${transfer.price}</span>
                  </div>
                  <a href={`${WHATSAPP_LINK}?text=I want to book a transfer: ${transfer.route} (${transfer.vehicleType})`} target="_blank" rel="noreferrer">
                    <Button fullWidth variant="primary" size="sm">Book via WhatsApp</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
           <div className="flex-grow">
             <h3 className="text-2xl font-serif font-bold mb-2">Need a Custom Trip?</h3>
             <p className="text-teal-100">We also offer full-day driver hire for customized island tours. Visit multiple beaches, caves, and restaurants at your own pace.</p>
           </div>
           <div className="flex-shrink-0">
             <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
               <Button variant="secondary" size="lg">Chat with Support</Button>
             </a>
           </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Transfers;