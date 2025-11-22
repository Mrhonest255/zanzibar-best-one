
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { TOURS, WHATSAPP_LINK } from '../constants';
import { CheckCircle, Clock, MapPin, ShieldCheck, Info, Camera, Star, FileText, Calendar } from 'lucide-react';

const TourDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'included' | 'policies'>('overview');
  
  const tour = TOURS.find(t => t.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Tour Not Found</h2>
            <Link to="/tours"><Button>Back to Tours</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const bookingMessage = `Hello Zanzibar Best One, I would like to book the *${tour.title}*. Please let me know availability.`;
  const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col font-sans">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${tour.image})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-10 pb-20">
           <div className="max-w-7xl mx-auto animate-fade-in-up">
             <div className="flex items-center gap-2 text-sm mb-6 text-slate-300 font-medium tracking-wide uppercase">
               <Link to="/" className="hover:text-gold transition-colors">Home</Link> / 
               <Link to="/tours" className="hover:text-gold transition-colors">Collections</Link> / 
               <span className="text-gold border-b border-gold">{tour.title}</span>
             </div>
             
             <div className="flex flex-wrap items-center gap-4 mb-4">
               {tour.badge && <span className="bg-gold text-slate-900 text-xs font-bold px-4 py-1.5 uppercase tracking-widest font-magic">{tour.badge}</span>}
               <div className="flex items-center gap-1 text-gold text-sm font-bold">
                  <Star size={16} fill="currentColor" />
                  <span>{tour.rating}</span>
                  <span className="text-slate-300 font-normal">({tour.reviews} reviews)</span>
               </div>
             </div>

             <h1 className="text-4xl md:text-6xl lg:text-7xl font-magic font-bold mb-8 leading-none drop-shadow-2xl max-w-4xl">{tour.title}</h1>
             
             <div className="flex flex-wrap gap-8 text-sm md:text-base font-medium text-slate-200 border-t border-white/20 pt-6 w-fit">
               <div className="flex items-center gap-3">
                 <Clock className="text-gold" size={24} /> 
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase">Duration</span>
                    <span className="font-serif">{tour.duration}</span>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <MapPin className="text-gold" size={24} /> 
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase">Location</span>
                    <span className="font-serif">Zanzibar, Tanzania</span>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <ShieldCheck className="text-gold" size={24} /> 
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 uppercase">Guarantee</span>
                    <span className="font-serif">Best Price</span>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16 relative -mt-20 z-20">
        
        {/* Main Content */}
        <div className="lg:col-span-2 bg-white shadow-2xl shadow-slate-200 rounded-none p-8 md:p-12">
          
          {/* Quick Summary */}
          <div className="mb-12 border-l-4 border-gold pl-6">
             <p className="text-xl text-slate-700 leading-relaxed font-serif italic">
               "{tour.shortDescription}"
             </p>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-slate-100 mb-8">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
              {['overview', 'itinerary', 'included', 'policies'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)} 
                  className={`pb-4 font-bold text-sm uppercase tracking-widest transition-colors relative ${
                    activeTab === tab 
                      ? 'text-slate-900' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"></span>}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="prose prose-slate max-w-none font-sans">
              {activeTab === 'overview' && (
                <div className="animate-fade-in space-y-8">
                  <div>
                    <h3 className="text-3xl font-magic font-bold text-slate-800 mb-4">About this Experience</h3>
                    <p className="text-slate-600 leading-loose text-lg font-light">{tour.longDescription}</p>
                  </div>
                  
                  {tour.gallery && (
                    <div className="grid grid-cols-2 gap-4 mt-8">
                       {tour.gallery.map((img, idx) => (
                         <img key={idx} src={img} alt="Gallery" className="shadow-lg hover:opacity-90 transition-opacity cursor-pointer object-cover h-56 w-full" />
                       ))}
                    </div>
                  )}

                  <div className="bg-blue-50 p-6 flex gap-4 items-start mt-8 border-l-4 border-blue-500">
                    <Info size={24} className="text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-blue-900 font-bold m-0 mb-2 font-magic uppercase tracking-wide">Important Note</h4>
                      <p className="text-blue-800 text-sm m-0">Pickup times vary based on your hotel location. We will confirm the exact time via WhatsApp after booking.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-magic font-bold text-slate-800 mb-8">Highlights & Activities</h3>
                  <ul className="grid grid-cols-1 gap-6 list-none pl-0">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-6 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                         <span className="text-4xl font-serif font-bold text-slate-200">0{index + 1}</span>
                         <span className="text-slate-800 font-medium text-lg">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'included' && (
                <div className="animate-fade-in">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div>
                       <h4 className="font-magic font-bold text-slate-800 mb-6 text-xl">Included</h4>
                       <ul className="space-y-4 pl-0">
                         {tour.includes.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-base text-slate-600">
                             <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0"/> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                     <div>
                       <h4 className="font-magic font-bold text-slate-800 mb-6 text-xl">What to Bring</h4>
                       <ul className="space-y-4 pl-0">
                         {tour.whatToBring.map((item, i) => (
                           <li key={i} className="flex items-start gap-3 text-base text-slate-600">
                             <Camera size={20} className="text-gold mt-0.5 shrink-0"/> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                </div>
              )}

              {activeTab === 'policies' && (
                <div className="animate-fade-in space-y-10">
                  <div>
                    <h4 className="font-magic font-bold text-slate-800 mb-4 flex items-center gap-3"><FileText className="text-slate-400" size={24}/> Cancellation Policy</h4>
                    <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
                      <p className="text-slate-700 leading-relaxed m-0">
                        {tour.cancellationPolicy}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-magic font-bold text-slate-800 mb-4 flex items-center gap-3"><Calendar className="text-slate-400" size={24}/> Booking Terms</h4>
                    <ul className="space-y-3 pl-0 list-none">
                       <li className="text-slate-600 flex gap-4 items-center border-b border-slate-100 pb-2">
                         <div className="h-2 w-2 bg-gold rotate-45 shrink-0" />
                         Payment available in Cash (USD/TZS) or Credit Card (+5%).
                       </li>
                       <li className="text-slate-600 flex gap-4 items-center border-b border-slate-100 pb-2">
                         <div className="h-2 w-2 bg-gold rotate-45 shrink-0" />
                         Deposit required for multi-day safari packages.
                       </li>
                       <li className="text-slate-600 flex gap-4 items-center border-b border-slate-100 pb-2">
                         <div className="h-2 w-2 bg-gold rotate-45 shrink-0" />
                         Free for children under 3 years (excluding flights).
                       </li>
                    </ul>
                  </div>
                </div>
              )}
          </div>
        </div>

        {/* Sidebar Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 text-white p-8 sticky top-24 shadow-2xl z-20">
             <div className="text-center mb-8 pb-8 border-b border-slate-700">
               <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">Starting From</p>
               <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-magic font-bold text-white">${tour.price}</span>
                  <span className="text-slate-400 font-medium">{tour.priceLabel}</span>
               </div>
             </div>

             <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 uppercase tracking-wider text-xs">Duration</span>
                  <span className="font-bold text-white">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 uppercase tracking-wider text-xs">Guide</span>
                  <span className="font-bold text-white">English Speaking</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 uppercase tracking-wider text-xs">Availability</span>
                  <span className="font-bold text-green-400">Instant Confirmation</span>
                </div>
             </div>

             <div className="space-y-4">
               <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block w-full group">
                 <Button fullWidth variant="primary" size="lg" className="bg-gold text-slate-900 hover:bg-white hover:text-slate-900 font-bold rounded-none shadow-none">
                    Book via WhatsApp
                 </Button>
               </a>
               <Link to={`/plan-trip?tour=${tour.slug}`}>
                 <Button fullWidth variant="outline" className="border-slate-600 text-slate-300 hover:border-white hover:text-white rounded-none">
                    Custom Inquiry
                 </Button>
               </Link>
             </div>
             
             <div className="mt-8 text-center">
               <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Secure Payment</p>
               <div className="flex justify-center gap-3 opacity-50 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-4 bg-white px-1" alt="visa"/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-4 bg-white px-1" alt="mastercard"/>
               </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetails;