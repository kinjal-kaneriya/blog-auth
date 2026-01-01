const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          About <span className="text-[#3AABA7]">Mini Blog</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn more about who we are, what we do, and why Mini Blog exists.
        </p>
      </div>

      {/* About Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mini Blog is a modern blogging platform designed for writers,
            developers, and creatives who want to share their thoughts and ideas
            with a global audience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to keep blogging simple, clean, and focused on content,
            not complexity.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="h-72 bg-gray-200 flex items-center justify-center text-gray-500">
          <img src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
        <div className="border border-gray-200 p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-[#3AABA7]">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To empower people to express ideas freely through meaningful and
            accessible blogging.
          </p>
        </div>

        <div className="border border-gray-200 p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3 text-[#3AABA7]">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become a trusted platform where stories, knowledge, and
            creativity come together.
          </p>
        </div>

      </section>

      {/* Why Mini Blog */}
      <section className="bg-gray-100 p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-black">
          Why Choose Mini Blog?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We focus on clean design, fast performance, and user-friendly
          experiences so you can concentrate on writing what matters most.
        </p>
      </section>

    </div>
  );
};

export default About;
