const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          {new Date().getFullYear()} Slaying the Dragon. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-400 text-sm">
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#contacts" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;