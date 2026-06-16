import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-5
      right-5
      md:bottom-8
      md:right-8
      z-[99999]
      w-14
      h-14
      md:w-16
      md:h-16
      bg-green-500
      rounded-full
      flex
      items-center
      justify-center
      text-white
      text-2xl
      md:text-3xl
      shadow-[0_0_25px_rgba(34,197,94,0.6)]
      hover:scale-110
      transition-all
      duration-300
      "
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsappButton;