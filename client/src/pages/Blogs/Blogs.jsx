import React, { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blogs.css";
import HorizontalCardSlider from "../../components/IPLComponent/HorizontalCardSlider";


const blogs = [
  {
    date: "February 2025",
    badges: ["IPL", "IPL 2025"],
    title:
      "IPL 2025 Schedule - Starting Date, Time, Table, Teams, List, Match Fixtures, Venues",
    desc: "The IPL is India’s most famous and thrilling cricket tournament. The upcoming IPL 2024 is set to kick ...",
    imgLink:
      "https://cbdelhi.in/wp-content/uploads/2024/02/Ipl-07-1-450x450.png",
    content:
      "Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025Full IPL 2025 Schedule: The tournament will start on March 23, 2025. It includes 10 teams with 70 league matches across various cities in India. The finals are expected in late May 2025.",
  },

  {
    date: "April 2025",
    badges: ["Science", "World"],
    title: "Evolution of Aliens over past 10 years",
    desc: "According to the recent reports, aliens have evolved a lot in the recent years....",
    imgLink:
      "https://cbdelhi.in/wp-content/uploads/2024/02/Ipl-07-1-450x450.png",
    content:
      "Recent studies suggest that alien species have adapted biologically and technologically, forming more complex communication networks and AI integration with spacecraft systems.",
  },

  {
    date: "June 2025",
    badges: ["Football", "UEFA Champions League 2025", "PSG", "Inter Milan"],
    title: "PSG v/s Inter: Next Champions League Winner",
    desc: "This month, the last match of UEFA Champions Trophy 2025 will be played between PSG and Inter Milan...",
    imgLink:
      "https://cbdelhi.in/wp-content/uploads/2024/02/Ipl-07-1-450x450.png",
    content:
      "PSG and Inter Milan have both reached peak form. Experts believe this will be a battle of strategies, with PSG’s aggressive lineup against Inter’s solid defense.",
  },
];



const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-container">
      <div className="blog-container-second">
        {blogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(blog)}
            style={{ cursor: "pointer" }}
          >
            <BlogCard
              date={blog.date}
              imgLink={blog.imgLink}
              title={blog.title}
              badges={blog.badges}
              desc={blog.desc}
            />
          </div>
        ))}

        <HorizontalCardSlider />

        {selectedBlog && (
          <div className="modal">
            <div className='modal-div'
            >
              <button
                className='modal-button'
                onClick={closeModal}
                onMouseEnter={(e) => (e.target.style.color = "#ff3b3b")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
                aria-label="Close modal"
              >
                &times;
              </button>
              <h2 className='modal-heading'
              >
                {selectedBlog.title}
              </h2>
              <p className='modal-p1'>
                <strong>Date:</strong> {selectedBlog.date}
              </p>
              <p className='modal-p2'>
                <strong>Tags:</strong>{" "}
                {selectedBlog.badges.map((tag, i) => (
                  <span
                    key={i}
                    className='modal-span'
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <img
                src={selectedBlog.imgLink}
                alt="blog visual"
                width={100}
                height={100}
                className='modal-img'
              />
              <p className='modal-p3'>
                {selectedBlog.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
