import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  const projects = [
    {
      title: "Elite Fitness Gym",
      category: "Gym Website",
      image: "/gym-project.jpg",
      link: "https://example.com",
      description:
        "Modern fitness website designed for memberships, classes and lead generation.",
    },
    {
      title: "Prime Properties",
      category: "Real Estate Website",
      image: "/realestate-project.jpg",
      link: "https://example.com",
      description:
        "Professional real estate platform built to showcase properties and generate inquiries.",
    },
    {
      title: "AI Business Hub",
      category: "Business Website",
      image: "/ai-project.jpg",
      link: "https://example.com",
      description:
        "Business-focused website with modern UI, automation features and AI integration.",
    },
  ];

  return (
    <section
      id="portfolio"
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
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Websites That
            <span className="text-cyan-400"> Deliver Results</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Every project is crafted with performance, design,
            user experience and business growth in mind.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-cyan-500/20
                bg-white/5
                backdrop-blur-xl
                hover:border-cyan-400
                hover:-translate-y-4
                hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">

                  <span className="text-cyan-400 font-medium">
                    View Live Website
                  </span>

                  <FaExternalLinkAlt className="text-cyan-400 group-hover:rotate-12 transition duration-300" />

                </div>

                {/* Bottom Hover Line */}
                <div className="mt-6 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500"></div>

              </div>
            </motion.a>
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
            Start Your Project Today
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Portfolio;