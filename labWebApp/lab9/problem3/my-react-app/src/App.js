import './App.css';
import { GitHubInfo } from './GitHubInfo.js';

export default function App() {
   const users = [
    {
    url: "https://github.com/thanapornjanbuala",
    imgURL: "https://avatars.githubusercontent.com/u/96261980?v=4",
    alt: "thanapornjanbuala"
  },
  {
    url: "https://github.com/facebook/react",
    imgURL: "https://avatars.githubusercontent.com/u/69631?s=48&v=4",
    alt: "react"
  },
  {
    url:"https://github.com/vercel/next.js",
    imgURL:"https://avatars.githubusercontent.com/u/14985020?s=48&v=4",
    alt:"next.js"
  }]
  return (
    <div className="App">
      <GitHubInfo userInfo={users[0]}/>
      <GitHubInfo userInfo={users[1]}/>
      <GitHubInfo userInfo={users[2]}/>
    </div>
  );
}