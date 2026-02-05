import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await API.post("/posts", form);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="Title"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          onChange={e => setForm({ ...form, content: e.target.value })}
        />
        <button>Create</button>
      </form>
    </div>
  );
}
