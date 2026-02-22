import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/assets/generated/hero-background.dim_1920x1080.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cube-blue/10 border border-cube-blue/20 text-cube-blue text-sm font-medium mb-4 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-cube-red animate-pulse" />
            New videos every week
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-slide-up">
            Master the{' '}
            <span className="bg-gradient-to-r from-cube-red via-cube-orange to-cube-yellow bg-clip-text text-transparent">
              Rubik's Cube
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Join InfiniteSolvesCubes to learn speedcubing techniques, solve methods, and advanced algorithms. 
            From beginner to world-class solver. We also share cubing memes and relatable moments that every cuber will love!
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-slide-up animation-delay-400">
            <a 
              href="#videos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cube-red to-cube-orange text-white font-semibold hover:shadow-xl transition-all hover:scale-105 shadow-lg"
            >
              <Play className="w-5 h-5" />
              Watch Tutorials
            </a>
            <a 
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-accent transition-all hover:scale-105"
            >
              Learn More
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-sm animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-cube-red">500K+</div>
              <div className="text-muted-foreground">Subscribers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cube-blue">200+</div>
              <div className="text-muted-foreground">Tutorials</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cube-green">10M+</div>
              <div className="text-muted-foreground">Views</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
