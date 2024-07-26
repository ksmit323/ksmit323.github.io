import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Star } from 'lucide-react';
import * as THREE from 'three';


const projects = [
  {
    name: "BuzzKill NFT P2E Game",
    shortDescription: "A Play-to-Earn NFT game set in a buzzing galactic universe.",
    longDescription: "Buzzkill: Honeycomb Hustle is a blockchain-based game on the EVM where players stake bee NFTs in various hives to earn ERC20 honey tokens. This NFT staking game combines digital asset ownership with immersive gameplay. Players can engage in activities such as raiding other hives for honey, foraging for resources, and constructing new buildings in their hive. The game leverages EVM capabilities to create a rewarding experience for NFT enthusiasts, offering a unique blend of strategy and blockchain technology.",
    type: "Blockchain Gaming",
    techStack: "Solidity, React, Foundry, Ethereum, Typescript",
    image: "/sun.jpg",
    galaxy: "/galaxy1.jpg",
    github: "https://github.com/ksmit323/buzzkill-smart-contracts",
    liveDemo: "https://www.loom.com/share/ea6aead1edf24aa3b89d52498c0a9212",
    keyFeatures: [
      "Stake bee NFTs in various hives with unique characteristics",
      "Earn ERC-20 $honey tokens through strategic staking",
      "Engage in raiding, foraging, and hive construction activities",
      "Interactive gallery to showcase bee NFTs",
      "NFT minting portal for creating new bee assets"
    ]
  },
  {
    name: "Funding Rate Arbitrage",
    shortDescription: "A DeFi perpetual futures arbitrage program for crypto markets.",
    longDescription: "DeFi Funding Rate Arbitrage is a project developed for the Encode Scaling Web3 Hackathon. It focuses on arbitraging funding rates across different DEXs for perpetual contracts. The platform retrieves funding rates from multiple DEXs, compares them, and applies an arbitrage strategy to maximize profit. By leveraging the differences in funding rates, traders can earn profits by going short on one DEX with a higher funding rate and long on another with a lower rate.",
    type: "DeFi",
    techStack: "Python, Web3.py, DEX SDK's, Ethereum L2's",
    image: "/jupiter.jpg",
    galaxy: "/galaxy2.jpg",
    github: "https://github.com/ksmit323/funding-rate-arbitrage",
    liveDemo: "https://orderly.network/blog/best-use-orderly-encode-hackathon-winners",
    keyFeatures: [
      "Fetches and compares funding rates from multiple DEXs",
      "Executes arbitrage strategy to profit from rate differences",
      "User-friendly interface for viewing balances, positions, and executing trades",
      "Modular design for easy extension and customization",
      "Provides insights on top funding rate differences across DEXs"
    ]
  },
  {
    name: "Cube Market Maker",
    shortDescription: "A Rust-based market maker bot for the Cube Exchange.",
    longDescription: "Developed for the Vietnam Rust Hackathon, the Cube Market Maker is a trading bot designed to provide liquidity on the Cube Exchange. Utilizing Rust's powerful async capabilities, this project implements a market maker that continuously places buy and sell orders to capture spreads and maintain market liquidity. The bot features real-time market data processing, configurable trading parameters, and an interactive console for monitoring performance.",
    type: "DeFi",
    techStack: "Rust, DEX SDK",
    image: "/mars.jpg",
    galaxy: "/galaxy3.jpg",
    github: "https://github.com/ksmit323/cube_market_maker",
    liveDemo: "https://www.loom.com/share/7bd10a906661499c897a355dd0c9f76b?sid=c19d6163-e14d-4b7b-8cfa-a77252fa260c",
    keyFeatures: [
      "Asynchronous trading operations for high-performance",
      "Configurable spread and order sizes for flexible market making",
      "Real-time market data fetching from Cube Exchange",
      "Interactive console for viewing trading performance and account details",
      "Robust error handling and logging",
      "Easy addition of multiple trading bots for different cryptocurrencies"
    ]
  }
];

interface RotatingPlanetProps {
  image: string;
}

const RotatingPlanet: React.FC<RotatingPlanetProps> = ({ image }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    let width = Math.min(450, window.innerWidth - 40);
    let height = width;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(2.5, 64, 64);
    const texture = new THREE.TextureLoader().load(image);
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        planetTexture: { value: texture },
        brightness: { value: 0.8 },
        contrast: { value: 1.2 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D planetTexture;
        uniform float brightness;
        uniform float contrast;
        varying vec2 vUv;
        void main() {
          vec4 texColor = texture2D(planetTexture, vUv);
          texColor.rgb = (texColor.rgb - 0.5) * contrast + 0.5;
          texColor.rgb *= brightness;
          gl_FragColor = texColor;
        }
      `,
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;

    scene.add(sphere);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      if (!isDraggingRef.current) {
        sphere.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleMouseDown = (event: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDraggingRef.current || !sphereRef.current) return;

      const deltaMove = {
        x: event.clientX - previousMousePositionRef.current.x,
        y: event.clientY - previousMousePositionRef.current.y
      };

      const rotationSpeed = 0.005;
      sphereRef.current.rotation.y += deltaMove.x * rotationSpeed;
      sphereRef.current.rotation.x += deltaMove.y * rotationSpeed;

      previousMousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const updateSize = () => {
      width = Math.min(450, window.innerWidth - 40);
      height = width;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);
    window.addEventListener('resize', updateSize);

    // Custom cursor
    renderer.domElement.style.cursor = 'none';
    const cursorDiv = document.createElement('div');
    cursorDiv.textContent = '🌠';  // Unicode character for shooting star
    cursorDiv.style.position = 'fixed';
    cursorDiv.style.pointerEvents = 'none';
    cursorDiv.style.zIndex = '9999';
    cursorDiv.style.fontSize = '24px';
    document.body.appendChild(cursorDiv);

    const updateCursorPosition = (e: MouseEvent) => {
      cursorDiv.style.left = `${e.clientX}px`;
      cursorDiv.style.top = `${e.clientY}px`;
    };

    renderer.domElement.addEventListener('mousemove', updateCursorPosition);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
      renderer.domElement.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('resize', updateSize);
      document.body.removeChild(cursorDiv);
    };
  }, [image]);

  return <div ref={mountRef} className="w-full max-w-[450px] h-auto aspect-square" />;
};

const ProjectCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [degrees, setDegrees] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setDegrees((prevDegrees) => prevDegrees - 60);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setDegrees((prevDegrees) => prevDegrees + 60);
  };

  const currentProject = projects[index];

  return (
    <div className="relative w-full min-h-screen overflow-hidden px-4 py-8">
      {/* Galaxy Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-[-50%] bg-cover bg-center transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${currentProject.galaxy})`,
            transform: `scale(2) rotate(${-degrees}deg)`,
            transformOrigin: 'center center',
          }}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
          {/* Project Information */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 cosmic-title">{currentProject.name}</h2>
              <p className="text-lg md:text-xl stellar-text">{currentProject.shortDescription}</p>
            </div>
            <div className="nebula-info">
              <p className="text-base md:text-lg mb-4">{currentProject.longDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Type:</strong> {currentProject.type}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <strong>Tech Stack:</strong> {currentProject.techStack}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="cosmic-button">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={currentProject.liveDemo} target="_blank" rel="noopener noreferrer" className="cosmic-button">
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 stellar-text">Key Features</h3>
              <ul className="space-y-2">
                {currentProject.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Star size={20} className="flex-shrink-0 mt-1 text-yellow-400" />
                    <span className="stellar-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Rotating Planet */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <RotatingPlanet image={currentProject.image} />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-8">
          <button
            onClick={handlePrev}
            className="text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .cosmic-title {
          background: linear-gradient(to right, #ff00cc, #3333ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          animation: pulse 5s infinite
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .stellar-text {
          color: #e0e0ff;
          text-shadow: 0 0 5px rgba(224, 224, 255, 0.5);
        }
        .nebula-info {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        }
        .nebula-info strong {
          color: #00ffff;
        }
        .cosmic-button {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .cosmic-button:hover {
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        .cosmic-button span {
          margin-left: 8px;
        }
      `}</style>
    </div>
  );
};

export default ProjectCarousel;