import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable web applications using modern frameworks like React, Next.js, and more.',
      primaryColor: '#2563eb', // Blue 600
      secondaryColor: '#3b82f6', // Blue 500
      iconBg: 'from-blue-600 to-blue-500',
      cardBg: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      textColor: 'text-blue-600',
      emoji: '💻'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Creating beautiful native and cross-platform mobile applications that users love to engage with.',
      primaryColor: '#7c3aed', // Violet 600
      secondaryColor: '#8b5cf6', // Violet 500
      iconBg: 'from-violet-600 to-violet-500',
      cardBg: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200',
      hoverBorder: 'hover:border-violet-400',
      textColor: 'text-violet-600',
      emoji: '📱'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning interfaces that provide exceptional user experiences.',
      primaryColor: '#dc2626', // Red 600
      secondaryColor: '#ef4444', // Red 500
      iconBg: 'from-red-600 to-red-500',
      cardBg: 'from-red-50 to-red-100',
      borderColor: 'border-red-200',
      hoverBorder: 'hover:border-red-400',
      textColor: 'text-red-600',
      emoji: '🎨'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Deploying and managing scalable cloud infrastructure for reliable and secure applications.',
      primaryColor: '#0891b2', // Cyan 600
      secondaryColor: '#06b6d4', // Cyan 500
      iconBg: 'from-cyan-600 to-cyan-500',
      cardBg: 'from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-200',
      hoverBorder: 'hover:border-cyan-400',
      textColor: 'text-cyan-600',
      emoji: '☁️'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data Analytics',
      description: 'Transforming raw data into actionable insights to drive better business decisions.',
      primaryColor: '#059669', // Emerald 600
      secondaryColor: '#10b981', // Emerald 500
      iconBg: 'from-emerald-600 to-emerald-500',
      cardBg: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400',
      textColor: 'text-emerald-600',
      emoji: '📊'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and better user engagement.',
      primaryColor: '#ea580c', // Orange 600
      secondaryColor: '#f97316', // Orange 500
      iconBg: 'from-orange-600 to-orange-500',
      cardBg: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      hoverBorder: 'hover:border-orange-400',
      textColor: 'text-orange-600',
      emoji: '⚡'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative section-padding bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative container-custom">
        {/* Section Header with Animation */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
              ✨ Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What We Do
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Best For You
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We offer a comprehensive range of services to help you achieve your digital goals.
            From concept to deployment, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid with Professional 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative perspective-1000 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* 3D Card Container */}
              <div className={`relative bg-white p-8 rounded-3xl border-2 ${service.borderColor} ${service.hoverBorder}
                            shadow-lg hover:shadow-2xl h-full min-h-[420px] flex flex-col
                            transition-all duration-500 cursor-pointer
                            transform-gpu hover:-translate-y-4 hover:scale-105
                            hover:rotate-y-5 preserve-3d`}
                   style={{
                     transformStyle: 'preserve-3d',
                     transform: hoveredCard === index ? 'translateY(-16px) scale(1.05) rotateY(5deg)' : 'none'
                   }}>
                
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.cardBg} 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-75 
                              transition-opacity duration-500 blur-sm -z-20"
                     style={{ background: `linear-gradient(135deg, ${service.primaryColor}, ${service.secondaryColor})` }}></div>

                {/* Emoji Badge - Top Right */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg
                              flex items-center justify-center text-2xl transform
                              group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {service.emoji}
                </div>

                {/* Icon Container with 3D Effect */}
                <div className="relative mb-6">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl
                                flex items-center justify-center text-white shadow-xl
                                transform group-hover:scale-110 group-hover:rotate-6
                                transition-all duration-500`}
                       style={{
                         boxShadow: hoveredCard === index 
                           ? `0 20px 40px ${service.primaryColor}40` 
                           : '0 10px 30px rgba(0,0,0,0.1)'
                       }}>
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Rotating ring on hover */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 rounded-2xl border-4 border-white/30 
                                    animate-spin-slow"></div>
                    )}
                  </div>
                  
                  {/* Glow effect under icon */}
                  <div className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 
                                transition-opacity duration-500`}
                       style={{ background: `linear-gradient(135deg, ${service.primaryColor}, ${service.secondaryColor})` }}></div>
                </div>

                {/* Title with professional styling */}
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300
                              ${hoveredCard === index ? service.textColor : 'text-gray-900'}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-base flex-grow">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className={`flex items-center justify-between pt-4 border-t-2 mt-auto
                              ${hoveredCard === index ? service.borderColor : 'border-gray-100'}
                              transition-all duration-300`}>
                  <span className={`font-semibold transition-all duration-300
                                  ${hoveredCard === index ? service.textColor : 'text-gray-400'}`}>
                    Learn more
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center
                                transition-all duration-500 transform
                                ${hoveredCard === index 
                                  ? `bg-gradient-to-r ${service.iconBg} text-white translate-x-2 rotate-45` 
                                  : 'bg-gray-100 text-gray-400'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Decorative dots pattern */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.iconBg}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
