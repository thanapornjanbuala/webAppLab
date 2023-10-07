import React from 'react';
export function GitHubInfo({ userInfo }) {
  return (
    <div className="github-info">
    <h1>{userInfo.alt}</h1>
    <img src={userInfo.imgURL} alt={userInfo.alt} width={100}/>
    <a href={userInfo.url} target="_blank"rel="noopener noreferrer">
    <p>GitHub Repository</p> </a> 
    </div>
  );
}