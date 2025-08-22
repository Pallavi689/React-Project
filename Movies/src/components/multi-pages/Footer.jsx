export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Movies App</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
