import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { Calculator, Plane, Calendar, Users, Info } from 'lucide-react';

const SafariCalculator: React.FC = () => {
  const [destination, setDestination] = useState('mikumi');
  const [season, setSeason] = useState('high');
  const [people, setPeople] = useState(2);
  const [days, setDays] = useState(1);

  // Pricing Logic (Simulated)
  const priceData = useMemo(() => {
    let basePrice = 0;
    let parkFee = 0;
    let flightCost = 0;

    // Config per destination
    if (destination === 'mikumi') {
      basePrice = 200; // Vehicle, guide, food per day
      parkFee = 35;
      flightCost = 220; // Return flight
    } else if (destination === 'selous') {
      basePrice = 350; // More expensive camps/boats
      parkFee = 70;
      flightCost = 300;
    } else { // Serengeti
      basePrice = 600;
      parkFee = 83;
      flightCost = 600; // Expensive flight from ZNZ
    }

    // Multipliers
    const seasonMultiplier = season === 'high' ? 1.2 : 1.0;
    
    // People discount logic (Shared vehicle cost)
    // The more people, the cheaper the vehicle cost per person
    const vehicleCostPerPerson = (basePrice / people) * (people > 4 ? 1.5 : 1); // Slight increase in total vehicle cost for big groups but cheaper per pax

    // Total per person per day calculation roughly
    // This is simplified. Usually: Flight + (ParkFee + Lodge + (Vehicle/Pax)) * Days
    
    const lodgeCost = destination === 'serengeti' ? 300 : 150; // Avg per night
    const accommodationTotal = days > 1 ? (days - 1) * lodgeCost * seasonMultiplier : 0;

    const totalPerPerson = flightCost + (parkFee * days) + accommodationTotal + (vehicleCostPerPerson * days);
    
    return {
      perPerson: Math.round(totalPerPerson),
      total: Math.round(totalPerPerson * people),
      breakdown: {
        flight: flightCost,
        park: parkFee * days,
        accommodation: accommodationTotal,
        logistics: Math.round(vehicleCostPerPerson * days)
      }
    };
  }, [destination, season, people, days]);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      
      <div className="bg-slate-900 py-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Safari Price Calculator</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">Estimate the cost of your dream fly-in safari from Zanzibar.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Inputs */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Calculator size={24} className="text-primary" /> Configure Your Trip
            </h3>
            
            <div className="space-y-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Destination</label>
                <select 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="mikumi">Mikumi National Park (Short & Sweet)</option>
                  <option value="selous">Nyerere/Selous (Boat & Bush)</option>
                  <option value="serengeti">Serengeti (The Great Migration)</option>
                </select>
              </div>

              {/* Season */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Travel Season</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSeason('high')}
                    className={`p-3 rounded-lg border text-sm font-medium ${season === 'high' ? 'bg-primary/10 border-primary text-primary' : 'border-slate-200 text-slate-600'}`}
                  >
                    High Season<br/><span className="text-xs font-normal opacity-75">Jun-Oct, Dec-Feb</span>
                  </button>
                  <button 
                    onClick={() => setSeason('low')}
                    className={`p-3 rounded-lg border text-sm font-medium ${season === 'low' ? 'bg-primary/10 border-primary text-primary' : 'border-slate-200 text-slate-600'}`}
                  >
                    Low Season<br/><span className="text-xs font-normal opacity-75">Mar-May, Nov</span>
                  </button>
                </div>
              </div>

              {/* People */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Number of Travelers: {people}</label>
                <input 
                  type="range" 
                  min="1" 
                  max="12" 
                  value={people} 
                  onChange={(e) => setPeople(parseInt(e.target.value))}
                  className="w-full accent-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>1 Person</span>
                  <span>6 People</span>
                  <span>12 People</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Duration: {days} Day{days > 1 ? 's' : ''}</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(d => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      disabled={destination === 'serengeti' && d === 1} // Serengeti minimal 2 days usually
                      className={`flex-1 py-2 rounded border ${days === d ? 'bg-slate-800 text-white border-slate-800' : 'border-slate-200 text-slate-600'} ${destination === 'serengeti' && d === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {d} Day{d > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
                {destination === 'serengeti' && days === 1 && <p className="text-xs text-red-500 mt-1">Serengeti requires minimum 2 days due to flight distance.</p>}
              </div>

            </div>
          </div>

          {/* Output */}
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 h-fit sticky top-24">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Estimated Cost</h3>
            
            <div className="space-y-4 mb-8 border-b border-slate-200 pb-8">
               <div className="flex justify-between items-center">
                 <span className="text-slate-600">Price Per Person</span>
                 <span className="text-2xl font-bold text-primary">${priceData.perPerson}</span>
               </div>
               <div className="flex justify-between items-center pt-2 border-t border-slate-200 mt-2">
                 <span className="font-bold text-slate-800">Total Estimate</span>
                 <span className="text-3xl font-bold text-slate-900">${priceData.total}</span>
               </div>
               <p className="text-xs text-slate-500 text-right">Includes all taxes and fees.</p>
            </div>

            <div className="space-y-3 text-sm text-slate-600 mb-8">
               <h4 className="font-bold text-slate-800 mb-2">Cost Breakdown (Approx):</h4>
               <div className="flex justify-between">
                 <span className="flex items-center gap-2"><Plane size={14}/> Flights (Return)</span>
                 <span>${priceData.breakdown.flight}</span>
               </div>
               <div className="flex justify-between">
                 <span className="flex items-center gap-2"><Calendar size={14}/> Park Fees</span>
                 <span>${priceData.breakdown.park}</span>
               </div>
               {days > 1 && (
               <div className="flex justify-between">
                 <span className="flex items-center gap-2"><Info size={14}/> Accommodation & Meals</span>
                 <span>${priceData.breakdown.accommodation}</span>
               </div>
               )}
               <div className="flex justify-between">
                 <span className="flex items-center gap-2"><Users size={14}/> Guide & Vehicle Share</span>
                 <span>${priceData.breakdown.logistics}</span>
               </div>
            </div>

            <Button fullWidth variant="primary">Request Official Quote</Button>
            <p className="text-xs text-slate-400 mt-4 text-center">
              *Prices are estimates. Final price depends on flight availability and lodge choice.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SafariCalculator;