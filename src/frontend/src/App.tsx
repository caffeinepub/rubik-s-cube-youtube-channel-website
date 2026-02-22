import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';
import { videos } from './data/videos';

function App() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleClosePlayer = () => {
    setSelectedVideoId(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoGallery videos={videos} onVideoSelect={handleVideoSelect} />
      </main>
      <Footer />
      {selectedVideoId && (
        <VideoPlayer videoId={selectedVideoId} onClose={handleClosePlayer} />
      )}
    </div>
  );
}

export default App;
