import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3AABA7] text-white mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            Mini Blog is a modern blogging platform where users can share ideas,
            stories, and knowledge with the world.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-100 text-sm mb-4">
            Subscribe to get the latest blog updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 text-black outline-none"
          />
          <button className="mt-3 w-full bg-white text-[#3AABA7] font-semibold py-2">
            Subscribe
          </button>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <span className="p-2 border border-white rounded-full cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-2 border border-white rounded-full cursor-pointer">
              <FaInstagram />
            </span>
            <span className="p-2 border border-white rounded-full cursor-pointer">
              <FaLinkedinIn />
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/40 py-4 text-center text-sm">
        Copyright ©2026 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
