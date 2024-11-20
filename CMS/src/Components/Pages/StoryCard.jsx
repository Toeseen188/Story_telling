import React from 'react';

const StoryCard = ({ story }) => {
  return (
    <div className="card shadow-sm">
      {/* Image */}
      <img 
        src={story.coverImage} 
        alt={story.title} 
        className="card-img-top" 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      
      <div className="card-body">
        {/* Title */}
        <h5 className="card-title">{story.title}</h5>

        {/* Author */}
        <p className="card-text">By {story.author}</p>

        {/* Rating and Comments */}
        <div className="d-flex justify-content-between">
          <span>{story.rating} ⭐</span>
          <span>{story.commentsCount} comments</span>
        </div>

        {/* Read Story Button */}
        <button 
          className="btn btn-outline-primary mt-3" 
          onClick={() => window.location.href = `/story/${story.id}`}
        >
          Read Story
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
