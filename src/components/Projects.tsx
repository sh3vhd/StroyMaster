import React from 'react';
import { MapPinIcon, ArrowRightIcon } from './Icons';

type Project = {
  title: string;
  location: string;
  area: string;
  category: string;
  gradient: string;
  illustration: React.ReactNode;
};

const HouseSvg = (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#sky1)" />
    <circle cx="240" cy="50" r="25" fill="#fde68a" opacity="0.8" />
    <path d="M0 160 L300 160 L300 200 L0 200 Z" fill="#1e293b" opacity="0.3" />
    <path d="M70 160 L70 100 L150 50 L230 100 L230 160 Z" fill="#fff" />
    <path d="M60 105 L150 40 L240 105" stroke="#1e293b" strokeWidth="3" fill="#ea580c" />
    <rect x="100" y="115" width="30" height="45" fill="#1e293b" />
    <rect x="160" y="115" width="40" height="30" fill="#bae6fd" stroke="#1e293b" strokeWidth="2" />
    <line x1="180" y1="115" x2="180" y2="145" stroke="#1e293b" strokeWidth="2" />
    <line x1="160" y1="130" x2="200" y2="130" stroke="#1e293b" strokeWidth="2" />
  </svg>
);

const BuildingSvg = (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#sky2)" />
    <rect x="40" y="60" width="60" height="140" fill="#f1f5f9" />
    <rect x="120" y="30" width="70" height="170" fill="#e2e8f0" />
    <rect x="210" y="80" width="50" height="120" fill="#cbd5e1" />
    {Array.from({ length: 18 }).map((_, i) => (
      <rect key={`a${i}`} x={48 + (i % 3) * 18} y={70 + Math.floor(i / 3) * 22} width="10" height="14" fill="#fbbf24" opacity={Math.random() > 0.3 ? 1 : 0.3} />
    ))}
    {Array.from({ length: 21 }).map((_, i) => (
      <rect key={`b${i}`} x={128 + (i % 3) * 20} y={40 + Math.floor(i / 3) * 22} width="12" height="14" fill="#fbbf24" opacity={Math.random() > 0.3 ? 1 : 0.3} />
    ))}
    {Array.from({ length: 12 }).map((_, i) => (
      <rect key={`c${i}`} x={218 + (i % 2) * 18} y={90 + Math.floor(i / 2) * 18} width="10" height="12" fill="#fbbf24" opacity={Math.random() > 0.3 ? 1 : 0.3} />
    ))}
  </svg>
);

const CottageSvg = (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky3" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#0e7490" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#sky3)" />
    <path d="M0 170 Q75 150 150 170 T300 170 L300 200 L0 200 Z" fill="#15803d" />
    <rect x="80" y="110" width="160" height="60" fill="#fef3c7" />
    <path d="M70 115 L160 70 L250 115" fill="#7c2d12" />
    <rect x="100" y="130" width="25" height="40" fill="#78350f" />
    <rect x="140" y="125" width="30" height="25" fill="#bae6fd" stroke="#78350f" strokeWidth="2" />
    <rect x="190" y="125" width="30" height="25" fill="#bae6fd" stroke="#78350f" strokeWidth="2" />
    <rect x="180" y="80" width="10" height="20" fill="#7c2d12" />
  </svg>
);

const WarehouseSvg = (
  <svg viewBox="0 0 300 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky4" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#sky4)" />
    <rect x="0" y="160" width="300" height="40" fill="#334155" />
    <rect x="30" y="80" width="240" height="90" fill="#e2e8f0" />
    <path d="M20 85 L150 40 L280 85" fill="#ea580c" />
    <rect x="60" y="100" width="40" height="60" fill="#1e293b" />
    <rect x="120" y="100" width="40" height="60" fill="#1e293b" />
    <rect x="180" y="100" width="40" height="60" fill="#1e293b" />
    {Array.from({ length: 3 }).map((_, i) => (
      <line key={i} x1={60 + i * 60} y1="130" x2={100 + i * 60} y2="130" stroke="#fb923c" strokeWidth="2" />
    ))}
  </svg>
);

const projects: Project[] = [
  {
    title: 'Коттедж «Дубрава»',
    location: 'Рублёво-Успенское ш., 25 км',
    area: '380 м²',
    category: 'Частный дом',
    gradient: 'from-orange-500/20 to-amber-500/20',
    illustration: HouseSvg,
  },
  {
    title: 'БЦ «Меридиан»',
    location: 'г. Москва, ЦАО',
    area: '12 400 м²',
    category: 'Коммерция',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    illustration: BuildingSvg,
  },
  {
    title: 'Дом «У озера»',
    location: 'Новорижское ш., 40 км',
    area: '220 м²',
    category: 'Коттедж',
    gradient: 'from-cyan-500/20 to-teal-500/20',
    illustration: CottageSvg,
  },
  {
    title: 'Логистический центр',
    location: 'Подольск, МО',
    area: '8 200 м²',
    category: 'Промышленность',
    gradient: 'from-slate-500/20 to-gray-500/20',
    illustration: WarehouseSvg,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Портфолио
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Реализованные проекты
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Каждый объект — наша история. Посмотрите, что мы построили за последние годы.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700"
          >
            Все проекты <ArrowRightIcon size={18} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
                  {p.illustration}
                </div>
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-slate-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {p.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-orange-600 transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
                  <MapPinIcon size={14} />
                  {p.location}
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-slate-500 text-sm">Площадь</span>
                  <span className="font-semibold text-orange-600">{p.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
