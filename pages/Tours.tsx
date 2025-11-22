import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TourCard } from '../components/TourCard';
import { TOURS } from '../constants';
import { Filter } from 'lucide-react';

const Tours: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'day' | 'package' | 'safari'>('all');

  const filteredTours = filter === 'all' 
    ? TOURS 
    : TOURS.filter(tour => tour.category === filter);

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'day', label: 'Day Tours' },
    { id: 'package', label: 'Holiday Packages' },
    { id: 'safari', label: 'Safaris' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      
      <div className="bg-slate-900 pt-32 pb-16 px-4 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590523741831-ab7f4196c914?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Tours</h1>
           <p className="text-lg text-slate-300">Discover the best of Zanzibar with our carefully curated tours and experiences.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-slate-500 mr-4">
            <Filter size={20} />
            <span className="font-semibold">Filter by:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No tours found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Inspiration Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">Travel Inspiration</h3>
          <p className="text-slate-600 mb-8">
            Not sure what to choose? Most travelers combine 2-3 day tours with a short safari. 
            We recommend starting with Stone Town for culture, then moving to the beaches of Nungwi, 
            and capping it off with a Mikumi day trip.
          </p>
          <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer">
             <img src="https://picsum.photos/seed/video/1200/600" alt="Video Placeholder" className="w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center pl-1 shadow-2xl">
                   <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-primary border-b-[15px] border-b-transparent"></div>
                </div>
             </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">* Promotional Video Placeholder</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;