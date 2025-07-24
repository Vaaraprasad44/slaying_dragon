import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-medium text-white uppercase tracking-wide mb-2">FAQ</h2>
          <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Questions. Frequently asked ones. Plus the answers. That's how FAQs work. If you can't find what you're looking for, you can always send an email or hit up the discord with your enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FaqCard
            question="Is there a free demo I can try?"
            answer="Absolutely! Each course allows you to preview a few lessons. This way, you can get a taste of the content, teaching style, and overall quality of the course."
          />
          <FaqCard
            question="What if I get stuck or need help?"
            answer="If you get stuck, need help or have any questions - you can join the discord and ask our amazing community for help where I'm also personally very active."
          />
          <FaqCard
            question="How was this website built?"
            answer="NextJS 15, Next-Auth, ReactJS, TypeScript, Prisma, PostgreSQL, Mux, Stripe, Vercel, react-hook-form, react-email, Zustand, yup, postmark, AWS s3. No CSS library was used."
          />
          <FaqCard
            question="Are there any prerequisites?"
            answer="Each course assumes 0 knowledge of the language being presented. If you take my CSS course, I assume you know little to nothing about CSS."
          />
          <FaqCard
            question="Are there ever any discounts?"
            answer="Yes, when a new course is released it will be on sale for a period of time. You can also expect sales during certain holidays. Sometimes at random too!"
          />
          <FaqCard
            question="What language are the courses in?"
            answer="Each course will be presented in English but I've received many comments about my teaching style and voice being approachable to non native English speakers."
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
