'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { Star, Download, ChevronRight } from 'lucide-react';


interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
}

const CosmicAboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('bio');
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    })));
  }, []);

  const sections = ['bio', 'skills', 'achievements'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-8 relative overflow-hidden">
      {/* Star Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Nebula Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About this Cosmic Explorer
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile picture */}
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

          {/* Content */}
          <div className="md:w-2/3">
            {/* Navigation */}
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
                  } transition-colors duration-300`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </motion.div>
            
            {/* Content Sections */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 shadow-lg"
              >
                {activeSection == 'bio' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Cosmic Journey</h2>
                    <p className="mb-4">
                      Greetings fellow Cryptonauts! My name is Kenneth Smith, a cosmic explorer
                      navigating the vast universe of the Crypto Cosmos.  With a passion
                      for Blockchain, I have embarked on a mission to bring Crypto to every
                      corner of the universe.
                    </p>
                    <p>
                      My journey through the Crypto Cosmos has led me to discover fascinating
                      new worlds of ideas and innovations.  Join me as we traverse the galaxies
                      of software development in the Blockchain space, charting new territories
                      and pushing the boundaries of what is possible. 
                    </p>
                  </div>
                )}

                {activeSection === 'skills' && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Cosmic Toolkit</h2>
                    <ul className="grid grid-cols-2 gap-4">
                      {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6'].map(
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
                    <h2 className="text-3xl font-bold mb-4">Celestial Milestones</h2>
                    <ul className="space-y-4">
                      {[
                        'Achievement 1',
                        'Achievement 2',
                        'Achievement 3',
                        'Achievement 4',
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
              </motion.div>
            </AnimatePresence>

            {/* CV Download Button */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a
                href="/Kenneth_Smith_CV.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors duration-300"
              >
                <Download className="mr-2" />
                Download Cosmic CV
              </a>
            </motion.div>

            {/* CV Viewer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-4 h-[600px]">
                <object
                  data="/Kenneth_Smith_CV.pdf"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>It appears you do not have a PDF plugin for this browser. You can <a href="/Kenneth_Smith_CV.pdf">click here to download the PDF file</a></p>
                </object>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmicAboutPage