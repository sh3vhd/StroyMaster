import React from 'react';
import {
  HouseIcon,
  BuildingIcon,
  HammerIcon,
  TrowelIcon,
  RulerIcon,
  KeyIcon,
  ArrowRightIcon,
} from './Icons';

const services = [
  {
    icon: HouseIcon,
    title: 'Частные дома',
    description: 'Строительство коттеджей и загородных домов под ключ из кирпича, газобетона и дерева.',
    price: 'от 35 000 ₽/м²',
  },
  {
    icon: BuildingIcon,
    title: 'Коммерческие объекты',
    description: 'Возведение офисных зданий, складов, торговых центров и производственных помещений.',
    price: 'от 28 000 ₽/м²',
  },
  {
    icon: RulerIcon,
    title: 'Проектирование',
    description: 'Архитектурное и инженерное проектирование с прохождением экспертизы.',
    price: 'от 800 ₽/м²',
  },
  {
    icon: HammerIcon,
    title: 'Капитальный ремонт',
    description: 'Полный комплекс ремонтных работ с заменой коммуникаций и перепланировкой.',
    price: 'от 12 000 ₽/м²',
  },
  {
    icon: TrowelIcon,
    title: 'Отделочные работы',
    description: 'Внутренняя и фасадная отделка любой сложности с использованием премиум-материалов.',
    price: 'от 5 000 ₽/м²',
  },
  {
    icon: KeyIcon,
    title: 'Сдача под ключ',
    description: 'Готовый объект со всеми коммуникациями, документами и благоустройством территории.',
    price: 'Индивидуально',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Наши услуги
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Полный спектр строительных работ
          </h2>
          <p className="text-lg text-slate-600">
            От первого эскиза до вручения ключей — мы берём на себя все этапы строительства
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-orange-600 font-bold">{service.price}</span>
                  <a
                    href="#contact"
                    className="text-slate-400 group-hover:text-orange-500 transition-colors"
                  >
                    <ArrowRightIcon size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
