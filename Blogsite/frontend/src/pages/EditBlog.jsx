import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blog/${id}`);
        setTitle(res.data.title);
        setImage(res.data.image);
        setContent(res.data.content);
      } catch (err) {
        alert("Failed to fetch blog data");
        console.error(err);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/blog/editblog/${id}`, {
        title,
        image,
        content
      });

      alert(res.data.message);
      navigate("/"); 
    } catch (err) {
      alert("Error updating blog");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-[#3AABA7] text-center">
          Edit Blog
        </h1>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AABA7]"
        />

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AABA7]"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content here..."
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#3AABA7]"
        ></textarea>

        <button
          onClick={handleUpdate}
          className="w-full bg-[#3AABA7] text-white py-3 font-semibold rounded-md hover:bg-teal-600 transition-colors cursor-pointer"
        >
          Update Blog
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
