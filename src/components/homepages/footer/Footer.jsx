import React from "react";
import { FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-20 container mx-auto">
      
      {/* Main Part*/}
      <div className="container mx-auto text-center py-16 px-4">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">
          KeenKeeper
        </h1>

        {/* Sub */}
        <p className="text-sm text-gray-200 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Section */}
        <div className="mt-8">
          <p className="text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a className="bg-white text-[#244D3F] p-2 rounded-full hover:scale-110 transition">
              <FaYoutube />
            </a>

            <a className="bg-white text-[#244D3F] p-2 rounded-full hover:scale-110 transition">
              <FaFacebook />
            </a>

            <a className="bg-white text-[#244D3F] p-2 rounded-full hover:scale-110 transition">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 text-sm text-gray-200">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-2 md:mt-0">
            <a className="hover:underline cursor-pointer">Privacy Policy</a>
            <a className="hover:underline cursor-pointer">Terms of Service</a>
            <a className="hover:underline cursor-pointer">Cookies</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;