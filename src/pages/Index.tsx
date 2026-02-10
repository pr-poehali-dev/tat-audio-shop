import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const services = [
    {
      icon: 'Volume2',
      title: 'Установка аудиосистем',
      description: 'Профессиональная установка сабвуферов, усилителей и акустики'
    },
    {
      icon: 'Settings',
      title: 'Настройка звука',
      description: 'Точная настройка и калибровка звуковой системы'
    },
    {
      icon: 'Shield',
      title: 'Шумоизоляция',
      description: 'Комплексная шумоизоляция автомобиля для чистого звука'
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Диагностика и ремонт аудиооборудования'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: '10+ лет опыта',
      description: 'Работаем с 2013 года'
    },
    {
      icon: 'Users',
      title: '500+ клиентов',
      description: 'Довольных автовладельцев'
    },
    {
      icon: 'CheckCircle',
      title: 'Гарантия качества',
      description: 'На все работы и оборудование'
    },
    {
      icon: 'Clock',
      title: 'Быстрая установка',
      description: 'От 1 до 3 дней'
    }
  ];

  const projects = [
    {
      title: 'Mercedes-Benz S-Class',
      description: 'Премиальная аудиосистема с сабвуфером 12"',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/4ad7c0fb-49a2-4089-a839-f16aa5a726c3.jpg'
    },
    {
      title: 'BMW X5',
      description: 'Полная шумоизоляция + акустика премиум класса',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/4ad7c0fb-49a2-4089-a839-f16aa5a726c3.jpg'
    },
    {
      title: 'Audi Q7',
      description: 'Комплексная установка аудиосистемы',
      image: 'https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/4ad7c0fb-49a2-4089-a839-f16aa5a726c3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-red-600/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Volume2" size={32} className="text-red-600" />
            <span className="text-2xl font-bold">
              <span className="text-white">ТАТ</span>
              <span className="text-red-600">AUDIO</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-red-600 transition-colors">Главная</a>
            <a href="#catalog" className="hover:text-red-600 transition-colors">Каталог</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Услуги</a>
            <a href="#works" className="hover:text-red-600 transition-colors">Наши работы</a>
            <a href="#about" className="hover:text-red-600 transition-colors">О нас</a>
            <a href="#contacts" className="hover:text-red-600 transition-colors">Контакты</a>
            <a href="#blog" className="hover:text-red-600 transition-colors">Статьи</a>
          </div>

          <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                ЗАЯВКА
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-red-600/30">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">Обратный звонок</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Оставьте заявку и мы перезвоним вам в течение 15 минут
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Комментарий (необязательно)" 
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/29bef879-6eba-45ae-9760-8875d01333fb/files/4ad7c0fb-49a2-4089-a839-f16aa5a726c3.jpg"
            alt="Car audio system"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-shadow-red">
            <span className="text-white">ТАТ</span>
            <span className="text-red-600">AUDIO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Профессиональная студия автозвука
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Установка, настройка и подбор аудиосистем для вашего автомобиля.<br />
            Превращаем каждую поездку в концерт.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg"
              onClick={() => setIsCallbackOpen(true)}
            >
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-6 text-lg"
            >
              КАТАЛОГ УСЛУГ
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши <span className="text-red-600">услуги</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Полный спектр услуг по установке и настройке автомобильной аудиосистемы
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:border-red-600/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-red-600" />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Почему <span className="text-red-600">мы?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-600/30">
                  <Icon name={advantage.icon} size={40} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши <span className="text-red-600">работы</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Примеры выполненных проектов по установке аудиосистем
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-red-600">Контакты</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="MapPin" className="text-red-600" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">г. Казань, ул. Примерная, д. 1</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Phone" className="text-red-600" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">+7 (843) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Mail" className="text-red-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">info@tataudio.ru</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Clock" className="text-red-600" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Пн-Сб: 9:00 - 20:00<br />Вс: 10:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.4661909334647!2d49.1210866!3d55.7958333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ3JzQ1LjAiTiA0OcKwMDcnMTYuMCJF!5e0!3m2!1sru!2sru!4v1234567890123!5m2!1sru!2sru"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Volume2" size={24} className="text-red-600" />
            <span className="text-xl font-bold">
              <span className="text-white">ТАТ</span>
              <span className="text-red-600">AUDIO</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 ТАТаудио. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;