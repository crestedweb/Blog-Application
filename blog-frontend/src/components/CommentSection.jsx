import { useEffect, useState } from "react";
import API from "../api/axios";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const fetchComments = () => {
    API.get(`/comments/${postId}`).then(res => setComments(res.data));
  };

  useEffect(fetchComments, [postId]);

  const addComment = async () => {
    await API.post("/comments", { postId, text });
    setText("");
    fetchComments();
  };

  const deleteComment = async id => {
    await API.delete(`/comments/${id}`);
    fetchComments();
  };

  return (
    <div className="comments">
      <h3>Comments</h3>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a comment"
      />
      <button onClick={addComment}>Add</button>

      {comments.map(c => (
        <div key={c._id} className="comment">
          <p>{c.text}</p>
          <button onClick={() => deleteComment(c._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
