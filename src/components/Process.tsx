import React from 'react';

const steps = [
  {
    n: '01',
    title: 'Заявка и консультация',
    text: 'Связываемся в течение 15 минут, обсуждаем задачу и определяем бюджет.',
  },
  {
    n: '02',
    title: 'Выезд на участок',
    text: 'Инженер выезжает бесплатно, делает замеры и оценивает условия строительства.',
  },
  {
    n: '03',
    title: 'Проект и смета',
    text: 'Готовим архитектурный проект и фиксированную смету без скрытых платежей.',
  },
  {
    n: '04',
    title: 'Договор и старт',
    text: 'Подписываем договор с гарантией сроков и приступаем к работе.',
  },
  {
    n: '05',
    title: 'Строительство',
    text: 'Регулярные отчёты с фото и видео, личный кабинет с графиком работ.',
  },
  {
    n: '06',
    title: 'Сдача под ключ',
    text: 'Передаём объект с полным пакетом документов и гарантийными обязательствами.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 blueprint-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Как мы работаем
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            6 простых этапов от идеи до ключей
          </h2>
          <p className="text-lg text-slate-300">
            Прозрачный процесс работы — вы всегда знаете, что происходит на стройке
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="text-6xl font-bold text-orange-500/30 group-hover:text-orange-500/60 transition-colors mb-4">
                {s.n}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-300 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
