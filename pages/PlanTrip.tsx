
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { sendBookingEmail } from '../services/emailService';
import { BookingRequest } from '../types';
import { CheckCircle, AlertCircle, Loader, Calendar, Users, Mail } from 'lucide-react';
import { TOURS } from '../constants';

const PlanTrip: React.FC = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<BookingRequest>({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: 2,
    details: '',
    type: 'custom',
    itemName: 'Custom Itinerary Plan'
  });

  // Auto-fill form if user comes from a specific tour page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tourSlug = params.get('tour');
    
    if (tourSlug) {
      const tour = TOURS.find(t => t.slug === tourSlug);
      if (tour) {
        setFormData(prev => ({
          ...prev,
          type: tour.category === 'safari' ? 'safari' : 'tour',
          itemName: tour.title,
          details: `I am interested in booking the ${tour.title}. Please let me know availability.`
        }));
      }
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const success = await sendBookingEmail(formData);
      if (success) {
        setStatus('success');
        window.scrollTo(0, 0);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Header />
        <div className="flex-grow flex items-center justify-center px-4 py-20">
          <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center animate-fade-in-up border border-slate-100">
            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Request Sent Successfully!</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Asante sana, <strong>{formData.fullName}</strong>! We have received your booking details.
            </p>
            <div className="bg-teal-50 p-4 rounded-lg mb-8 text-left flex items-start gap-3 border border-teal-100">
              <Mail className="text-teal-600 mt-1 shrink-0" size={20} />
              <div className="text-sm text-slate-700">
                <p className="font-bold text-teal-800 mb-1">Check your inbox</p>
                <p>We have sent a confirmation email with a summary of your request to <strong>{formData.email}</strong>.</p>
              </div>
            </div>
            <div className="space-y-3">
              <Button onClick={() => { setStatus('idle'); setFormData({...formData, details: ''}); }} variant="primary" fullWidth>
                Plan Another Trip
              </Button>
              <Button asLink href="/" variant="white" fullWidth>
                Return Home
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      
      <div className="bg-slate-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534764432322-3d5d84498c09?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            {formData.type === 'custom' ? 'Plan Your Dream Trip' : 'Complete Your Booking'}
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            {formData.type === 'custom' 
              ? "Tell us what you love, and we'll handle the logistics." 
              : `Finalize your inquiry for ${formData.itemName}. No payment required yet.`}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 w-full">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
          {formData.itemName && formData.type !== 'custom' && (
             <div className="bg-teal-50 border-b border-teal-100 p-4 text-teal-800 text-sm font-medium flex items-center justify-center">
               You are inquiring about: <span className="font-bold ml-1">{formData.itemName}</span>
             </div>
          )}

          <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-8">
            
            {/* Section 1 */}
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> 
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" placeholder="e.g. john@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone / WhatsApp (with Country Code)</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" placeholder="e.g. +1 555 000 0000" />
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100"></div>

            {/* Section 2 */}
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> 
                Trip Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2"><Calendar size={16} className="inline mr-1"/> Estimated Date</label>
                  <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2"><Users size={16} className="inline mr-1"/> Travelers</label>
                  <input type="number" min="1" max="50" name="travelers" value={formData.travelers} onChange={handleChange} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {formData.type === 'custom' ? 'Tell us about your dream trip' : 'Additional Notes or Special Requests'}
                  </label>
                  <textarea 
                    name="details" 
                    rows={5}
                    required
                    value={formData.details} 
                    onChange={handleChange} 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all" 
                    placeholder={formData.type === 'custom' ? "E.g. We love snorkeling, history, and luxury hotels. Celebrating an anniversary." : "E.g. Any dietary requirements? Pick-up location?"}
                  />
                </div>
              </div>
            </div>

            {status === 'error' && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-2 border border-red-100">
                <AlertCircle size={20} />
                <span>Connection error. Please check your internet or try WhatsApp instead.</span>
              </div>
            )}

            <div className="pt-4">
              <Button 
                type="submit" 
                fullWidth 
                size="lg"
                disabled={status === 'submitting'} 
                className="text-lg shadow-xl shadow-primary/20"
              >
                {status === 'submitting' ? <span className="flex items-center justify-center gap-2"><Loader className="animate-spin" /> Processing...</span> : 'Submit Booking Request'}
              </Button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By submitting this form, you agree to our privacy policy. We reply within 24 hours.
              </p>
            </div>

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlanTrip;
