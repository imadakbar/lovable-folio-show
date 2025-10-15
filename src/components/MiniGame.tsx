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
  const [gameOver, setGameOver] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!open || !gameStarted || gameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 400;

    // Player ship
    const player = {
      x: canvas.width / 2 - 20,
      y: canvas.height - 60,
      width: 40,
      height: 40,
      speed: 6,
    };

    // Projectiles
    const projectiles: Array<{ x: number; y: number; speed: number }> = [];
    let canShoot = true;

    // Enemies
    const enemies: Array<{ x: number; y: number; speed: number; width: number; height: number; destroyed: boolean }> = [];
    
    // Spawn initial enemies (start easy)
    for (let i = 0; i < 2; i++) {
      enemies.push({
        x: Math.random() * (canvas.width - 30),
        y: Math.random() * -400 - 100,
        speed: 0.5 + Math.random() * 0.5,
        width: 30,
        height: 30,
        destroyed: false,
      });
    }

    let currentScore = 0;
    let enemySpawnTimer = 0;
    const keys: { [key: string]: boolean } = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.key] = true;
      
      // Shoot on spacebar
      if (e.key === " " && canShoot) {
        projectiles.push({
          x: player.x + player.width / 2 - 2,
          y: player.y,
          speed: 8,
        });
        canShoot = false;
        setTimeout(() => canShoot = true, 300); // Fire rate limit
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const gameLoop = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with space background
      ctx.fillStyle = "rgba(10, 10, 30, 0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars background
      ctx.fillStyle = "#fff";
      for (let i = 0; i < 50; i++) {
        const x = (i * 137.5) % canvas.width;
        const y = (i * 197.3) % canvas.height;
        ctx.fillRect(x, y, 1, 1);
      }

      // Move player
      if ((keys["ArrowLeft"] || keys["a"]) && player.x > 0) {
        player.x -= player.speed;
      }
      if ((keys["ArrowRight"] || keys["d"]) && player.x < canvas.width - player.width) {
        player.x += player.speed;
      }

      // Draw player ship
      ctx.fillStyle = "#8B5CF6";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#8B5CF6";
      ctx.beginPath();
      ctx.moveTo(player.x + player.width / 2, player.y);
      ctx.lineTo(player.x, player.y + player.height);
      ctx.lineTo(player.x + player.width, player.y + player.height);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // Update and draw projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const proj = projectiles[i];
        proj.y -= proj.speed;

        // Remove if off screen
        if (proj.y < 0) {
          projectiles.splice(i, 1);
          continue;
        }

        // Draw projectile
        ctx.fillStyle = "#06B6D4";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#06B6D4";
        ctx.fillRect(proj.x, proj.y, 4, 15);
        ctx.shadowBlur = 0;
      }

      // Progressive difficulty based on score
      const difficultyLevel = Math.floor(currentScore / 50);
      const spawnRate = Math.max(30, 60 - difficultyLevel * 5);
      const baseSpeed = 0.5 + difficultyLevel * 0.15;
      const speedVariation = 0.5 + difficultyLevel * 0.1;

      // Spawn new enemies
      enemySpawnTimer++;
      if (enemySpawnTimer > spawnRate) {
        enemies.push({
          x: Math.random() * (canvas.width - 30),
          y: -30,
          speed: baseSpeed + Math.random() * speedVariation,
          width: 30,
          height: 30,
          destroyed: false,
        });
        enemySpawnTimer = 0;
      }

      // Update and draw enemies
      for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        if (enemy.destroyed) continue;

        enemy.y += enemy.speed;

        // Game over if enemy reaches bottom
        if (enemy.y > canvas.height) {
          setGameOver(true);
          toast.error(`Game Over! Final Score: ${currentScore}`);
          return;
        }

        // Check collision with projectiles
        for (let j = projectiles.length - 1; j >= 0; j--) {
          const proj = projectiles[j];
          if (
            proj.x < enemy.x + enemy.width &&
            proj.x + 4 > enemy.x &&
            proj.y < enemy.y + enemy.height &&
            proj.y + 15 > enemy.y
          ) {
            enemy.destroyed = true;
            projectiles.splice(j, 1);
            currentScore += 10;
            setScore(currentScore);
            toast.success(`+10 points!`, { duration: 800 });
            break;
          }
        }

        // Draw enemy
        if (!enemy.destroyed) {
          ctx.fillStyle = "#EF4444";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#EF4444";
          ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
          ctx.shadowBlur = 0;
        }
      }

      // Remove destroyed enemies
      enemies.forEach((enemy, index) => {
        if (enemy.destroyed) {
          enemies.splice(index, 1);
        }
      });

      // Draw UI
      ctx.fillStyle = "#fff";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${currentScore}`, 20, 30);
      ctx.font = "14px Arial";
      ctx.fillText("Arrow Keys/A/D: Move | Spacebar: Shoot", 20, canvas.height - 10);

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
  }, [open, gameStarted, gameOver]);

  const handleStart = () => {
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
    toast.info("Destroy the enemies! Don't let them reach the bottom!");
  };

  const handleClose = () => {
    setGameStarted(false);
    setGameOver(false);
    onOpenChange(false);
    if (score > 0) {
      toast.success(`Final Score: ${score} points!`);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-saira">Space Shooter</DialogTitle>
          <DialogDescription>
            Destroy the enemies before they reach the bottom!
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4">
          {!gameStarted ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <Gamepad2 className="w-16 h-16 text-primary" />
              <p className="text-center text-muted-foreground">
                Use arrow keys or A/D to move left and right.<br />
                Press SPACEBAR to shoot!<br />
                Don't let enemies reach the bottom!
              </p>
              <Button onClick={handleStart} size="lg" className="mt-4">
                Start Game
              </Button>
            </div>
          ) : gameOver ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <p className="text-2xl font-bold text-destructive">Game Over!</p>
              <p className="text-xl">Final Score: {score}</p>
              <Button onClick={handleRestart} size="lg" className="mt-4">
                Play Again
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
