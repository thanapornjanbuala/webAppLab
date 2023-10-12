import React, { useState } from 'react';

export function GitHubInfo({ userInfo }) {
  const [showFollowers, setShowFollowers] = useState(false);

  const handleShowFollowers = () => {
    setShowFollowers(!showFollowers);
  };

  return (
    <div className="github-info">
      <div style={{ textAlign: 'center' }}>
        <h2>{userInfo.alt}</h2>
        <img src={userInfo.imgURL} alt={userInfo.alt} width={200} />
      </div>
      <button onClick={handleShowFollowers} style={{ backgroundColor: 'lightblue', margin: '20px' }}>
        {showFollowers ? 'Hide followers' : 'Show followers'}{' '}
        </button>
        {showFollowers && `${userInfo.followers}`}
      
    </div>
  );
}
