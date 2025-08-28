import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const collections = [
    { src: "img/keychain2.jpg", alt: "Keychain 2" },
    { src: "img/keychain3.jpg", alt: "Keychain 3" },
    { src: "img/keychain1.jpg", alt: "Keychain 1" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 flex items-center justify-between p-6 lg:px-12 bg-white/80 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div
          className="font-bold text-2xl text-gray-900 tracking-wider
        "
        >
          MINI MOOD
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gray-800">
          <a
            href="/"
            className="relative font-semibold text-lg transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#cde3f5] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="catalog"
            className="relative font-semibold text-lg transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#cde3f5] after:transition-all after:duration-300 hover:after:w-full"
          >
            Catalog
          </a>
          <a
            href="about"
            className="relative font-semibold text-lg transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#cde3f5] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="contact"
            className="relative font-semibold text-lg transition-colors hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#cde3f5] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 text-gray-800 bg-white/20 rounded-lg backdrop-blur-sm"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm p-6 md:hidden z-50 border-b border-white/30">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-800 font-semibold text-left py-2 px-4 rounded-lg transition-colors hover:bg-[#cde3f5]"
              >
                Home
              </a>
              <a
                href="catalog"
                className="text-gray-800 font-semibold text-left py-2 px-4 rounded-lg transition-colors hover:bg-[#cde3f5]"
              >
                Catalog
              </a>
              <a
                href="about"
                className="text-gray-800 font-semibold text-left py-2 px-4 rounded-lg transition-colors hover:bg-[#cde3f5]"
              >
                About
              </a>
              <a
                href="contact"
                className="text-gray-800 font-semibold text-left py-2 px-4 rounded-lg transition-colors hover:bg-[#cde3f5]"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <section id="home">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-12 mt-4">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6x2 text-center font-black text-gray-900 leading-tight tracking-tight mb-4">
                  MINI MOOOOOOOD
                </h1>
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  Haloo, selamat datang di Mini Mood! 🐮💖
                </h2>

                <p className="text-gray-600 leading-relaxed text-center">
                  Kami percaya kalau hal kecil bisa bikin hati jadi lebih
                  hangat. Atmin menyediakan custom keychain murah & lucu yang
                  bisa kamu desain sendiri sesuai keinginan. Foto bebas, desain
                  suka-suka – kamu bisa pakai foto, ilustrasi, atau tulisan
                  favoritmu!
                  <span className="block mt-2 font-bold text-pink-600 text-center">
                    mulai dari Rp5.000 aja!
                  </span>
                </p>

                <p className="text-gray-600 italic text-center">
                  Cocok banget buat kado, hadiah sahabat, atau koleksi pribadi
                  &gt;.&lt;
                </p>

                <p className="mt-6 font-medium text-gray-900 italic mb-8 text-center">
                  Mini Mood hadir supaya kamu bisa bawa sedikit mood ke mana pun
                  kamu pergi 🌸
                </p>
              </div>
            </div>

            {/* Right Content - Miffy Character */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative">
                {/* Main Miffy Character */}
                <div className="w-80 h-60 lg:w-60 lg:h-80x flex items-center justify-center">
                  <img
                    src={"img/mimoLogo.png"}
                    alt="Deskripsi gambar"
                    className="w-full object-cover h-78 mb-12"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200/50 rounded-full animate-bounce delay-100 mb-6"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-200/50 rounded-full animate-bounce delay-300 mb-8"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-purple-200/50 rounded-full animate-bounce delay-500 mb-6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-center font-sans">
          {/* OUR COLLECTION */}

          {/* OUR PHILOSOPHY */}

          {/* FOOTER */}
          <footer className="bg-gray-900 text-white py-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold">MM</span>
                <span className="text-gray-300">MINIMOOD</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Kenangan Dalam Genggaman
              </p>
              <div className="flex gap-4 text-gray-400 text-2xl">
                <a
                  href="https://www.instagram.com/mm.minimood?utm_source=ig_web_button_share_sheet&igsh=MWlyaDU3eTg0N3cyaQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
                </a>

                <a
                  href="https://wa.me/+6285719005632"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="cursor-pointer hover:text-green-500 transition" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default About;
