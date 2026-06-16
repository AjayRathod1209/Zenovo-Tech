import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");

      const response = await fetch(
  "https://zenovo-tech-2.onrender.com/api/contact",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

      const data = await response.json();

      if (data.success) {
        setSuccess("✅ Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          business: "",
          message: "",
        });
      } else {
        setSuccess("❌ Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      setSuccess("❌ Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Glow */}
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
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Let's Build Something
            <span className="text-cyan-400"> Amazing</span>
          </h2>

          <div className="flex justify-center mt-6">
            <div className="h-1 w-32 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.8)]"></div>
          </div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Ready to grow your business with websites, AI solutions and automation?
            Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 flex items-center gap-5">
              <FaWhatsapp className="text-3xl text-green-400" />
              <div>
                <h3 className="font-bold text-xl">WhatsApp</h3>
                <p className="text-gray-400">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 flex items-center gap-5">
              <FaEnvelope className="text-3xl text-cyan-400" />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-400">
                  contact@zenovatech.com
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 flex items-center gap-5">
              <FaPhoneAlt className="text-3xl text-cyan-400" />
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-400">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-6 flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl text-cyan-400" />
              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-gray-400">Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8"
          >
            <form onSubmit={submitHandler} className="space-y-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full bg-black/50 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full bg-black/50 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Your Business"
                className="w-full bg-black/50 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                className="w-full bg-black/50 border border-cyan-500/20 rounded-xl px-5 py-4 outline-none resize-none focus:border-cyan-400"
              ></textarea>

              {success && (
                <p className="text-center text-cyan-400 font-medium">
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;