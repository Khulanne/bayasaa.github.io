import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BasketballGame } from '@/components/BasketballGame';
import { Basketball } from 'lucide-react';
import Head from 'next/head';

// Add game-related types
interface GameState {
  score: number;
  isPlaying: boolean;
}

export default function PortfolioHome() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    isPlaying: false
  });

  // ... existing avatar and audio code ...

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d011c] to-[#1a0933] text-white">
      <Head>
        <title>Bayarbayasgalan Bayarkhuu - Database Expert & Basketball Enthusiast</title>
        <meta name="description" content="Database Administrator | Data Explorer | Basketball Strategist" />
      </Head>

      {/* Hero Section with Basketball Theme */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Image
                src="/profile-photo.jpg"
                alt="Bayarbayasgalan Bayarkhuu"
                width={150}
                height={150}
                className="mx-auto rounded-full border-4 border-yellow-500"
                onClick={handleAvatarClick}
                priority
              />
            </motion.div>

            {/* Name and Title */}
            <h1 className="text-5xl font-bold mt-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Bayarbayasgalan Bayarkhuu
            </h1>
            <h2 className="text-xl mt-4 text-yellow-300">
              Database Administrator | Data Explorer | Basketball Strategist
            </h2>

            {/* About Section */}
            <div className="mt-8 max-w-2xl mx-auto text-lg">
              <p>
                In the database court, I work to automate, optimize, and secure systems. 
                Off the court, it's all about analyzing plays and supporting the purple and gold.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Basketball Game Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-8">
            Game Mode
          </h2>
          
          <Card className="bg-[#1e103c] border-2 border-yellow-500">
            <CardContent className="p-6">
              <div className="aspect-video relative">
                <BasketballGame 
                  score={gameState.score}
                  onScoreChange={(newScore) => setGameState(prev => ({...prev, score: newScore}))}
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-sm">
                  Move with ←→: jump with SPACE
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decorative Basketball Elements */}
      <div className="fixed -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          >
            <Basketball className="w-8 h-8 text-yellow-500 opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* Rest of your sections (Skills, Contact, etc.) */}
      // ... existing code ...
    </div>
  );
} 