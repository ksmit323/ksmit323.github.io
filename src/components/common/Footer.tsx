'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
        { Icon: Github, href: 'https://github.com/ksmit323' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/in/kenneth-smith-50553493/' },
        { Icon: Mail, href: 'mailto:ksmit323@gmail.com' },
  ];

  return (
    <motion.footer 
      className="bg-black bg-opacity-70 text-white p-6 backdrop-blur-md"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-6">
          {socialLinks.map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-200" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
