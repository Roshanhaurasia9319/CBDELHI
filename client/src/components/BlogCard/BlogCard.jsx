// BlogCard.js
import React from "react";
import Badge from "./Badge";
import './BlogCard.css';

const BlogCard = ({imgLink, desc, title, date, badges, }) => {
    return (
        <div className="blog-card-container">
            <div className="blog-card">
          <div className="blog-card-img">
              <img  className="blog-image"
                src={imgLink} 
                alt="IPL 2025" />
          </div>
            <div className="blog-container">
                <div>
                    <p className="blog-date">{date}</p>
                    <h2 className="blog-title">
                        {title}
                    </h2>
                    <div className="blog-badge">
                        {badges.map((badge, index) => (
                            <Badge key={index} label={badge} />
                        ))}
                    </div>
                    <p className="blog-desc">
                        {desc}
                    </p>
                </div>
                <p className="blog-read-more">Read More....</p>
            </div>
        </div>
        </div>
    );
};

export default BlogCard;
