import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink, Github } from 'lucide-react';

interface LinkProps {
  href: string;
  type: 'youtube' | 'external' | 'github';
  label: string;
}

interface LinkButtonProps {
  links: LinkProps[];
}

const LinkButton: React.FC<LinkButtonProps> = ({ links }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'youtube':
        return Youtube;
      case 'github':
        return Github;
      default:
        return ExternalLink;
    }
  };

  return (
    <div className="flex space-x-4 justify-center">
      {links.map((link, index) => {
        const Icon = getIcon(link.type);
        return (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 w-55"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={18} className="flex-shrink-0" />
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">
              {link.label}
            </span>
            <motion.span
              className="ml-1 flex-shrink-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ✦
            </motion.span>
          </motion.a>
        );
      })}
    </div>
  );
};

export default LinkButton;