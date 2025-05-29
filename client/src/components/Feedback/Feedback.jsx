import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="reply-card">
      <h2 className="reply-title">Leave a Reply</h2>
      <p className="reply-note">
        Your email address will not be published. Required fields are marked{" "}
        <span className="required">*</span>
      </p>

      <form className="reply-form">
        <textarea
          placeholder="Comment*"
          className="reply-input reply-textarea"
          required
        ></textarea>

        <input type="text" className="reply-input" placeholder="Name*" required />
        <input type="email" className="reply-input" placeholder="Email*" required />
        <input type="url" className="reply-input" placeholder="Website" />

        <label className="checkbox-label">
          <input type="checkbox" />
          Save my name, email, and website in this browser for the next time I comment.
        </label>

        <button type="submit" className="reply-button">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Feedback;
