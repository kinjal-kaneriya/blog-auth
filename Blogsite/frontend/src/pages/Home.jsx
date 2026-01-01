const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Welcome to <span className="text-[#3AABA7]">Mini Blog</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover insightful articles, stories, and ideas written by creators
          around the world.
        </p>
      </section>

      {/* Blog Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-black">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Blog Card */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border border-gray-200 hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200"></div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  Blog Title Goes Here
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  This is a short description of the blog post to give users an
                  idea of the content.
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Jan 1, 2026</span>
                  <button className="text-[#3AABA7] font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-[#3AABA7] text-white text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">
          Share Your Story With the World
        </h2>
        <p className="mb-6 text-gray-100">
          Join Mini Blog and start writing today.
        </p>
        <button className="bg-white text-[#3AABA7] px-8 py-3 font-semibold">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Home;
