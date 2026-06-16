import { motion } from "framer-motion";
import {
  FaSearch,
  FaClipboardList,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Discovery",
      description:
        "We understand your business goals, target audience and project requirements.",
    },
    {
      number: "02",
      icon: <FaClipboardList />,
      title: "Planning",
      description:
        "We create a strategic roadmap, wireframes and execution plan for your project.",
    },
    {
      number: "03",
      icon: <FaLaptopCode />,
      title: "Development",
      description:
        "Our team designs and develops your website, chatbot or automation solution.",
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Launch",
      description:
        "After testing and optimization, we launch and support your project.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

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
            Our Process
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            How We
            <span className="text-cyan-400"> Work</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            A streamlined process designed to deliver quality,
            efficiency and results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 text-center hover:-translate-y-4 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-5 text-5xl font-bold text-cyan-500/20">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition duration-300">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {step.description}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-300"
          >
            Let's Start Your Project
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Process;