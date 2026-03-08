import { useState, useEffect, useRef } from 'react';
import { History, Award, BookOpen } from 'lucide-react';
import { teamConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  History, Award, BookOpen,
};

export function Museum() {
  // Null check: if config is empty, render nothing
  if (!teamConfig.mainTitle) return null;

  const [activeTab, setActiveTab] = useState(teamConfig.tabs[0]?.id || '');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeTabData = teamConfig.tabs.find(tab => tab.id === activeTab);

  return (
    <section
      id="equipo"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-soft"
    >
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-sky-500/5 to-transparent" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="slide-in-left mb-10">
              <span className="font-script text-3xl text-sky-500 block mb-2">{teamConfig.scriptText}</span>
              <span className="text-sky-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {teamConfig.subtitle}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-800 has-bar whitespace-pre-line">
                {teamConfig.mainTitle}
              </h2>
            </div>

            {/* Introduction */}
            {teamConfig.introText && (
              <p className="fade-up text-slate-600 leading-relaxed mb-10" style={{ transitionDelay: '0.1s' }}>
                {teamConfig.introText}
              </p>
            )}

            {/* Tabs */}
            {teamConfig.tabs.length > 0 && (
              <div className="fade-up flex flex-wrap gap-2 mb-8" style={{ transitionDelay: '0.15s' }}>
                {teamConfig.tabs.map((tab) => {
                  const IconComponent = iconMap[tab.icon];
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      aria-pressed={activeTab === tab.id}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-medium'
                          : 'bg-white text-slate-600 hover:bg-sky-50 border border-slate-200'
                      }`}
                    >
                      {IconComponent && <IconComponent className="w-4 h-4" />}
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Tab Content */}
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              {activeTabData && (
                <div className="p-6 bg-white rounded-lg border border-slate-100 shadow-soft transition-all duration-300">
                  <h3 className="font-serif text-xl text-slate-800 mb-4">
                    {activeTabData.content.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {activeTabData.content.description}
                  </p>
                  <div className="flex items-center gap-3 text-sky-500">
                    <div className="w-8 h-px bg-sky-500" />
                    <span className="text-sm font-medium">
                      {activeTabData.content.highlight}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Horizontal Timeline */}
            {teamConfig.timeline.length > 0 && (
              <div className="fade-up mt-8" style={{ transitionDelay: '0.25s' }}>
                <div className="relative">
                  {/* Horizontal line */}
                  <div className="absolute top-3 left-0 right-0 h-px bg-sky-500/30" />
                  {/* Timeline points */}
                  <div className="flex justify-between overflow-x-auto gap-2">
                    {teamConfig.timeline.map((event) => (
                      <div key={event.year} className="relative flex flex-col items-center flex-shrink-0 min-w-[70px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-sky-500 z-10" />
                        <span className="font-serif text-sm text-sky-500 mt-2">{event.year}</span>
                        <span className="text-[11px] text-slate-500 mt-0.5 text-center whitespace-nowrap">{event.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Team Photo & Quote */}
            {teamConfig.quote.text && (
              <div className="fade-up mt-8 flex items-center gap-6" style={{ transitionDelay: '0.3s' }}>
                {teamConfig.founderPhoto && (
                  <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-sky-500/30 shadow-lg flex-shrink-0">
                    <img
                      src={teamConfig.founderPhoto}
                      alt={teamConfig.founderPhotoAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  {teamConfig.quote.prefix && (
                    <p className="font-script text-2xl text-sky-500 mb-1">
                      &ldquo;{teamConfig.quote.prefix}&rdquo;
                    </p>
                  )}
                  <p className="text-slate-600 text-sm italic">
                    "{teamConfig.quote.text}"
                  </p>
                  {teamConfig.quote.attribution && (
                    <p className="text-sky-500 text-xs mt-2">
                      — {teamConfig.quote.attribution}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="slide-in-right relative" style={{ transitionDelay: '0.15s' }}>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-strong">
              {teamConfig.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTab === tab.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={tab.image}
                    alt={`${tab.name} - ${teamConfig.mainTitle}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />
                </div>
              ))}

              {/* Year Badge */}
              {teamConfig.yearBadge && (
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm border border-sky-500/30 flex items-center justify-center shadow-soft">
                  <div className="text-center">
                    <div className="font-serif text-2xl text-sky-500">{teamConfig.yearBadge}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{teamConfig.yearBadgeLabel}</div>
                  </div>
                </div>
              )}

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    {teamConfig.openingHoursLabel && <p className="text-sky-400 text-sm">{teamConfig.openingHoursLabel}</p>}
                    {teamConfig.openingHours && <p className="text-white text-lg">{teamConfig.openingHours}</p>}
                  </div>
                  {teamConfig.ctaButtonText && (
                    <button
                      onClick={() => {
                        const element = document.querySelector('#contacto');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary text-sm px-6"
                      aria-label={teamConfig.ctaButtonText}
                    >
                      {teamConfig.ctaButtonText}
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
