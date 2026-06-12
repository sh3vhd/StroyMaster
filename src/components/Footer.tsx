import React from 'react';
import { LogoIcon, PhoneIcon, MailIcon, MapPinIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoIcon size={36} />
              <div>
                <div className="font-bold text-white text-lg">СтройМастер</div>
                <div className="text-xs text-slate-500">Строим с 2009 года</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Строительная компания полного цикла. Проектируем, строим и сдаём объекты под ключ.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-orange-400 transition">Частные дома</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Коммерческие объекты</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Проектирование</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Капитальный ремонт</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Отделочные работы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange-400 transition">О нас</a></li>
              <li><a href="#projects" className="hover:text-orange-400 transition">Проекты</a></li>
              <li><a href="#process" className="hover:text-orange-400 transition">Этапы работ</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition">Контакты</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Вакансии</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <PhoneIcon size={16} className="mt-0.5 text-orange-400 flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-orange-400">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon size={16} className="mt-0.5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@stroymaster.ru" className="hover:text-orange-400">info@stroymaster.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon size={16} className="mt-0.5 text-orange-400 flex-shrink-0" />
                <span>г. Москва, Пресненская наб., 12</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm">
          <div>© {new Date().getFullYear()} СтройМастер. Все права защищены.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-orange-400 transition">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
