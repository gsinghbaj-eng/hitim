import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Star, Quote } from 'lucide-react';
import { testimonialsConfig } from '../config';

export function News() {
  // Null check: if config is empty, render nothing
  if (!testimonialsConfig.mainTitle) return null;

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

    const elements = sectionRef.current?.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="fade-up flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-script text-3xl text-sky-500 block mb-2">{testimonialsConfig.scriptText}</span>
            <span className="text-sky-500 text-xs uppercase tracking-[0.2em] mb-4 block">
              {testimonialsConfig.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-800 has-bar whitespace-pre-line">
              {testimonialsConfig.mainTitle}
            </h2>
          </div>
          {testimonialsConfig.viewAllText && (
            <button className="btn-dark flex items-center gap-2 group w-fit" aria-label={testimonialsConfig.viewAllText}>
              {testimonialsConfig.viewAllText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* News Grid */}
        {testimonialsConfig.articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsConfig.articles.map((item, index) => (
              <article
                key={item.id}
                className="fade-up group cursor-pointer"
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-5 shadow-soft">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-400 text-white text-xs rounded-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-sky-500" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-slate-800 mb-3 group-hover:text-sky-500 transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  {testimonialsConfig.readMoreText && (
                    <span className="inline-flex items-center gap-2 text-sky-500 text-sm group-hover:gap-3 transition-all duration-300">
                      {testimonialsConfig.readMoreText}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Testimonials Section */}
        {testimonialsConfig.testimonials.length > 0 && (
          <div className="mt-24">
            <div className="fade-up text-center mb-12">
              <span className="font-script text-3xl text-sky-500 block mb-2">{testimonialsConfig.testimonialsScriptText}</span>
              <span className="text-sky-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                {testimonialsConfig.testimonialsSubtitle}
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-800 whitespace-pre-line">
                {testimonialsConfig.testimonialsMainTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsConfig.testimonials.map((t, index) => (
                <div
                  key={t.name}
                  className="scale-in p-8 bg-white rounded-lg border border-slate-100 shadow-soft relative"
                  style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
                >
                  <Quote className="w-8 h-8 text-sky-500/20 absolute top-6 right-6" />
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-slate-800 font-medium text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story Section */}
        {testimonialsConfig.storyTitle && (
          <div id="story" className="fade-up mt-24 pt-20 border-t border-slate-200" style={{ transitionDelay: '0.1s' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="slide-in-left">
                <span className="font-script text-3xl text-sky-500 block mb-2">{testimonialsConfig.storyScriptText}</span>
                <span className="text-sky-500 text-xs uppercase tracking-[0.2em] mb-4 block">
                  {testimonialsConfig.storySubtitle}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-6 whitespace-pre-line">
                  {testimonialsConfig.storyTitle}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  {testimonialsConfig.storyParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Timeline Highlights */}
                {testimonialsConfig.storyTimeline.length > 0 && (
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {testimonialsConfig.storyTimeline.map((item, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg border border-slate-100 shadow-soft">
                        <div className="font-serif text-2xl text-sky-500 mb-1">{item.value}</div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="slide-in-right relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-strong">
                  {testimonialsConfig.storyImage && (
                    <>
                      <img
                        src={testimonialsConfig.storyImage}
                        alt={testimonialsConfig.storyImageCaption}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </>
                  )}
                </div>

                {/* Quote Overlay */}
                {testimonialsConfig.storyQuote.text && (
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-strong">
                    {testimonialsConfig.storyQuote.prefix && (
                      <p className="font-script text-2xl text-sky-500 mb-1">{testimonialsConfig.storyQuote.prefix}</p>
                    )}
                    <p className="text-slate-600 italic text-sm leading-relaxed mb-2">
                      "{testimonialsConfig.storyQuote.text}"
                    </p>
                    {testimonialsConfig.storyQuote.attribution && (
                      <p className="text-sky-500 text-xs">— {testimonialsConfig.storyQuote.attribution}</p>
                    )}
                  </div>
                )}

                {/* Decorative Frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-sky-500/20 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
