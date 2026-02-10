import Icon from '@/components/ui/icon';

const Blog = () => {
  const articles = [
    {
      title: 'Как выбрать сабвуфер для автомобиля',
      excerpt: 'Разбираемся в типах сабвуферов, размерах и мощности для разных автомобилей',
      date: '15 января 2026',
      readTime: '5 мин',
    },
    {
      title: 'Шумоизоляция: зачем она нужна',
      excerpt: 'Как шумоизоляция влияет на качество звука и комфорт в салоне автомобиля',
      date: '10 января 2026',
      readTime: '7 мин',
    },
    {
      title: 'DSP-процессор в автозвуке',
      excerpt: 'Что такое DSP и как он улучшает звучание вашей аудиосистемы',
      date: '5 января 2026',
      readTime: '6 мин',
    },
    {
      title: 'Правильная прокладка проводов',
      excerpt: 'Инструкция по безопасной и качественной прокладке силовых кабелей',
      date: '28 декабря 2025',
      readTime: '4 мин',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Статьи про </span>
            <span className="text-primary">автозвук</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полезные материалы о выборе и установке автомобильных аудиосистем
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="FileText" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="Calendar" size={14} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  {article.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
