const CourseCardPricing = ({
  title,
  tagline,
  description,
  buttonColor,
  width,
}: {
  title: string;
  tagline: string;
  description: string;
  buttonColor: string;
  width: string;
}) => {
  return (
    <div className={`${width} bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 flex flex-col hover:scale-[1.02] hover:shadow-2xl transition duration-300`}>
      <h3 className="text-2xl font-semibold mb-2 capitalize">{title}</h3>
      <p className="text-sm uppercase text-gray-400 mb-2">{tagline}</p>
      <p className="text-base text-gray-300 mb-6">{description}</p>
      <button
        className={`mt-auto ${buttonColor} py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200`}
      >
        Buy now $50
      </button>
    </div>
  );
};

export default CourseCardPricing;
