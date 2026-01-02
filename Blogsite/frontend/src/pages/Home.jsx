import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaComment, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {

  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      setPost(res.data); 
    } catch (err) {
      alert("Failed to fetch the blog list");
      console.error(err);
    }
  };

  fetchBlogs();
}, []);


  const handleDelete = async (id) => {
    const confirmMsg = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmMsg) return;

    try {
      await axios.delete(`http://localhost:5000/api/blog/${id}`);

      setPost((prevBlogs) =>
        prevBlogs.filter((blog) => blog._id !== id)
      );

    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  return (
    <div className="mt-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {post.map((b) => (
          <div
            key={b._id}
            className="relative h-105.5 overflow-hidden shadow-md group"
          >
            <img
              src={b.image}
              alt="blog"
              className="w-full h-full object-cover blur-[1.5px] group-hover:blur-0 transition duration-300"
            />

            <div className="absolute top-3 right-3 flex gap-2 z-20">
              <div 
                onClick={() => navigate(`/editblog/${b._id}`)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-black hover:scale-110 transition cursor-pointer"
              >
                <FaEdit size={14} />
              </div>

              <div
                onClick={() => handleDelete(b._id)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white hover:scale-110 transition cursor-pointer"
              >
                <FaTrash size={14} />
              </div>
            </div>


            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {b.title}
              </h2>

              <p className="text-sm text-gray-200 mb-3 line-clamp-3">
                {b.content}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-300">
                <span>{new Date(b.createdAt).toDateString()}</span>
                <FaComment className="text-base cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
  <Link
    to="/blog"
    className="px-8 py-3 rounded-full bg-[#3AABA7] text-white font-semibold
               shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    + Create New Blog
  </Link>
</div>
    </div>
  );
};

export default Home;
