export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadDate: string;
  category: string;
}

export const videos: Video[] = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'How to Solve a 3x3 Rubik\'s Cube - Beginner\'s Method',
    description: 'Learn the easiest method to solve a 3x3 Rubik\'s Cube from scratch. Perfect for complete beginners with step-by-step instructions.',
    thumbnail: '/assets/generated/hero-background.dim_1920x1080.png',
    duration: '15:42',
    views: '2.5M',
    uploadDate: '2 weeks ago',
    category: 'Beginner'
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'CFOP Method Explained - Advanced Speedcubing',
    description: 'Master the CFOP method used by world champions. Learn Cross, F2L, OLL, and PLL algorithms for faster solving times.',
    thumbnail: '/assets/generated/hero-background.dim_1920x1080.png',
    duration: '22:18',
    views: '1.8M',
    uploadDate: '1 month ago',
    category: 'Advanced'
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'F2L Algorithms - Complete Tutorial',
    description: 'All 41 F2L cases explained with intuitive solutions and efficient algorithms. Improve your F2L speed dramatically.',
    thumbnail: '/assets/generated/hero-background.dim_1920x1080.png',
    duration: '28:35',
    views: '950K',
    uploadDate: '3 weeks ago',
    category: 'Intermediate'
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Sub-10 Second Solve - Slow Motion Breakdown',
    description: 'Watch a sub-10 second solve in slow motion with detailed explanation of every move and decision-making process.',
    thumbnail: '/assets/generated/hero-background.dim_1920x1080.png',
    duration: '12:05',
    views: '3.2M',
    uploadDate: '5 days ago',
    category: 'Speedcubing'
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'OLL Algorithms - All 57 Cases',
    description: 'Complete guide to all 57 OLL algorithms with tips on recognition and execution. Includes printable algorithm sheet.',
    thumbnail: '/assets/generated/hero-background.dim_1920x1080.png',
    duration: '35:20',
    views: '1.2M',
    uploadDate: '2 months ago',
    category: 'Advanced'
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Finger Tricks for Faster Solving',
    description: 'Essential finger tricks and turning techniques to improve your TPS (turns per second) and overall solving speed.',
    thumbnail: '/assets/generated/hero-background.dim_1920x1080.png',
    duration: '18:47',
    views: '2.1M',
    uploadDate: '1 week ago',
    category: 'Technique'
  }
];
