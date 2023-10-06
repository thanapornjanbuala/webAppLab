import React from 'react';
import './App.css';
import { GitHubRepoURL, GitHubAvatar } from './github_data';

// Define your GitHub information
const userInfo = {
  repoUrl: 'https://github.com/thanapornjanbuala',
  avatarUrl: 'https://avatars.githubusercontent.com/u/thanapornjanbuala',
  alt: 'thanapornjanbuala',
};

function App() {
  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar avatarUrl={userInfo.avatarUrl}  atl={userInfo.alt} size={200} />
      <GitHubRepoURL repoUrl={userInfo.repoUrl} />
    </div>
  );
}

export default App;