import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, CheckCircle2, Shield, Heart } from "lucide-react";
import { salonConfig } from "../data/salonConfig";
import { sampleTeamMembers } from "../data/team";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="bg-[#FAF7F2] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#DED3C5]/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D8] text-[#241E1A] text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A87556]" />
            <span>Our Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#241E1A] leading-tight">
            Designed around real people, <br />
            <span className="italic font-light text-[#A87556]">
              crafted for your everyday life.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#34302D]/90 font-sans max-w-2xl mx-auto leading-relaxed pt-2">
            Aurel Studio was conceived as an antidote to rush-hour salon culture. We offer an unhurried, consultation-first haven in Anna Nagar where craftsmanship meets individual expression.
          </p>
        </div>
      </section>

      {/* Philosophy & Story Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              The Consultation-First Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#241E1A]">
              We start by listening before we ever pick up a comb.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#34302D]/90 font-sans leading-relaxed">
              <p>
                Chennai’s coastal climate, hard water, and bustling pace present unique demands on hair and skin. A haircut that looks stunning in a salon chair must also be effortless to manage at 7:30 AM before a workday.
              </p>
              <p>
                That is why every appointment at Aurel Studio begins with a dedicated consultation. We inspect your hair’s cuticle porosity, scalp balance, bone structure, and styling routine to propose cuts and tones that flatter naturally and age gracefully between visits.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
                alt="Aurel Studio consultation session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md mt-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Stylist washing and hair treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-y border-[#DED3C5]/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#241E1A]">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#241E1A]">
                Individuality First
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                We reject carbon-copy trends. Every silhouette and tint is mapped specifically to your face geometry and comfort.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#241E1A]">
                Clean Formulations
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                Ammonia-conscious colour lines, paraben-free spa crèmes, and bond-protecting plex infusions protect hair biology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#241E1A]">
                Uncompromising Hygiene
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                Clinical sterilisation of all metal tools between guests, single-use linens, and clean air filtration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F2EB] border border-[#DED3C5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#EAE2D8] flex items-center justify-center text-[#A87556]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#241E1A]">
                Calm Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#68615C] font-sans leading-relaxed">
                Warm ivory textures, natural stone, soft acoustic controls, and comfortable wash basins built for serenity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2EB]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#A87556] font-semibold">
              The Resident Artists
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#241E1A]">
              Our Stylists & Artisans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleTeamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#DED3C5] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl text-[#241E1A] font-medium">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#A87556] font-semibold">
                      {member.role}
                    </p>
                    <p className="text-xs font-semibold text-[#68615C] pt-1">
                      {member.specialty}
                    </p>
                    <p className="text-xs text-[#68615C] font-sans leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#DED3C5]/60 flex items-center justify-between text-xs font-sans text-[#34302D] mt-2">
                  <span>{member.experienceYears}</span>
                  <Link
                    to="/book"
                    className="text-[#A87556] font-semibold hover:underline"
                  >
                    Book Consultation &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DED3C5] max-w-xl mx-auto text-center text-xs text-[#68615C] font-sans space-y-1">
            <p className="font-semibold text-[#241E1A]">Are you a senior stylist or colourist in Chennai?</p>
            <p>We are always eager to meet thoughtful artists. Enquire via hello@aurelstudio.example.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#241E1A] text-[#F6F2EB] text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif">
            Experience our personal approach.
          </h2>
          <p className="text-sm text-[#DED3C5]/80 font-sans">
            Appointments ensure your dedicated stylist has uninterrupted time to listen and create.
          </p>
          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#A87556] text-[#F6F2EB] text-xs uppercase tracking-widest font-medium hover:bg-[#BA8B6D] transition-colors"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
