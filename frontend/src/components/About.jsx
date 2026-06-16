import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-semibold tracking-[4px] uppercase">
            About Zenova Tech
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Driving Innovation Through
            <span className="text-cyan-400"> AI & Technology</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We help businesses scale through cutting-edge websites,
            AI solutions, automation systems and digital innovation.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500"
          >
            <h3 className="text-3xl font-bold mb-6">
              Building The Future
              <span className="text-cyan-400"> One Solution At A Time</span>
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Zenova Tech is a modern technology agency focused on
              transforming businesses through websites, AI voice agents,
              intelligent chatbots, automation systems and growth-driven
              digital solutions.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              Our goal is to help businesses automate repetitive work,
              increase efficiency, and unlock new growth opportunities
              using the power of artificial intelligence.
            </p>

            <p className="text-gray-400 leading-8">
              Whether you're a startup, local business or enterprise,
              we build scalable solutions designed for long-term success.
            </p>
          </motion.div>

          {/* Right Side */}
          <div className="grid gap-8">

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">

                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full"></div>

                  <img
                    src="/ajay.png"
                    alt="Ajay Rathod"
                    className="relative w-28 h-28 rounded-full object-cover border-2 border-cyan-400"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Ajay Rathod
                  </h3>

                  <p className="text-gray-300 font-medium mb-3">
                    Founder & CEO
                  </p>

                  <p className="text-gray-400 leading-7">
                    Leading Zenova Tech with a vision to transform businesses
                    through AI, automation, websites and innovative digital solutions.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Marketing Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">

                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/30 blur-2xl rounded-full"></div>

                  <img
                    src="/kairavi.jpg"
                    alt="Kairavi Gaurkar"
                    className="relative w-28 h-28 rounded-full object-cover border-2 border-cyan-400"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Kairavi Gaurkar
                  </h3>

                  <p className="text-gray-300 font-medium mb-3">
                    Marketing & Growth Lead
                  </p>

                  <p className="text-gray-400 leading-7">
                    Managing outreach, marketing strategies and business growth,
                    helping Zenova Tech build strong client relationships.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            ["50+", "Projects"],
            ["24/7", "Support"],
            ["99%", "Satisfaction"],
            ["100%", "Commitment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <h3 className="text-4xl font-bold text-cyan-400">{value}</h3>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;