import React from 'react';
import { GitHubInfo } from './githubInfo.js';
export default function App() {
  const users = [
    {
      url: "https://github.com/thanapornjanbuala",
      imgURL: "https://avatars.githubusercontent.com/u/96261980?v=4",
      alt: "thanapornjanbuala",
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
  ];

  return (
    <div className="App">
      <h1>Sample GitHub Repositories</h1>
      <ol>
      <li><GitHubInfo userInfo={users[0]}/></li>
      <li><GitHubInfo userInfo={users[1]}/></li>
      <li><GitHubInfo userInfo={users[2]}/></li>
      </ol>
    </div>
  );
}
