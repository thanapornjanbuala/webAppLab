// src/App.js
import React from 'react';

function GitHubAvatar() {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/96261980?v=4"
      alt="GitHub Avatar"
    />
  );
}

function GitHubRepoURL() {
  return (
    <p>
      <a
        target="_blank"
        href="https://github.com/thanapornjanbuala"
        rel="noopener noreferrer"
      >
        GitHub Repo
      </a>
    </p>
  );
}

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default function Gallery() {
  return (
    <section>
      <div style = {styles}>
        <h1>My GitHub Information</h1>
      </div>
      <div style = {styles}><GitHubAvatar /></div>
      <div style = {styles}><GitHubRepoURL /></div>
    </section>
  );
  }
