import React from 'react';
import { ScheduleSection } from '../components/ScheduleSection';
import { Calendar, MapPin, Plane, Train, Car, ShieldAlert, Sparkles, Navigation } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface SchedulePageProps {
  onRegisterInterest: () => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onRegisterInterest }) => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-plum-950 text-white py-14 border-b border-plum-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-plum-800 text-orange-accent text-xs font-semibold mb-3 border border-plum-700">
            <Calendar className="w-3.5 h-3.5" />
            <span>Timeline & Logistics</span>
          </div>
          <h1 className="font-poppins font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Programme Schedule & Venue Guide
          </h1>
          <p className="mt-3 font-inter text-base sm:text-lg text-lilac max-w-2xl mx-auto leading-relaxed">
            Plan your visit to XIM University, Bhubaneswar. Explore the 3-day programme phases and travel logistics.
          </p>
        </div>
      </div>

      {/* Main Schedule Explorer */}
      <ScheduleSection onRegisterInterest={onRegisterInterest} />

      {/* Venue & Travel Logistics Guide */}
      <section className="py-16 bg-plum-50/60 border-t border-plum-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-plum-100 text-plum-800 text-xs font-semibold mb-2">
              <Navigation className="w-3.5 h-3.5 text-orange-accent" />
              <span>Travel & Accessibility</span>
            </div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-plum-950">
              Getting to XIM University
            </h2>
            <p className="text-xs sm:text-sm text-plum-800/80 mt-1">
              Convenient connectivity from Bhubaneswar Airport (BBI) and Railway Station (BBS).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-plum-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-plum-800 text-orange-accent w-fit mb-4">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-bold text-lg text-plum-950">By Air</h3>
                <p className="mt-2 text-xs sm:text-sm text-plum-800/80 leading-relaxed">
                  Biju Patnaik International Airport (BBI) is situated ~20 km from the campus. Taxis (Ola/Uber) and university shuttle buses operate along the route.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-plum-100 text-xs font-semibold text-plum-600">
                Avg. Travel Time: 35 – 45 mins
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-plum-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-plum-800 text-orange-accent w-fit mb-4">
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-bold text-lg text-plum-950">By Train</h3>
                <p className="mt-2 text-xs sm:text-sm text-plum-800/80 leading-relaxed">
                  Bhubaneswar Railway Station (BBS) and Khurda Road Junction (KUR) are major hubs connected to all metropolitan cities across India.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-plum-100 text-xs font-semibold text-plum-600">
                Avg. Travel Time: 30 – 40 mins
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-plum-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-plum-800 text-orange-accent w-fit mb-4">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-bold text-lg text-plum-950">Campus Entry & Parking</h3>
                <p className="mt-2 text-xs sm:text-sm text-plum-800/80 leading-relaxed">
                  Dedicated vehicle parking spaces are designated near Gate 2 for registered delegates. Student security marshals guide visitors to respective auditoriums.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-plum-100 text-xs font-semibold text-plum-600">
                Valid College ID Mandatory
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
