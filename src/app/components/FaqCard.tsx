type FaqCardProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProps) => {
  return (
    <div className="bg-[#0e0e0e] rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-semibold mb-3 text-white">{question}</h3>
      <p className="text-gray-300 leading-relaxed">{answer}</p>
    </div>
  );
};

export default FaqCard;
