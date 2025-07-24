const Cta = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-950 to-black text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Slay Your Inner Dragon?</h2>
        <p className="text-lg mb-8">
          Embark on your journey today and become the legend you were born to be.
        </p>
        <img
          src="/cta.png"
          alt="Call to Action"
          className="mx-auto mb-8 w-full max-w-xs rounded-lg shadow-lg"
        />
        <a
          href="#"
          className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg hover:bg-indigo-100 transition"
        >
          Enter the App
        </a>
      </div>
    </section>
  );
};

export default Cta;