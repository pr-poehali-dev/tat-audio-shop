import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const works = [
    {
      title: 'BMW X5 - Premium система',
      description: 'Комплексная установка: замена акустики, установка усилителя и сабвуфера, шумоизоляция',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/ddedcc68-7824-48a4-a26f-a7748b0cf6de.jpg',
      stats: ['8 динамиков', '2 усилителя', '1 сабвуфер'],
    },
    {
      title: 'Mercedes C-Class',
      description: 'Установка Android-магнитолы с сохранением штатных функций, апгрейд акустики',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/383ff6e5-3a1b-466a-8d3e-0abc4925363d.jpg',
      stats: ['Головное устройство', '6 динамиков', 'CarPlay/Android Auto'],
    },
    {
      title: 'Audi A6 - Звук Hi-Fi',
      description: 'Профессиональная настройка звука, установка усилителей и премиум-акустики',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/23e5dbfa-5570-4f62-9fc9-2ed32fe14d7d.jpg',
      stats: ['10 динамиков', '3 усилителя', 'DSP процессор'],
    },
    {
      title: 'Toyota Camry - Комфорт',
      description: 'Комплексная шумоизоляция, замена штатной акустики на компонентную',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/383ff6e5-3a1b-466a-8d3e-0abc4925363d.jpg',
      stats: ['6 динамиков', 'Шумоизоляция', '1 усилитель'],
    },
    {
      title: 'Volkswagen Tiguan',
      description: 'Установка мультимедиа с большим экраном, модернизация звуковой системы',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/ddedcc68-7824-48a4-a26f-a7748b0cf6de.jpg',
      stats: ['10" экран', '8 динамиков', 'Беспроводная зарядка'],
    },
    {
      title: 'Lexus RX - Эксклюзив',
      description: 'Индивидуальная Hi-End система с ручной настройкой акустики',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/23e5dbfa-5570-4f62-9fc9-2ed32fe14d7d.jpg',
      stats: ['12 динамиков', '4 усилителя', 'Кастомный короб'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Наши </span>
            <span className="text-primary">работы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных проектов по установке и настройке автозвука
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-foreground">{work.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.stats.map((stat, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
