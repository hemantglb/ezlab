import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 4 + Math.random() * 8
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
        
        {/* Gradient orbs with parallax */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          style={{ transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative container-custom px-6 md:px-12 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Animated Badge */}
          <div className="inline-block animate-fade-in-down">
            <span className="bg-blue-500/20 text-white px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 hover:bg-blue-500/30 transition-all duration-300 cursor-pointer inline-flex items-center gap-2">
              <span className="animate-pulse">✨</span>
              Welcome to EZ Labs
              <span className="animate-bounce">🚀</span>
            </span>
          </div>

          {/* Main Heading with Typing Effect */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
            <span className="inline-block hover:scale-110 transition-transform duration-300">Building Tomorrow&apos;s</span>
            <span className="block pb-2 mt-2 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-x">
              Digital Solutions Today
            </span>
          </h1>

          {/* Subheading with fade-in */}
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            We transform ideas into powerful digital experiences. 
            From concept to deployment, we&apos;re your trusted partner in innovation.
          </p>

          {/* CTA Buttons with 3D effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in animation-delay-500">
            <a
              href="#contact"
              className="group relative bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold
                       hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                       overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
            <a
              href="#services"
              className="group relative border-2 border-white text-white px-8 py-4 rounded-lg font-semibold
                       hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1
                       overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Animated Stats Counter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto animate-fade-in animation-delay-700">
            {[
              { number: '500+', label: 'Projects Delivered', icon: '🚀' },
              { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Support Available', icon: '💬' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20
                         hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer
                         hover:shadow-2xl hover:border-white/40"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-blue-200 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator with pulse */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-white hover:text-yellow-300 transition-colors group"
        >
          <span className="text-sm font-medium opacity-75 group-hover:opacity-100">Scroll Down</span>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
            <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/30 group-hover:border-yellow-300 transition-colors animate-bounce">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
