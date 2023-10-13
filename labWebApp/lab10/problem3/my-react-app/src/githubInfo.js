import React, { useState } from 'react';

export function GitHubInfo({ userInfo }) {
  const profileUrl = userInfo.url;
  const [isShowingFollowers, setIsShowingFollowers] = useState(true);

  const handleProfileClick = () => {
    window.open(profileUrl, '_blank');
  };

  const handleToggleFollowers = () => {
    setIsShowingFollowers(!isShowingFollowers);
  };

  return (
    <div className="github-info">
      <div style={{ textAlign: 'center' }}>
        <h2 onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
          {userInfo.alt}
        </h2>
        <img src={userInfo.imgURL} alt={userInfo.alt} width={200} />
      </div>
      <button
        onClick={handleToggleFollowers}
        style={{ backgroundColor: 'lightblue', margin: '20px' }}
      >
        {isShowingFollowers ? 'Hide followers' : 'Show followers'}
      </button>
      {isShowingFollowers ? ` ${userInfo.followers}` : ''}
    </div>
  );
}
