import { motion } from "framer-motion";
import {
  FaRocket,
  FaRobot,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

function WhyUs() {
  const reasons = [
    {
      icon: <FaRocket />,
      title: "Modern & Fast Websites",
      desc: "We create lightning-fast, responsive and conversion-focused websites for businesses.",
    },
    {
      icon: <FaRobot />,
      title: "AI-Powered Solutions",
      desc: "Smart AI chatbots and systems that help businesses automate customer interactions.",
    },
    {
      icon: <FaBolt />,
      title: "Automation Experts",
      desc: "Reduce manual work and save valuable time through intelligent automation.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Reliable support and guidance whenever your business needs assistance.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

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
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Why Businesses Trust
            <span className="text-cyan-400"> Zenova Tech</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            We combine technology, automation and innovation to help
            businesses grow faster and smarter.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 text-center hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              <div className="text-5xl text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">99%</h3>
            <p className="text-gray-400 mt-2">Client Satisfaction</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
            <p className="text-gray-400 mt-2">Support</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">100%</h3>
            <p className="text-gray-400 mt-2">Commitment</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyUs;