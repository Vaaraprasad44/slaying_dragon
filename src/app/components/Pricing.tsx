const Pricing = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 capitalize">
        Courses
      </h2>

      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[60%] bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 capitalize">JavaScript</h3>
            <p className="text-sm uppercase text-gray-400 mb-2">For beginners</p>
            <p className="text-base text-gray-300 mb-6">
              Learn the basics of JavaScript and how to add interactivity to your web pages. as well as how to add interactivity to your web pages.
            </p>
            <button className="mt-auto bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200">
              Buy now $50
            </button>
          </div>
          <div className="lg:w-[40%] bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 capitalize">CSS</h3>
            <p className="text-sm uppercase text-gray-400 mb-2">For beginners</p>
            <p className="text-base text-gray-300 mb-6">
              Learn the basics of CSS and how to style your web pages. as well as how to style your web pages.
            </p>
            <button className="mt-auto bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200">
              Buy now $50
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 capitalize">ReactJS</h3>
            <p className="text-sm uppercase text-gray-400 mb-2">For beginners</p>
            <p className="text-base text-gray-300 mb-6">
              Learn the basics of ReactJS and how to build dynamic user interfaces. as well as how to build dynamic user interfaces.
            </p>
            <button className="mt-auto bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200">
              Buy now $50
            </button>
          </div>
          <div className="lg:w-1/2 bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2 capitalize">NextJS</h3>
            <p className="text-sm uppercase text-gray-400 mb-2">For beginners</p>
            <p className="text-base text-gray-300 mb-6">
              Learn the basics of NextJS and how to build server-side rendered applications. and how to build server-side rendered applications.
            </p>
            <button className="mt-auto bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200">
              Buy now $50
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
