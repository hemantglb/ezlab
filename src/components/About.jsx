// React import not required with the new JSX transform

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Illustration */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 opacity-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold">Innovation First</h3>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-200 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Crafting Digital Excellence Since Day One
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              At EZ Labs, we believe in the power of technology to transform businesses 
              and create meaningful experiences. Our team of passionate developers and 
              designers work together to bring your vision to life.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With years of experience in cutting-edge technologies, we&apos;ve helped 
              hundreds of clients achieve their digital goals. From startups to enterprises, 
              we&apos;re committed to delivering solutions that make a difference.
            </p>

            {/* Key Points */}
            <div className="space-y-4 pt-4">
              {[
                { title: 'Expert Team', desc: 'Skilled professionals passionate about technology' },
                { title: 'Quality First', desc: 'We never compromise on code quality and best practices' },
                { title: 'Client Focused', desc: 'Your success is our success' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
