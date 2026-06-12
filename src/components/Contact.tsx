import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, ArrowRightIcon, CheckIcon } from './Icons';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14 text-white">
              <div className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Связаться с нами
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Готовы обсудить ваш проект?
              </h2>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Оставьте заявку и наш инженер перезвонит вам в течение 15 минут.
                Бесплатная консультация и расчёт стоимости.
              </p>

              <div className="space-y-5">
                <ContactItem icon={<PhoneIcon size={20} />} label="Телефон" value="+7 (495) 123-45-67" />
                <ContactItem icon={<MailIcon size={20} />} label="E-mail" value="info@stroymaster.ru" />
                <ContactItem
                  icon={<MapPinIcon size={20} />}
                  label="Офис"
                  value="г. Москва, Пресненская наб., 12"
                />
                <ContactItem
                  icon={<ClockIcon size={20} />}
                  label="Режим работы"
                  value="Пн–Сб: 9:00 – 20:00"
                />
              </div>
            </div>

            <div className="bg-white p-10 lg:p-14 lg:rounded-l-3xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckIcon size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-slate-600">
                    Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Оставить заявку</h3>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Расскажите о проекте
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                      placeholder="Тип объекта, площадь, сроки..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/30"
                  >
                    Отправить заявку
                    <ArrowRightIcon size={18} />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-start gap-4">
    <div className="w-11 h-11 bg-orange-500/20 text-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <div className="text-sm text-slate-400">{label}</div>
      <div className="text-white font-medium">{value}</div>
    </div>
  </div>
);

export default Contact;
