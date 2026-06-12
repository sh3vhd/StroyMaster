import React from 'react';
import { ArrowRightIcon, CheckIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen hero-pattern flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-200 px-4 py-1.5 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              Принимаем заказы на сезон 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Строим дома, <br />
              <span className="text-orange-400">в которых хочется жить</span>
            </h1>

            <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed">
              Полный цикл строительства домов, коттеджей и коммерческих объектов под ключ.
              15 лет опыта, более 300 завершённых проектов и гарантия до 10 лет.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Фиксированная цена в договоре',
                'Собственные бригады и техника',
                'Гарантия на все виды работ',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-100">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckIcon size={14} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                Рассчитать стоимость
                <ArrowRightIcon size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Наши проекты
              </a>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <Stat number="15+" label="лет на рынке" />
                  <Stat number="320" label="готовых объектов" />
                  <Stat number="98%" label="довольных клиентов" />
                  <Stat number="10" label="лет гарантии" />
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-white">
                    <div className="text-sm text-orange-200 mb-2">Сертификаты и членство</div>
                    <div className="flex flex-wrap gap-2">
                      {['СРО', 'ISO 9001', 'НОСТРОЙ', 'Allianz'].map((b) => (
                        <span
                          key={b}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-md text-xs"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="text-white">
    <div className="text-4xl font-bold text-orange-400">{number}</div>
    <div className="text-sm text-slate-200 mt-1">{label}</div>
  </div>
);

export default Hero;
