import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import CommentSection from "../components/CommentSection";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`).then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentSection postId={id} />
    </div>
  );
}
