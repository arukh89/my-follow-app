import React, { useState, useEffect } from 'react';

export default function FollowApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (window.parent !== window) {
      console.log('Running inside Farcaster Mini App');
    }

    return () => clearTimeout(timer);
  }, []);

  const handleFollowClick = () => {
    console.log('Follow button clicked!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <div className="bg-white/10 rounded-full p-8">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center p-5">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-center max-w-md w-full shadow-2xl border border-white/20">
        <div className="w-24 h-24 bg-red-400 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-bold shadow-lg">
          Y
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Yokozoeth</h1>
        <p className="text-base opacity-90 mb-5">@yokozoeth</p>
        
        <div className="text-sm leading-relaxed mb-8 space-y-1">
          <div>🚀 Building amazing things on the web</div>
          <div>💡 Sharing insights about tech and innovation</div>
          <div>🌟 Join the community!</div>
        </div>
        
        
          href="https://x.com/yokozoeth?t=c6QKwS7QZvHzxnvbBlGpJw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleFollowClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-block no-underline"
        >
          Follow on 𝕏
        </a>
        
        <div className="mt-5 text-xs opacity-80">⚡ Mini App</div>
      </div>
    </div>
  );
    }
