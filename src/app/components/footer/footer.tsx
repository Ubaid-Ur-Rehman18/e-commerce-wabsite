import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaPaypal, FaCcVisa, FaApple, FaGooglePay } from "react-icons/fa"; // Add these for payment icons

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top: Company Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-black text-2xl font-semibold">Shop.co</h3>
            <p className="mt-2 text-sm">We have clothes that suit your style and</p>
            <p className="mt-2 text-sm">which you're proud to wear.</p>
            <p className="mt-2 text-sm">From women to men.</p>
          </div>

          {/* Footer Links Section */}
          <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:ml-6">
            {/* Company Links */}
            <div className="flex flex-col items-start space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-black hover:text-gray-600 transition-colors">About</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Features</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Careers</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Works</a>
              </div>
            </div>

            {/* Help Links */}
            <div className="flex flex-col items-start space-y-4 md:ml-6">
              <h4 className="text-lg font-semibold">Help</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Customer Support</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Delivery Details</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Terms & Conditions</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Privacy Policy</a>
              </div>
            </div>

            {/* FAQ Links */}
            <div className="flex flex-col items-start space-y-4 md:ml-6">
              <h4 className="text-lg font-semibold">FAQ's</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Account</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Manage Delivery</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Orders</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Payments</a>
              </div>
            </div>

            {/* Resources Links */}
            <div className="flex flex-col items-start space-y-4 md:ml-6">
              <h4 className="text-lg font-semibold">Resources</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-black hover:text-gray-600 transition-colors">E-Books</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">Development Tutorial</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">How to - Blog</a>
                <a href="#" className="text-black hover:text-gray-600 transition-colors">YouTube Playlist</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Social Icons and "Built with ❤️" Text */}
        <div className="flex flex-col md:flex-row justify-start items-start mt-6 space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex space-x-6">
              <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Twitter">
                <IoLogoTwitter className="text-xl" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Facebook">
                <RiFacebookFill className="text-xl" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="GitHub">
                <IoLogoGithub className="text-xl" />
              </a>
            </div>

            {/* "Built with ❤️" Text */}
            <div className="flex justify-start items-center mt-2">
              <p className="text-sm text-gray-500">Built with ❤️ by Shop.co Team</p>
            </div>
          </div>
        </div>

        {/* Payment Method Icons at the bottom right */}
        <div className="flex space-x-4 mt-4 md:mt-0 justify-end">
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <FaPaypal className="text-xl" />
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <FaCcVisa className="text-xl" />
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <FaApple className="text-xl" />
          </a>
          <a href="#" className="text-black hover:text-gray-600 transition-colors">
            <FaGooglePay className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
