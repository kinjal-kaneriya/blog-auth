const Category = () => {
  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Education",
    "Business",
    "Health",
    "Design",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Blog <span className="text-[#3AABA7]">Categories</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore blogs by topics you are interested in.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-200 p-8 text-center cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-black mb-2">
              {category}
            </h2>
            <p className="text-gray-500 text-sm">
              Explore {category.toLowerCase()} related blogs
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Category;
