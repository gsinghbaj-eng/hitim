import { useState, useEffect, useRef } from 'react';
import { Sparkles, Thermometer, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { serviceShowcaseConfig } from '../config';

// Icon lookup map for dynamic icon resolution from config strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Thermometer, Clock,
};

export function WineShowcase() {
  // Null check: if config is empty, render nothing
  if (!serviceShowcaseConfig.mainTitle || serviceShowcaseConfig.services.length === 0) return null;

  const [activeService, setActiveService] = useState(0);
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

  const services = serviceShowcaseConfig.services;
  const features = serviceShowcaseConfig.features;
  const quote = serviceShowcaseConfig.quote;
  const service = services[activeService];

  const nextService = () => setActiveService((prev) => (prev + 1) % services.length);
  const prevService = () => setActiveService((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-light"
    >
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Title */}
        <div className="fade-up text-center mb-16">
          <span className="font-script text-3xl text-sky-500 block mb-2">{serviceShowcaseConfig.scriptText}</span>
          <span className="text-sky-500 text-xs uppercase tracking-[0.2em] mb-4 block">
            {serviceShowcaseConfig.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 whitespace-pre-line">{serviceShowcaseConfig.mainTitle}</h2>
        </div>

        {/* Service Tabs */}
        <div className="fade-up flex flex-wrap justify-center gap-2 mb-16" style={{ transitionDelay: '0.1s' }}>
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveService(i)}
              className={`px-5 py-3 rounded-lg text-sm transition-all duration-300 ${
                i === activeService
                  ? 'bg-gradient-to-r from-sky-500 to-teal-400 text-white shadow-medium'
                  : 'bg-white text-slate-600 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Service Info */}
          <div className="slide-in-left lg:col-span-2 order-2 lg:order-1">
            {/* Year + Name */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-script text-4xl lg:text-5xl text-sky-400/50 leading-none">{service.year}</span>
                <div>
                  <h2 className="font-serif text-3xl text-slate-800 leading-tight">{service.name}</h2>
                  <span className="font-script text-xl text-teal-500">{service.subtitle}</span>
                </div>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-sky-500 to-teal-400 mt-4" />
            </div>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
            <p className="text-slate-500 leading-relaxed text-sm mb-8">{service.tastingNotes}</p>

            {/* Service Details */}
            <div className="flex gap-6 mb-8">
              <div>
                <div className="font-serif text-2xl text-sky-500">{service.alcohol}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Comodidad</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="font-serif text-2xl text-sky-500">{service.temperature}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Duración</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="font-serif text-2xl text-sky-500">{service.aging}</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Resultados</div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary flex items-center gap-2 group"
              aria-label="Reservar tratamiento"
            >
              Reservar Tratamiento
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Center: Service Image */}
          <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
            <div className="relative" style={{ width: '220px', height: '400px' }}>
              {/* Glow */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none`}>
                <div className={`w-48 h-48 ${service.glowColor} rounded-full blur-3xl transition-colors duration-700`} />
              </div>

              {/* Images */}
              {services.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={`${s.name} - ${s.subtitle}`}
                  loading={i === 0 ? undefined : 'lazy'}
                  style={s.filter ? { filter: s.filter } : undefined}
                  className={`absolute inset-0 w-full h-full object-contain z-10 drop-shadow-2xl transition-all duration-700 ${
                    i === activeService
                      ? 'opacity-100 scale-100 translate-y-0'
                      : i < activeService
                        ? 'opacity-0 scale-90 -translate-y-6 pointer-events-none'
                        : 'opacity-0 scale-90 translate-y-6 pointer-events-none'
                  }`}
                />
              ))}

              {/* Switcher Arrows */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                  onClick={prevService}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300 shadow-soft"
                  aria-label="Servicio anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-slate-500 font-serif tabular-nums whitespace-nowrap">
                  {activeService + 1} / {services.length}
                </span>
                <button
                  onClick={nextService}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300 shadow-soft"
                  aria-label="Siguiente servicio"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Features + Quote */}
          <div className="slide-in-right lg:col-span-2 order-3">
            <div className="space-y-6">
              {features.map((feature) => {
                const IconComponent = iconMap[feature.icon] || Sparkles;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 group-hover:border-sky-300 transition-colors">
                      <IconComponent className="w-5 h-5 text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            {quote.text && (
              <div className="mt-10 p-6 bg-white rounded-lg border-l-2 border-sky-400 shadow-soft">
                {quote.prefix && <p className="font-script text-2xl text-sky-500 mb-2">{quote.prefix}</p>}
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "{quote.text}"
                </p>
                {quote.attribution && <p className="text-sky-500 text-xs mt-3">— {quote.attribution}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
