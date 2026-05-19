import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Vikram Singh Rawat. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/50">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
