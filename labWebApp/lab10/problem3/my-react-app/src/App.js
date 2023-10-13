import React, { useState } from 'react';
import { GitHubInfo } from './githubInfo';
import './App.css';

export default function App() {
  const users = [
    {
      url: "https://github.com/thanapornjanbuala",
      imgURL: "https://avatars.githubusercontent.com/u/96261980?v=4",
      alt: "Thanaporn Janbuala",
      followers: 0,
    },
    {
      url: "https://github.com/facebook",
      imgURL: "https://avatars.githubusercontent.com/u/69631?v=4",
      alt: "facebook",
      followers: 17635,
    },
    {
      url: "https://github.com/vercel",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
      alt: "vercel",
      followers: 10491,
    },
    {
      url: "https://openai.com/",
      imgURL: "https://lirp.cdn-website.com/df735c7c/dms3rep/multi/opt/MicrosoftTeams-image+%28123%29-640w.png",
      alt: "Open AI",
      followers: 10491,
    },
    {
      url: "https://www.google.com/",
      imgURL: "https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_1280.png",
      alt: "Google",
      followers: 10491,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowFollowers(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowFollowers(false);
    }
  };

  const handleShowFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  return (
    <div className="App">
      <h1>Sample GitHub Respositories</h1>
      <GitHubInfo userInfo={users[currentIndex]} showFollowers={showFollowers} />
      <div className="button-container">
        <button onClick={handlePrevious} disabled={currentIndex === 0} style={{ backgroundColor: 'orange' }}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === users.length - 1} style={{ backgroundColor: 'greenyellow' }}>
          Next
        </button>
      </div>
    </div>
  );
}
