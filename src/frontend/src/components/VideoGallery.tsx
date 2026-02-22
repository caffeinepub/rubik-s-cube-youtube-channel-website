import VideoCard from './VideoCard';
import { Video } from '../data/videos';

interface VideoGalleryProps {
  videos: Video[];
  onVideoSelect: (videoId: string) => void;
}

export default function VideoGallery({ videos, onVideoSelect }: VideoGalleryProps) {
  return (
    <section id="videos" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/assets/generated/section-pattern.dim_1200x400.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest{' '}
            <span className="bg-gradient-to-r from-cube-blue via-cube-green to-cube-yellow bg-clip-text text-transparent">
              Tutorials
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step-by-step guides to help you solve the cube faster and master advanced techniques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onSelect={onVideoSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
