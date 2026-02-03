import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import {BrowerRoute, Routes, Route} from "react-router-dom"

function App() {
 

  return (
   <BrowerRoute>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreatePost />} />
    <Route path="/post/:id" element={<PostDetails />} />
   </Routes>
   </BrowerRoute>
  )
}

export default App
