import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE_1, OFFICE_ADDRESS } from '../constants';
import { sendBookingEmail } from '../services/emailService';
import { BookingRequest } from '../types';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Convert contact form to BookingRequest type for the service
    const requestData: BookingRequest = {
      fullName: formData.name,
      email: formData.email,
      phone: 'Not Provided',
      travelDate: '',
      travelers: 0,
      details: formData.message,
      type: 'contact',
      itemName: 'General Inquiry via Contact Page'
    };

    try {
      const success = await sendBookingEmail(requestData);
      if (success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-8">
           <div>
             <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4">Get in Touch</h1>
             <p className="text-slate-600 text-lg">
               Have a question about a tour? Want a custom quote? Our team is available 24/7 on WhatsApp, or send us an email using the form.
             </p>
           </div>
           
           <div className="space-y-6">
             <div className="flex items-start gap-5 group">
               <div className="bg-white p-4 rounded-full shadow-md text-primary group-hover:scale-110 transition-transform"><MapPin size={24} /></div>
               <div>
                 <h4 className="font-bold text-slate-800 text-lg">Visit Us</h4>
                 <p className="text-slate-600">{OFFICE_ADDRESS}</p>
               </div>
             </div>
             <div className="flex items-start gap-5 group">
               <div className="bg-white p-4 rounded-full shadow-md text-primary group-hover:scale-110 transition-transform"><Phone size={24} /></div>
               <div>
                 <h4 className="font-bold text-slate-800 text-lg">Call Us</h4>
                 <p className="text-slate-600">{CONTACT_PHONE_1}</p>
               </div>
             </div>
             <div className="flex items-start gap-5 group">
               <div className="bg-white p-4 rounded-full shadow-md text-primary group-hover:scale-110 transition-transform"><Mail size={24} /></div>
               <div>
                 <h4 className="font-bold text-slate-800 text-lg">Email Us</h4>
                 <p className="text-slate-600">{CONTACT_EMAIL}</p>
               </div>
             </div>
           </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 h-fit">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-6">We'll get back to you shortly.</p>
              <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline">Send another message</button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you?" 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-3 rounded text-sm flex items-center gap-2">
                    <AlertCircle size={16}/> Failed to send message.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition shadow-lg shadow-teal-900/20 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'submitting' ? <Loader className="animate-spin" /> : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default Contact;