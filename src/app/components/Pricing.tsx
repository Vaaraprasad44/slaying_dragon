import CourseCard from './CourseCardPricing';

const Pricing = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 capitalize">
        Courses
      </h2>

      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <CourseCard
            title="JavaScript"
            tagline="For beginners"
            description="Learn the basics of JavaScript and how to add interactivity to your web pages. This course is designed for beginners who want to get started with web development."
            buttonColor="bg-white hover:bg-gray-500 text-black"
            width="lg:w-[60%]"
          />
          <CourseCard
            title="CSS"
            tagline="For beginners"
            description="Learn the basics of CSS and how to style your web pages. This course is designed for beginners who want to get started with web development."
            buttonColor="bg-white hover:bg-gray-500 text-black"
            width="lg:w-[40%]"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <CourseCard
            title="ReactJS"
            tagline="For beginners"
            description="Learn the basics of ReactJS and how to build dynamic user interfaces. This course is designed for beginners who want to get started with modern web development."
            buttonColor="bg-white hover:bg-gray-500 text-black"
            width="lg:w-1/2"
          />
          <CourseCard
            title="NextJS"
            tagline="For beginners"
            description="Learn the basics of NextJS and how to build server-side rendered applications. This course is designed for beginners who want to get started with modern web development."
            buttonColor="bg-white hover:bg-gray-500 text-black"
            width="lg:w-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
