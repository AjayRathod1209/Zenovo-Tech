import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Fitness Studio Owner",
      review:
        "Zenova Tech delivered a stunning website for our gym. The design, speed and overall experience exceeded our expectations.",
    },
    {
      name: "Sarah Williams",
      company: "Real Estate Consultant",
      review:
        "Professional team, excellent communication and high-quality work. Our website started generating more leads after launch.",
    },
    {
      name: "David Anderson",
      company: "Business Owner",
      review:
        "The automation solutions provided by Zenova Tech helped us save hours every week and improve our workflow significantly.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

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
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            What Our
            <span className="text-cyan-400"> Clients Say</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            We focus on delivering solutions that create real value for businesses.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-500"
            >
              {/* Quote */}
              <FaQuoteLeft className="text-cyan-400 text-4xl mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-gray-400 leading-7 mb-8">
                "{item.review}"
              </p>

              {/* Client Info */}
              <div className="border-t border-cyan-500/20 pt-5">
                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-cyan-400">
                  {item.company}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Trust Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-cyan-400">99%</h3>
            <p className="text-gray-400 mt-2">Satisfaction</p>
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

export default Testimonials;