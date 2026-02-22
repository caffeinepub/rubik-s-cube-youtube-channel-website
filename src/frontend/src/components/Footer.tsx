import { SiYoutube, SiX, SiInstagram, SiFacebook } from 'react-icons/si';
import { Box } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'infinitesolvescubes-app';

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cube-red via-cube-orange to-cube-yellow flex items-center justify-center">
                <Box className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">InfiniteSolvesCubes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for Rubik's Cube tutorials, speedcubing tips, and solving techniques.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#videos" className="hover:text-foreground transition-colors">Tutorials</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Beginner's Guide</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Advanced Methods</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Algorithm Library</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Timer Tool</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cube Notation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-3">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cube-red/10 hover:bg-cube-red/20 flex items-center justify-center transition-all hover:scale-110 text-cube-red"
                aria-label="YouTube"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all hover:scale-110"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cube-orange/10 hover:bg-cube-orange/20 flex items-center justify-center transition-all hover:scale-110 text-cube-orange"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cube-blue/10 hover:bg-cube-blue/20 flex items-center justify-center transition-all hover:scale-110 text-cube-blue"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} InfiniteSolvesCubes. All rights reserved.</p>
          <p>
            Built with ❤️ using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
