
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Tour } from '../types';
import { Button } from './Button';

interface TourCardProps {
  tour: Tour;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group card-3d-container h-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full card-3d relative">
        
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {tour.badge && (
            <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-none shadow-lg uppercase tracking-widest font-magic">
              {tour.badge}
            </span>
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center gap-1 text-gold text-sm font-semibold">
              <Star size={14} fill="currentColor" />
              <span>{tour.rating}</span>
              <span className="text-slate-300 font-normal ml-1">({tour.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col relative bg-white">
          <div className="mb-4 flex-grow">
            <h3 className="text-xl font-bold text-slate-800 mb-2 font-magic leading-tight group-hover:text-primary transition-colors">
              {tour.title}
            </h3>
            <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4 font-sans">
              {tour.shortDescription}
            </p>
            
            {/* Meta Data */}
            <div className="flex flex-wrap gap-3 text-xs text-slate-500 uppercase tracking-wide font-bold">
              <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                <Clock size={14} className="text-primary" />
                <span>{tour.duration}</span>
              </div>
              {tour.category === 'safari' && (
                <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                  <Users size={14} className="text-primary" />
                  <span>Private/Shared</span>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Starting From</span>
              <div className="text-primary font-bold text-xl font-serif">
                ${tour.price} <span className="text-xs text-slate-500 font-normal font-sans">{tour.priceLabel}</span>
              </div>
            </div>
            <Link to={`/tours/${tour.slug}`}>
              <Button size="sm" variant="outline" className="rounded-none !px-5 border-slate-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                Explore
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};