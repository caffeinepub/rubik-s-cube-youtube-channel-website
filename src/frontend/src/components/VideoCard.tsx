import { Play, Clock } from 'lucide-react';
import { Video } from '../data/videos';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  video: Video;
  onSelect: (videoId: string) => void;
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-border/50 hover:border-cube-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cube-blue/10 hover:-translate-y-2"
      onClick={() => onSelect(video.id)}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-cube-red/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-2 px-2 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start gap-2">
          <Badge 
            variant="outline" 
            className="text-xs font-medium border-cube-blue/30 text-cube-blue bg-cube-blue/5"
          >
            {video.category}
          </Badge>
        </div>
        
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-cube-blue transition-colors">
          {video.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
          <span>{video.views} views</span>
          <span>{video.uploadDate}</span>
        </div>
      </CardContent>
    </Card>
  );
}
