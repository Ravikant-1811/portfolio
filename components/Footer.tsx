'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiHeart, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Ravikant-1811', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/ravikant-upadhyay', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:nravikant123@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Portfolio</h3>
            <p className="text-gray-400 max-w-md">
              Building digital experiences that make a difference, one line of code at a time.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="my-8 h-px bg-gray-700 dark:bg-gray-800"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Made with <FiHeart className="text-red-500" size={16} /> by Ravikant Upadhyay
          </p>
        </motion.div>
      </div>
    </footer>
  );
}