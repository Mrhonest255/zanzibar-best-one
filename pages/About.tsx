import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-6 text-center">About TripMate Zanzibar</h1>
        <div className="prose prose-lg prose-slate mx-auto">
          <p>
            Founded by a team of local Zanzibaris passionate about their heritage, TripMate Zanzibar 
            has grown from a small desk in Stone Town to one of the island's most trusted tour operators.
          </p>
          <p>
            Our mission is simple: <strong>To show you the real Zanzibar.</strong> Not just the hotel pool, but the 
            spices, the history, the hidden sandbanks, and the wild savannahs of Tanzania.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1586861244266-1e9187643143?q=80&w=2000&auto=format&fit=crop" 
            alt="Zanzibar Boat" 
            className="rounded-xl shadow-lg my-8 w-full object-cover h-96"
          />
          <h3>Why Choose Us?</h3>
          <ul>
             <li><strong>Local Expertise:</strong> We don't just work here; we live here.</li>
             <li><strong>Sustainable Tourism:</strong> We employ locals and support conservation efforts in Menai Bay.</li>
             <li><strong>Fair Pricing:</strong> No tourist traps. Just honest, transparent pricing.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;