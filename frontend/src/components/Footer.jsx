import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-cyan-500/20 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <img
              src="/zenova-logo.png"
              alt="Zenova Tech"
              className="h-16 w-auto mb-5"
            />

            <p className="text-gray-400 leading-7">
              Zenova Tech helps businesses grow through modern websites,
              AI chatbots and business automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-cyan-400">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-cyan-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-cyan-400">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Website Development</li>
              <li>AI Chatbots</li>
              <li>Business Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-cyan-400">
              Connect
            </h3>

            <div className="flex gap-4 text-2xl">

              <a
                href="#"
                className="hover:text-cyan-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:contact@zenovatech.com"
                className="hover:text-cyan-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="text-gray-400 mt-6">
              contact@zenovatech.com
            </p>
          </div>

        </div>

        {/* Bottom */}
       <div className="border-t border-cyan-500/20 mt-12 pt-8 pb-24 text-center">
  <p className="text-gray-500 text-sm md:text-base">
    © 2026 Zenova Tech. All Rights Reserved.
  </p>
</div>

      </div>
    </footer>
  );
}

export default Footer;