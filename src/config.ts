// =============================================================================
// Clínica Dental Standents - Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Clínica Dental Standents | Dentista en Girona",
  description: "Clínica dental en Girona con tratamientos avanzados: implantes dentales, ortodoncia invisible, blanqueamiento dental y odontología conservadora. Tu sonrisa, nuestra prioridad.",
  language: "es",
  keywords: "dentista Girona, clínica dental Girona, implantes dentales Girona, ortodoncia invisible Girona, blanqueamiento dental, odontología conservadora",
  ogImage: "/images/og-image.jpg",
  canonical: "https://standents.es",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "STANDENTS",
  brandSubname: "Clínica Dental",
  tagline: "Tu sonrisa, nuestra prioridad",
  navLinks: [
    { name: "Inicio", href: "#inicio", icon: "Home" },
    { 
      name: "Servicios", 
      href: "#servicios", 
      icon: "Sparkles",
      dropdown: [
        { name: "Blanqueamiento Dental", href: "#blanqueamiento" },
        { name: "Implantes Dentales", href: "#implantes" },
        { name: "Ortodoncia Invisible", href: "#ortodoncia" },
        { name: "Odontología Conservadora", href: "#conservadora" },
      ]
    },
    { name: "Nosotros", href: "#nosotros", icon: "Users" },
    { name: "Testimonios", href: "#testimonios", icon: "Newspaper" },
    { name: "Contacto", href: "#contacto", icon: "Mail" },
  ],
  ctaButtonText: "Pedir Cita",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "STANDENTS",
  brandSubname: "Clínica Dental",
  yearText: "Girona",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Tratamientos dentales avanzados con atención personalizada",
  mainTitle: "Tu Sonrisa,\nNuestra Prioridad",
  ctaButtonText: "Pedir Cita",
  ctaTarget: "#contacto",
  stats: [
    { value: 4.3, suffix: "★", label: "Valoración Google" },
    { value: 11, suffix: "+", label: "Reseñas Positivas" },
    { value: 1000, suffix: "+", label: "Pacientes Satisfechos" },
  ],
  decorativeText: "CLÍNICA DENTAL STANDENTS",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Services Showcase Config (adapted from Wine Showcase)
// -----------------------------------------------------------------------------
export interface Service {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface ServiceShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  services: Service[];
  features: ServiceFeature[];
  quote: ServiceQuote;
}

export const serviceShowcaseConfig: ServiceShowcaseConfig = {
  scriptText: "Nuestros Tratamientos",
  subtitle: "SERVICIOS DENTALES",
  mainTitle: "Soluciones Completas\npara tu Sonrisa",
  services: [
    {
      id: "blanqueamiento",
      name: "Blanqueamiento",
      subtitle: "Dental",
      year: "Estética",
      image: "/images/service-whitening.png",
      filter: "",
      glowColor: "bg-cyan-500/20",
      description: "Recupera el brillo natural de tu sonrisa con nuestro tratamiento de blanqueamiento dental profesional. Resultados visibles desde la primera sesión.",
      tastingNotes: "Tecnología LED avanzada",
      alcohol: "Sin dolor",
      temperature: "45 min",
      aging: "Resultados duraderos",
    },
    {
      id: "implantes",
      name: "Implantes",
      subtitle: "Dentales",
      year: "Restauración",
      image: "/images/service-implant.png",
      filter: "",
      glowColor: "bg-blue-500/20",
      description: "Recupera tu sonrisa completa con implantes dentales de última generación. Solución permanente y natural para dientes perdidos.",
      tastingNotes: "Titanio de grado médico",
      alcohol: "98% éxito",
      temperature: "2-3 visitas",
      aging: "Vida completa",
    },
    {
      id: "ortodoncia",
      name: "Ortodoncia",
      subtitle: "Invisible",
      year: "Alineación",
      image: "/images/service-orthodontics.png",
      filter: "",
      glowColor: "bg-teal-500/20",
      description: "Alinea tus dientes de forma discreta con nuestra ortodoncia invisible. Sin brackets, sin cables, solo resultados sorprendentes.",
      tastingNotes: "Alineadores transparentes",
      alcohol: "Removible",
      temperature: "6-18 meses",
      aging: "Resultados permanentes",
    },
    {
      id: "conservadora",
      name: "Odontología",
      subtitle: "Conservadora",
      year: "Prevención",
      image: "/images/service-conservative.png",
      filter: "",
      glowColor: "bg-sky-500/20",
      description: "Preserva tu salud dental con tratamientos mínimamente invasivos. Empastes, endodoncias y tratamientos de caries con técnicas avanzadas.",
      tastingNotes: "Técnicas mínimamente invasivas",
      alcohol: "Sin dolor",
      temperature: "1-2 visitas",
      aging: "Protección duradera",
    },
  ],
  features: [
    {
      icon: "Sparkles",
      title: "Tecnología Avanzada",
      description: "Equipamiento de última generación para diagnósticos precisos y tratamientos efectivos.",
    },
    {
      icon: "Thermometer",
      title: "Atención Personalizada",
      description: "Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.",
    },
    {
      icon: "Clock",
      title: "Horarios Flexibles",
      description: "Adaptamos nuestras citas a tu agenda para que cuidar tu sonrisa sea siempre fácil.",
    },
  ],
  quote: {
    text: "La sonrisa es la ventana del alma. Nuestra misión es que cada paciente se sienta orgulloso de la suya.",
    attribution: "Dr. Standents",
    prefix: "Nuestra Filosofía",
  },
};

// -----------------------------------------------------------------------------
// Clinic Carousel Config (adapted from Winery Carousel)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface ClinicCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const clinicCarouselConfig: ClinicCarouselConfig = {
  scriptText: "Instalaciones Modernas",
  subtitle: "NUESTRA CLÍNICA",
  mainTitle: "Tecnología de Vanguardia\nen el Corazón de Girona",
  locationTag: "Carrer de la Creu, 34, Girona",
  slides: [
    {
      image: "/images/clinic-slide1.jpg",
      title: "Sala de",
      subtitle: "Tratamientos",
      area: "Equipamiento",
      unit: "Digital",
      description: "Nuestras salas de tratamiento cuentan con la última tecnología en equipamiento dental para garantizar procedimientos precisos y cómodos.",
    },
    {
      image: "/images/clinic-slide2.jpg",
      title: "Zona de",
      subtitle: "Diagnóstico",
      area: "Radiología",
      unit: "3D",
      description: "Contamos con sistemas de radiología digital y tomografía 3D para diagnósticos precisos y planificación de tratamientos detallada.",
    },
    {
      image: "/images/clinic-slide3.jpg",
      title: "Área de",
      subtitle: "Estética Dental",
      area: "Diseño",
      unit: "Digital",
      description: "Especialistas en estética dental utilizando tecnología CAD/CAM para crear sonrisas perfectas y naturales.",
    },
  ],
};

// -----------------------------------------------------------------------------
// About/Team Config (adapted from Museum)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface TeamTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface TeamTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: TeamTabContent;
}

export interface TeamQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface TeamConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: TeamTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: TeamQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const teamConfig: TeamConfig = {
  scriptText: "Conócenos",
  subtitle: "SOBRE NOSOTROS",
  mainTitle: "Comprometidos con\nTu Salud Dental",
  introText: "En Clínica Dental Standents combinamos años de experiencia con las últimas innovaciones en odontología para ofrecerte el mejor cuidado dental en Girona.",
  timeline: [
    { year: "2010", event: "Apertura de la clínica" },
    { year: "2015", event: "Expansión de servicios" },
    { year: "2020", event: "Tecnología digital completa" },
    { year: "2024", event: "Líderes en ortodoncia invisible" },
  ],
  tabs: [
    {
      id: "filosofia",
      name: "Filosofía",
      icon: "History",
      image: "/images/team-tab1.jpg",
      content: {
        title: "Paciente en el Centro",
        description: "Creemos que cada paciente merece atención personalizada y tratamientos adaptados a sus necesidades específicas. Nuestro enfoque se basa en la escucha activa y la comunicación clara.",
        highlight: "Tu sonrisa, nuestra prioridad",
      },
    },
    {
      id: "tecnologia",
      name: "Tecnología",
      icon: "BookOpen",
      image: "/images/team-tab2.jpg",
      content: {
        title: "Innovación Constante",
        description: "Invertimos continuamente en la última tecnología dental para ofrecer tratamientos más precisos, rápidos y cómodos. Desde radiología 3D hasta diseño digital de sonrisas.",
        highlight: "Tecnología de vanguardia",
      },
    },
    {
      id: "equipo",
      name: "Equipo",
      icon: "Award",
      image: "/images/team-tab3.jpg",
      content: {
        title: "Profesionales Expertos",
        description: "Nuestro equipo de dentistas, higienistas y especialistas cuenta con formación continua y amplia experiencia en todas las áreas de la odontología moderna.",
        highlight: "Expertos certificados",
      },
    },
  ],
  openingHours: "Lun-Vie: 9:00 - 20:00",
  openingHoursLabel: "Horario",
  ctaButtonText: "Conocer al Equipo",
  yearBadge: "14+",
  yearBadgeLabel: "Años de Experiencia",
  quote: {
    prefix: "Nuestro Compromiso",
    text: "Cada sonrisa que transformamos es una vida que mejoramos. Esa es nuestra mayor recompensa.",
    attribution: "Equipo Standents",
  },
  founderPhotoAlt: "Equipo Standents",
  founderPhoto: "/images/team-photo.png",
};

// -----------------------------------------------------------------------------
// Testimonials/Blog Config (adapted from News)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface TestimonialsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const testimonialsConfig: TestimonialsConfig = {
  scriptText: "Blog Dental",
  subtitle: "CONSEJOS Y NOTICIAS",
  mainTitle: "Mantente Informado\nsobre tu Salud Dental",
  viewAllText: "Ver todos",
  readMoreText: "Leer más",
  articles: [
    {
      id: 1,
      image: "/images/blog01.jpg",
      title: "5 Consejos para Mantener tu Sonrisa Brillante",
      excerpt: "Descubre los hábitos diarios que te ayudarán a mantener una sonrisa saludable y radiante durante toda tu vida.",
      date: "15 Feb 2024",
      category: "Higiene",
    },
    {
      id: 2,
      image: "/images/blog02.jpg",
      title: "Todo sobre la Ortodoncia Invisible",
      excerpt: "¿Estás considerando la ortodoncia invisible? Te explicamos todo lo que necesitas saber sobre este tratamiento revolucionario.",
      date: "10 Feb 2024",
      category: "Ortodoncia",
    },
    {
      id: 3,
      image: "/images/blog03.jpg",
      title: "Implantes Dentales: Mitos y Realidades",
      excerpt: "Desmentimos los mitos más comunes sobre los implantes dentales y te contamos la verdad sobre este tratamiento.",
      date: "5 Feb 2024",
      category: "Implantes",
    },
  ],
  testimonialsScriptText: "Opiniones",
  testimonialsSubtitle: "TESTIMONIOS",
  testimonialsMainTitle: "Lo que Dicen\nNuestros Pacientes",
  testimonials: [
    {
      name: "María García",
      role: "Paciente de Ortodoncia",
      text: "Increíble experiencia. El equipo de Standents me hizo sentir cómoda durante todo el tratamiento. Mi sonrisa nunca se había visto mejor.",
      rating: 5,
    },
    {
      name: "Jordi Martínez",
      role: "Paciente de Implantes",
      text: "Después de años con miedo al dentista, finalmente encontré un lugar donde me siento seguro. Profesionales excepcionales.",
      rating: 5,
    },
    {
      name: "Anna Puig",
      role: "Paciente de Blanqueamiento",
      text: "Resultados espectaculares en solo una sesión. El personal es muy amable y las instalaciones son impecables. Totalmente recomendable.",
      rating: 4,
    },
  ],
  storyScriptText: "Nuestra Historia",
  storySubtitle: "DESDE 2010",
  storyTitle: "Más de una Década\nCuidando Sonrisas",
  storyParagraphs: [
    "Desde nuestra apertura en 2010, nos hemos dedicado a proporcionar atención dental de excelencia a la comunidad de Girona. Nuestra pasión por la odontología y el cuidado de nuestros pacientes nos ha convertido en una de las clínicas dentales más reconocidas de la zona.",
    "Creemos en la importancia de la educación continua y la adopción de nuevas tecnologías. Por eso, nuestro equipo participa regularmente en formaciones y conferencias internacionales para ofrecer siempre los tratamientos más avanzados.",
  ],
  storyTimeline: [
    { value: "1000+", label: "Pacientes" },
    { value: "14", label: "Años de Experiencia" },
    { value: "4.3★", label: "Valoración" },
  ],
  storyQuote: {
    prefix: "Nuestra Misión",
    text: "Transformar sonrisas, transformar vidas. Cada paciente que sale de nuestra clínica con una sonrisa renovada es nuestro mayor logro.",
    attribution: "Dr. Standents",
  },
  storyImage: "/images/clinic-story.jpg",
  storyImageCaption: "Instalaciones modernas en el corazón de Girona",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Contacto",
  subtitle: "PIDE TU CITA",
  mainTitle: "Estamos Aquí\npara Ayudarte",
  introText: "Completa el formulario y nos pondremos en contacto contigo lo antes posible para confirmar tu cita. También puedes llamarnos directamente.",
  contactInfoTitle: "Información de Contacto",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Dirección",
      value: "Carrer de la Creu, 34, 1-1",
      subtext: "17002 Girona, España",
    },
    {
      icon: "Phone",
      label: "Teléfono",
      value: "601 27 78 69",
      subtext: "Lun-Vie: 9:00 - 20:00",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "info@standents.es",
      subtext: "Respondemos en 24h",
    },
    {
      icon: "Clock",
      label: "Horario",
      value: "Lunes a Viernes",
      subtext: "9:00 - 20:00",
    },
  ],
  form: {
    nameLabel: "Nombre completo",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    phoneLabel: "Teléfono",
    phonePlaceholder: "600 000 000",
    visitDateLabel: "Fecha preferida",
    visitorsLabel: "Tipo de consulta",
    visitorsOptions: ["Primera visita", "Revisión", "Tratamiento", "Urgencia", "Otro"],
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos qué necesitas...",
    submitText: "Solicitar Cita",
    submittingText: "Enviando...",
    successMessage: "¡Gracias! Te contactaremos pronto para confirmar tu cita.",
    errorMessage: "Hubo un error. Por favor, inténtalo de nuevo o llámanos directamente.",
  },
  privacyNotice: "Al enviar este formulario, aceptas nuestra política de privacidad. Tus datos serán tratados de forma confidencial.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "STANDENTS",
  tagline: "Clínica Dental",
  description: "Tu sonrisa, nuestra prioridad. Tratamientos dentales avanzados con atención personalizada en el corazón de Girona.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/standents" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com/standents" },
  ],
  linkGroups: [
    {
      title: "Servicios",
      links: [
        { name: "Blanqueamiento Dental", href: "#blanqueamiento" },
        { name: "Implantes Dentales", href: "#implantes" },
        { name: "Ortodoncia Invisible", href: "#ortodoncia" },
        { name: "Odontología Conservadora", href: "#conservadora" },
      ],
    },
    {
      title: "Enlaces",
      links: [
        { name: "Inicio", href: "#inicio" },
        { name: "Nosotros", href: "#nosotros" },
        { name: "Testimonios", href: "#testimonios" },
        { name: "Contacto", href: "#contacto" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "Carrer de la Creu, 34, 17002 Girona" },
    { icon: "Phone", text: "601 27 78 69" },
    { icon: "Mail", text: "info@standents.es" },
  ],
  newsletterLabel: "Suscríbete a nuestro newsletter",
  newsletterPlaceholder: "Tu email",
  newsletterButtonText: "Suscribirse",
  newsletterSuccessText: "¡Gracias por suscribirte!",
  newsletterErrorText: "Hubo un error. Inténtalo de nuevo.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2024 Clínica Dental Standents. Todos los derechos reservados.",
  legalLinks: ["Política de Privacidad", "Aviso Legal", "Cookies"],
  icpText: "",
  backToTopText: "Volver arriba",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Volver arriba",
};
