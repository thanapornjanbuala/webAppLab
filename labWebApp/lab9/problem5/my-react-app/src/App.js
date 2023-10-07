import React from 'react';
import { GitHubInfo } from './githubInfo';

export default function App() {
  const users = [
    {
      url: "https://github.com/thanapornjanbuala",
      imgURL: "https://avatars.githubusercontent.com/u/96040259?v=4",
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
  const popularUsers = users.filter((user) => user.followers > 10000);
  return (
    <div className="App">
    <h1>Popular GitHub Users</h1>
    {popularUsers.map((user, index) => (
      <GitHubInfo key={index} userInfo={user} />
    ))}
  </div>
);
}