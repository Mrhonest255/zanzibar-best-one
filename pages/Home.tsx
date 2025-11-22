
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Shield, Globe, Heart, Sun, ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { TourCard } from '../components/TourCard';
import { TOURS, WHATSAPP_LINK, BRAND_NAME, GALLERY_IMAGES, HERO_SLIDES } from '../constants';

const Home: React.FC = () => {
  const featuredTours = TOURS.slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-[#fdfbf7]">
      <Header />

      {/* --- HERO SECTION WITH SLIDER & GOLD BOX OVERLAY --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Slides */}
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />

        {/* Content */}
        {/* Adjusted padding to move content up (pt-32) and removed negative margin to separate box */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full max-w-6xl mx-auto pt-32 md:pt-40">
           {/* Massive DISCOVER Text */}
           <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-magic font-bold text-white drop-shadow-2xl relative z-0 tracking-tighter select-none text-white/90">
             DISCOVER
           </h1>
           
           {/* Gold Overlay Box - Separated with mt-6 instead of negative margin */}
           <div className="bg-[#cca43b] p-8 md:p-12 w-full max-w-4xl mx-auto mt-6 relative z-10 shadow-2xl animate-fade-in-up flex flex-col items-center rounded-sm">
              <div className="h-1 w-20 bg-white mb-6 shadow-sm"></div>
              <p className="text-white font-serif italic text-xl md:text-3xl mb-8 leading-relaxed drop-shadow-md font-medium">
                "Curated luxury tours, wild safaris, and seamless transfers. Experience the island like never before."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                 <Link to="/plan-trip">
                    <Button variant="white" size="lg" className="px-8 py-4 text-sm uppercase tracking-widest font-bold shadow-lg w-full sm:w-auto">
                       Plan My Trip
                    </Button>
                 </Link>
                 <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="lg" className="px-8 py-4 text-sm uppercase tracking-widest font-bold border-white text-white hover:bg-white hover:text-[#cca43b] w-full sm:w-auto shadow-md">
                       <MessageCircle size={18} className="mr-2"/> Chat Now
                    </Button>
                 </a>
              </div>
           </div>
        </div>

        {/* Slider Controls/Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
           {HERO_SLIDES.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
              />
           ))}
        </div>
      </section>


      {/* --- 3D FEATURE CARDS --- */}
      <section className="relative z-20 -mt-10 px-4 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: "Local Experts", desc: "Native guides who know every hidden gem." },
            { icon: Star, title: "VIP Treatment", desc: "Private transfers and exclusive access." },
            { icon: Shield, title: "100% Secure", desc: "Book with confidence and flexible terms." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-10 shadow-2xl shadow-black/5 border-t-4 border-[#cca43b] transform hover:-translate-y-2 transition-all duration-500 group">
               <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                 <feature.icon size={32} />
               </div>
               <h3 className="text-2xl font-magic font-bold text-slate-800 mb-3">{feature.title}</h3>
               <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* --- CINEMATIC "ADVENTURE" SECTION (Like Screenshot 2) --- */}
      <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <span className="text-red-600 font-bold tracking-[0.4em] text-xs uppercase mb-6 block animate-pulse">June 2025 — The Archipelago</span>
            <h2 className="text-6xl md:text-9xl font-magic font-bold mb-2 text-white tracking-tight">THE ZANZIBAR</h2>
            <h2 className="text-6xl md:text-9xl font-magic font-bold mb-12 text-red-900/80 italic tracking-tight" style={{ textShadow: '2px 2px 0px #500' }}>ADVENTURE</h2>
            <div className="h-1 w-24 bg-white mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-slate-300 font-serif italic mb-12 max-w-2xl mx-auto leading-relaxed">
              "An exclusive 7-day Grand Tour through the most breathtaking islands in Africa. Experience the passion of travel in its purest form."
            </p>
            <div className="flex gap-6 justify-center">
               <Link to="/tours">
                 <Button variant="primary" className="bg-red-800 hover:bg-red-700 text-white border-none rounded-none px-10 py-4 uppercase tracking-widest text-sm font-bold">
                    View Itinerary
                 </Button>
               </Link>
               <Link to="/plan-trip">
                 <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none px-10 py-4 uppercase tracking-widest text-sm font-bold">
                    Register Now
                 </Button>
               </Link>
            </div>
         </div>
      </section>


      {/* --- POPULAR TOURS --- */}
      <section className="py-24 px-4 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#cca43b] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Unforgettable Experiences</span>
            <h2 className="text-5xl md:text-6xl font-magic font-bold text-slate-900 mb-6">Curated Collections</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link to="/tours">
              <Button variant="outline" size="lg" className="border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-12 py-4 rounded-none tracking-widest text-sm uppercase font-bold transition-all">
                View All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* --- PARALLAX QUOTE BREAK --- */}
      <section className="py-40 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590523741831-ab7f4196c914?q=80&w=2574&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-4xl md:text-6xl font-magic font-bold mb-8 leading-tight">
            "Zanzibar is not just a place,<br/> it is a <span className="text-[#cca43b] italic font-serif">feeling</span>."
          </h2>
          <p className="text-xl text-slate-200 font-serif italic mb-10">Let us take you there.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-[#cca43b] hover:text-white border-none shadow-2xl px-12 py-4 rounded-none uppercase tracking-widest font-bold">
              Start Planning
            </Button>
          </Link>
        </div>
      </section>


      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute -left-20 top-20 text-slate-50 text-[300px] font-magic font-bold select-none -z-10 opacity-50">WHY</div>
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#cca43b] z-0"></div>
               <img src="https://images.unsplash.com/photo-1540202404-a671b47ee758?q=80&w=1000&auto=format&fit=crop" alt="Luxury Resort" className="relative z-10 w-full shadow-2xl shadow-slate-300" />
               <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl z-20 max-w-xs border-l-4 border-primary hidden md:block">
                  <p className="font-serif italic text-slate-600">"The attention to detail was immaculate. A truly 5-star experience."</p>
                  <div className="flex text-[#cca43b] mt-4"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
               </div>
            </div>
            <div>
               <h2 className="text-4xl md:text-5xl font-magic font-bold text-slate-900 mb-8">The {BRAND_NAME} Difference</h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="bg-primary/10 p-4 h-fit text-primary"><Globe size={24} /></div>
                     <div>
                        <h4 className="text-xl font-bold font-serif mb-2">Sustainable & Local</h4>
                        <p className="text-slate-600 leading-relaxed">We are 100% locally owned. Your booking directly supports Zanzibar families and conservation projects in Menai Bay.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="bg-secondary/10 p-4 h-fit text-secondary"><Heart size={24} /></div>
                     <div>
                        <h4 className="text-xl font-bold font-serif mb-2">Tailored to You</h4>
                        <p className="text-slate-600 leading-relaxed">No cookie-cutter itineraries. We customize every detail based on your pace, interests, and budget.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="bg-[#cca43b]/10 p-4 h-fit text-[#cca43b]"><Sun size={24} /></div>
                     <div>
                        <h4 className="text-xl font-bold font-serif mb-2">24/7 On-Ground Support</h4>
                        <p className="text-slate-600 leading-relaxed">From the moment you land until you depart, our concierge team is just a WhatsApp message away.</p>
                     </div>
                  </div>
               </div>
               <div className="mt-12">
                  <Link to="/about" className="text-primary font-bold uppercase tracking-widest hover:text-slate-800 transition-colors flex items-center gap-2">
                    Read Our Story <ArrowRight size={16} />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* --- VISUAL GALLERY (INSTAGRAM GRID) --- */}
      <section className="py-4 bg-black">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-64 md:h-80">
            {GALLERY_IMAGES.map((img, idx) => (
               <div key={idx} className="relative group overflow-hidden h-full cursor-pointer border border-black/50">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                     <Instagram size={32} />
                  </div>
               </div>
            ))}
         </div>
         <div className="bg-black text-white py-6 text-center border-t border-white/10">
            <p className="font-magic tracking-[0.2em] text-sm">FOLLOW US @ZANZIBARBESTONE</p>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
