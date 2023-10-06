import React from 'react';
function GitHubAvatar(props) {
    const { size } = props;
    const githubUsername = 'thanapornjanbuala';
    return (
      <div>
        <img
          src={`https://avatars.githubusercontent.com/${githubUsername}`}
          alt="GitHub Avatar"
          style={{ width: size, height: size }}
        />
      </div>
    );
  }
function GitHubRepoURL() {
    const githubUsername = 'thanapornjanbuala';
    return (
        <div className="github-repo-url">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
           GitHub Repository
          </a>
         
        </div>
      );
    };
GitHubAvatar.defaultProps = {
  size:50,
};

export { GitHubRepoURL, GitHubAvatar };