const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Contact <span className="text-[#3AABA7]">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or ideas? We’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-black">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-6">
            Feel free to reach out to us anytime. We aim to respond as quickly
            as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span> support@miniblog.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">Address:</span> India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-gray-200 p-8">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-100 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-100 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 bg-gray-100 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#3AABA7] text-white py-3 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
