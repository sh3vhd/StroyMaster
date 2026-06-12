import React from 'react';
import { ShieldCheckIcon, ClockIcon, AwardIcon, UsersIcon } from './Icons';

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Гарантия до 10 лет',
    text: 'Официальная гарантия на конструктивные элементы и инженерные системы.',
  },
  {
    icon: ClockIcon,
    title: 'Сроки в договоре',
    text: 'Соблюдаем сроки благодаря отлаженным процессам и собственной технике.',
  },
  {
    icon: AwardIcon,
    title: 'Сертифицированы',
    text: 'Член СРО, сертификаты ISO 9001 и страхование ответственности до 30 млн ₽.',
  },
  {
    icon: UsersIcon,
    title: 'Опытная команда',
    text: 'Более 120 специалистов в штате: инженеры, прорабы, мастера.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              О компании
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              15 лет создаём пространство для жизни и бизнеса
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              «СтройМастер» — компания полного цикла. Мы проектируем, строим и сдаём объекты «под ключ»
              в Москве и Московской области. За время работы реализовали более 320 проектов:
              от уютных дачных домов до крупных коммерческих зданий.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Работаем без посредников и субподрядчиков — все этапы выполняют наши сотрудники.
              Это позволяет держать цены ниже рынка и гарантировать качество.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-orange-500">320+</div>
                <div className="text-slate-500 text-sm mt-1">сданных объектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">120</div>
                <div className="text-slate-500 text-sm mt-1">специалистов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500">15</div>
                <div className="text-slate-500 text-sm mt-1">лет на рынке</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow ${
                    i % 2 === 0 ? 'sm:translate-y-6' : ''
                  } ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      i === 0 ? 'bg-orange-500' : 'bg-orange-100 text-orange-600'
                    }`}
                  >
                    <Icon size={24} className={i === 0 ? 'text-white' : ''} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${i === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-slate-300' : 'text-slate-600'}`}>
                    {f.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
