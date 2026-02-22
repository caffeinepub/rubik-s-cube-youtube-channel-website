import { Box } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-cube-red via-cube-orange to-cube-yellow shadow-lg">
            <img 
              src="/assets/generated/cube-logo.dim_256x256.png" 
              alt="Cube Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cube-red via-cube-blue to-cube-green bg-clip-text text-transparent">
              InfiniteSolvesCubes
            </h1>
            <p className="text-xs text-muted-foreground">Speedcubing & Tutorials</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#videos" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Videos
          </a>
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cube-red text-white font-medium text-sm hover:bg-cube-red/90 transition-all hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Box className="w-4 h-4" />
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
