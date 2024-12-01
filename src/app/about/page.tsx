'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Download, ChevronRight, Rocket, Earth, Zap } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';

const AboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('bio');
  const sections = ['bio', 'skills', 'achievements', 'contact'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-8 relative overflow-hidden">
      <CosmicBackground />

      <div className="container mx-auto relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About This Cosmic Explorer
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/3"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <img
                src="/profile.png"
                alt="Kosmos Ken"
                className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/50"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                animate={{
                  borderColor: ['rgba(59, 130, 246, 0.5)', 'rgba(167, 139, 250, 0.5)'],
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </div>
          </motion.div>

          <div className="md:w-2/3">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {sections.map((section) => (
                <button
                  key={section}
                  className={`mx-2 px-4 py-2 rounded-full ${
                    activeSection === section
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300'
                  } transition-colors duration-300 hover:bg-blue-400`}
                  onClick={() => setActiveSection(section)}
                >
                  {section === 'bio' && <Rocket className="inline mr-2" />}
                  {section === 'skills' && <Zap className="inline mr-2" />}
                  {section === 'achievements' && <Star className="inline mr-2" />}
                  {section === 'contact' && <Earth className="inline mr-2" />}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </motion.div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-blue-500/30"
              >
                {activeSection === 'bio' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Kenneth Scott Smith</h2>
                    <p className="mb-4">
                      Greetings fellow Cryptonauts! My name is Kenneth Scott Smith, a cosmic explorer
                      navigating the vast universe of the Crypto Cosmos.  With a passion
                      for Blockchain, I have embarked on a mission to bring Crypto to every
                      corner of the universe.                    
                    </p>
                    <p>
                      My journey through the Crypto Cosmos has led me to discover fascinating
                      new worlds of ideas and innovations.  Join me as we traverse the galaxies
                      of software development in the Blockchain space, charting new territories
                      and pushing the boundaries of what is possible.                     </p>
                  </div>
                )}

                {activeSection === 'skills' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Cosmic Toolkit</h2>
                    <ul className="grid grid-cols-2 gap-4">
                        {['Smart Contract Developement', 'Solidity Design Patterns', 'Gas Optimization Techniques', 'DeFi Protocol Designs', 'EVM Security Best Practices', 'Testing and Auditing Methodologies'].map(
                        (skill, index) => (
                          <motion.li
                            key={skill}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <Star className="mr-2 text-yellow-400" />
                            {skill}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {activeSection === 'achievements' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Celestial Milestones</h2>
                    <ul className="space-y-4">
                      {[
                        '🥇 1st Place - Scaling Web3 Hackathon, Orderly Network Bounty',
                        '🥇 1st Place - Viction Blockchain Hackathon Gaming track',
                        '🥇 Finalist - Vietnam Rust Web3 Hackathon',
                        'Completed ZK Proofs Bootcamp',
                        'Completed Expert Solidity Coding Bootcamp',
                        'Completed Solidity/Blockchain Intensive Coding Bootcamp',
                        'Bachelors of Science degree in Mechanical Engineering',
                      ].map((achievement, index) => (
                        <motion.li
                          key={achievement}
                          className='flex items-center'
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <ChevronRight className="mr-2 text-blue-400" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeSection === 'contact' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">Intergalactic Communication Channels</h2>
                    <ul className="space-y-4">
                      {[
                        'Email: ksmit323@gmail.com',
                        'Discord: mrpresident323',
                      ].map((contact, index) => (
                        <motion.li
                          key={contact}
                          className='flex items-center'
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <ChevronRight className='mr-2 text-blue-400' />
                          {contact}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a
                href="/Kenneth_Smith_CV.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors duration-300 animate-pulse"
              >
                <Download className="mr-2" />
                Download Interstellar CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-8"
            >
              <div className="bg-gray-800/70 rounded-lg shadow-lg p-4 h-[600px] border border-blue-500/30">
                <object
                  data="/Kenneth_Smith_CV.pdf"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>It appears you do not have a PDF plugin for this browser. You can <a href="/Kenneth_Smith_CV.pdf" className="text-blue-400 hover:underline">click here to download the PDF file</a></p>
                </object>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
