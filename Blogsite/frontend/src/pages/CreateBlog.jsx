import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleBlogPost = async () => {
    try {
        const res = await axios.post("http://localhost:5000/api/blog/create-blog", {
            title,
            image,
            content,
        });

        alert(res.data.message);
        navigate("/");
        setTitle("");
        setImage("");
        setContent("");
    }
    catch (err) {
        alert("blog publish failed", err)
    }
  } 

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#3AABA7] text-center">
          Create a New Blog
        </h1>

        <form className="flex flex-col gap-6" onSubmit={(e) => {
            e.preventDefault();
            handleBlogPost();
        }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AABA7]"
          />

          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AABA7]"
          />

          <textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#3AABA7]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#3AABA7] text-white py-3 font-semibold rounded-md hover:bg-teal-600 transition-colors cursor-pointer"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
