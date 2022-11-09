export const CommentItem = ({initials, author, message }) => {
    return (
      <div className="comment-item">
          <div className="comment-author-container">
              <figure>{initials}</figure>
              <h5>{author}</h5>
          </div> 
          <p>{message}</p>
      </div>
    )
  }
  