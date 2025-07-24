import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Features</h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Better Learning</h3>
          <p className="text-lg text-gray-400">
            Our platform offers a unique learning experience that combines interactive
            lessons with real-world projects.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <FeatureCard
            title="Interactive Learning"
            description="Engage with interactive lessons that adapt to your learning style."
          />
          <FeatureCard
            title="Real-World Projects"
            description="Work on real-world projects that build your portfolio and skills."
          />
          <FeatureCard
            title="Community Support"
            description="Join a community of learners and get support from peers and mentors."
          />
          <FeatureCard
            title="Flexible Learning"
            description="Learn at your own pace with our flexible learning options."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
