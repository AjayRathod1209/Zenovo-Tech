import { motion } from "framer-motion";
import { FaGlobe, FaRobot, FaBolt } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Website Development",
      desc: "Modern, responsive and high-converting websites designed to help your business attract more customers and generate more leads.",
    },
    {
      icon: <FaRobot />,
      title: "AI Chatbots",
      desc: "Intelligent AI chatbots that automate customer support, answer queries instantly and engage visitors 24/7.",
    },
    {
      icon: <FaBolt />,
      title: "Business Automation",
      desc: "Automate repetitive business processes, save time, reduce manual work and improve overall productivity.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 tracking-[4px] uppercase font-semibold">
            What We Do
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Powerful Digital
            <span className="text-cyan-400"> Solutions</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            We help businesses grow with modern websites, AI-powered
            chatbots and intelligent automation systems built for the future.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 overflow-hidden hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 text-5xl text-cyan-400 mb-6 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 leading-7">
                {service.desc}
              </p>

              {/* Bottom Line */}
              <div className="relative z-10 mt-8 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300"
          >
            Let's Build Something Amazing
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;