function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
    >
      {/* Glow Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-sm mb-6">
              🚀 AI • Websites • Automation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Build Smarter
              <br />
              With
              <span className="text-cyan-400"> AI Solutions</span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
              Zenova Tech helps businesses grow through
              modern websites, AI agents, automation systems,
              and digital transformation solutions.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#contact"
                className="bg-cyan-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 transition"
              >
                Get Started
              </a>

              <a
                href="#services"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-500 hover:text-black transition"
              >
                View Services
              </a>
            </div>

            {/* Mobile Logo */}
            <div className="mt-12 lg:hidden">
              <img
                src="/zenova-logo.png"
                alt="Zenova Tech"
                className="w-48 mx-auto float-logo"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 text-center lg:text-left">
              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">50+</h3>
                <p className="text-gray-500 text-sm">Projects</p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">24/7</h3>
                <p className="text-gray-500 text-sm">Support</p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-3xl font-bold">99%</h3>
                <p className="text-gray-500 text-sm">Satisfaction</p>
              </div>
            </div>

          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full"></div>

              <img
                src="/zenova-logo.png"
                alt="Zenova Tech"
                className="relative z-10 w-[420px] float-logo"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;