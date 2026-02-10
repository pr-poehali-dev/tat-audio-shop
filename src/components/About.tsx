import Icon from '@/components/ui/icon';

const About = () => {
  const team = [
    {
      name: 'Алексей Т.',
      role: 'Основатель, мастер-установщик',
      experience: '12 лет опыта',
    },
    {
      name: 'Дмитрий К.',
      role: 'Инженер звука',
      experience: '8 лет опыта',
    },
    {
      name: 'Сергей В.',
      role: 'Специалист по электрике',
      experience: '10 лет опыта',
    },
  ];

  const stats = [
    { value: '500+', label: 'Довольных клиентов' },
    { value: '12', label: 'Лет на рынке' },
    { value: '1000+', label: 'Установленных систем' },
    { value: '100%', label: 'Гарантия качества' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">О </span>
            <span className="text-primary">студии</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            <span className="text-primary font-semibold">ТАТAudio</span> — это профессиональная студия 
            автомобильного звука, специализирующаяся на установке и настройке аудиосистем 
            любой сложности.
          </p>
          <p className="text-lg text-muted-foreground">
            Мы работаем только с проверенными брендами и даём гарантию на все виды работ. 
            Наша цель — превратить ваш автомобиль в концертный зал на колёсах.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-white">Наша </span>
            <span className="text-primary">команда</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
