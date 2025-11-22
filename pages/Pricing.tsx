import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4">Transparent Pricing</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Choose the perfect tour package that fits your budget. No hidden fees, just pure adventure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Day Tours */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Day Excursions</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for flexible travelers.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">$35 - $179</span>
              <span className="text-slate-400"> / person</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Hotel Pickup/Dropoff included</span></li>
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Entry Fees included</span></li>
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Professional Guide</span></li>
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Lunch (Full day tours)</span></li>
            </ul>
            <Link to="/tours"><Button variant="outline" fullWidth>Browse Tours</Button></Link>
          </div>

          {/* Packages */}
          <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-8 flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-secondary text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">Best Value</div>
            <h3 className="text-xl font-bold mb-2">Holiday Packages</h3>
            <p className="text-slate-400 text-sm mb-6">Multi-day combos for maximum savings.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">$120 - $450</span>
              <span className="text-slate-400"> / person</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow text-slate-300">
              <li className="flex items-start gap-2 text-sm"><Check size={16} className="text-secondary mt-0.5"/> <span>All Transfers Included</span></li>
              <li className="flex items-start gap-2 text-sm"><Check size={16} className="text-secondary mt-0.5"/> <span>Combined Discounts</span></li>
              <li className="flex items-start gap-2 text-sm"><Check size={16} className="text-secondary mt-0.5"/> <span>Seamless Itinerary</span></li>
              <li className="flex items-start gap-2 text-sm"><Check size={16} className="text-secondary mt-0.5"/> <span>Dedicated Support</span></li>
            </ul>
            <Link to="/tours"><Button variant="secondary" fullWidth>View Packages</Button></Link>
          </div>

          {/* Safaris */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Fly-in Safaris</h3>
            <p className="text-slate-500 text-sm mb-6">Premium wildlife experiences.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">$450+</span>
              <span className="text-slate-400"> / person</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Return Flights from ZNZ</span></li>
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Private/Shared Jeep</span></li>
              <li className="flex items-start gap-2 text-sm text-slate-600"><Check size={16} className="text-green-500 mt-0.5"/> <span>Park Fees & Taxes</span></li>
              <li className="flex items-start gap-2 text-sm text-slate-600"><X size={16} className="text-red-400 mt-0.5"/> <span>Tips not included</span></li>
            </ul>
            <Link to="/calculator"><Button variant="outline" fullWidth>Calculate Cost</Button></Link>
          </div>

        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
             <h3 className="text-2xl font-serif font-bold mb-4">Group Discounts</h3>
             <p className="text-slate-600 mb-4">Traveling with a large family or group of friends? We offer tiered pricing.</p>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white p-4 rounded border border-slate-200 text-center">
                 <span className="block font-bold text-slate-800">4-5 Pax</span>
                 <span className="text-green-600 font-bold">5% Off</span>
               </div>
               <div className="bg-white p-4 rounded border border-slate-200 text-center">
                 <span className="block font-bold text-slate-800">6+ Pax</span>
                 <span className="text-green-600 font-bold">10% Off</span>
               </div>
             </div>
           </div>
           <div>
             <h3 className="text-2xl font-serif font-bold mb-4">Children Policy</h3>
             <ul className="space-y-3">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-700">Infants (0-2 yrs)</span>
                  <span className="font-bold text-slate-800">Free</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-700">Children (3-11 yrs)</span>
                  <span className="font-bold text-slate-800">50% Off (Day Tours)</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-700">Safari Flights</span>
                  <span className="font-bold text-slate-800">Full Price usually applies</span>
                </li>
             </ul>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;