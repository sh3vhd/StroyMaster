import React, { useEffect, useState } from 'react';
import { LogoIcon, MenuIcon, CloseIcon, PhoneIcon } from './Icons';

const links = [
  { href: '#services', label: 'Услуги' },
  { href: '#projects', label: 'Проекты' },
  { href: '#about', label: 'О нас' },
  { href: '#process', label: 'Этапы работ' },
  { href: '#contact', label: 'Контакты' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <LogoIcon size={40} />
            <div>
              <div className={`font-bold text-xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                СтройМастер
              </div>
              <div className={`text-xs ${scrolled ? 'text-slate-500' : 'text-orange-200'}`}>
                Строим с 2009 года
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+74951234567"
            className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            <PhoneIcon size={18} />
            +7 (495) 123-45-67
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            aria-label="menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white shadow-lg border-t border-slate-100">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-slate-700 font-medium hover:bg-orange-50 hover:text-orange-600 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+74951234567"
              className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-lg font-medium"
            >
              <PhoneIcon size={18} />
              +7 (495) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
