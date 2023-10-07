export function GitHubInfo({ userInfo }) {
    return (
      <div className="github-info">
        <img src={userInfo.imgURL} alt={userInfo.alt} width={100} />
        <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
        {userInfo.alt} </a>
        ({userInfo.followers} followers)
      </div>
    );
  }
  