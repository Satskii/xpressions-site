import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-plum-950 text-white flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-orange-accent/20 border border-orange-accent/40 text-orange-accent flex items-center justify-center mx-auto text-3xl font-poppins font-black">
          404
        </div>
        <h1 className="font-poppins font-black text-3xl sm:text-4xl text-white">
          Stage Not Found
        </h1>
        <p className="text-sm text-lilac leading-relaxed">
          Looks like this festival stage doesn't exist or has moved. Let's get you back to the main arena!
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-accent hover:bg-orange-hover text-plum-950 font-poppins font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/events"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-plum-850 hover:bg-plum-800 text-white font-poppins font-semibold text-xs sm:text-sm border border-plum-700 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-orange-accent" />
            <span>Explore Events</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
