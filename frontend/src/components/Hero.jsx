function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center pt-32 lg:pt-0"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[220px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm mb-8 backdrop-blur-md mx-auto lg:mx-0">
              🚀 Future-Ready Digital Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
              Build.
              <span className="text-cyan-400"> Automate.</span>
              <br />
              Scale Beyond
              <br />
              Limits.
            </h1>

            <p className="mt-8 text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
              We create high-performance websites, AI voice agents,
              intelligent chatbots, and automation systems that help
              businesses grow faster, smarter, and more efficiently.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-cyan-500 text-black font-semibold hover:scale-105 transition duration-300"
              >
                Get Free Consultation
              </a>

              <a
                href="#services"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 text-center lg:text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  50+
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  24/7
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Support
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
                  99%
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Satisfaction
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0">

            {/* Main Glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

            {/* Orb */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-cyan-500/20 flex items-center justify-center">

              {/* Rotating Ring */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin"
                style={{ animationDuration: "25s" }}
              ></div>

              {/* Bottom Glow */}
              <div className="absolute bottom-16 md:bottom-24 w-32 md:w-48 h-2 bg-cyan-400 blur-xl opacity-70"></div>

              {/* Logo */}
              <img
                src="/zenova-logo.png"
                alt="Zenova Tech"
                className="w-[220px] sm:w-[260px] md:w-[340px] relative z-10 float-logo"
              />

              {/* Desktop Floating Cards */}
              <div className="hidden lg:block absolute top-10 -left-10 bg-black/90 border border-cyan-500/30 px-5 py-3 rounded-xl text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-md">
                🤖 AI Agents
              </div>

              <div className="hidden lg:block absolute bottom-10 -right-10 bg-black/90 border border-cyan-500/30 px-5 py-3 rounded-xl text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-md">
                🌐 Web Development
              </div>

              <div className="hidden lg:block absolute top-1/2 -right-16 bg-black/90 border border-cyan-500/30 px-5 py-3 rounded-xl text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-md">
                ⚡ Automation
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;