import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Wrench',
      title: 'Установка аудиосистем',
      description: 'Профессиональная установка акустики, усилителей и сабвуферов с гарантией качества',
    },
    {
      icon: 'Settings',
      title: 'Настройка звука',
      description: 'Точная настройка аудиосистемы для идеального звучания в вашем автомобиле',
    },
    {
      icon: 'Sparkles',
      title: 'Шумоизоляция',
      description: 'Комплексная шумоизоляция салона для максимального комфорта и качества звука',
    },
    {
      icon: 'Zap',
      title: 'Установка ГУ',
      description: 'Установка и интеграция головных устройств с сохранением штатных функций',
    },
    {
      icon: 'Shield',
      title: 'Защита электрики',
      description: 'Установка конденсаторов, предохранителей и качественной проводки',
    },
    {
      icon: 'TrendingUp',
      title: 'Апгрейд системы',
      description: 'Модернизация существующих аудиосистем до premium-уровня',
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Наши </span>
            <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по установке и настройке автомобильных аудиосистем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={service.icon} className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
