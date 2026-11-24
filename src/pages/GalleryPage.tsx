import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Sparkles, Filter, Maximize2, ArrowUpRight } from "lucide-react";
import { galleryItems, GalleryItem } from "../data/gallery";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Looks" },
    { id: "haircuts", label: "Haircuts & Styling" },
    { id: "colour", label: "Hair Colour & Balayage" },
    { id: "care", label: "Hair & Skin Care" },
    { id: "bridal", label: "Bridal Artistry" },
    { id: "nails", label: "Nails & Hands" },
    { id: "studio", label: "Studio Atmosphere" },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const currentItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] || null : null;

  const handleNext = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  }, [selectedItemIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItemIndex]);

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
            <span>Curated Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#241E1A]">
            The Aurel Lookbook
          </h1>
          <p className="text-base sm:text-lg text-[#34302D]/90 font-sans max-w-xl mx-auto">
            A visual chronicle of haircut geometry, delicate balayage gradations, and timeless celebratory styling.
          </p>
          <div className="p-3 bg-[#EAE2D8]/60 rounded-xl max-w-xl mx-auto text-xs text-[#68615C] font-sans">
            Curated styling portfolio and color transformations from our Anna Nagar lounge.
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[72px] z-30 bg-[#F6F2EB]/95 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-[#A87556] shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedItemIndex(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#241E1A] text-[#F6F2EB]"
                  : "bg-[#FAF7F2] border border-[#DED3C5] text-[#34302D] hover:bg-[#EAE2D8]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB] flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(index)}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-[#FAF7F2] border border-[#DED3C5] hover:border-[#A87556] shadow-xs hover:shadow-xl transition-all"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItemIndex(index);
                  }
                }}
                aria-label={`Open photo: ${item.title}`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Always-visible category badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-semibold tracking-wider uppercase bg-[#241E1A]/80 backdrop-blur-md text-[#FAF7F2] border border-white/10 shadow-xs">
                    <Sparkles className="w-2.5 h-2.5 text-[#A87556]" />
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Permanent gradient overlay: Look title always visible, extra details & actions revealed on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1916]/95 via-[#1E1916]/40 to-transparent p-5 sm:p-6 flex flex-col justify-end text-[#F6F2EB] transition-all duration-300">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#A87556] font-semibold block">
                      Aurel Signature
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium leading-snug group-hover:text-[#E8C5A5] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Additional content shown on hover ("if I come there add any other to show") */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                    <p className="text-xs text-[#DED3C5]/90 font-sans mt-2.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[#A87556] font-semibold group-hover:text-[#E8C5A5]">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Tap to enlarge</span>
                      </span>

                      <Link
                        to="/book"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#A87556] text-[#FAF7F2] hover:bg-[#8D5F43] transition-colors shadow-xs"
                      >
                        <span>Book Style</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-[#241E1A]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[#34302D]/80 text-[#F6F2EB] hover:bg-[#A87556] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A87556]"
            aria-label="Close lightbox (Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-[#34302D]/80 text-[#F6F2EB] hover:bg-[#A87556] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A87556]"
            aria-label="Previous photo (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-[#34302D]/80 text-[#F6F2EB] hover:bg-[#A87556] transition-colors focus:outline-none focus:ring-2 focus:ring-[#A87556]"
            aria-label="Next photo (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Content container */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#241E1A] rounded-2xl overflow-hidden border border-[#34302D] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#241E1A] text-[#F6F2EB] space-y-1">
              <div className="flex items-center justify-between text-xs text-[#A87556] uppercase tracking-wider font-semibold">
                <span>{currentItem.categoryLabel}</span>
                <span>
                  {selectedItemIndex! + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-medium">{currentItem.title}</h3>
              <p className="text-xs sm:text-sm text-[#DED3C5]/80 font-sans leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
