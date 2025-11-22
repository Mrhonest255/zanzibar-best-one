
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Do I need a visa for Zanzibar?",
    answer: "Yes, most travelers require a visa. You can obtain a tourist visa on arrival at the airport (approx $50 USD) or apply for an E-Visa online before you travel. Citizens of some East African countries are exempt."
  },
  {
    question: "Is it safe to swim in the ocean?",
    answer: "Yes, Zanzibar's waters are generally very safe. However, be aware of sea urchins in some rocky areas and strong currents during tide changes. We recommend wearing water shoes for activities like the Safari Blue tour."
  },
  {
    question: "What vaccinations do I need?",
    answer: "Yellow Fever vaccination is required if traveling from a country with risk of yellow fever. We also recommend checking with your doctor regarding Malaria prophylaxis, although Zanzibar has a very low malaria rate compared to mainland Africa."
  },
  {
    question: "What currency should I bring?",
    answer: "The local currency is the Tanzanian Shilling (TZS), but US Dollars (printed after 2009) are widely accepted for tours and hotels. We recommend carrying small denominations for tips and local markets."
  },
  {
    question: "What is the dress code?",
    answer: "Zanzibar is a predominantly Muslim island. While swimwear is fine at the beach or hotel, please dress modestly (covering shoulders and knees) when visiting Stone Town or local villages."
  },
  {
    question: "Can I pay with credit card?",
    answer: "Most hotels and tour operators (including us!) accept credit cards, but there is often a surcharge of 5%. Cash is king for small purchases. ATMs are available in Stone Town and Paje."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-300">Everything you need to know before your trip.</p>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 py-16 flex-grow">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg flex items-center gap-3">
                  <HelpCircle size={20} className="text-primary shrink-0" />
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </button>
              
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
