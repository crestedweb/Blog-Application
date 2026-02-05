import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p className="preview">{post.content.slice(0, 120)}...</p>
      <Link to={`/post/${post._id}`} className="readmore">Read More →</Link>
    </div>
  );
}
