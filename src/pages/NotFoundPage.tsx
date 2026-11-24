import React from "react";
import { Link } from "react-router-dom";
import { Home, Sparkles } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
      <div className="max-w-md w-full text-center space-y-6 bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#DED3C5] shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
          <span>Page Not Found</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#241E1A]">
          404
        </h1>
        <p className="text-sm text-[#68615C] font-sans">
          The look or page you are searching for might have moved or is unavailable.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-wider font-semibold hover:bg-[#A87556] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#241E1A] text-[#241E1A] text-xs uppercase tracking-wider font-semibold hover:bg-[#241E1A] hover:text-[#F6F2EB] transition-colors"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
