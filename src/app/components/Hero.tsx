const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-black">
      <img
        src="/hero.png"
        alt="Hero Image"
        className="w-full max-w-[10rem] rounded-lg shadow-lg mb-5"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        Studiox
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mb-8">
        Join the journey to conquer fear, build strength, and become legendary.
      </p>
      
    </section>
  );
};

export default Hero;
