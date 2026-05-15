import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-8">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex justify-between items-start text-white bg-transparent">
        <Link to="/" className="text-[1.25rem] font-medium tracking-tight">Home</Link>
        <div className="flex flex-col items-end gap-1 text-[1.25rem] font-medium tracking-tight">
          <a href="#works" className="hover:opacity-60 transition-opacity">Projects</a>
          <Link to="/about" className="hover:opacity-60 transition-opacity">About</Link>
          <Link to="/contact" className="hover:opacity-60 transition-opacity">Contacts</Link>
        </div>
      </div>
    </nav>
  );
}
