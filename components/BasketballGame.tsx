import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BasketballGameProps {
  score: number;
  onScoreChange: (score: number) => void;
}

export default function BasketballGame({ score, onScoreChange }: BasketballGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerPos, setPlayerPos] = useState({ x: 50, y: 0 });
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.code) {
        case 'ArrowLeft':
          setPlayerPos(prev => ({...prev, x: Math.max(0, prev.x - 10)}));
          break;
        case 'ArrowRight':
          setPlayerPos(prev => ({...prev, x: Math.min(100, prev.x + 10)}));
          break;
        case 'Space':
          if (!isJumping) {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 500);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isJumping]);

  return (
    <div className="relative w-full h-full bg-purple-900 rounded-lg overflow-hidden">
      {/* Basketball Court */}
      <div className="absolute inset-0 bg-[url('/court-pattern.svg')] opacity-20" />
      
      {/* Player */}
      <motion.div
        className="absolute bottom-0 w-12 h-12"
        animate={{
          x: `${playerPos.x}%`,
          y: isJumping ? -100 : 0
        }}
        transition={{
          y: isJumping ? { duration: 0.5, type: "spring" } : { duration: 0.2 }
        }}
      >
        <Image
          src="/player-sprite.png"
          alt="Basketball player"
          width={48}
          height={48}
          className="w-full h-full"
        />
      </motion.div>

      {/* Hoop */}
      <div className="absolute top-10 right-10">
        <Image
          src="/basketball-hoop.png"
          alt="Basketball hoop"
          width={60}
          height={60}
        />
      </div>

      {/* Score */}
      <div className="absolute top-4 left-4 text-2xl font-bold text-yellow-400">
        Score: {score}
      </div>
    </div>
  );
} 