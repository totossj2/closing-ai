import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Mic className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-bold">SalesPitch Pro</span>
            </div>
            <p className="text-gray-300 mb-4">
              Elevate your sales skills with AI-powered role-play practice. Perfect your pitch, close more deals.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Mail size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <FooterLink text="Features" to="#" />
              <FooterLink text="Pricing" to="#" />
              <FooterLink text="Testimonials" to="#" />
              <FooterLink text="FAQ" to="#" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink text="Blog" to="#" />
              <FooterLink text="Sales Tips" to="#" />
              <FooterLink text="Role-Play Guides" to="#" />
              <FooterLink text="Community" to="#" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" to="#" />
              <FooterLink text="Careers" to="#" />
              <FooterLink text="Contact" to="#" />
              <FooterLink text="Privacy Policy" to="#" />
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SalesPitch Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="h-8 w-8 rounded-full bg-indigo-800 flex items-center justify-center text-white hover:bg-teal-600 transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ text, to }: { text: string; to: string }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-teal-400 transition-colors duration-300">
      {text}
    </Link>
  </li>
);

export default Footer;