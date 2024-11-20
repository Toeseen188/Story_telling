import React from 'react';

const CommunityFeature = ({ title, description, icon }) => {
  return (
    <div className="community-feature">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CommunityFeature;
