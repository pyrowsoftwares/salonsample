import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Shield,
} from "lucide-react";
import { getServiceBySlug, serviceCategories } from "../data/services";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const category = serviceCategories.find((cat) => cat.slug === service.categorySlug);
  const relatedServices = category
    ? category.services.filter((s) => s.slug !== service.slug).slice(0, 3)
    : [];

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#FAF7F2] py-4 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-[#68615C]">
          <Link to="/services" className="hover:text-[#241E1A] flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
          <span>/</span>
          <span>{service.category}</span>
          <span>/</span>
          <span className="text-[#241E1A] font-semibold">{service.name}</span>
        </div>
      </div>

      {/* Main Detail Header */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
              <span>{service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif text-[#241E1A] leading-tight">
              {service.name}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-2 border-y border-[#DED3C5] text-sm font-sans">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A87556]" />
                <span className="text-[#68615C]">Duration:</span>
                <span className="font-semibold text-[#241E1A]">{service.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#68615C]">Pricing:</span>
                <span className="font-semibold text-[#241E1A]">
                  {service.isPriceFrom ? `From ${service.startingPrice}` : service.startingPrice}
                </span>
                <span className="text-xs text-[#A87556] italic">(*Demo rate)</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#34302D]/90 font-sans leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={`/book?service=${service.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#241E1A] text-[#F6F2EB] text-xs uppercase tracking-widest font-medium hover:bg-[#A87556] transition-all duration-300 shadow-md"
              >
                <span>Book This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#241E1A] text-[#241E1A] text-xs uppercase tracking-widest font-medium hover:bg-[#241E1A] hover:text-[#F6F2EB] transition-colors"
              >
                <span>Ask Stylist a Question</span>
              </Link>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5">
            <div className="aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF7F2]">
              <ImageWithFallback
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For & What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Suitable For */}
          <div className="bg-[#F6F2EB] p-8 rounded-2xl border border-[#DED3C5] space-y-4">
            <h2 className="font-serif text-2xl text-[#241E1A]">
              Ideal Preferences & Hair Profiles
            </h2>
            <ul className="space-y-3 font-sans text-sm text-[#34302D]">
              {service.suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A87556] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect */}
          <div className="bg-[#F6F2EB] p-8 rounded-2xl border border-[#DED3C5] space-y-4">
            <h2 className="font-serif text-2xl text-[#241E1A]">
              What to Expect During Your Session
            </h2>
            <ol className="space-y-3 font-sans text-sm text-[#34302D]">
              {service.whatToExpect.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EAE2D8] text-[#A87556] font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Aftercare Tips */}
      {service.aftercareTips && service.aftercareTips.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB] border-t border-[#DED3C5]/80">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#DED3C5] space-y-4">
              <div className="flex items-center gap-2 text-[#A87556]">
                <Shield className="w-5 h-5" />
                <h3 className="font-serif text-2xl text-[#241E1A]">
                  Recommended Aftercare & Maintenance
                </h3>
              </div>
              <ul className="space-y-2.5 font-sans text-sm text-[#34302D]/90">
                {service.aftercareTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#A87556] font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-t border-[#DED3C5]/80">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
                Common Questions
              </span>
              <h2 className="text-3xl font-serif text-[#241E1A]">
                Frequently Asked
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F2EB] p-6 rounded-xl border border-[#DED3C5] space-y-2"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#A87556] shrink-0 mt-1" />
                    <h3 className="font-serif text-lg text-[#241E1A] font-medium">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#68615C] font-sans pl-7 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB] border-t border-[#DED3C5]/80">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#241E1A]">
              Explore Related Services in {service.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.slug}`}
                  className="group bg-[#FAF7F2] p-5 rounded-xl border border-[#DED3C5] hover:border-[#A87556] transition-all"
                >
                  <p className="font-serif text-xl text-[#241E1A] group-hover:text-[#A87556] transition-colors">
                    {rel.name}
                  </p>
                  <p className="text-xs text-[#68615C] font-sans mt-1 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs font-sans text-[#34302D] pt-2 border-t border-[#DED3C5]/60">
                    <span>{rel.duration}</span>
                    <span className="font-semibold text-[#A87556]">
                      {rel.isPriceFrom ? `From ${rel.startingPrice}` : rel.startingPrice}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
