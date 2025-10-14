import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";
import { toast } from "sonner";

interface MiniGameProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MiniGame = ({ open, onOpenChange }: MiniGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!open || !gameStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 400;

    // Player
    const player = {
      x: canvas.width / 2,
      y: canvas.height - 30,
      width: 40,
      height: 40,
      speed: 5,
    };

    // Particles to collect
    const particles: Array<{ x: number; y: number; speed: number; collected: boolean }> = [];
    
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: Math.random() * (canvas.width - 20),
        y: Math.random() * -400,
        speed: 1 + Math.random() * 2,
        collected: false,
      });
    }

    let currentScore = 0;
    const keys: { [key: string]: boolean } = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const gameLoop = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.fillStyle = "rgba(17, 24, 39, 0.9)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Move player
      if ((keys["ArrowLeft"] || keys["a"]) && player.x > 0) {
        player.x -= player.speed;
      }
      if ((keys["ArrowRight"] || keys["d"]) && player.x < canvas.width - player.width) {
        player.x += player.speed;
      }

      // Draw player
      ctx.fillStyle = "#8B5CF6";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#8B5CF6";
      ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.shadowBlur = 0;

      // Update and draw particles
      particles.forEach((particle) => {
        if (particle.collected) return;

        particle.y += particle.speed;

        // Check collision
        if (
          particle.x < player.x + player.width &&
          particle.x + 20 > player.x &&
          particle.y < player.y + player.height &&
          particle.y + 20 > player.y
        ) {
          particle.collected = true;
          currentScore += 10;
          setScore(currentScore);
          toast.success(`+10 points! Score: ${currentScore}`, { duration: 1000 });
        }

        // Reset particle if it goes off screen
        if (particle.y > canvas.height) {
          particle.y = Math.random() * -200;
          particle.x = Math.random() * (canvas.width - 20);
        }

        // Draw particle
        ctx.fillStyle = "#06B6D4";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#06B6D4";
        ctx.beginPath();
        ctx.arc(particle.x + 10, particle.y + 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw score
      ctx.fillStyle = "#fff";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${currentScore}`, 20, 30);
      ctx.fillText("Use Arrow Keys or A/D to move", canvas.width - 280, 30);

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [open, gameStarted]);

  const handleStart = () => {
    setScore(0);
    setGameStarted(true);
    toast.info("Collect the glowing particles!");
  };

  const handleClose = () => {
    setGameStarted(false);
    onOpenChange(false);
    if (score > 0) {
      toast.success(`Final Score: ${score} points!`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-saira">Particle Collector</DialogTitle>
          <DialogDescription>
            Catch the falling particles to score points!
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4">
          {!gameStarted ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <Gamepad2 className="w-16 h-16 text-primary" />
              <p className="text-center text-muted-foreground">
                Use arrow keys or A/D to move left and right.<br />
                Collect the glowing cyan particles to score points!
              </p>
              <Button onClick={handleStart} size="lg" className="mt-4">
                Start Game
              </Button>
            </div>
          ) : (
            <canvas
              ref={canvasRef}
              className="border-2 border-primary/20 rounded-lg"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const MiniGameButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-glow hover:scale-110 transition-all duration-300"
        size="icon"
        aria-label="Play mini game"
      >
        <Gamepad2 className="h-6 w-6" />
      </Button>
      <MiniGame open={open} onOpenChange={setOpen} />
    </>
  );
};
